import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share2, MessageCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import sampleItem1 from "@/assets/sample-item-1.jpg";
import sampleItem2 from "@/assets/sample-item-2.jpg";
import sampleItem3 from "@/assets/sample-item-3.jpg";

const ItemDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock data - in real app this would come from API
  const item = {
    id: parseInt(id || "1"),
    title: "Vintage Denim Jacket",
    description: "This beautiful vintage denim jacket is perfect for any casual occasion. Made from high-quality denim with classic button closure and chest pockets. Has been well-maintained and shows minimal signs of wear.",
    condition: "Like New",
    category: "Jackets",
    size: "M",
    brand: "Levi's",
    color: "Classic Blue",
    materials: ["100% Cotton", "Metal Buttons"],
    images: [sampleItem1, sampleItem2, sampleItem3],
    points: 150,
    owner: {
      name: "Sarah Chen",
      avatar: "",
      rating: 4.8,
      totalSwaps: 23
    },
    tags: ["Vintage", "Casual", "Classic", "Denim"],
    postedDate: "2024-01-15"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/browse" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-card/50">
              <img
                src={item.images[activeImage]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === index ? "border-primary" : "border-border/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${item.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{item.title}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary" className="rounded-full">{item.condition}</Badge>
                <span className="text-2xl font-bold text-primary">{item.points} points</span>
              </div>
            </div>

            {/* Owner Info */}
            <Card className="bg-card/80 border-border/50 rounded-xl">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={item.owner.avatar} />
                    <AvatarFallback>{item.owner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{item.owner.name}</div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">{item.owner.rating} • {item.owner.totalSwaps} swaps</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Details</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Brand:</span>
                    <span className="text-foreground">{item.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="text-foreground">{item.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Color:</span>
                    <span className="text-foreground">{item.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="text-foreground">{item.category}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Materials</h4>
                <div className="space-y-1">
                  {item.materials.map((material, index) => (
                    <div key={index} className="text-sm text-muted-foreground">{material}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="font-medium text-foreground mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-primary text-white hover:opacity-90 rounded-xl h-12">
                Request Swap
              </Button>
              <Button variant="outline" className="w-full rounded-xl h-12">
                Redeem with Points
              </Button>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current text-red-500" : ""}`} />
                  {isLiked ? "Liked" : "Like"}
                </Button>
                <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ItemDetail;