export interface PopularColor {
  slug: string;
  name: string;
  image: string;
  code?: string;
}

export const popularColors: PopularColor[] = [
  { slug: "dark-oak", name: "Тёмный дуб", image: "/images/colors/dark-oak.png", code: "MX 9.2052 089" },
  { slug: "gold-oak", name: "Золотой дуб", image: "/images/colors/gold-oak.png", code: "MX 9.2178 001" },
  { slug: "irish-oak", name: "Ирландский дуб", image: "/images/colors/irish-oak.png", code: "MX 9.3211 005" },
  { slug: "mahogany", name: "Махагон", image: "/images/colors/mahogany.png", code: "MX 9.2097 013" },
  { slug: "anthracite-gray", name: "Антрацитово-серый", image: "/images/colors/anthracite-gray.png", code: "RAL 7016" },
  { slug: "cream", name: "Кремовый", image: "/images/colors/cream.png", code: "≈ RAL 9001" },
  { slug: "black", name: "Блэк", image: "/images/colors/black.png", code: "≈ RAL 9011" },
];

export interface CatalogColor {
  name: string;
  code?: string;
  popularSlug?: string;
}

export interface ColorFamily {
  name: string;
  colors: CatalogColor[];
}

export const colorFamilies: ColorFamily[] = [
  {
    name: "Дуб и дерево",
    colors: [
      { name: "Тёмный дуб", code: "9.2052 089", popularSlug: "dark-oak" },
      { name: "Орех", code: "9.2178 007" },
      { name: "Золотой дуб", code: "9.2178 001", popularSlug: "gold-oak" },
      { name: "Рустикальный дуб 1", code: "9.3149 008" },
      { name: "Сапели", code: "9.2065 021" },
      { name: "Махагон", code: "9.2097 013", popularSlug: "mahogany" },
      { name: "Морёный дуб", code: "9.3167 004" },
      { name: "Перечный дуб Super-Matt", code: "2.0078 001" },
      { name: "Вайсбах дуб VLF", code: "9.3241 306" },
      { name: "Кориандровый дуб Super-Matt", code: "3.0078 011" },
      { name: "Ирландский дуб", code: "9.3211 005", popularSlug: "irish-oak" },
      { name: "Имбирный дуб VLF", code: "3.0078 004" },
      { name: "Песочный дуб", code: "2.0057 004" },
      { name: "Винчестер", code: "4.0175 004" },
      { name: "Коричный дуб Super-Matt", code: "3.0078 006" },
      { name: "Медовый дуб VLF", code: "3.0078 007" },
      { name: "Горный дуб", code: "2.0057 005" },
      { name: "Монумент дуб", code: "2.0057 006" },
      { name: "Амарантовый дуб VLF", code: "3.0078 008" },
      { name: "Трюфельный дуб Super-Matt", code: "3.0078 009" },
    ],
  },
  {
    name: "Серые",
    colors: [
      { name: "Антрацитово-серый 7016", code: "RAL 7016", popularSlug: "anthracite-gray" },
      { name: "Антрацитово-серый 7016 Ulti-Matt", code: "RAL 7016" },
      { name: "Антрацитово-серый 7016 Гладкий", code: "RAL 7016" },
      { name: "Антрацитово-серый 7016 Гладкий 2", code: "RAL 7016" },
      { name: "Антрацитово-серый 7016 VLF", code: "RAL 7016" },
      { name: "Глиняный камень", code: "02.20.81.000048" },
      { name: "Светло-серый", code: "RAL/NCS S 2002-G" },
      { name: "Сигнальный серый 7004", code: "RAL 7004" },
      { name: "Агатовый серый 7038", code: "RAL 7038" },
      { name: "Шалфей", code: "NCS S 3502-Y" },
      { name: "Лунный танец", code: "NCS S 4502-Y" },
      { name: "Пирит", code: "RAL 7048" },
      { name: "Кварцевый серый 7039", code: "NCS S 6502-Y" },
      { name: "Базальтовый серый 7012", code: "RAL 7012" },
      { name: "Серая буря", code: "RAL 7016" },
      { name: "Антик", code: "9.3241 002" },
    ],
  },
  {
    name: "Белые и кремовые",
    colors: [
      { name: "Кристально белый", code: "NCS S 0300-N" },
      { name: "Белый", code: "≈ RAL 9010" },
      { name: "Кремовый", code: "≈ RAL 9001", popularSlug: "cream" },
    ],
  },
  {
    name: "Коричневые",
    colors: [
      { name: "Палевый коричневый 8007", code: "RAL 8007" },
      { name: "Сепия коричневый 8014", code: "NCS S 7005-Y20R" },
      { name: "Коричневый 8972", code: "NCS S 8005-Y50R" },
      { name: "Шоколадно-коричневый 8017", code: "NCS S 7005-Y20R" },
      { name: "Коричневый каштан 8099", code: "02.11.81.000120" },
      { name: "Шоколадно-коричневый 8875", code: "≈ RAL 8019" },
    ],
  },
  {
    name: "Платина и золото",
    colors: [
      { name: "Серебро V 9705", code: "≈ RAL 9022" },
      { name: "Кварцевая платина", code: "9.1293 002" },
      { name: "Драгоценная платина", code: "9.1293 001" },
      { name: "Графская платина", code: "9.1293 010" },
      { name: "Бронзовая платина 1", code: "9.1293 314" },
      { name: "Фламандское золото", code: "NCS S 7005-Y20R" },
    ],
  },
  {
    name: "Чёрный и синий",
    colors: [
      { name: "Блэк Ulti-Matt", code: "≈ RAL 9011", popularSlug: "black" },
      { name: "Блэк VLF", code: "≈ RAL 9011" },
      { name: "Мерцающий слэйт", code: "1.0065 002" },
      { name: "Мерцающий чёрный", code: "1.0065 017" },
      { name: "Синевато-серый Finesse", code: "NCS S 7005-R80B" },
    ],
  },
];
