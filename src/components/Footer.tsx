import { Link } from "react-router-dom";
import { Leaf, Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">ReWear</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building a sustainable fashion community where every piece gets a second chance to be loved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive fill-current" />
              <span>for our planet</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/browse" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Browse Items
              </Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                How It Works
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                About Us
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Community</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/guidelines" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Community Guidelines
              </Link>
              <Link to="/sustainability" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Sustainability Tips
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Blog
              </Link>
              <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Help Center
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@rewear.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 ReWear. All rights reserved. Building a sustainable future together.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;