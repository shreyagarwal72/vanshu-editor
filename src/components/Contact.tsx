import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  staggerContainer, 
  fadeUpSpring, 
  blurFadeIn,
  slideFromLeft,
  slideFromRight,
  buttonPress,
  springConfig 
} from "@/hooks/useAnimations";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
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
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[120px]"
          animate={isInView ? { 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          } : {}}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"
          animate={isInView ? { 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          } : {}}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            variants={blurFadeIn}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            Contact
          </motion.span>
          <motion.h2 
            variants={fadeUpSpring}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p 
            variants={blurFadeIn}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to bring your video project to life? Let's collaborate and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            variants={slideFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="glass-card p-8 rounded-3xl"
              whileHover={{ borderColor: "hsl(0 0% 100% / 0.15)" }}
              transition={springConfig.gentle}
            >
              <h3 className="text-2xl font-bold font-montserrat mb-6">Contact Information</h3>
              <motion.div 
                className="space-y-5"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-4"
                      variants={fadeUpSpring}
                      whileHover={{ x: 5 }}
                      transition={springConfig.gentle}
                    >
                      <motion.div 
                        className="p-3 rounded-2xl bg-primary/10"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "hsl(210 100% 60% / 0.2)",
                        }}
                        transition={springConfig.bouncy}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </motion.div>
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
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div 
              className="glass-card p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, ...springConfig.gentle }}
              whileHover={{ borderColor: "hsl(210 100% 60% / 0.3)" }}
            >
              <h3 className="text-xl font-bold font-montserrat mb-5">Why Work With Me?</h3>
              <motion.ul 
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3 text-foreground/80"
                    variants={fadeUpSpring}
                    whileHover={{ x: 5 }}
                    transition={springConfig.gentle}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    </motion.div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={slideFromRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="glass-card p-8 rounded-3xl"
              whileHover={{ borderColor: "hsl(0 0% 100% / 0.15)" }}
              transition={springConfig.gentle}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
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
                    className="bg-muted/50 border-border/50 focus:border-primary rounded-xl h-12 transition-all duration-300 focus:shadow-[0_0_20px_hsl(210_100%_60%/0.2)]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
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
                    className="bg-muted/50 border-border/50 focus:border-primary rounded-xl h-12 transition-all duration-300 focus:shadow-[0_0_20px_hsl(210_100%_60%/0.2)]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
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
                    className="bg-muted/50 border-border/50 focus:border-primary rounded-xl resize-none transition-all duration-300 focus:shadow-[0_0_20px_hsl(210_100%_60%/0.2)]"
                  />
                </motion.div>

                <motion.div
                  variants={buttonPress}
                  initial="rest"
                  whileHover="hover"
                  whileTap="pressed"
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl bg-primary hover:bg-primary/90 glow-effect h-14 text-base font-semibold group"
                  >
                    Send Message
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
