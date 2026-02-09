import { Video, Film, Scissors, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  staggerContainer, 
  fadeUpSpring, 
  blurFadeIn,
  springConfig 
} from "@/hooks/useAnimations";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional editing for YouTube, social media, and commercial projects with stunning visual effects.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Film,
      title: "Color Grading",
      description: "Transform your footage with cinematic color grading and professional color correction.",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Scissors,
      title: "Motion Graphics",
      description: "Eye-catching animations, titles, and motion graphics to elevate your content.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Sparkles,
      title: "VFX & Effects",
      description: "Advanced visual effects, compositing, and post-production magic for impactful videos.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative" ref={ref}>
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
          animate={isInView ? { 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          } : {}}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            variants={blurFadeIn}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            Services
          </motion.span>
          <motion.h2 
            variants={fadeUpSpring}
            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-4"
          >
            What I <span className="gradient-text">Offer</span>
          </motion.h2>
          <motion.p 
            variants={blurFadeIn}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Professional video editing services tailored to bring your vision to life
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUpSpring}
              whileHover={{ 
                scale: 1.02,
                borderColor: "hsl(210 100% 60% / 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig.bouncy}
              className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl cursor-pointer group"
            >
              <motion.div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={springConfig.bouncy}
              >
                <service.icon className="w-8 h-8 text-foreground" />
              </motion.div>
              <h3 className="text-2xl font-montserrat font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
