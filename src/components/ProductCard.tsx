import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  imagePath?: string;
}

export const ProductCard = ({ title, description, imagePath }: ProductCardProps) => {
  return (
    <Card className="bg-white shadow-md hover:shadow-xl transition-all overflow-hidden border-0 group">
      <div className="h-48 overflow-hidden">
        {imagePath ? (
          <img 
            src={imagePath} 
            alt={title} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-nutri-green/20 to-nutri-orange/20 flex items-center justify-center">
            <span className="text-nutri-green text-xl font-bold">{title}</span>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-nutri-green">{title}</CardTitle>
          <Badge className="bg-nutri-orange/10 text-nutri-orange border-0 hover:bg-nutri-orange/20">
            Vegan
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};
