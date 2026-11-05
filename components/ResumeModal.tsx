"use client";

import { useRef, type Ref } from "react";
import type { Resume } from "@/lib/resume-api";
import type { ResumeState } from "@/lib/resume";
import { siteConfig } from "@/site.config";
import WindowFrame from "./WindowFrame";

function Heading({ children }: { children: string }) {
  return <h3 className="resume-heading"><span aria-hidden="true">{"// "}</span>{children}</h3>;
}

function ResumeLoading() {
  return (
    <div className="resume-body resume-status" role="status">
      <span aria-hidden="true" className="resume-spinner" />
      <p>Loading resume</p>
    </div>
  );
}

function ResumeError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="resume-body resume-status" role="alert">
      <p>The resume didn&apos;t load.</p>
      <button type="button" className="resume-retry" onClick={onRetry}>Try again</button>
    </div>
  );
}

function ResumeContent({ resume }: { resume: Resume }) {
  return (
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
  );
}

interface ResumeModalProps {
  ref: Ref<HTMLDialogElement>;
  state: ResumeState;
  onRetry: () => void;
}

export default function ResumeModal({ ref, state, onRetry }: ResumeModalProps) {
  // A text selection dragged out of the window also fires click on the dialog
  const pressedBackdrop = useRef(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Try again disappears once clicked, so focus moves somewhere that stays in the dialog
  const retry = () => {
    closeRef.current?.focus();
    onRetry();
  };

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
            <button type="button" className="resume-action" disabled={state.status !== "ready"} onClick={() => window.print()}>Print / Save PDF</button>
            <form method="dialog">
              <button ref={closeRef} type="submit" className="resume-action" aria-label="Close resume">Close</button>
            </form>
          </>
        }
      >
        {state.status === "ready" && <ResumeContent resume={state.resume} />}
        {state.status === "error" && <ResumeError onRetry={retry} />}
        {(state.status === "idle" || state.status === "loading") && <ResumeLoading />}
      </WindowFrame>
    </dialog>
  );
}
