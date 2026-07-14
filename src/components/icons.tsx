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

export function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      <path
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 2.5v2.5M12 19v2.5M21.5 12H19M5 12H2.5M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M18.4 18.4l-1.8-1.8M7.4 7.4L5.6 5.6"
      />
    </svg>
  );
}

export function ShapesIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="7" cy="7" r="4" strokeWidth={1.5} />
      <rect x="13" y="13" width="8" height="8" rx="1" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4L20 10H7l6.5-6z" />
    </svg>
  );
}

export function PencilRulerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 20l1-4.5L15.5 5 19 8.5 8.5 19 4 20z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.5 7.5l3 3M10.5 13l-2-2M13.5 10l-2-2" />
    </svg>
  );
}

export function CheckCircleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.5 12.5l2.3 2.3L15.5 9.5" />
    </svg>
  );
}

export function PlaceholderPhotoIcon() {
  return (
    <svg className="w-16 h-16 text-brand-blue/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1} />
      <line x1="3" y1="9" x2="21" y2="9" strokeWidth={1} />
      <line x1="12" y1="9" x2="12" y2="21" strokeWidth={1} />
    </svg>
  );
}
