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
    "## Skills",
    ...siteConfig.skillGroups.map(g => `- ${g.label}: ${g.skills.join(", ")}`),
    "",
    "## Projects",
    ...siteConfig.projects.map(p => `- [${p.name}](${p.live ?? p.github}): ${p.description}`),
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
