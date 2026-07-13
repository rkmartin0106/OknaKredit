import Link from "next/link";
import { Product, categoryLabels } from "@/lib/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="card group flex flex-col">
      {/* Image placeholder */}
      <div className="relative bg-brand-blue/10 h-52 flex items-center justify-center overflow-hidden">
        <svg className="w-20 h-20 text-brand-blue/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
          <line x1="3" y1="9" x2="21" y2="9" strokeWidth={1.5} />
          <line x1="12" y1="9" x2="12" y2="21" strokeWidth={1.5} />
        </svg>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-red text-brand-blueDark text-xs font-bold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-1">
          {categoryLabels[product.category]}
        </p>
        <h3 className="text-base font-heading font-semibold text-brand-blue group-hover:text-brand-blueLight transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-brand-gray text-sm mt-2 flex-1 leading-relaxed">{product.shortDesc}</p>

        <div className="mt-4">
          <p className="text-xs text-brand-gray">Стоимость</p>
          <p className="font-semibold text-brand-blue text-sm">{product.price}</p>
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="mt-4 btn-outline text-sm py-2"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
