import type { ComponentProps } from "react";

const BASE = "inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 font-body text-[0.875rem]";

const VARIANTS = {
  primary: "border border-transparent bg-accent font-bold text-on-accent shadow-(--shadow-glow) transition-[opacity,translate] duration-200 hover:-translate-y-px hover:opacity-88",
  outline: "border border-border font-semibold text-text-primary transition-colors duration-200 hover:border-border-hover hover:bg-border",
};

interface ButtonStyleProps {
  variant: keyof typeof VARIANTS;
}

/** Shared by links and buttons, so an anchor and a button can look the same */
export function buttonClass({ variant }: ButtonStyleProps, className = "") {
  return `${BASE} ${VARIANTS[variant]} ${className}`;
}

export function LinkButton({ variant, className, ...props }: ButtonStyleProps & ComponentProps<"a">) {
  return <a className={buttonClass({ variant }, className)} {...props} />;
}
