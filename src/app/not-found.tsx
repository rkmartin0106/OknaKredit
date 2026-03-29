import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <p className="text-brand-gold font-bold text-7xl font-heading">404</p>
      <h1 className="mt-4 text-3xl font-heading font-bold text-brand-navy">Страница не найдена</h1>
      <p className="mt-3 text-brand-gray max-w-md">
        Запрашиваемая страница не существует или была перемещена.
      </p>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <Link href="/" className="btn-primary">На главную</Link>
        <Link href="/products" className="btn-outline">Каталог продукции</Link>
      </div>
    </div>
  );
}
