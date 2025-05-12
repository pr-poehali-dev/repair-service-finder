import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

// Обновленные категории услуг
const serviceCategories = [
  {
    id: 1,
    name: "Отделка помещений",
    icon: "Brush",
    services: [
      "Штукатурка",
      "Покраска",
      "Поклейка обоев",
      "Укладка плитки",
      "Монтаж потолков",
      "Шпаклевка",
      "Декоративная отделка",
    ],
  },
  {
    id: 2,
    name: "Сантехнические работы",
    icon: "Droplets",
    services: [
      "Установка сантехники",
      "Замена труб",
      "Устранение протечек",
      "Монтаж отопления",
      "Прочистка канализации",
      "Теплый пол",
      "Замена смесителей",
    ],
  },
  {
    id: 3,
    name: "Электромонтажные работы",
    icon: "Zap",
    services: [
      "Замена проводки",
      "Установка розеток",
      "Монтаж освещения",
      "Подключение электроприборов",
      "Устранение неисправностей",
      "Сборка электрощитов",
      "Монтаж слаботочных систем",
    ],
  },
  {
    id: 4,
    name: "Монтаж конструкций",
    icon: "Hammer",
    services: [
      "Сборка мебели",
      "Установка окон",
      "Монтаж перегородок",
      "Установка дверей",
      "Монтаж лестниц",
      "Установка карнизов",
      "Монтаж потолочных конструкций",
    ],
  },
  {
    id: 5,
    name: "Напольные покрытия",
    icon: "Layers",
    services: [
      "Укладка ламината",
      "Укладка паркета",
      "Укладка линолеума",
      "Циклевка паркета",
      "Заливка стяжки",
      "Укладка ковролина",
      "Монтаж плинтусов",
    ],
  },
  {
    id: 6,
    name: "Кухни и ванные",
    icon: "Bath",
    services: [
      "Установка кухонь",
      "Ремонт ванных комнат",
      "Установка душевых кабин",
      "Монтаж столешниц",
      "Монтаж вытяжек",
      "Подключение бытовой техники",
      "Гидроизоляция",
    ],
  },
  {
    id: 7,
    name: "Дизайн и проектирование",
    icon: "Paintbrush",
    services: [
      "Дизайн-проект",
      "Планировка помещений",
      "3D-визуализация",
      "Подбор материалов",
      "Авторский надзор",
      "Проект перепланировки",
      "Колористика",
    ],
  },
];

const popularCities = [
  "Москва",
  "Санкт-Петербург",
  "Екатеринбург",
  "Новосибирск",
  "Казань",
  "Нижний Новгород",
  "Краснодар",
  "Сочи",
  "Ростов-на-Дону",
  "Самара",
  "Челябинск",
  "Уфа",
];

const featuredCompanies = [
  {
    id: 1,
    name: "АртРемонт",
    rating: 4.8,
    reviewCount: 124,
    description: "Профессиональный ремонт квартир под ключ",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=300&auto=format&fit=crop",
    services: ["Отделка помещений", "Монтаж конструкций"],
    price: "от 5000 ₽/м²",
  },
  {
    id: 2,
    name: "Сантех-Мастер",
    rating: 4.6,
    reviewCount: 89,
    description: "Сантехнические работы любой сложности",
    image:
      "https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?q=80&w=300&auto=format&fit=crop",
    services: ["Сантехнические работы"],
    price: "от 1500 ₽",
  },
  {
    id: 3,
    name: "ЭлектроСервис",
    rating: 4.7,
    reviewCount: 102,
    description: "Электромонтажные работы в квартирах и домах",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=300&auto=format&fit=crop",
    services: ["Электромонтажные работы"],
    price: "от 2000 ₽",
  },
];

const recentReviews = [
  {
    id: 1,
    companyName: "АртРемонт",
    userName: "Алексей К.",
    rating: 5,
    text: "Отличная компания! Сделали ремонт в срок и качественно.",
    date: "10 мая 2025",
  },
  {
    id: 2,
    companyName: "Сантех-Мастер",
    userName: "Марина В.",
    rating: 4,
    text: "Хорошие мастера, но немного задержали сроки.",
    date: "8 мая 2025",
  },
];

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Москва");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [ratingFilter, setRatingFilter] = useState("all");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Шапка */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Hammer" className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold text-red-600">ВсеМастера</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-slate-700 hover:text-red-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-red-600 transition-colors"
            >
              Компании
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-red-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-red-600 transition-colors"
            >
              О нас
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/auth">
                <Icon name="User" className="mr-2 h-4 w-4" />
                Войти
              </Link>
            </Button>
            <Button className="bg-red-600 hover:bg-red-700">
              <Icon name="Plus" className="mr-2 h-4 w-4" />
              Добавить компанию
            </Button>
          </div>
        </div>
      </header>
      {/* Главный баннер с улучшенным поиском */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-500 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601933513793-8e93ae7d008e?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Найдите лучших мастеров для вашего ремонта
            </h1>
            <p className="text-lg md:text-xl text-red-100 mb-8">
              Тысячи проверенных компаний с реальными отзывами клиентов
            </p>

            <div className="bg-white p-6 rounded-lg shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Icon
                      name="MapPin"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                    />
                    <select
                      className="w-full pl-10 h-12 rounded-md border border-input bg-background px-3 py-2 text-base"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      {popularCities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex-[2]">
                  <div className="relative">
                    <Icon
                      name="Search"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                    />
                    <Input
                      className="w-full pl-10 h-12 text-base"
                      placeholder="Что нужно отремонтировать?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      list="search-suggestions"
                    />
                    <datalist id="search-suggestions">
                      {serviceCategories.flatMap((category) =>
                        category.services.map((service) => (
                          <option
                            key={`${category.id}-${service}`}
                            value={service}
                          />
                        )),
                      )}
                    </datalist>
                  </div>
                </div>
                <Button
                  className="bg-red-600 hover:bg-red-700 h-12 text-base px-8"
                  onClick={() => {
                    toast({
                      title: "Поиск выполнен",
                      description: `Найдено 15+ компаний в ${selectedCity} по запросу "${searchQuery}"`,
                    });
                    const companiesSection =
                      document.getElementById("companies-section");
                    if (companiesSection) {
                      companiesSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Найти мастеров
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-slate-500 flex items-center">
                  <Icon name="Tag" className="w-4 h-4 mr-1" />
                  Популярные запросы:
                </span>
                {[
                  "ремонт квартиры",
                  "установка сантехники",
                  "укладка плитки",
                  "электромонтаж",
                  "покраска стен",
                ].map((query) => (
                  <Button
                    key={query}
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => setSearchQuery(query)}
                  >
                    {query}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Категории услуг */}
      ... // остальной код без изменений
      {/* Почему выбирают ВсеМастера? */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>...</div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Почему выбирают ВсеМастера?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Проверенные компании
                  </h3>
                  <p className="text-slate-600">
                    Мы тщательно проверяем каждую компанию перед добавлением в
                    наш каталог
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Icon name="Star" className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Реальные отзывы
                  </h3>
                  <p className="text-slate-600">
                    Отзывы оставляют только клиенты, воспользовавшиеся услугами
                    через нашу платформу
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Icon name="Shield" className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Гарантия качества
                  </h3>
                  <p className="text-slate-600">
                    Мы следим за качеством предоставляемых услуг и решаем
                    спорные ситуации
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Icon name="Wallet" className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Прозрачные цены
                  </h3>
                  <p className="text-slate-600">
                    Никаких скрытых платежей - только честные цены от компаний
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Как это работает */}
      ... // остальной код без изменений
    </div>
  );
};

export default Index;
