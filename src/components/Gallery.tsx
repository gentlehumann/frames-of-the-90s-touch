import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Heart, ShoppingCart, Maximize2 } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample gallery items - you can replace with real data
  const galleryItems = [
    {
      id: 1,
      title: "Abstract Elegance",
      artist: "Elena Martinez",
      category: "abstract",
      price: "2,500 EGP",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      frameType: "Gold Ornate"
    },
    {
      id: 2,
      title: "Landscape Dreams",
      artist: "Ahmed Hassan",
      category: "landscape",
      price: "3,200 EGP",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      frameType: "Dark Walnut"
    },
    {
      id: 3,
      title: "Portrait Study",
      artist: "Sarah Johnson",
      category: "portrait",
      price: "4,100 EGP",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop",
      frameType: "Modern Black"
    },
    {
      id: 4,
      title: "Urban Reflections",
      artist: "Mohamed Ali",
      category: "modern",
      price: "2,800 EGP",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
      frameType: "Silver Contemporary"
    },
    {
      id: 5,
      title: "Nature's Symphony",
      artist: "Lisa Chen",
      category: "landscape",
      price: "3,600 EGP",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      frameType: "Natural Oak"
    },
    {
      id: 6,
      title: "Color Burst",
      artist: "David Rodriguez",
      category: "abstract",
      price: "2,900 EGP",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      frameType: "White Minimalist"
    }
  ];

  const categories = [
    { id: "all", label: "All Artworks" },
    { id: "abstract", label: "Abstract" },
    { id: "landscape", label: "Landscape" },
    { id: "portrait", label: "Portrait" },
    { id: "modern", label: "Modern" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "bg-gradient-hero shadow-elegant" 
                  : "hover:bg-accent/20"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
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
                        
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
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
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">{item.price}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleInquiry(item)}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View More Artworks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;