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

      {/* Главный баннер */}
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
                    />
                  </div>
                </div>
                <Button className="bg-red-600 hover:bg-red-700 h-12 text-base px-8">
                  Найти мастеров
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-slate-500 flex items-center">
                  <Icon name="Tag" className="w-4 h-4 mr-1" />
                  Популярные запросы:
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                >
                  ремонт квартиры
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                >
                  установка сантехники
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                >
                  укладка плитки
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                >
                  электромонтаж
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Категории услуг */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Категории ремонтных услуг
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.slice(0, 4).map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-md transition-shadow group border-red-100"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                    <Icon
                      name={category.icon}
                      className="w-8 h-8 text-red-600"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {category.name}
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {category.services.slice(0, 4).map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                  <Button className="mt-4 bg-red-600 hover:bg-red-700">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-red-200 text-red-600 hover:text-red-700"
          >
            <Icon name="Plus" className="mr-2 h-4 w-4" />
            Показать все категории
          </Button>
        </div>
      </section>

      {/* Фильтры и популярные компании */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Популярные компании
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Проверенные профессионалы с высоким рейтингом и положительными
            отзывами
          </p>

          {/* Фильтры */}
          <div className="bg-white p-4 rounded-lg shadow mb-8 border border-red-100">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Цена</label>
                <div className="flex gap-2 items-center">
                  <Input
                    placeholder="От"
                    className="w-full"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev,
                        min: e.target.value,
                      }))
                    }
                  />
                  <span className="text-gray-400">—</span>
                  <Input
                    placeholder="До"
                    className="w-full"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev,
                        max: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Рейтинг</label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                >
                  <option value="all">Любой рейтинг</option>
                  <option value="4.5">От 4.5 и выше</option>
                  <option value="4.0">От 4.0 и выше</option>
                  <option value="3.5">От 3.5 и выше</option>
                </select>
              </div>

              <Button className="bg-red-600 hover:bg-red-700 md:w-auto w-full">
                <Icon name="Filter" className="mr-2 h-4 w-4" />
                Применить фильтры
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCompanies.map((company) => (
              <Card
                key={company.id}
                className="overflow-hidden hover:shadow-lg transition-shadow border-red-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{company.name}</h3>
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        className="w-5 h-5 text-yellow-500 mr-1"
                      />
                      <span className="font-medium">{company.rating}</span>
                      <span className="text-slate-500 text-sm ml-1">
                        ({company.reviewCount})
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-3">{company.description}</p>
                  <p className="text-red-600 font-medium mb-3">
                    {company.price}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-red-600 hover:bg-red-700"
                    >
                      <Icon name="Phone" className="mr-1 w-4 h-4" />
                      Связаться
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-red-200 text-red-600"
                    >
                      <Icon name="Info" className="mr-1 w-4 h-4" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="mx-auto border-red-200 text-red-600"
            >
              <Icon name="ListFilter" className="mr-2 h-4 w-4" />
              Показать все компании
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы и Преимущества */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Последние отзывы
            </h2>
            <div className="space-y-6">
              {recentReviews.map((review) => (
                <Card key={review.id} className="p-5 border-red-100">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{review.companyName}</h4>
                      <span className="text-sm text-slate-500">
                        {review.userName} • {review.date}
                      </span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-500" : "text-slate-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700">{review.text}</p>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button
                variant="ghost"
                className="text-red-600 hover:text-red-700"
              >
                <Icon name="ChevronRight" className="mr-1 h-4 w-4" />
                Смотреть все отзывы
              </Button>
            </div>
          </div>

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
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Выберите услугу</h3>
              <p className="text-slate-600">
                Укажите город и выберите необходимую услугу из каталога
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Сравните компании</h3>
              <p className="text-slate-600">
                Изучите рейтинги, отзывы и цены различных компаний
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Получите услугу</h3>
              <p className="text-slate-600">
                Свяжитесь с выбранной компанией и закажите услугу
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Города */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Города, где мы работаем
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {popularCities.map((city) => (
            <div key={city} className="flex items-center">
              <Icon name="MapPin" className="w-5 h-5 text-red-500 mr-2" />
              <Link to="#" className="text-slate-700 hover:text-red-600">
                {city}
              </Link>
            </div>
          ))}
          <div className="flex items-center">
            <Icon name="Plus" className="w-5 h-5 text-red-500 mr-2" />
            <Link to="#" className="text-red-600 font-medium">
              Все города
            </Link>
          </div>
        </div>
      </section>

      {/* Подпишитесь */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Оставайтесь в курсе новостей
            </h2>
            <p className="mb-6">
              Подпишитесь на нашу рассылку, чтобы получать информацию о новых
              компаниях и специальных предложениях
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                className="bg-white text-slate-900"
                placeholder="Ваш email"
              />
              <Button className="bg-slate-900 hover:bg-slate-800 whitespace-nowrap">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Hammer" className="h-6 w-6 text-red-400" />
                <span className="text-xl font-bold text-white">ВсеМастера</span>
              </div>
              <p className="text-slate-400 mb-4">
                Сервис поиска проверенных ремонтных компаний в России
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white">
                  <Icon name="Facebook" className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <Icon name="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <Icon name="Twitter" className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <Icon name="Youtube" className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">О компании</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Как это работает
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Вакансии
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Для клиентов</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Поиск компаний
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Оставить отзыв
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Вопросы и ответы
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Политика возврата
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Для компаний</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Добавить компанию
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Партнерская программа
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Рекламные возможности
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Условия использования
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 ВсеМастера. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
