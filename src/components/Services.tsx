import { Video, Film, Scissors, Sparkles } from "lucide-react";

const Services = () => {
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
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional video editing services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl smooth-transition hover:scale-[1.02] hover:border-primary/30 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition`}>
                <service.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
