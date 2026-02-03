import { Youtube, Mail, Phone, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  staggerContainer, 
  fadeUpSpring, 
  springConfig 
} from "@/hooks/useAnimations";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = ["Home", "About", "Services", "Skills", "Contact"];

  return (
    <footer className="relative pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8" ref={ref}>
      {/* Animated top gradient border */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="glass-subtle rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={springConfig.gentle}
          whileHover={{ borderColor: "hsl(0 0% 100% / 0.1)" }}
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Brand */}
            <motion.div variants={fadeUpSpring}>
              <motion.button 
                onClick={scrollToTop}
                className="text-2xl font-bold font-montserrat gradient-text mb-4 hover:opacity-80 smooth-transition inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Vanshu Agarwal
              </motion.button>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional video editor and creative mind, transforming ideas into visual stories that captivate and inspire.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeUpSpring}>
              <h3 className="text-sm font-bold font-montserrat mb-4 text-foreground/80 uppercase tracking-wider">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-muted-foreground hover:text-primary smooth-transition text-sm text-left py-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUpSpring}>
              <h3 className="text-sm font-bold font-montserrat mb-4 text-foreground/80 uppercase tracking-wider">Connect</h3>
              <div className="space-y-3">
                {[
                  { href: "tel:9412104618", icon: Phone, text: "9412104618" },
                  { href: "mailto:sanjayvansu1973@gmail.com", icon: Mail, text: "sanjayvansu1973@gmail.com" },
                  { href: "https://www.youtube.com/@nextupstudioyt", icon: Youtube, text: "YouTube Channel", external: true },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={springConfig.bouncy}
                    >
                      <item.icon size={16} />
                    </motion.span>
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p>© {currentYear} Vanshu Agarwal. All rights reserved.</p>
          <motion.p 
            className="flex items-center gap-1"
            whileHover={{ scale: 1.02 }}
          >
            Crafted with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-primary" />
            </motion.span>{" "}
            for visual storytelling
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
