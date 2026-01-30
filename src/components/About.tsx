import { Award, Users, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "100+" },
    { icon: Zap, label: "Projects Completed", value: "200+" },
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Passion Meets <span className="gradient-text">Precision</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate video editor with a keen eye for detail and storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 rounded-3xl smooth-transition hover:scale-[1.02] hover:border-primary/30 text-center animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl font-bold font-montserrat mb-2 gradient-text">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-8 md:p-10 rounded-3xl animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              I'm Vanshu Agarwal, a professional video editor and creative mind dedicated to 
              bringing visual stories to life. With years of experience in video production 
              and post-production, I specialize in creating engaging content that resonates 
              with audiences.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              From corporate videos to creative projects, YouTube content to promotional 
              materials, I bring technical expertise and artistic vision to every project. 
              My goal is to transform your ideas into compelling visual narratives that 
              leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
