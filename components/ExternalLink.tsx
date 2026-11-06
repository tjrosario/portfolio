import type { ComponentProps } from "react";

export default function ExternalLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
