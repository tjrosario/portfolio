import { siteConfig } from "@/site.config";

export default function AvailabilityBadge() {
  if (!siteConfig.availableForWork) return null;

  return (
    <div className="flex items-center gap-2.5">
      <span className="relative inline-flex size-[9px]">
        <span className="absolute inset-0 animate-[badge-ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[#22c55e] opacity-70" />
        <span className="relative inline-flex size-[9px] rounded-full bg-[#22c55e]" />
      </span>
      <span className="text-[0.82rem] text-text-primary">{siteConfig.availabilityLabel}</span>
    </div>
  );
}
