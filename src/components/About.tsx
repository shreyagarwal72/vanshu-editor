import { Award, Users, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  staggerContainer, 
  fadeUpSpring, 
  scaleUp,
  blurFadeIn,
  cardHover,
  springConfig
} from "@/hooks/useAnimations";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "100+" },
    { icon: Zap, label: "Projects Completed", value: "200+" },
  ];

  // Counter animation for stats
  const CountUp = ({ value }: { value: string }) => {
    const number = parseInt(value.replace('+', ''));
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {value}
        </motion.span>
      </motion.span>
    );
  };

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative" ref={ref}>
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
          animate={isInView ? { 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          } : {}}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-10 sm:mb-12 md:mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span 
              variants={blurFadeIn}
              className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4 block"
            >
              About Me
            </motion.span>
            <motion.h2 
              variants={fadeUpSpring}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4"
            >
              Passion Meets <span className="gradient-text">Precision</span>
            </motion.h2>
            <motion.p 
              variants={blurFadeIn}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Passionate video editor with a keen eye for detail and storytelling
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: "hsl(210 100% 60% / 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={springConfig.bouncy}
                  className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl text-center cursor-pointer group"
                >
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "hsl(210 100% 60% / 0.2)",
                    }}
                    transition={springConfig.gentle}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl sm:text-4xl font-bold font-montserrat mb-2 gradient-text"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ 
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <CountUp value={stat.value} />
                  </motion.div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bio Card */}
          <motion.div 
            className="glass-card p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl"
            variants={fadeUpSpring}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ 
              borderColor: "hsl(0 0% 100% / 0.15)",
            }}
            transition={springConfig.gentle}
          >
            <motion.p 
              className="text-lg leading-relaxed text-foreground/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              I'm Vanshu Agarwal, a professional video editor and creative mind dedicated to 
              bringing visual stories to life. With years of experience in video production 
              and post-production, I specialize in creating engaging content that resonates 
              with audiences.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              From corporate videos to creative projects, YouTube content to promotional 
              materials, I bring technical expertise and artistic vision to every project. 
              My goal is to transform your ideas into compelling visual narratives that 
              leave a lasting impact.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
