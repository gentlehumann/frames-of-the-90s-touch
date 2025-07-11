import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";

const Header = () => {
  const handleAppointment = () => {
    window.open("https://wa.me/201222153694?text=Hello! I'd like to schedule an appointment at House of Frames.", "_blank");
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <div className="flex items-center">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-primary tracking-wide">
              House of Frames
            </h1>
            <div className="ml-3 text-xs text-muted-foreground hidden md:block">
              <span className="block">Est. 1990s</span>
              <span className="block italic">Heritage • Modern</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Gallery
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleAppointment}
              className="bg-gradient-hero hover:shadow-elegant transition-all duration-300 font-medium"
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
            
            {/* Mobile Menu Button */}
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;