import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      quote: "ReWear has completely changed how I think about fashion. I've found amazing pieces while giving my clothes a second life!",
      role: "Fashion Enthusiast"
    },
    {
      name: "Mike Rodriguez",
      quote: "As someone who cares about the environment, ReWear lets me stay stylish while being sustainable. Win-win!",
      role: "Environmental Advocate"
    },
    {
      name: "Emma Thompson",
      quote: "The community here is so welcoming. I've made friends and discovered my new favorite wardrobe pieces.",
      role: "Community Member"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">About ReWear</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize fashion consumption by creating a community where clothes get the love they deserve, 
            while reducing environmental impact one swap at a time.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fast fashion is one of the world's most polluting industries, producing 92 million tons of textile waste annually. 
              At ReWear, we believe there's a better way to enjoy fashion while caring for our planet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform connects fashion lovers who want to refresh their wardrobes sustainably. Every swap, every listing, 
              every point earned is a step toward a more circular fashion economy where nothing goes to waste.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Impact</h2>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/80 border-border/50 rounded-xl text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Items Swapped</div>
                </CardContent>
              </Card>
              <Card className="bg-card/80 border-border/50 rounded-xl text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">5K+</div>
                  <div className="text-muted-foreground">Community Members</div>
                </CardContent>
              </Card>
              <Card className="bg-card/80 border-border/50 rounded-xl text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">2.5T</div>
                  <div className="text-muted-foreground">Tons CO2 Saved</div>
                </CardContent>
              </Card>
              <Card className="bg-card/80 border-border/50 rounded-xl text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">15K+</div>
                  <div className="text-muted-foreground">Trees Saved</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 border-border/50 rounded-xl hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Every action we take is guided by our commitment to environmental responsibility and circular fashion.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border/50 rounded-xl hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster connections between people who share values of sustainability and conscious consumption.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border/50 rounded-xl hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We believe great fashion should last. Our platform celebrates quality pieces that deserve a second life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/80 border-border/50 rounded-xl hover-lift">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">Email</span>
              <span className="text-muted-foreground">hello@rewear.app</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">Phone</span>
              <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">Address</span>
              <span className="text-muted-foreground">123 Eco Street, Green City</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;