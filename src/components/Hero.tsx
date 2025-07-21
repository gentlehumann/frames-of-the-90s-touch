import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Award, Clock } from "lucide-react";

const Hero = () => {
  const handleAppointment = () => {
    window.open("https://wa.me/201222153694?text=Hello! I'd like to schedule an appointment at House of Frames.", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-12">
          
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
                Where Art Meets
                <span className="bg-gradient-gold bg-clip-text text-transparent block">
                  Craftsmanship
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Since the 1990s, House of Frames has been creating beautiful custom frames 
                and showcasing exclusive artwork. Heritage tradition with a modern touch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button 
                  onClick={handleAppointment}
                  size="lg"
                  className="bg-gradient-hero hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Gallery
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
                <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Palette className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Custom Framing</h3>
                    <p className="text-sm text-muted-foreground">Tailored to perfection</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Exclusive Art</h3>
                    <p className="text-sm text-muted-foreground">Curated collections</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">30+ Years</h3>
                    <p className="text-sm text-muted-foreground">Heritage & expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="animate-scale-in">
              <div className="relative">
                <div className="bg-gradient-gold p-1 rounded-lg shadow-elegant">
                  <img 
                    src="https://images.lovable.dev/82c97ab7-aadb-451d-aaba-de62d51538aa.png"
                    alt="Various frame samples showcasing our craftsmanship"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-card animate-float">
                  <p className="font-semibold">Premium Quality</p>
                  <p className="text-sm opacity-90">Hand-crafted frames</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;