import { useState } from "react";
import Header from "@/components/Header";
import JobCard, { JobCardProps } from "@/components/JobCard";
import JobsFilter from "@/components/JobsFilter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, BriefcaseIcon } from "lucide-react";

// Моковые данные для демонстрации
const mockJobs: JobCardProps[] = [
  {
    id: "1",
    title: "Разработчик Frontend (React)",
    company: "ТехноПрогресс",
    location: "Москва",
    salary: "от 150 000 ₽",
    tags: ["React", "TypeScript", "Redux", "Удаленно"],
    description: "Требуется опытный frontend-разработчик для создания современных веб-приложений с использованием React, TypeScript и других современных технологий.",
    posted: "Опубликовано сегодня"
  },
  {
    id: "2",
    title: "UX/UI Дизайнер",
    company: "Креатив Дизайн",
    location: "Санкт-Петербург",
    salary: "120 000 - 180 000 ₽",
    tags: ["Figma", "UI/UX", "Adobe", "Прототипирование"],
    description: "Ищем талантливого UX/UI дизайнера для разработки привлекательных интерфейсов. От вас ожидается опыт работы с Figma, Adobe и понимание принципов юзабилити.",
    posted: "Опубликовано 2 дня назад"
  },
  {
    id: "3",
    title: "Java-разработчик",
    company: "ФинТех Системы",
    location: "Удаленно",
    salary: "от 200 000 ₽",
    tags: ["Java", "Spring", "Hibernate", "SQL"],
    description: "Разработка и поддержка высоконагруженных банковских систем на Java. Требуется глубокое знание Spring Framework, Hibernate и опыт работы с реляционными БД.",
    posted: "Опубликовано 3 дня назад"
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "АналитикПро",
    location: "Москва",
    salary: "180 000 - 250 000 ₽",
    tags: ["Python", "ML", "TensorFlow", "NLP"],
    description: "Разработка и внедрение моделей машинного обучения для решения бизнес-задач, анализ данных и создание предиктивных моделей на основе больших датасетов.",
    posted: "Опубликовано неделю назад"
  },
  {
    id: "5",
    title: "DevOps инженер",
    company: "Облачные Решения",
    location: "Новосибирск",
    salary: "от 170 000 ₽",
    tags: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    description: "Настройка и оптимизация инфраструктуры, автоматизация процессов разработки, внедрение практик непрерывной интеграции и доставки. Опыт работы с Docker и Kubernetes обязателен.",
    posted: "Опубликовано вчера"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = mockJobs.filter(job => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero секция */}
        <section className="bg-primary/10 py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Найдите работу своей мечты</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Тысячи вакансий от ведущих компаний России ждут вас
              </p>
              
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Профессия, должность или ключевое слово"
                    className="pl-10 h-12 rounded-lg bg-background"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="h-12 px-8">Найти вакансии</Button>
              </form>
              
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
                  Разработка
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
                  Маркетинг
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
                  Дизайн
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Удаленно
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция с вакансиями */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Актуальные вакансии</h2>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground hidden md:inline">Сортировка:</span>
                <Select defaultValue="date">
                  <SelectTrigger className="w-40 md:w-48">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">По дате публикации</SelectItem>
                    <SelectItem value="salary-desc">По убыванию зарплаты</SelectItem>
                    <SelectItem value="salary-asc">По возрастанию зарплаты</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="hidden lg:block">
                <JobsFilter />
              </div>
              <div className="lg:col-span-3 space-y-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium">Вакансии не найдены</h3>
                    <p className="text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
                  </div>
                )}
                
                {filteredJobs.length > 0 && (
                  <div className="flex justify-center pt-4">
                    <Button variant="outline">Показать еще</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-secondary/10 border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <BriefcaseIcon className="h-5 w-5 text-primary" />
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

export default Index;