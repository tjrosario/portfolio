const mono = { fill: "currentColor", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Drawn on a 24 x 24 grid. Holiday art has its own colors; the seasonal shapes use currentColor. */
export const ART = {
  // Christmas
  santaHat: <>
    <path d="M3 18C5 9 10 4 16 5c3 .6 4.5 3 5 7l-2 1c-1-3-2-4-4-4-2 1-1 7-1 9z" fill="#dc2626" />
    <rect x="2" y="16.5" width="15" height="5" rx="2.5" fill="#fff" stroke="#cbd5e1" strokeWidth=".5" />
    <circle cx="20" cy="14" r="2.5" fill="#fff" stroke="#cbd5e1" strokeWidth=".5" />
  </>,
  candyCane: <>
    <path d="M9 22V8a4.5 4.5 0 0 1 9 0v1" fill="none" stroke="#fee2e2" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M9 22V8a4.5 4.5 0 0 1 9 0v1" fill="none" stroke="#dc2626" strokeWidth="4.5" strokeDasharray="3 3" />
  </>,
  tree: <>
    <path d="M12 3l6 7h-3l5 7H4l5-7H6z" fill="#16a34a" />
    <rect x="10" y="17" width="4" height="5" fill="#92400e" />
    <circle cx="12" cy="3" r="2" fill="#facc15" />
    <circle cx="10" cy="10" r="1" fill="#ef4444" />
    <circle cx="14" cy="13" r="1" fill="#facc15" />
    <circle cx="9" cy="15" r="1" fill="#60a5fa" />
  </>,
  ornament: <>
    <rect x="10" y="2" width="4" height="4" rx="1" fill="#facc15" />
    <circle cx="12" cy="14" r="8" fill="#dc2626" />
    <path d="M4.5 12c5 3 10 3 15 0" fill="none" stroke="#fde68a" strokeWidth="1.5" />
  </>,
  gift: <>
    <rect x="3" y="10" width="18" height="12" rx="1" fill="#16a34a" />
    <rect x="2" y="7" width="20" height="4" rx="1" fill="#22c55e" />
    <rect x="10" y="7" width="4" height="15" fill="#facc15" />
    <path d="M12 7C9 2 5 3 7 6c1 1 3 1 5 1zm0 0c3-5 7-4 5-1-1 1-3 1-5 1z" fill="#ef4444" />
  </>,

  // New Year
  champagne: <>
    <path d="M7 2h10l-1 8a4 4 0 0 1-8 0z" fill="#fde68a" stroke="#ca8a04" />
    <path d="M12 14v6M8 21h8" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
    <circle cx="11" cy="7" r=".8" fill="#fff" />
    <circle cx="13.5" cy="5" r=".8" fill="#fff" />
    <circle cx="12.5" cy="9" r=".8" fill="#fff" />
  </>,
  partyHat: <>
    <path d="M12 3L4 21h16z" fill="#a855f7" />
    <path d="M9.5 8.500l6 3M7.5 13l9 4.5" stroke="#facc15" strokeWidth="2" />
    <circle cx="12" cy="3" r="2" fill="#f472b6" />
    <rect x="3" y="20" width="18" height="2.5" rx="1.2" fill="#facc15" />
  </>,
  firework: <>
    <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill="#facc15" />
  </>,

  // Valentine's Day
  heart: <path d="M12 21C5 15 2 11 2 7.500A5 5 0 0 1 12 6a5 5 0 0 1 10 1.500C22 11 19 15 12 21z" fill="#e11d48" />,
  arrowHeart: <>
    <path d="M12 20C6 15 3 11 3 8a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1c0 3-3 7-9 12z" fill="#f43f5e" />
    <path d="M2 20L22 4" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 4l-4 .5M22 4l-.5 4" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" />
  </>,
  loveLetter: <>
    <rect x="2" y="5" width="20" height="15" rx="2" fill="#fbcfe8" stroke="#ec4899" />
    <path d="M2 6l10 8 10-8" fill="none" stroke="#ec4899" strokeWidth="1.5" />
    <path d="M12 17c-2-1.5-3-2.7-3-3.800a1.6 1.6 0 0 1 3-.7 1.6 1.6 0 0 1 3 .7c0 1.1-1 2.3-3 3.800z" fill="#e11d48" />
  </>,
  heartCrown: <>
    <path d="M3 21h18" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 16c-4-3-6-5.5-6-8a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 2.5-2 5-6 8z" fill="#e11d48" />
    <path d="M4.5 19c-2-1.5-3-2.8-3-4a1.6 1.6 0 0 1 3-.6 1.6 1.6 0 0 1 3 .6c0 1.2-1 2.5-3 4z" fill="#f472b6" />
    <path d="M19.5 19c-2-1.5-3-2.8-3-4a1.6 1.6 0 0 1 3-.6 1.6 1.6 0 0 1 3 .6c0 1.2-1 2.5-3 4z" fill="#f472b6" />
  </>,

  // St. Patrick's Day
  shamrock: <>
    <path d="M12 12c-5 1-8-2-6-5 1-2 4-2 6 1-2-4 0-7 0-7s2 3 0 7c2-3 5-3 6-1 2 3-1 6-6 5zm0 0c-3 2-5 5-3 7 2 1 3-1 3-3 0 2 1 4 3 3 2-2 0-5-3-7z" fill="#16a34a" />
    <path d="M12 12c0 4 1 7 3 10" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
  </>,
  potOfGold: <>
    <circle cx="8" cy="8" r="3" fill="#facc15" />
    <circle cx="13" cy="6" r="3" fill="#eab308" />
    <circle cx="17" cy="9" r="3" fill="#facc15" />
    <path d="M4 10h16c2 7-1 12-8 12S2 17 4 10z" fill="#1f2937" stroke="#6b7280" strokeWidth=".5" />
    <rect x="2" y="9" width="20" height="3" rx="1.5" fill="#374151" />
  </>,
  leprechaunHat: <>
    <path d="M6 5h12l2 13H4z" fill="#16a34a" />
    <rect x="1" y="17" width="22" height="4" rx="2" fill="#15803d" />
    <rect x="4.5" y="13" width="15" height="3.5" fill="#1f2937" />
    <rect x="10" y="12" width="4" height="5.5" fill="none" stroke="#facc15" strokeWidth="1.5" />
  </>,
  rainbow: <>
    <path d="M2 20a10 10 0 0 1 20 0" fill="none" stroke="#ef4444" strokeWidth="2.5" />
    <path d="M5 20a7 7 0 0 1 14 0" fill="none" stroke="#facc15" strokeWidth="2.5" />
    <path d="M8 20a4 4 0 0 1 8 0" fill="none" stroke="#22c55e" strokeWidth="2.5" />
  </>,

  // Fourth of July
  flag: <>
    <rect x="2" y="5" width="20" height="14" fill="#fff" stroke="#cbd5e1" strokeWidth=".5" />
    <path d="M2 6h20M2 10h20M2 14h20M2 18h20" stroke="#dc2626" strokeWidth="2" />
    <rect x="2" y="5" width="9" height="7.5" fill="#1d4ed8" />
    <circle cx="4.5" cy="7.5" r=".6" fill="#fff" />
    <circle cx="8" cy="7.5" r=".6" fill="#fff" />
    <circle cx="6.2" cy="10" r=".6" fill="#fff" />
  </>,
  uncleSamHat: <>
    <rect x="6" y="2" width="12" height="16" fill="#fff" stroke="#cbd5e1" strokeWidth=".5" />
    <path d="M8 2v16M12 2v16M16 2v16" stroke="#dc2626" strokeWidth="2" />
    <rect x="6" y="13.5" width="12" height="4.5" fill="#1d4ed8" />
    <circle cx="12" cy="15.7" r="1.2" fill="#fff" />
    <rect x="1" y="18" width="22" height="3.5" rx="1.7" fill="#1d4ed8" />
  </>,

  // Halloween
  pumpkin: <>
    <path d="M12 7c1-3 2-4 4-4" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="12" cy="14" rx="10.5" ry="8" fill="#f97316" />
    <path d="M7 12l3 1.5-3 1.500zM17 12l-3 1.5 3 1.500z" fill="#1f2937" />
    <path d="M6 17c3 2 9 2 12 0-1 .5-1.5 0-2 0l-1 1-1.5-1-1.5 1-1.5-1-1.5 1-1-1c-.5 0-1 .5-2 0z" fill="#1f2937" />
  </>,
  ghost: <>
    <path d="M12 2a8 8 0 0 0-8 8v12l3-2.5 2.5 2.5 2.5-2.5 2.5 2.500L17 20l3 2V10a8 8 0 0 0-8-8z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth=".5" />
    <circle cx="9" cy="10" r="1.5" fill="#1f2937" />
    <circle cx="15" cy="10" r="1.5" fill="#1f2937" />
    <ellipse cx="12" cy="14.5" rx="1.5" ry="2" fill="#1f2937" />
  </>,
  bat: <path d="M12 9l-1-2-1 2C7 6 4 6 1 8c2 2 2 5 1 7 2-1 5-1 6 2 1-1 3-1 4 1 1-2 3-2 4-1 1-3 4-3 6-2-1-2-1-5 1-7-3-2-6-2-9 1l-1-2z" fill="#a855f7" />,
  witchHat: <>
    <path d="M13 2C9 3 7 9 6 17h13c-1-5-2-8-4-10z" fill="#6b21a8" />
    <ellipse cx="12" cy="18.5" rx="11" ry="3" fill="#581c87" />
    <rect x="6" y="14" width="13" height="3" fill="#f97316" />
    <rect x="10.5" y="13.5" width="4" height="4" fill="none" stroke="#facc15" strokeWidth="1.2" />
  </>,

  // Thanksgiving
  turkey: <>
    <path d="M3 15a9 9 0 0 1 18 0z" fill="#dc2626" />
    <path d="M6 15a6 6 0 0 1 12 0z" fill="#f59e0b" />
    <circle cx="12" cy="16" r="4.5" fill="#92400e" />
    <circle cx="12" cy="10" r="2.5" fill="#b45309" />
    <path d="M12 10l-.9 1.500h1.800z" fill="#facc15" />
    <circle cx="11" cy="9.3" r=".5" fill="#1f2937" />
    <circle cx="13" cy="9.3" r=".5" fill="#1f2937" />
    <path d="M10 20v2.500M14 20v2.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
  </>,
  pie: <>
    <path d="M2 15c1-6 19-6 20 0z" fill="#ea580c" />
    <path d="M2 15h20l-2 5H4z" fill="#d97706" />
    <path d="M4 15v0M8 15l-1 5M12 15v5M16 15l1 5" stroke="#92400e" strokeWidth="1" />
    <ellipse cx="12" cy="10" rx="3" ry="2" fill="#fff" />
  </>,
  corn: <>
    <ellipse cx="12" cy="10" rx="4.5" ry="8.5" fill="#facc15" />
    <path d="M8 6h8M7.5 10h9M8 14h8M12 2v16M9.5 3v14M14.5 3v14" stroke="#ca8a04" strokeWidth=".7" />
    <path d="M12 23C6 21 4 15 5 9c2 3 4 7 7 14zm0 0c6-2 8-8 7-14-2 3-4 7-7 14z" fill="#16a34a" />
  </>,
  pilgrimHat: <>
    <path d="M6 2h12l2 16H4z" fill="#1f2937" stroke="#6b7280" strokeWidth=".5" />
    <rect x="1" y="17.5" width="22" height="4" rx="2" fill="#111827" stroke="#6b7280" strokeWidth=".5" />
    <rect x="4.7" y="13" width="14.6" height="3.5" fill="#f8fafc" />
    <rect x="9.5" y="11.7" width="5" height="6" fill="none" stroke="#facc15" strokeWidth="1.7" />
  </>,

  // Seasons and shared shapes
  star: <path d="M12 2l3 7h7l-5.5 4.5 2 7.5-6.5-4.300L5.5 21l2-7.500L2 9h7z" {...mono} />,
  leaf: <path d="M5 19C4 9 12 3 21 3c0 10-7 18-16 16zM3 21l9-9" {...mono} />,
  snowflake: <path d="M12 2v20M3.3 7l17.4 10M20.7 7 3.3 17" {...mono} />,
  flower: <path d="M12 3a3.5 3.5 0 1 0 .01 0zM18 8a3.5 3.5 0 1 0 .01 0zM16 15a3.5 3.5 0 1 0 .01 0zM8 15a3.5 3.5 0 1 0 .01 0zM6 8a3.5 3.5 0 1 0 .01 0z" {...mono} />,
  sun: <path d="M12 7a5 5 0 1 0 .01 0zM12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.200l2 2M17.8 17.800l2 2M4.2 19.800l2-2M17.8 6.200l2-2" {...mono} />,
  drop: <path d="M12 2c5 7 8 10 8 14a8 8 0 0 1-16 0c0-4 3-7 8-14z" {...mono} />,
};

export type ArtName = keyof typeof ART;
