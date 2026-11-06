const SIZES = {
  sm: { list: "gap-[5px]", chip: "rounded px-[7px] text-[0.68rem]" },
  md: { list: "gap-[7px]", chip: "rounded-[5px] px-[9px] text-[0.72rem] font-semibold" },
};

interface ChipListProps {
  items: readonly string[];
  size: keyof typeof SIZES;
  className?: string;
}

/** role="list" keeps the list semantics Safari drops when list-style is removed */
export default function ChipList({ items, size, className = "" }: ChipListProps) {
  return (
    <ul role="list" className={`flex flex-wrap ${SIZES[size].list} ${className}`}>
      {items.map(item => (
        <li key={item} className={`border border-border-hover bg-border py-0.5 text-accent ${SIZES[size].chip}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
