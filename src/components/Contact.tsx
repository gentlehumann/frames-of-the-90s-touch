import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, MessageCircle, Clock, Mail, Instagram } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const whatsappMessage = `Hello! My name is ${name} (${email}). ${message}`;
    window.open(`https://wa.me/201222153694?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const handleQuickContact = () => {
    window.open("https://wa.me/201222153694?text=Hello! I'd like to get in touch with House of Frames.", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? We'd love to hear from you. 
            Contact us today to discuss your framing needs or schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name *
                    </label>
                    <Input 
                      name="name"
                      required
                      placeholder="Your full name"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input 
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    required
                    placeholder="Tell us about your project, artwork, or any questions you have..."
                    rows={5}
                    className="border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-gold p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary mb-2">Quick Contact</h3>
                    <p className="text-muted-foreground mb-4">
                      Get instant response via WhatsApp
                    </p>
                    <Button 
                      onClick={handleQuickContact}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-gold p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +20 12 22153694
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call or WhatsApp for immediate assistance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-gold p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Visit Our Gallery</h3>
                    <p className="text-muted-foreground">
                      Downtown Cairo, Egypt
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Schedule an appointment to visit our showroom
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-gold p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Saturday - Thursday: 10:00 AM - 8:00 PM</p>
                      <p>Friday: 2:00 PM - 8:00 PM</p>
                      <p className="text-sm mt-2">
                        Available on WhatsApp 24/7 for urgent inquiries
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Stay updated with our latest artworks and framing projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Appointment CTA */}
        <div className="mt-16 text-center bg-primary p-12 rounded-lg shadow-elegant">
          <h3 className="font-serif text-3xl font-semibold text-primary-foreground mb-4">
            Schedule Your Consultation
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book a personalized consultation to discuss your project in detail. 
            We'll help you choose the perfect frame and provide expert advice.
          </p>
          <Button 
            onClick={handleQuickContact}
            size="lg"
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-primary font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;