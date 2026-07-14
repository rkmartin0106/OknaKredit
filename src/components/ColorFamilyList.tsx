"use client";

import { useState } from "react";
import { clsx } from "clsx";
import type { ColorFamily, PopularColor } from "@/lib/colors";
import ColorLightbox from "@/components/ColorLightbox";

export default function ColorFamilyList({
  families,
  popularColors,
}: {
  families: ColorFamily[];
  popularColors: PopularColor[];
}) {
  const [active, setActive] = useState<PopularColor | null>(null);

  return (
    <>
      <div className="space-y-10">
        {families.map((family) => (
          <div key={family.name}>
            <h3 className="text-brand-blue font-heading font-bold text-lg mb-4">
              {family.name} <span className="text-brand-gray font-sans font-normal text-sm">({family.colors.length})</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {family.colors.map((color) => {
                const popular = color.popularSlug
                  ? popularColors.find((p) => p.slug === color.popularSlug)
                  : undefined;
                return (
                  <button
                    key={color.name}
                    type="button"
                    disabled={!popular}
                    onClick={() => popular && setActive(popular)}
                    className={clsx(
                      "rounded-full px-4 py-2 text-sm border transition-colors text-left",
                      popular
                        ? "border-brand-red/50 text-brand-blue hover:bg-brand-red/10 cursor-pointer"
                        : "border-brand-blue/10 text-brand-gray cursor-default"
                    )}
                  >
                    {color.name}
                    {color.code && <span className="block text-xs text-brand-gray/70">{color.code}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <ColorLightbox color={active} onClose={() => setActive(null)} />
    </>
  );
}
