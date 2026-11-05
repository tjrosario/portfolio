"use client";

import { useRef, type Ref } from "react";
import resume from "@/data/resume.json";
import { siteConfig } from "@/site.config";
import WindowFrame from "./WindowFrame";

function Heading({ children }: { children: string }) {
  return <h3 className="resume-heading"><span aria-hidden="true">{"// "}</span>{children}</h3>;
}

export default function ResumeModal({ ref }: { ref: Ref<HTMLDialogElement> }) {
  // A text selection dragged out of the window also fires click on the dialog
  const pressedBackdrop = useRef(false);

  return (
    <dialog
      ref={ref}
      className="resume-dialog"
      aria-label={`${siteConfig.name} resume`}
      onMouseDown={e => { pressedBackdrop.current = e.target === e.currentTarget; }}
      onClick={e => { if (pressedBackdrop.current && e.target === e.currentTarget) e.currentTarget.close(); }}
    >
      <WindowFrame
        label="resume.tsx"
        actions={
          <>
            <button type="button" className="resume-action" onClick={() => window.print()}>Print / Save PDF</button>
            <form method="dialog">
              <button type="submit" className="resume-action" aria-label="Close resume">Close</button>
            </form>
          </>
        }
      >
        <div className="resume-body" role="region" aria-label="Resume content" tabIndex={0}>
          <div className="resume-header">
            <div>
              <h2 className="font-display resume-name">{siteConfig.name}</h2>
              <p className="resume-title">{resume.title}</p>
            </div>
            <a href={siteConfig.siteUrl} className="resume-link">{siteConfig.siteUrl.replace("https://", "")}</a>
          </div>

          <div className="resume-columns">
            <div className="resume-sidebar">
              <section>
                <Heading>contact</Heading>
                <p><a href={`mailto:${siteConfig.email}`} className="resume-link">{siteConfig.email}</a></p>
                <p>{siteConfig.location}</p>
              </section>

              <section>
                <Heading>about me</Heading>
                {resume.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </section>

              <section>
                <Heading>core skills</Heading>
                {resume.skills.map(group => (
                  <div key={group.label} className="resume-skill">
                    <h4>{group.label}</h4>
                    <p>{group.items}</p>
                  </div>
                ))}
              </section>

              <section>
                <Heading>education</Heading>
                <h4>{resume.education.degree}</h4>
                <p>{resume.education.school}</p>
                <p className="resume-dates">{resume.education.dates}</p>
              </section>
            </div>

            <div className="resume-main">
              <section>
                <Heading>experience</Heading>
                {resume.experience.map(role => (
                  <article key={role.company} className="resume-role">
                    <div className="resume-role-header">
                      <div>
                        <h4>{role.title}</h4>
                        <p className="resume-company">{role.company}</p>
                      </div>
                      <p className="resume-dates">{role.dates}</p>
                    </div>
                    <p>{role.summary}</p>
                    <ul>
                      {role.bullets.map(bullet => (
                        <li key={bullet}>
                          <span aria-hidden="true">+</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </section>

              <section>
                <Heading>earlier roles</Heading>
                {resume.earlierRoles.map(role => (
                  <article key={role.company} className="resume-role">
                    <div className="resume-role-header">
                      <div>
                        <h4>{role.title}</h4>
                        <p className="resume-company">{role.company}</p>
                      </div>
                      <p className="resume-dates">{role.dates}</p>
                    </div>
                    <p>{role.summary}</p>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </div>
      </WindowFrame>
    </dialog>
  );
}
