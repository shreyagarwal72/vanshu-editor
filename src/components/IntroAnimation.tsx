import { useEffect, useState } from "react";

const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-fade-out">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[120px]"></div>
      
      <div className="text-center perspective-1000 relative z-10">
        <div className="animate-scale-in">
          <p className="text-sm md:text-base text-muted-foreground mb-6 tracking-[0.3em] uppercase font-light animate-fade-in">
            Welcome To
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black gradient-text animate-fade-in-scale leading-tight">
            Vanshu's<br />Portfolio
          </h1>
          <div className="mt-8 h-1 bg-primary-gradient mx-auto rounded-full animate-expand"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
