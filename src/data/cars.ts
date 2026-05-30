import bmw5Main from "@assets/images/photos/bmw-5-2024.png";
import bmw5_1 from "@assets/images/photos/bmw-5-2024-1.png";
import bmw5_2 from "@assets/images/photos/bmw-5-2024-2.png";
import bmw5_3 from "@assets/images/photos/bmw-5-2024-3.png";
import bmw5_4 from "@assets/images/photos/bmw-5-2024-4.png";
import bmw5_5 from "@assets/images/photos/bmw-5-2024-5.png";
import mercedesGlc from "@assets/images/photos/mercedes-glc-2023.png";
import audiQ5 from "@assets/images/photos/audi-q5-2024.png";
import porscheMacan from "@assets/images/photos/porsche-macan-2024.png";
import porscheCayenne from "@assets/images/photos/porsche-cayenne-2024.png";

export type CarCondition = "new" | "used";

export interface CarHistoryItem {
  label: string;
  value: string;
}

export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  fullTitle: string;
  year: number;
  condition: CarCondition;
  price: number;
  priceFormatted: string;
  monthlyPayment?: number;
  badge: string;
  badgeRed?: boolean;
  image: string;
  images: string[];
  engine: string;
  power: string;
  consumption: string;
  transmission: string;
  mileage?: number;
  color: string;
  drive: string;
  equipment: string[];
  history?: CarHistoryItem[];
  meta: [string, string];
}

export const CARS: Car[] = [
  {
    id: "bmw-5-2024",
    slug: "bmw-5-2024",
    brand: "BMW",
    model: "5 серия",
    fullTitle: "BMW 5 серия 2024",
    year: 2024,
    condition: "new",
    price: 6450000,
    priceFormatted: "6 450 000 ₽",
    monthlyPayment: 92500,
    badge: "Новинка",
    image: bmw5Main,
    images: [bmw5Main, bmw5_1, bmw5_2, bmw5_3, bmw5_4, bmw5_5],
    engine: "2.0 л",
    power: "184 л.с.",
    consumption: "8.1 л / 100",
    transmission: "Автомат",
    mileage: 32000,
    color: "Чёрный металлик",
    drive: "Задний",
    equipment: [
      "Светодиодные фары (LED)",
      "Кожаный салон премиум-класса",
      "Панорамная крыша",
      "Климат-контроль 2-зонный",
      "Парктроники + камера заднего вида",
      "Подогрев сидений и руля",
    ],
    history: [
      { label: "ДТП", value: "Не обнаружено" },
      { label: "Залог", value: "Не обнаружено" },
      { label: "Ограничения", value: "Не обнаружено" },
      { label: "Владельцы", value: "1 владелец" },
      { label: "Юридическая чистота", value: "100%" },
    ],
    meta: ["2024 • 2.0", "Автомат"],
  },
  {
    id: "mercedes-glc-2023",
    slug: "mercedes-glc-2023",
    brand: "Mercedes-Benz",
    model: "GLC",
    fullTitle: "Mercedes-Benz GLC 2023",
    year: 2023,
    condition: "used",
    price: 5890000,
    priceFormatted: "5 890 000 ₽",
    monthlyPayment: 84500,
    badge: "Хит",
    badgeRed: true,
    image: mercedesGlc,
    images: [mercedesGlc],
    engine: "2.0 л",
    power: "197 л.с.",
    consumption: "8.4 л / 100",
    transmission: "Автомат",
    mileage: 41000,
    color: "Белый",
    drive: "Полный",
    equipment: ["MBUX", "Камера 360°", "Подогрев сидений", "Панорамная крыша"],
    history: [
      { label: "ДТП", value: "Не обнаружено" },
      { label: "Залог", value: "Не обнаружено" },
      { label: "Владельцы", value: "2 владельца" },
    ],
    meta: ["2023 • 2.0", "Автомат"],
  },
  {
    id: "audi-q5-2024",
    slug: "audi-q5-2024",
    brand: "Audi",
    model: "Q5",
    fullTitle: "Audi Q5 2024",
    year: 2024,
    condition: "new",
    price: 5500000,
    priceFormatted: "5 500 000 ₽",
    monthlyPayment: 79000,
    badge: "Новый",
    image: audiQ5,
    images: [audiQ5],
    engine: "2.0 л",
    power: "190 л.с.",
    consumption: "7.9 л / 100",
    transmission: "Автомат",
    mileage: 12000,
    color: "Серый",
    drive: "Полный",
    equipment: ["Virtual Cockpit", "Матричные фары", "ACC"],
    meta: ["2024 • 2.0", "Автомат"],
  },
  {
    id: "porsche-macan-2024",
    slug: "porsche-macan-2024",
    brand: "Porsche",
    model: "Macan",
    fullTitle: "Porsche Macan 2024",
    year: 2024,
    condition: "new",
    price: 8900000,
    priceFormatted: "8 900 000 ₽",
    monthlyPayment: 128000,
    badge: "Новинка",
    image: porscheMacan,
    images: [porscheMacan],
    engine: "2.0 л",
    power: "265 л.с.",
    consumption: "9.0 л / 100",
    transmission: "Автомат",
    mileage: 5000,
    color: "Красный",
    drive: "Полный",
    equipment: ["Sport Chrono", "BOSE", "Панорамная крыша"],
    meta: ["2024 • 2.0", "Автомат"],
  },
  {
    id: "porsche-cayenne-2024",
    slug: "porsche-cayenne-2024",
    brand: "Porsche",
    model: "Cayenne",
    fullTitle: "Porsche Cayenne 2024",
    year: 2024,
    condition: "new",
    price: 10200000,
    priceFormatted: "10 200 000 ₽",
    monthlyPayment: 146000,
    badge: "Премиум",
    image: porscheCayenne,
    images: [porscheCayenne],
    engine: "3.0 л",
    power: "340 л.с.",
    consumption: "9.5 л / 100",
    transmission: "Автомат",
    mileage: 8000,
    color: "Чёрный",
    drive: "Полный",
    equipment: ["Air Suspension", "BOSE Surround", "Панорамная крыша", "Matrix LED"],
    meta: ["2024 • 3.0", "Автомат"],
  },
];

export const CAR_BRANDS = [...new Set(CARS.map((c) => c.brand))].sort();

export function getCarById(id: string): Car | undefined {
  return CARS.find((c) => c.id === id || c.slug === id);
}

export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU")} ₽`;
}
