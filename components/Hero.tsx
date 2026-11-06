import { siteConfig } from "@/site.config";
import AvailabilityBadge from "./AvailabilityBadge";
import { LinkButton } from "./Button";
import HeroCircle from "./HeroCircle";
import HeroEditor from "./HeroEditor";
import { ArrowIcon } from "./Icons";
import MotionToggle from "./MotionToggle";
import ResumeButton from "./ResumeButton";
import SeasonalParticles from "./SeasonalParticles";
import SeasonHat from "./SeasonHat";

const FLOATING_TAGS = [
  { label: "<div>", top: "16%", left: "4%", animationDelay: "0s" },
  { label: "</>", top: "78%", left: "7%", animationDelay: "1.2s" },
  { label: "{ }", top: "9%", right: "6%", animationDelay: "0.6s" },
  { label: "=>", top: "88%", right: "42%", animationDelay: "1.8s" },
];

const INSPECT_HANDLES = ["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-right-1 -bottom-1"];

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="hero-glow -top-[20%] -right-[10%]" />
      <div aria-hidden="true" className="hero-glow -bottom-[35%] -left-[15%] opacity-50" />
      <SeasonalParticles />
      {FLOATING_TAGS.map(({ label, ...style }) => (
        <span key={label} aria-hidden="true" className="floating-tag hidden lg:block" style={style}>
          {label}
        </span>
      ))}

      <div className="relative z-1 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p className="anim-hidden delay-100 font-mono text-[0.8rem] font-semibold tracking-[0.04em] text-accent">
              <span aria-hidden="true">{"// "}</span>hello, I&apos;m
            </p>

            <div className="anim-hidden delay-200 inspect-box">
              <span aria-hidden="true" className="inspect-label">h1.name</span>
              {INSPECT_HANDLES.map(position => (
                <span key={position} aria-hidden="true" className={`inspect-handle ${position}`} />
              ))}
              <h1 className="m-0 font-display text-[clamp(3rem,6.4vw,5rem)] leading-none font-extrabold tracking-[-0.01em] text-text-primary">
                <span className="block">{siteConfig.firstName}</span>{" "}
                <span className="block text-accent">{siteConfig.lastName}</span>
              </h1>
            </div>

            <p className="anim-hidden delay-300 font-display text-[1.15rem] font-semibold tracking-[-0.01em] text-text-secondary">
              {siteConfig.role}
            </p>

            <p className="anim-hidden delay-400 max-w-[460px] leading-[1.75] text-text-secondary">
              {siteConfig.tagline}
            </p>

            <div className="anim-hidden delay-500 flex flex-wrap gap-3">
              <LinkButton variant="primary" href="#projects">
                View Projects
                <ArrowIcon />
              </LinkButton>
              <LinkButton variant="outline" href="#contact">Get in Touch</LinkButton>
              <ResumeButton />
            </div>

            <div className="anim-hidden delay-600 flex flex-wrap items-center gap-x-4 gap-y-2.5">
              <AvailabilityBadge />
              <MotionToggle />
            </div>
          </div>

          <div className="anim-hidden delay-300 relative pb-[clamp(84px,13vw,124px)]">
            <HeroEditor />
            <SeasonHat />
            <div className="absolute -right-2 bottom-0">
              <HeroCircle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
