import { useEffect, useState } from "react";
import { Award, Users, Video, Star } from "lucide-react";

const Achievements = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    hours: 0,
    rating: 0,
  });

  const targets = {
    projects: 150,
    clients: 80,
    hours: 5000,
    rating: 5.0,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        hours: Math.floor(targets.hours * progress),
        rating: parseFloat((targets.rating * progress).toFixed(1)),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

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
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-montserrat font-bold gradient-text mb-2">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
