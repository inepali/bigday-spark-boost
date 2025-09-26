import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Book Now", path: "/booking" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-serif text-primary font-bold tracking-tight">
              Big Day Story
            </div>
            <div className="text-lg font-serif text-gold font-medium">
              Carolinas
            </div>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-serif transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & Social Links */}
          <div className="flex items-center space-x-4">
            {/* Phone - Hidden on small screens */}
            <a 
              href="tel:+17044816631" 
              className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(704) 481-6631</span>
            </a>
            
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <a 
                href="https://www.facebook.com/bigdaystorycarolinas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-accent"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/bigdaystorycarolinas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-accent"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:bigdaystorycarolinas@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-accent"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* CTA Button - Hidden on small screens */}
            <Link to="/booking" className="hidden lg:block">
              <Button variant="gold" size="sm" className="font-serif">
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex justify-center space-x-6 border-t border-border pt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-serif text-sm transition-colors ${
                isActive(item.path)
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;