import { useEffect, useState } from "react";

const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-fade-out">
      <div className="text-center perspective-1000">
        <div className="animate-scale-in">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 tracking-widest uppercase animate-fade-in">
            Welcome To
          </p>
          <h1 className="text-6xl md:text-8xl font-montserrat font-bold gradient-text animate-fade-in-scale">
            Vanshu's Portfolio
          </h1>
          <div className="mt-8 w-32 h-1 bg-primary-gradient mx-auto animate-expand"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
