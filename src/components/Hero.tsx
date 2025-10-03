import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Video editing workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 
            className="text-5xl md:text-7xl font-black font-montserrat text-foreground leading-tight cursor-pointer select-none"
            onClick={handleSecretClick}
            title="🤫"
          >
            VANSHU AGARWAL
          </h1>
          <p className="text-2xl md:text-3xl gradient-text font-semibold">
            Video Editor & Creative Mind
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Transforming raw footage into compelling stories that captivate audiences. 
            Professional video editing with a creative edge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 glow-effect text-lg px-8 py-6"
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6"
            >
              My Services
            </Button>
          </div>

          <div className="pt-12 animate-float">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/60 hover:text-foreground smooth-transition"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
