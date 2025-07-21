import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart, Star, Palette } from "lucide-react";

const About = () => {
  const handleContact = () => {
    window.open("https://wa.me/201222153694?text=Hello! I'd like to learn more about House of Frames.", "_blank");
  };

  const stats = [
    { icon: Clock, number: "28+", label: "Years of Excellence" },
    { icon: Users, number: "500+", label: "Projects Completed" },
    { icon: Palette, number: "100+", label: "Corporate Clients" },
    { icon: Award, number: "7", label: "International Partners" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Art",
      description: "Every frame we create is infused with our love for art and dedication to preserving its beauty."
    },
    {
      icon: Star,
      title: "Quality Craftsmanship",
      description: "Using premium materials and time-tested techniques, we ensure every piece meets our exacting standards."
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "We believe in building relationships with our clients, understanding their vision and bringing it to life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Under the leadership of Director <span className="font-semibold text-primary">Ashraf Aziz</span>, 
            House of Frames continues its legacy of excellence established since 2000.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="font-serif text-3xl font-semibold text-primary mb-6">
              House of Frames Legacy
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                House of Frames was established since 2000, specializing in importing artwork from Italy 
                and the United States of America. Today, we are the sole agent of 7 highly known artwork 
                companies worldwide.
              </p>
              <p>
                We own a factory to manufacture frames from both local and imported wood from Italy. 
                House of Frames serves as both manufacturer and retailer, offering comprehensive services 
                in wall decorations and artwork for clients across all sectors.
              </p>
              <p>
                Over more than two decades, we have established a well-known name in the field because of 
                our proficiency and quality products. We've completed over 60 projects with various 
                establishments including government buildings, universities, clubs, hospitals, hotels, 
                and restaurants across Egypt and Kuwait.
              </p>
            </div>
            <Button 
              onClick={handleContact}
              size="lg"
              className="mt-8 bg-gradient-hero hover:shadow-glow transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </div>

          <div className="animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-gold p-1 rounded-lg">
                <img 
                  src="https://images.lovable.dev/437ebaa5-78f3-4b21-bb33-e402c8686a1f.png"
                  alt="Abstract framed artwork showcasing our custom framing expertise"
                  className="w-full h-48 rounded-lg object-cover"
                />
              </div>
              <div className="bg-gradient-gold p-1 rounded-lg">
                <img 
                  src="https://images.lovable.dev/62745277-a3df-4594-ad1e-301b05d34173.png"
                  alt="Contemporary framed art piece demonstrating our quality craftsmanship"
                  className="w-full h-48 rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="bg-gradient-gold p-1 rounded-lg">
              <img 
                src="https://images.lovable.dev/774e11d1-8267-4389-a1d5-60fb369277ed.png"
                alt="Large scale framed artwork installation in luxury interior"
                className="w-full h-64 rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-card">
              <p className="font-semibold">Est. 2000</p>
              <p className="text-sm opacity-90">Over two decades strong</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="text-center shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-gold p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-serif text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Previous Work */}
        <div className="mb-16">
          <h3 className="font-serif text-3xl font-semibold text-primary text-center mb-12">
            Previous Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hotels and Resorts */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4 text-lg">Hotels and Resorts</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Rixos Hotel</li>
                  <li>• Radisson Blue</li>
                  <li>• Nile Cruises</li>
                </ul>
              </CardContent>
            </Card>

            {/* Government */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4 text-lg">Government</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Guest Palace, Ministry of Foreign Affairs</li>
                  <li>• General Secretary Office, Supreme Court</li>
                </ul>
              </CardContent>
            </Card>

            {/* Universities */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4 text-lg">Universities</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modern Academy Maady</li>
                  <li>• British University</li>
                </ul>
              </CardContent>
            </Card>

            {/* Hospitals */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4 text-lg">Hospitals</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• One Day Surgery Hospital (Wady Natroun)</li>
                  <li>• Cleopatra Hospital</li>
                  <li>• Hyatt Medical Center</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="font-serif text-3xl font-semibold text-primary text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center shadow-card hover:shadow-elegant transition-all duration-500 animate-fade-in hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-primary mb-4">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-subtle p-12 rounded-lg shadow-card">
          <h3 className="font-serif text-3xl font-semibold text-primary mb-4">
            Ready to Frame Your Vision?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust House of Frames with their most 
            precious artwork and memories. Let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleContact}
              size="lg"
              className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;