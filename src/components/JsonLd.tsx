// Reusable JSON-LD structured data component
// Renders Google/Yandex rich snippet schemas

interface Props {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Pre-built schemas ────────────────────────────────────────────────────────

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://oknakredit.ru/#organization",
  name: "Окна-Кредит",
  alternateName: "OknaKredit",
  description:
    "Производство и установка металлопластиковых окон и дверей в Санкт-Петербурге. Профиль GEALAN, фурнитура ROTO FRANK. Бесплатный замер, монтаж под ключ, гарантия 3 года.",
  url: "https://oknakredit.ru",
  telephone: ["+7 (812) 529-11-04", "+7 (812) 529-16-56"],
  email: "info@oknakredit.ru",
  foundingDate: "2009",
  priceRange: "₽₽",
  currenciesAccepted: "RUB",
  paymentAccepted: "Наличные, банковская карта, рассрочка, кредит",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Примерная, д. 12",
    addressLocality: "Санкт-Петербург",
    addressRegion: "Санкт-Петербург",
    postalCode: "195279",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.9311,
    longitude: 30.3609,
  },
  areaServed: [
    { "@type": "City", name: "Санкт-Петербург" },
    { "@type": "AdministrativeArea", name: "Ленинградская область" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "187",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://vk.com/oknakredit",
    "https://t.me/oknakredit",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://oknakredit.ru/#org",
  name: "ООО «Окна-Кредит»",
  url: "https://oknakredit.ru",
  logo: "https://oknakredit.ru/images/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+7-812-529-11-04",
      contactType: "customer service",
      areaServed: "RU",
      availableLanguage: "Russian",
    },
    {
      "@type": "ContactPoint",
      telephone: "+7-965-004-00-00",
      contactType: "замер",
      areaServed: "RU",
      availableLanguage: "Russian",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "08:00",
        closes: "21:00",
      },
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://oknakredit.ru/#website",
  url: "https://oknakredit.ru",
  name: "Окна-Кредит",
  description: "Металлопластиковые окна от производителя в Санкт-Петербурге",
  publisher: { "@id": "https://oknakredit.ru/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://oknakredit.ru/products?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "ru-RU",
};

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://oknakredit.ru${item.url}`,
    })),
  };
}

export function buildProductSchema(product: {
  name: string;
  description: string;
  price: string;
  ufactor: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "Окна-Кредит" },
    manufacturer: {
      "@type": "Organization",
      name: "ООО «Окна-Кредит»",
      address: { "@type": "PostalAddress", addressLocality: "Санкт-Петербург", addressCountry: "RU" },
    },
    url: `https://oknakredit.ru/products/${product.slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: product.price.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
      seller: { "@id": "https://oknakredit.ru/#organization" },
      areaServed: { "@type": "City", name: "Санкт-Петербург" },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Теплоизоляция (U-value)", value: product.ufactor },
      { "@type": "PropertyValue", name: "Производитель профиля", value: "GEALAN (Германия)" },
      { "@type": "PropertyValue", name: "Фурнитура", value: "ROTO FRANK (Германия)" },
    ],
  };
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
