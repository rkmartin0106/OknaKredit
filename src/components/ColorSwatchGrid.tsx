"use client";

import { useState } from "react";
import Image from "next/image";
import type { PopularColor } from "@/lib/colors";
import ColorLightbox from "@/components/ColorLightbox";

export default function ColorSwatchGrid({ colors }: { colors: PopularColor[] }) {
  const [active, setActive] = useState<PopularColor | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {colors.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setActive(c)}
            className="group text-left rounded-xl overflow-hidden border border-brand-blue/10 hover:border-brand-red/40 transition-colors"
          >
            <div className="relative aspect-square bg-brand-cream">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="px-3 py-2 text-sm font-medium text-brand-blue">{c.name}</p>
          </button>
        ))}
      </div>
      <ColorLightbox color={active} onClose={() => setActive(null)} />
    </>
  );
}
