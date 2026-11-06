interface CardProps {
  as?: "div" | "article";
  /** Lifts the card on hover */
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Card({ as: Tag = "div", interactive, className = "", children }: CardProps) {
  const hover = interactive ? "transition-[border-color,box-shadow] duration-300 hover:border-border-hover hover:shadow-(--shadow-card)" : "";

  return <Tag className={`rounded-xl border border-border bg-bg-card ${hover} ${className}`}>{children}</Tag>;
}
