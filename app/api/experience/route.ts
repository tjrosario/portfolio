import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { ExperienceEntry } from "@/lib/experience.types";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "experience.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw) as ExperienceEntry[];
    return NextResponse.json(data);
  } catch (err) {
    console.error("[/api/experience] Failed to read experience.json:", err);
    return NextResponse.json([], { status: 500 });
  }
}
