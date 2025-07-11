import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleContact = () => {
    window.open("https://wa.me/201222153694?text=Hello! I'd like to get in touch with House of Frames.", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-medium mb-4">
              House of Frames
            </h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Since the 1990s, we've been preserving memories and enhancing art through 
              exceptional framing. Heritage craftsmanship meets modern elegance.
            </p>
            <Button 
              onClick={handleContact}
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-primary"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+20 12 22153694</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>20 Almazah Street, Heliopolis, Cairo, Egypt</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Sat-Thu: 10AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} House of Frames. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent" />
            <span>for art lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;