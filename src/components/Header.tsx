import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, Bell, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Briefcase className="h-6 w-6" />
            <span>ТрудБиржа</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center flex-1 px-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск вакансий..."
              className="w-full pl-8 rounded-full bg-accent"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/vacancies" className="text-sm font-medium hover:text-primary">Вакансии</Link>
          <Link to="/companies" className="text-sm font-medium hover:text-primary">Компании</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">О нас</Link>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
          </Button>
          <Button>Войти</Button>
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 md:hidden flex flex-col gap-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск вакансий..."
                className="w-full pl-8 rounded-full bg-accent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/vacancies" className="text-sm font-medium hover:text-primary p-2">Вакансии</Link>
              <Link to="/companies" className="text-sm font-medium hover:text-primary p-2">Компании</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary p-2">О нас</Link>
              <Button className="w-full">Войти</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;