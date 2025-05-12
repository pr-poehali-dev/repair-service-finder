
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

const serviceCategories = [
  { 
    id: 1, 
    name: "Отделка помещений", 
    icon: "Brush", 
    services: ["Штукатурка", "Покраска", "Поклейка обоев", "Укладка плитки"]
  },
  { 
    id: 2, 
    name: "Сантехнические работы", 
    icon: "Droplets", 
    services: ["Установка сантехники", "Замена труб", "Устранение протечек"]
  },
  { 
    id: 3, 
    name: "Электромонтажные работы", 
    icon: "Zap", 
    services: ["Замена проводки", "Установка розеток", "Монтаж освещения"]
  },
  { 
    id: 4, 
    name: "Монтаж конструкций", 
    icon: "Hammer", 
    services: ["Сборка мебели", "Установка окон", "Монтаж перегородок"]
  },
];

const popularCities = [
  "Москва", "Санкт-Петербург", "Екатеринбург", "Новосибирск", 
  "Казань", "Нижний Новгород", "Краснодар", "Сочи"
];

const featuredCompanies = [
  {
    id: 1,
    name: "РемонтПрофи",
    rating: 4.8,
    reviewCount: 124,
    description: "Профессиональный ремонт квартир под ключ",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=300&auto=format&fit=crop",
    services: ["Отделка помещений", "Монтаж конструкций"],
  },
  {
    id: 2,
    name: "Сантех-Мастер",
    rating: 4.6,
    reviewCount: 89,
    description: "Сантехнические работы любой сложности",
    image: "https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?q=80&w=300&auto=format&fit=crop",
    services: ["Сантехнические работы"],
  },
  {
    id: 3,
    name: "ЭлектроСервис",
    rating: 4.7,
    reviewCount: 102,
    description: "Электромонтажные работы в квартирах и домах",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=300&auto=format&fit=crop",
    services: ["Электромонтажные работы"],
  },
];

const recentReviews = [
  {
    id: 1,
    companyName: "РемонтПрофи",
    userName: "Алексей К.",
    rating: 5,
    text: "Отличная компания! Сделали ремонт в срок и качественно.",
    date: "10 мая 2025"
  },
  {
    id: 2,
    companyName: "Сантех-Мастер",
    userName: "Марина В.",
    rating: 4,
    text: "Хорошие мастера, но немного задержали сроки.",
    date: "8 мая 2025"
  },
];

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Москва");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Шапка */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Settings" className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-blue-600">РемонтГид</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Главная</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Компании</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">О нас</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost">
              <Icon name="User" className="mr-2 h-4 w-4" />
              Войти
            </Button>
            <Button>
              <Icon name="Plus" className="mr-2 h-4 w-4" />
              Добавить компанию
            </Button>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Найдите лучших специалистов для вашего ремонта
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Проверенные компании с реальными отзывами клиентов
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <div className="relative">
                    <Icon name="MapPin" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <select 
                      className="w-full pl-10 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      {popularCities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex-[2]">
                  <div className="relative">
                    <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <Input 
                      className="w-full pl-10" 
                      placeholder="Что нужно отремонтировать?" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 min-w-[120px]">
                  Найти мастеров
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Категории услуг */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Категории ремонтных услуг</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow group">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon name={category.icon} className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {category.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                  <Button className="mt-4" variant="outline">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Популярные компании */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Популярные компании</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Проверенные профессионалы с высоким рейтингом и положительными отзывами
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCompanies.map((company) => (
              <Card key={company.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden">
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
                      <Icon name="Star" className="w-5 h-5 text-yellow-500 mr-1" />
                      <span className="font-medium">{company.rating}</span>
                      <span className="text-slate-500 text-sm ml-1">({company.reviewCount})</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-3">{company.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.services.map((service, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="default" size="sm" className="flex-1">
                      <Icon name="Phone" className="mr-1 w-4 h-4" />
                      Связаться
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Info" className="mr-1 w-4 h-4" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="mx-auto">
              <Icon name="ListFilter" className="mr-2 h-4 w-4" />
              Показать все компании
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Последние отзывы</h2>
            <div className="space-y-6">
              {recentReviews.map((review) => (
                <Card key={review.id} className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{review.companyName}</h4>
                      <span className="text-sm text-slate-500">{review.userName} • {review.date}</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500' : 'text-slate-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700">{review.text}</p>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="ghost">
                <Icon name="ChevronRight" className="mr-1 h-4 w-4" />
                Смотреть все отзывы
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Почему выбирают РемонтГид?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Проверенные компании</h3>
                  <p className="text-slate-600">Мы тщательно проверяем каждую компанию перед добавлением в наш каталог</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Icon name="Star" className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Реальные отзывы</h3>
                  <p className="text-slate-600">Отзывы оставляют только клиенты, воспользовавшиеся услугами через нашу платформу</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Icon name="Shield" className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Гарантия качества</h3>
                  <p className="text-slate-600">Мы следим за качеством предоставляемых услуг и решаем спорные ситуации</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Icon name="Wallet" className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Прозрачные цены</h3>
                  <p className="text-slate-600">Никаких скрытых платежей - только честные цены от компаний</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Выберите услугу</h3>
              <p className="text-slate-600">Укажите город и выберите необходимую услугу из каталога</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Сравните компании</h3>
              <p className="text-slate-600">Изучите рейтинги, отзывы и цены различных компаний</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Получите услугу</h3>
              <p className="text-slate-600">Свяжитесь с выбранной компанией и закажите услугу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Города */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Города, где мы работаем</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {popularCities.map((city) => (
            <div key={city} className="flex items-center">
              <Icon name="MapPin" className="w-5 h-5 text-blue-500 mr-2" />
              <Link to="#" className="text-slate-700 hover:text-blue-600">{city}</Link>
            </div>
          ))}
          <div className="flex items-center">
            <Icon name="Plus" className="w-5 h-5 text-blue-500 mr-2" />
            <Link to="#" className="text-blue-600 font-medium">Все города</Link>
          </div>
        </div>
      </section>

      {/* Подпишитесь */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Оставайтесь в курсе новостей</h2>
            <p className="mb-6">Подпишитесь на нашу рассылку, чтобы получать информацию о новых компаниях и специальных предложениях</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                className="bg-white text-slate-900" 
                placeholder="Ваш email" 
              />
              <Button className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Settings" className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">РемонтГид</span>
              </div>
              <p className="text-slate-400 mb-4">Сервис поиска проверенных ремонтных компаний в России</p>
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
                <li><a href="#" className="text-slate-400 hover:text-white">О нас</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Как это работает</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Вакансии</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Блог</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Для клиентов</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white">Поиск компаний</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Оставить отзыв</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Вопросы и ответы</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Политика возврата</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Для компаний</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white">Добавить компанию</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Партнерская программа</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Рекламные возможности</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Условия использования</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 РемонтГид. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
