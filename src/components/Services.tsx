import { Video, Film, Scissors, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional editing for YouTube, social media, and commercial projects with stunning visual effects.",
    },
    {
      icon: Film,
      title: "Color Grading",
      description: "Transform your footage with cinematic color grading and professional color correction.",
    },
    {
      icon: Scissors,
      title: "Motion Graphics",
      description: "Eye-catching animations, titles, and motion graphics to elevate your content.",
    },
    {
      icon: Sparkles,
      title: "VFX & Effects",
      description: "Advanced visual effects, compositing, and post-production magic for impactful videos.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional video editing services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 smooth-transition hover:glow-effect group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
