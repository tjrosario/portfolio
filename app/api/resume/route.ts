import resume from "@/data/resume.json";

export const dynamic = "force-static";

export function GET() {
  return Response.json(resume);
}
