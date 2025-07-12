import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import sampleItem1 from "@/assets/sample-item-1.jpg";
import sampleItem2 from "@/assets/sample-item-2.jpg";
import sampleItem3 from "@/assets/sample-item-3.jpg";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const items = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      condition: "Like New",
      category: "Jackets",
      size: "M",
      image: sampleItem1,
      points: 150
    },
    {
      id: 2,
      title: "Summer Floral Dress",
      condition: "Good",
      category: "Dresses",
      size: "S",
      image: sampleItem2,
      points: 120
    },
    {
      id: 3,
      title: "Cozy Knit Sweater",
      condition: "Excellent",
      category: "Sweaters",
      size: "L",
      image: sampleItem3,
      points: 180
    },
    {
      id: 4,
      title: "Classic White Tee",
      condition: "Like New",
      category: "T-Shirts",
      size: "M",
      image: sampleItem1,
      points: 80
    },
    {
      id: 5,
      title: "Leather Ankle Boots",
      condition: "Good",
      category: "Shoes",
      size: "8",
      image: sampleItem2,
      points: 200
    },
    {
      id: 6,
      title: "Silk Scarf",
      condition: "Excellent",
      category: "Accessories",
      size: "One Size",
      image: sampleItem3,
      points: 90
    }
  ];

  const filteredItems = items.filter(item => {
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || item.category === selectedCategory) &&
      (selectedSize === "" || item.size === selectedSize)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Browse Items</h1>
          <p className="text-muted-foreground text-lg">Discover unique pieces from our community</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-xl border-border/50 bg-card/50"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 rounded-xl border-border/50 bg-card/50">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="Jackets">Jackets</SelectItem>
                <SelectItem value="Dresses">Dresses</SelectItem>
                <SelectItem value="Sweaters">Sweaters</SelectItem>
                <SelectItem value="T-Shirts">T-Shirts</SelectItem>
                <SelectItem value="Shoes">Shoes</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-32 rounded-xl border-border/50 bg-card/50">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Sizes</SelectItem>
                <SelectItem value="XS">XS</SelectItem>
                <SelectItem value="S">S</SelectItem>
                <SelectItem value="M">M</SelectItem>
                <SelectItem value="L">L</SelectItem>
                <SelectItem value="XL">XL</SelectItem>
                <SelectItem value="One Size">One Size</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover-lift bg-card/80 border-border/50 rounded-xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-muted-foreground">{item.condition}</span>
                  <span className="text-sm font-medium text-primary">{item.points} pts</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">{item.category}</span>
                  <span className="text-sm text-muted-foreground">Size {item.size}</span>
                </div>
                <Link to={`/item/${item.id}`}>
                  <Button className="w-full bg-gradient-primary text-white hover:opacity-90 rounded-xl">
                    View Item
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Browse;