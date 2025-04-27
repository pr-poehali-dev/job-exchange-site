import { useState } from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Building2, MapPin, Users, Star } from "lucide-react";

type CompanyCardProps = {
  id: string;
  name: string;
  logo: string;
  location: string;
  industry: string;
  employees: string;
  rating: number;
  description: string;
};

const CompanyCard = ({ name, logo, location, industry, employees, rating, description }: CompanyCardProps) => (
  <Card className="overflow-hidden transition-all hover:shadow-md">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
          <img 
            src={logo} 
            alt={name} 
            className="w-10 h-10 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=' + name.charAt(0);
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <Building2 className="w-4 h-4 mr-1" />
              {industry}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {employees}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-500" />
              {rating.toFixed(1)}
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Моковые данные компаний
const mockCompanies: CompanyCardProps[] = [
  {
    id: "1",
    name: "ТехноПрогресс",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=250&h=250&fit=crop",
    location: "Москва",
    industry: "IT и разработка",
    employees: "200-500",
    rating: 4.7,
    description: "Ведущая компания в области разработки программного обеспечения и IT-консалтинга. Создаём инновационные решения для бизнеса с 2010 года."
  },
  {
    id: "2",
    name: "Креатив Дизайн",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=250&h=250&fit=crop",
    location: "Санкт-Петербург",
    industry: "Дизайн",
    employees: "50-200",
    rating: 4.5,
    description: "Студия дизайна полного цикла. Мы создаем визуальные идентичности брендов, разрабатываем интерфейсы и помогаем компаниям выделяться."
  },
  {
    id: "3",
    name: "ФинТех Системы",
    logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=250&h=250&fit=crop",
    location: "Москва",
    industry: "Финансы, IT",
    employees: "500-1000",
    rating: 4.2,
    description: "Разрабатываем передовые финансовые технологии и инновационные платежные решения для банков и финансовых организаций."
  },
  {
    id: "4",
    name: "АналитикПро",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=250&h=250&fit=crop",
    location: "Москва",
    industry: "Аналитика данных",
    employees: "100-250",
    rating: 4.8,
    description: "Специализируемся на анализе больших данных, машинном обучении и искусственном интеллекте. Помогаем бизнесу принимать решения на основе данных."
  },
  {
    id: "5",
    name: "Облачные Решения",
    logo: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=250&h=250&fit=crop",
    location: "Новосибирск",
    industry: "IT инфраструктура",
    employees: "100-200",
    rating: 4.3,
    description: "Предоставляем комплексные решения для построения и оптимизации IT-инфраструктуры. Облачные сервисы, DevOps и системная интеграция."
  },
  {
    id: "6",
    name: "Медиа Портал",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=250&h=250&fit=crop",
    location: "Екатеринбург",
    industry: "Медиа, Контент",
    employees: "50-100",
    rating: 4.1,
    description: "Создаем информационные порталы и контентные проекты. Работаем с ведущими брендами и медиа-компаниями."
  }
];

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(mockCompanies);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = mockCompanies.filter(company => 
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Заголовок секции */}
        <section className="bg-primary/10 py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Компании</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Изучите профили ведущих работодателей и найдите идеальную компанию
              </p>
              
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Название компании или отрасль"
                    className="pl-10 h-12 rounded-lg bg-background"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="h-12 px-6">Найти</Button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Список компаний */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-6">
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company) => (
                  <CompanyCard key={company.id} {...company} />
                ))
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Компании не найдены</h3>
                  <p className="text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
                </div>
              )}
              
              {filteredCompanies.length > 0 && (
                <div className="flex justify-center pt-4">
                  <Button variant="outline">Показать еще</Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-secondary/10 border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg">ТрудБиржа</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ТрудБиржа. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Companies;