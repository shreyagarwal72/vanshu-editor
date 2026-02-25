import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  staggerContainer, 
  fadeUpSpring, 
  blurFadeIn,
  springConfig 
} from "@/hooks/useAnimations";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Corporate Brand Video",
      category: "Corporate",
      description: "Professional brand storytelling for Fortune 500 company",
      tags: ["Motion Graphics", "Color Grading", "Sound Design"],
    },
    {
      title: "Music Video Production",
      category: "Music",
      description: "High-energy music video with creative visual effects",
      tags: ["VFX", "Cinematography", "Post-Production"],
    },
    {
      title: "Product Launch Campaign",
      category: "Commercial",
      description: "Multi-platform video campaign for product launch",
      tags: ["Animation", "Compositing", "Editing"],
    },
    {
      title: "Documentary Series",
      category: "Documentary",
      description: "Award-winning documentary series editing",
      tags: ["Storytelling", "Color Correction", "Audio Mix"],
    },
    {
      title: "Social Media Content",
      category: "Social",
      description: "Engaging short-form content for social platforms",
      tags: ["Quick Edits", "Trendy", "Viral"],
    },
    {
      title: "Event Highlights",
      category: "Event",
      description: "Dynamic event coverage and highlight reels",
      tags: ["Multi-Cam", "Fast Turnaround", "Highlights"],
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]"
          animate={isInView ? { 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          } : {}}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
            Portfolio
          </motion.span>
          <motion.h2 
            variants={fadeUpSpring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4"
          >
            My <span className="gradient-text">Portfolio</span>
          </motion.h2>
          <motion.p 
            variants={blurFadeIn}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Showcasing a diverse range of video editing projects across different genres and styles
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUpSpring}
              whileHover={{ 
                scale: 1.02,
                borderColor: "hsl(210 100% 60% / 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig.bouncy}
              className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                  transition={springConfig.gentle}
                />
                <motion.div
                  animate={{ scale: hoveredIndex === index ? 1.25 : 1 }}
                  transition={springConfig.bouncy}
                >
                  <Play
                    className={`relative z-10 ${
                      hoveredIndex === index ? "text-primary" : "text-foreground/40"
                    }`}
                    size={48}
                  />
                </motion.div>
                <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary/90 text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold font-montserrat mb-2 group-hover:text-primary smooth-transition">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-border/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <button className="text-primary hover:text-primary/80 smooth-transition flex items-center gap-2 text-sm font-medium">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
