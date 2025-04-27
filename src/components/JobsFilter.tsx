import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const experienceOptions = [
  { id: "no-experience", label: "Без опыта" },
  { id: "1-3", label: "1-3 года" },
  { id: "3-6", label: "3-6 лет" },
  { id: "6+", label: "Более 6 лет" }
];

const employmentOptions = [
  { id: "full-time", label: "Полная занятость" },
  { id: "part-time", label: "Частичная занятость" },
  { id: "project", label: "Проектная работа" },
  { id: "internship", label: "Стажировка" }
];

const locationOptions = [
  { id: "remote", label: "Удаленно" },
  { id: "moscow", label: "Москва" },
  { id: "spb", label: "Санкт-Петербург" },
  { id: "novosibirsk", label: "Новосибирск" }
];

const JobsFilter = () => {
  return (
    <div className="space-y-4 p-4 bg-card rounded-lg border">
      <h3 className="font-medium text-lg mb-4">Фильтры</h3>

      <Accordion type="multiple" defaultValue={["experience", "salary", "employment", "location"]}>
        <AccordionItem value="salary">
          <AccordionTrigger className="text-base font-medium">Зарплата</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <div className="flex justify-between text-sm">
                <span>30 000 ₽</span>
                <span>300 000 ₽</span>
              </div>
              <Slider defaultValue={[30000, 150000]} min={30000} max={300000} step={5000} />
              <div className="pt-2 text-center text-sm font-medium text-muted-foreground">
                30 000 ₽ – 150 000 ₽
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger className="text-base font-medium">Опыт работы</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {experienceOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox id={option.id} />
                  <Label htmlFor={option.id} className="text-sm font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="employment">
          <AccordionTrigger className="text-base font-medium">Тип занятости</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {employmentOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox id={option.id} />
                  <Label htmlFor={option.id} className="text-sm font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger className="text-base font-medium">Местоположение</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {locationOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox id={option.id} />
                  <Label htmlFor={option.id} className="text-sm font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="pt-4 flex gap-2">
        <Button className="w-full" variant="outline">Сбросить</Button>
        <Button className="w-full">Применить</Button>
      </div>
    </div>
  );
};

export default JobsFilter;