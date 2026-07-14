// Shared 24x24 stroke icons for product hero feature rows.

export function ThermometerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="10" y="3" width="4" height="11" rx="2" strokeWidth={1.5} />
      <circle cx="12" cy="17" r="3" strokeWidth={1.5} />
    </svg>
  );
}

export function ShieldCheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l7 3v5c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function RulerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="8" width="18" height="8" rx="1" strokeWidth={1.5} />
      <line x1="7" y1="8" x2="7" y2="11.5" strokeWidth={1.5} strokeLinecap="round" />
      <line x1="11" y1="8" x2="11" y2="11.5" strokeWidth={1.5} strokeLinecap="round" />
      <line x1="15" y1="8" x2="15" y2="11.5" strokeWidth={1.5} strokeLinecap="round" />
      <line x1="19" y1="8" x2="19" y2="11.5" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

export function LockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="9" rx="2" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0v4" />
      <circle cx="12" cy="15.5" r="1.5" strokeWidth={1.5} />
    </svg>
  );
}

export function SlidersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <line x1="5" y1="21" x2="5" y2="3" strokeWidth={1.5} strokeLinecap="round" />
      <line x1="12" y1="21" x2="12" y2="3" strokeWidth={1.5} strokeLinecap="round" />
      <line x1="19" y1="21" x2="19" y2="3" strokeWidth={1.5} strokeLinecap="round" />
      <circle cx="5" cy="8" r="2" strokeWidth={1.5} />
      <circle cx="12" cy="15" r="2" strokeWidth={1.5} />
      <circle cx="19" cy="10" r="2" strokeWidth={1.5} />
    </svg>
  );
}
