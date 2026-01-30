import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg-enhanced.jpg";

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

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Video editing workspace" 
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-foreground/80">Available for projects</span>
          </div>

          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black font-montserrat text-foreground leading-[0.9] cursor-pointer select-none"
            onClick={handleSecretClick}
            title="🤫"
          >
            VANSHU<br />
            <span className="gradient-text">AGARWAL</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/60 max-w-xl mx-auto font-light">
            Video Editor & Creative Mind crafting visual stories that captivate
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="rounded-2xl bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-effect smooth-transition hover:scale-105"
            >
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="rounded-2xl glass border-[hsl(0_0%_100%/0.15)] hover:bg-[hsl(0_0%_100%/0.1)] text-lg px-8 py-6 smooth-transition hover:scale-105"
            >
              <Play size={18} className="mr-2" />
              See My Work
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-float">
            <button
              onClick={() => scrollToSection("about")}
              className="glass-card p-3 rounded-full text-foreground/60 hover:text-foreground smooth-transition"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
