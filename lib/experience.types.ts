export interface ExperienceEntry {
  company: string;
  title: string;
  startDate: string; // YYYY-MM
  endDate: string;   // YYYY-MM or "Present"
  location?: string;
  bullets: string[];
  tech?: string[];
}
