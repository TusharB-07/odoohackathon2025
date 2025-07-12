import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, ArrowRight } from "lucide-react";
import sampleItem1 from "@/assets/sample-item-1.jpg";
import sampleItem2 from "@/assets/sample-item-2.jpg";
import sampleItem3 from "@/assets/sample-item-3.jpg";

const featuredItems = [
  {
    id: 1,
    title: "Cozy Knit Sweater",
    brand: "Sustainable Brand",
    size: "M",
    condition: "Like New",
    points: 120,
    image: sampleItem1,
    likes: 24,
    rating: 4.8
  },
  {
    id: 2,
    title: "Vintage Denim Jacket",
    brand: "Classic Denim Co.",
    size: "L",
    condition: "Excellent",
    points: 150,
    image: sampleItem2,
    likes: 18,
    rating: 4.9
  },
  {
    id: 3,
    title: "Flowy Summer Dress",
    brand: "Eco Fashion",
    size: "S",
    condition: "Good",
    points: 100,
    image: sampleItem3,
    likes: 31,
    rating: 4.7
  }
];

const FeaturedItems = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Items
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing pre-loved pieces from our community. Each item comes with love and a story to tell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item) => (
            <Card key={item.id} className="card-cozy hover-lift group overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-destructive" />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.brand}</p>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-secondary rounded-lg px-3 py-1 font-medium">
                      Size {item.size}
                    </span>
                    <span className="text-success font-medium">{item.condition}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{item.points}</span>
                      <span className="text-sm text-muted-foreground">points</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-primary text-white hover:opacity-90 rounded-lg mt-4">
                    Request Swap
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl px-8 py-3 font-semibold hover-lift"
          >
            View All Items
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;