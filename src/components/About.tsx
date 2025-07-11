import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart, Star, Palette } from "lucide-react";

const About = () => {
  const handleContact = () => {
    window.open("https://wa.me/201222153694?text=Hello! I'd like to learn more about House of Frames.", "_blank");
  };

  const stats = [
    { icon: Clock, number: "30+", label: "Years of Excellence" },
    { icon: Users, number: "5000+", label: "Happy Customers" },
    { icon: Palette, number: "200+", label: "Featured Artists" },
    { icon: Award, number: "50+", label: "Awards Won" }
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
            Three decades of passion, dedication, and artistry have shaped House of Frames 
            into Egypt's premier destination for custom framing and exclusive art.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="font-serif text-3xl font-semibold text-primary mb-6">
              Heritage Meets Innovation
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in the early 1990s, House of Frames began as a small workshop with a 
                big dream: to preserve and enhance the beauty of art through exceptional framing. 
                What started as a passion project has evolved into one of Egypt's most trusted 
                names in custom framing and art curation.
              </p>
              <p>
                Our journey has been marked by continuous innovation while honoring traditional 
                craftsmanship techniques. We've embraced modern materials and methods without 
                losing sight of the artisanal quality that defines our work.
              </p>
              <p>
                Today, we proudly serve artists, collectors, businesses, and art lovers, 
                helping them showcase their treasured pieces with frames that enhance and 
                protect their investments for generations to come.
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
            <div className="relative">
              <div className="bg-gradient-gold p-1 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                  alt="Our workshop showcasing traditional craftsmanship"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-card">
                <p className="font-semibold">Est. 1990s</p>
                <p className="text-sm opacity-90">Three decades strong</p>
              </div>
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