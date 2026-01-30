import { useEffect, useState, useRef } from "react";
import { Award, Users, Video, Star } from "lucide-react";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    hours: 0,
    rating: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targets = {
    projects: 150,
    clients: 80,
    hours: 5000,
    rating: 5.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        projects: Math.floor(targets.projects * easeOut),
        clients: Math.floor(targets.clients * easeOut),
        hours: Math.floor(targets.hours * easeOut),
        rating: parseFloat((targets.rating * easeOut).toFixed(1)),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const achievements = [
    {
      icon: Video,
      value: `${counts.projects}+`,
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: `${counts.clients}+`,
      label: "Happy Clients",
    },
    {
      icon: Award,
      value: `${counts.hours}+`,
      label: "Editing Hours",
    },
    {
      icon: Star,
      value: counts.rating.toFixed(1),
      label: "Client Rating",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="glass-strong rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
