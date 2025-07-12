import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedItems />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
