import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Maximize2 } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Botanical Elegance",
      artist: "House Collection",
      image: "/lovable-uploads/9ae8af0f-3b48-488e-b685-7b3fac2138fe.png",
      frameType: "Gold Ornate"
    },
    {
      id: 2,
      title: "Ceramic Collection",
      artist: "House Collection",
      image: "/lovable-uploads/b161c5f6-bdc4-4dae-9b52-c5dc9af72523.png",
      frameType: "Dark Walnut"
    },
    {
      id: 3,
      title: "Golden Portrait",
      artist: "House Collection",
      image: "/lovable-uploads/e7706708-d4d6-4e5f-a51b-9c757aaa17ea.png",
      frameType: "Modern Gold"
    },
    {
      id: 4,
      title: "Abstract Portrait",
      artist: "House Collection",
      image: "/lovable-uploads/0b37569a-092a-41d3-92a8-245104a93bd5.png",
      frameType: "Contemporary"
    },
    {
      id: 5,
      title: "Textured Canvas",
      artist: "House Collection",
      image: "/lovable-uploads/cd1380ca-0efe-40bb-906c-73c1936f79e2.png",
      frameType: "White Minimalist"
    },
    {
      id: 6,
      title: "Gold Leaf Art",
      artist: "House Collection",
      image: "/lovable-uploads/ce433070-9fca-4efc-ae3e-fad71ea56dc4.png",
      frameType: "Silver Contemporary"
    }
  ];

  const handleInquiry = (item: any) => {
    const message = `Hello! I'm interested in "${item.title}" by ${item.artist} (${item.frameType} frame). Could you provide more details?`;
    window.open(`https://wa.me/201222153694?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Exclusive Art Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of original artworks, each professionally framed 
            to enhance its beauty and preserve its legacy.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                              <Maximize2 className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <img 
                              src={item.image}
                              alt={item.title}
                              className="w-full h-auto max-h-[80vh] object-contain"
                            />
                          </DialogContent>
                        </Dialog>
                        
                      </div>
                      
                      <Button 
                        size="sm" 
                        onClick={() => handleInquiry(item)}
                        className="bg-primary hover:bg-primary-glow"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Inquire
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Art Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">by {item.artist}</p>
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                      {item.frameType}
                    </Badge>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleInquiry(item)}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Contact Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;