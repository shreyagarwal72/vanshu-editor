import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-enhanced.jpg";
import { 
  staggerContainer, 
  fadeUpSpring, 
  scaleUp, 
  blurFadeIn,
  buttonPress,
  floatingAnimation,
  glowPulse 
} from "@/hooks/useAnimations";

const Hero = () => {
  const navigate = useNavigate();
  const [secretClicks, setSecretClicks] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSecretClick = () => {
    const newCount = secretClicks + 1;
    setSecretClicks(newCount);
    
    if (newCount === 5) {
      navigate('/unlock-course-secret');
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        navigate('/unlock-course-secret');
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  // Split text for character animation
  const name = "VANSHU";
  const surname = "AGARWAL";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <img 
          src={heroBg} 
          alt="Video editing workspace" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        
        {/* Animated ambient glows - smaller on mobile */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-accent/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div 
          className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={blurFadeIn}
            className="inline-flex items-center gap-2 glass-card rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm"
          >
            <motion.span 
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-foreground/80">Available for projects</span>
          </motion.div>

          {/* Name with character animation */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-montserrat text-foreground leading-[0.9] cursor-pointer select-none"
            onClick={handleSecretClick}
            title="🤫"
            variants={fadeUpSpring}
          >
            <motion.span className="inline-block overflow-hidden">
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.3 + i * 0.05,
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <br />
            <motion.span className="gradient-text inline-block overflow-hidden">
              {surname.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.5 + i * 0.05,
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={blurFadeIn}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/60 max-w-xl mx-auto font-light px-2"
          >
            Video Editor & Creative Mind crafting visual stories that captivate
          </motion.p>
          
          <motion.div 
            variants={fadeUpSpring}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4"
          >
            <motion.div
              variants={buttonPress}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
              animate={glowPulse}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="rounded-2xl bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 glow-effect w-full sm:w-auto"
              >
                Start a Project
              </Button>
            </motion.div>
            
            <motion.div
              variants={buttonPress}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="rounded-2xl glass border-[hsl(0_0%_100%/0.15)] hover:bg-[hsl(0_0%_100%/0.1)] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              >
                <Play size={18} className="mr-2" />
                See My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="pt-8 sm:pt-12 md:pt-16"
            variants={scaleUp}
            animate={floatingAnimation}
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className="glass-card p-3 rounded-full text-foreground/60 hover:text-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
