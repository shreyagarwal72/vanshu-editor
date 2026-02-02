import { Film, Palette, Music, Zap, Camera, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  staggerContainer, 
  staggerFaster,
  fadeUpSpring, 
  blurFadeIn,
  springConfig 
} from "@/hooks/useAnimations";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Expert in Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve",
      level: 95,
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional color correction and cinematic grading",
      level: 90,
    },
    {
      icon: Sparkles,
      title: "Motion Graphics",
      description: "Creating stunning animations with After Effects",
      level: 85,
    },
    {
      icon: Music,
      title: "Sound Design",
      description: "Audio mixing, sound effects, and music synchronization",
      level: 88,
    },
    {
      icon: Camera,
      title: "Cinematography",
      description: "Understanding of camera work and visual composition",
      level: 82,
    },
    {
      icon: Zap,
      title: "VFX & Compositing",
      description: "Visual effects and seamless compositing techniques",
      level: 87,
    },
  ];

  const software = [
    "Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", 
    "Photoshop", "Illustrator", "Audition", "Cinema 4D"
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
          animate={isInView ? { 
            x: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1],
          } : {}}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            variants={blurFadeIn}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            Expertise
          </motion.span>
          <motion.h2 
            variants={fadeUpSpring}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p 
            variants={blurFadeIn}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Professional expertise across all aspects of video production and post-production
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUpSpring}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "hsl(210 100% 60% / 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={springConfig.bouncy}
                className="glass-card p-6 rounded-3xl cursor-pointer group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <motion.div 
                    className="p-3 rounded-2xl bg-primary/10"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "hsl(210 100% 60% / 0.2)",
                    }}
                    transition={springConfig.gentle}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-montserrat mb-1">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <motion.span 
                      className="font-semibold text-primary"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ 
                        delay: 0.3 + index * 0.1,
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={fadeUpSpring}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="glass-card p-8 md:p-10 rounded-3xl"
            whileHover={{ borderColor: "hsl(0 0% 100% / 0.15)" }}
            transition={springConfig.gentle}
          >
            <h3 className="text-2xl font-bold font-montserrat mb-6 text-center">
              Software Proficiency
            </h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={staggerFaster}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {software.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpSpring}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "hsl(0 0% 100% / 0.08)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={springConfig.bouncy}
                  className="glass-subtle p-4 rounded-2xl text-center cursor-pointer"
                >
                  <p className="font-semibold text-sm">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
