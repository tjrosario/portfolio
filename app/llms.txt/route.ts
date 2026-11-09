import resume from "@/data/resume.json";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.role}. ${siteConfig.availabilityLabel}.`,
    "",
    siteConfig.bio,
    "",
    siteConfig.aiWorkflow.intro,
    "",
    "## Experience",
    ...[...resume.experience, ...resume.earlierRoles].map(r => `- ${r.title}, ${r.company} (${r.dates}): ${r.summary}`),
    "",
    "## Education",
    `- ${resume.education.degree}, ${resume.education.school} (${resume.education.dates})`,
    "",
    "## Skills",
    ...siteConfig.skillGroups.map(g => `- ${g.label}: ${g.skills.join(", ")}`),
    "",
    "## Projects",
    ...siteConfig.projects.map(p => `- [${p.name}](${p.live ?? p.github}): ${p.description}`),
    "",
    "## Recommendations",
    ...siteConfig.recommendations.map(r => `- ${r.name}, ${r.title} (${r.relationship}): "${r.quote}"`),
    "",
    "## Contact",
    `- Website: ${siteConfig.siteUrl}`,
    `- Email: ${siteConfig.email}`,
    `- GitHub: ${siteConfig.github}`,
    `- LinkedIn: ${siteConfig.linkedin}`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
