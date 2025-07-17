import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Frame, Sparkles, Camera, Wrench, Clock } from "lucide-react";

const Services = () => {
  const handleServiceInquiry = (service: string) => {
    const message = `Hello! I'm interested in your ${service} service. Could you provide more information?`;
    window.open(`https://wa.me/201222153694?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    {
      icon: Frame,
      title: "Custom Framing",
      description: "Professional framing services with a wide selection of premium materials, from classic wood to modern metals.",
      features: ["Premium materials", "Expert consultation", "Precision cutting", "UV protection"]
    },
    {
      icon: Palette,
      title: "Art Curation",
      description: "Curated art collections from exclusive artists, perfect for homes, offices, and commercial spaces.",
      features: ["Exclusive artists", "Various styles", "Authentication", "Investment pieces"]
    },
    {
      icon: Sparkles,
      title: "Restoration",
      description: "Professional art and frame restoration services to bring your treasured pieces back to life.",
      features: ["Damage assessment", "Color restoration", "Frame repair", "Preservation treatment"]
    },
    {
      icon: Camera,
      title: "Photo Framing",
      description: "Transform your precious memories into stunning displays with our photo framing expertise.",
      features: ["Multiple sizes", "Matting options", "Digital printing", "Family collections"]
    },
    {
      icon: Wrench,
      title: "Installation",
      description: "Professional installation services ensuring your artwork is displayed safely and beautifully.",
      features: ["Home installation", "Gallery hanging", "Lighting advice", "Wall assessment"]
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Need it fast? Our express service delivers quality framing in record time without compromising quality.",
      features: ["24-48 hour delivery", "Rush orders", "Same-day consultation", "Quality guarantee"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom framing to art curation, we offer comprehensive services 
            for individuals and corporations that blend traditional craftsmanship with modern techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group shadow-card hover:shadow-elegant transition-all duration-500 animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button 
                    onClick={() => handleServiceInquiry(service.title)}
                    className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-card rounded-lg shadow-card">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're an individual client or a corporate partner, every project is unique. 
            Contact us to discuss your specific requirements and let us create a personalized 
            solution that exceeds your expectations.
          </p>
          <Button 
            onClick={() => handleServiceInquiry("custom consultation")}
            size="lg"
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;