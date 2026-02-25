/**
 * lib/resumeParser.ts
 *
 * Parses /data/resume.pdf into ExperienceEntry[].
 * Falls back to /data/experience.json if parsing fails or produces < 1 entry.
 *
 * Debug mode: set RESUME_PARSER_DEBUG=true to log intermediate output.
 */

import fs from "fs";
import path from "path";
import type { ExperienceEntry } from "./experience.types";

const DATA_DIR = path.join(process.cwd(), "data");
const PDF_PATH = path.join(DATA_DIR, "resume.pdf");
const JSON_PATH = path.join(DATA_DIR, "experience.json");
const DEBUG = process.env.RESUME_PARSER_DEBUG === "true";

function debugLog(...args: unknown[]) {
  if (DEBUG) console.log("[resumeParser]", ...args);
}

// ── JSON fallback ─────────────────────────────────────────────────────────────
function loadJsonFallback(): ExperienceEntry[] {
  debugLog("Loading JSON fallback from", JSON_PATH);
  const raw = fs.readFileSync(JSON_PATH, "utf-8");
  return JSON.parse(raw) as ExperienceEntry[];
}

// ── Date helpers ──────────────────────────────────────────────────────────────
const MONTHS: Record<string, string> = {
  jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
  jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12",
};

function parseDate(raw: string): string {
  raw = raw.trim().toLowerCase();
  if (/present|current|now/.test(raw)) return "Present";
  // "Jan 2022", "January 2022", "01/2022", "2022-01"
  const m1 = raw.match(/([a-z]+)\s+(\d{4})/);
  if (m1) {
    const mo = MONTHS[m1[1].slice(0, 3)];
    if (mo) return `${m1[2]}-${mo}`;
  }
  const m2 = raw.match(/(\d{1,2})[\/-](\d{4})/);
  if (m2) return `${m2[2]}-${m2[1].padStart(2, "0")}`;
  const m3 = raw.match(/(\d{4})[-/](\d{1,2})/);
  if (m3) return `${m3[1]}-${m3[2].padStart(2, "0")}`;
  const m4 = raw.match(/^(\d{4})$/);
  if (m4) return `${m4[1]}-01`;
  return raw;
}

// ── Text-to-entries heuristics ────────────────────────────────────────────────
function parseTextToEntries(text: string): ExperienceEntry[] {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  debugLog(`Total lines extracted: ${lines.length}`);

  // Find the "Experience" section
  const expKeywords = /^(work\s+)?experience|employment(\s+history)?$/i;
  const stopKeywords = /^(education|skills?|certifications?|projects?|publications?|awards?|references?)/i;

  let startIdx = 0;
  let endIdx = lines.length;

  for (let i = 0; i < lines.length; i++) {
    if (expKeywords.test(lines[i])) { startIdx = i + 1; }
    else if (startIdx > 0 && stopKeywords.test(lines[i])) { endIdx = i; break; }
  }

  const expLines = lines.slice(startIdx, endIdx);
  debugLog(`Experience section lines (${startIdx}–${endIdx}):`, expLines.slice(0, 10));

  // Date range pattern: captures "Jan 2020 – Mar 2022" or "2020-01 – Present"
  const dateRangeRe =
    /([A-Za-z]+\.?\s+\d{4}|\d{4}[-\/]\d{1,2}|\d{1,2}[-\/]\d{4}|\d{4})\s*[–—-]+\s*([A-Za-z]+\.?\s+\d{4}|\d{4}[-\/]\d{1,2}|\d{1,2}[-\/]\d{4}|\d{4}|present|current|now)/i;

  const entries: ExperienceEntry[] = [];
  let currentEntry: Partial<ExperienceEntry> | null = null;
  let bulletBuffer: string[] = [];

  function flushEntry() {
    if (currentEntry?.company || currentEntry?.title) {
      entries.push({
        company: currentEntry.company ?? "Unknown",
        title: currentEntry.title ?? "Unknown",
        startDate: currentEntry.startDate ?? "",
        endDate: currentEntry.endDate ?? "Present",
        location: currentEntry.location,
        bullets: bulletBuffer.filter((b) => b.length > 20),
        tech: [],
      });
      debugLog("Flushed entry:", currentEntry.company, currentEntry.title);
    }
    currentEntry = null;
    bulletBuffer = [];
  }

  for (const line of expLines) {
    const dateMatch = line.match(dateRangeRe);

    if (dateMatch) {
      flushEntry();
      currentEntry = {
        startDate: parseDate(dateMatch[1]),
        endDate: parseDate(dateMatch[2]),
      };
      // Extract remainder of line as potential company/title
      const rest = line.replace(dateMatch[0], "").replace(/[|•·]/g, " ").trim();
      if (rest) {
        const parts = rest.split(/\s{2,}|\t/);
        currentEntry.company = parts[0] || "";
        currentEntry.title = parts[1] || "";
      }
    } else if (currentEntry) {
      if (!currentEntry.company) {
        currentEntry.company = line;
      } else if (!currentEntry.title) {
        currentEntry.title = line;
      } else if (/^[•\-–*▸►✓✦]/.test(line) || /^\d+\./.test(line)) {
        bulletBuffer.push(line.replace(/^[•\-–*▸►✓✦\d.]+\s*/, "").trim());
      } else if (line.length > 30 && !/^[A-Z\s]+$/.test(line)) {
        // Long prose line → treat as bullet
        bulletBuffer.push(line);
      } else if (/^[A-Z][a-z]/.test(line) && !currentEntry.location) {
        // Could be location
        currentEntry.location = line;
      }
    }
  }
  flushEntry();

  return entries;
}

// ── Public API ────────────────────────────────────────────────────────────────
export async function getExperience(): Promise<ExperienceEntry[]> {
  // Try PDF first
  if (fs.existsSync(PDF_PATH)) {
    try {
      // Dynamic import so build doesn't fail if pdf-parse isn't installed
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pdfParseModule = await import("pdf-parse") as any;
      const pdfParse = pdfParseModule.default ?? pdfParseModule;
      const buffer = fs.readFileSync(PDF_PATH);
      const data = await pdfParse(buffer);
      debugLog("PDF text length:", data.text.length);

      const entries = parseTextToEntries(data.text);
      debugLog("Parsed entries:", entries.length);

      if (entries.length >= 1) return entries;
      console.warn("[resumeParser] PDF parsing produced < 1 entry; falling back to JSON.");
    } catch (err) {
      console.warn("[resumeParser] PDF parsing error; falling back to JSON.", err);
    }
  }

  return loadJsonFallback();
}

/**
 * Parser debug utility — run via:
 *   RESUME_PARSER_DEBUG=true npx tsx lib/resumeParser.ts
 */
if (require.main === (module as NodeJS.Module)) {
  (async () => {
    process.env.RESUME_PARSER_DEBUG = "true";
    const entries = await getExperience();
    console.log(JSON.stringify(entries, null, 2));
  })();
}
