import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  staggerContainer, 
  fadeUpSpring, 
  blurFadeIn,
  buttonPress,
  springConfig 
} from "@/hooks/useAnimations";

const YouTubeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const videos = [
    {
      title: "Professional Video Editing Tutorial",
      description: "Learn advanced editing techniques for cinematic results",
      views: "50K",
    },
    {
      title: "Color Grading Masterclass",
      description: "Transform your footage with professional color grading",
      views: "35K",
    },
    {
      title: "Motion Graphics for Beginners",
      description: "Create stunning motion graphics from scratch",
      views: "45K",
    },
  ];

  return (
    <section id="youtube" className="py-16 sm:py-20 md:py-24 relative" ref={ref}>
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
          animate={isInView ? { 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          } : {}}
          transition={{ duration: 5, repeat: Infinity }}
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
            YouTube
          </motion.span>
          <motion.div variants={fadeUpSpring} className="flex items-center justify-center gap-3 mb-4">
            <Youtube className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat">
              My <span className="gradient-text">YouTube</span>
            </h2>
          </motion.div>
          <motion.p 
            variants={blurFadeIn}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Educational content, tutorials, and behind-the-scenes of my creative process
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto space-y-4 sm:space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={fadeUpSpring}
              whileHover={{ 
                scale: 1.01,
                borderColor: "hsl(210 100% 60% / 0.3)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={springConfig.bouncy}
              className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                <motion.div 
                  className="w-full sm:w-48 h-28 sm:h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={springConfig.gentle}
                >
                  <Youtube className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold font-montserrat mb-2 group-hover:text-primary smooth-transition">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{video.description}</p>
                  <span className="text-xs text-muted-foreground">{video.views} views</span>
                </div>
                <Button
                  variant="outline"
                  className="border-border/50 hover:bg-primary/10 hover:border-primary rounded-xl w-full sm:w-auto"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Watch
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8 sm:mt-12"
          variants={fadeUpSpring}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={buttonPress}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
          >
            <Button
              size="lg"
              className="rounded-2xl bg-primary hover:bg-primary/90 glow-effect px-6 sm:px-8"
              asChild
            >
              <a href="https://www.youtube.com/@nextupstudioyt" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2" size={20} />
                Visit My Channel
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;
