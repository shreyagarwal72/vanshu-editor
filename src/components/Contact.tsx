import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "9412104618",
      href: "tel:9412104618",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sanjayvansu1973@gmail.com",
      href: "mailto:sanjayvansu1973@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Agra, Balkeshwar",
      href: null,
    },
  ];

  const benefits = [
    "Professional quality guaranteed",
    "Fast turnaround times",
    "Unlimited revisions",
    "Competitive pricing",
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your video project to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold font-montserrat mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary smooth-transition"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
              <h3 className="text-xl font-bold font-montserrat mb-5">Why Work With Me?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="glass-card p-8 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-muted/50 border-border/50 focus:border-primary rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 glow-effect h-14 text-base font-semibold group"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
