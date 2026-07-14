"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { PopularColor } from "@/lib/colors";

interface Props {
  color: PopularColor | null;
  onClose: () => void;
}

export default function ColorLightbox({ color, onClose }: Props) {
  useEffect(() => {
    if (!color) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [color, onClose]);

  if (!color) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
      role="dialog"
      aria-modal="true"
      aria-label={color.name}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl">
        <div className="relative aspect-square">
          <Image src={color.image} alt={color.name} fill sizes="(max-width: 640px) 100vw, 32rem" className="object-cover" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-brand-blue shadow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-5">
          <h3 className="text-brand-blue font-heading font-bold text-xl">{color.name}</h3>
          {color.code && <p className="text-brand-gray text-sm mt-1">{color.code}</p>}
        </div>
      </div>
    </div>
  );
}
