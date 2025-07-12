import { UserPlus, Package, RefreshCw, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Join our eco-friendly community by creating your free ReWear account. Set up your profile and start your sustainable fashion journey.",
      color: "text-primary"
    },
    {
      icon: Package,
      title: "List Items",
      description: "Upload photos of clothing items you no longer wear. Add details like size, condition, and style to help others find perfect matches.",
      color: "text-secondary"
    },
    {
      icon: RefreshCw,
      title: "Swap or Redeem Points",
      description: "Browse items from other users and either swap directly or use points you've earned from your listings to get new pieces.",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Receive / Donate",
      description: "Get your new items delivered or arrange pickup. Feel good knowing you're reducing waste and supporting sustainable fashion.",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">How It Works</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of fashion lovers making sustainable choices. Here's how easy it is to start swapping with ReWear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover-lift bg-card/80 border-border/50 rounded-xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <div className="mt-4 mb-6">
                  <step.icon className={`w-12 h-12 mx-auto ${step.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Why Choose ReWear?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Eco-Friendly</h4>
                  <p className="text-muted-foreground">Reduce textile waste and environmental impact</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Save Money</h4>
                  <p className="text-muted-foreground">Get quality clothes without the high price tag</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Community Driven</h4>
                  <p className="text-muted-foreground">Connect with like-minded fashion enthusiasts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Points System</h2>
            <Card className="bg-card/80 border-border/50 rounded-xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">List an item</span>
                    <span className="font-semibold text-primary">+50 points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Successful swap</span>
                    <span className="font-semibold text-primary">+25 points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Profile completion</span>
                    <span className="font-semibold text-primary">+30 points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Referral bonus</span>
                    <span className="font-semibold text-primary">+100 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;