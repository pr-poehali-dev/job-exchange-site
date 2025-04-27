import Header from "@/components/Header";
import { BriefcaseIcon, Award, Users, LineChart, CheckCircle, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Герой-секция */}
        <section className="bg-primary/10 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">О платформе ТрудБиржа</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Мы соединяем талантливых специалистов с лучшими работодателями России
              </p>
              <Button size="lg" className="px-8">Начать поиск</Button>
            </div>
          </div>
        </section>
        
        {/* Миссия */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
                <p className="text-lg text-muted-foreground">
                  Мы стремимся сделать процесс поиска работы и найма сотрудников максимально простым, 
                  эффективным и доступным для всех участников рынка труда.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary/10 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <BriefcaseIcon className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold">Для соискателей</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Мы помогаем найти работу, соответствующую вашим навыкам, опыту и карьерным устремлениям. 
                    На нашей платформе вы найдете тысячи актуальных вакансий от ведущих работодателей страны.
                  </p>
                </div>
                
                <div className="bg-secondary/10 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold">Для работодателей</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Мы предоставляем доступ к базе квалифицированных кандидатов и эффективные инструменты для 
                    поиска и отбора персонала, что делает процесс найма быстрым и результативным.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="py-16 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ТрудБиржа — это современная платформа, созданная с учетом потребностей 
                как соискателей, так и работодателей
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Проверенные вакансии</h3>
                  <p className="text-muted-foreground">
                    Мы тщательно проверяем каждую публикуемую вакансию, чтобы обеспечить 
                    безопасность и достоверность информации.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <LineChart className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Аналитика рынка труда</h3>
                  <p className="text-muted-foreground">
                    Актуальная информация о тенденциях рынка труда, востребованных специальностях 
                    и уровне заработных плат.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Лучшие работодатели</h3>
                  <p className="text-muted-foreground">
                    На нашей платформе представлены ведущие компании различных отраслей, 
                    от стартапов до корпораций.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Быстрый отклик</h3>
                  <p className="text-muted-foreground">
                    Простая и удобная система откликов на вакансии с быстрой обратной связью 
                    от работодателей.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Headphones className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
                  <p className="text-muted-foreground">
                    Наша команда поддержки всегда готова помочь с любыми вопросами по 
                    использованию платформы.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA секция */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к ТрудБирже</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Начните поиск работы или публикацию вакансий прямо сейчас
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">Найти работу</Button>
                <Button size="lg" variant="outline" className="px-8">Разместить вакансию</Button>
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

export default About;