import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Calendar } from "lucide-react";

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  description: string;
  posted: string;
}

const JobCard = ({ title, company, location, salary, tags, description, posted }: JobCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <div className="flex items-center gap-1 mt-1">
              <Building className="h-4 w-4 text-muted-foreground" />
              <CardDescription className="font-medium text-sm">{company}</CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg">{salary}</div>
            <div className="flex items-center gap-1 justify-end text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-3 bg-accent/30">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{posted}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Сохранить
          </Button>
          <Button size="sm">Откликнуться</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;