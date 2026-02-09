import { useEffect, useState, useRef } from "react";
import { Award, Users, Video, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { 
  staggerContainer, 
  scaleUp,
  springConfig 
} from "@/hooks/useAnimations";

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
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
    if (!isInView) return;

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
  }, [isInView]);

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
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={springConfig.gentle}
          whileHover={{ borderColor: "hsl(0 0% 100% / 0.2)" }}
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
                transition={springConfig.bouncy}
              >
                <motion.div 
                  className="mb-4 flex justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ 
                      backgroundColor: "hsl(210 100% 60% / 0.2)",
                      scale: 1.1,
                    }}
                    transition={springConfig.bouncy}
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="text-2xl sm:text-4xl md:text-5xl font-montserrat font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                  }}
                >
                  {item.value}
                </motion.div>
                <motion.div 
                  className="text-sm text-muted-foreground font-medium"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {item.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
