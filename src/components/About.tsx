import { Award, Users, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "100+" },
    { icon: Zap, label: "Projects Completed", value: "200+" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Passionate video editor with a keen eye for detail and storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary smooth-transition hover:shadow-lg text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold font-montserrat mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-card p-8 rounded-lg border border-border animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I'm Vanshu Agarwal, a professional video editor and creative mind dedicated to 
              bringing visual stories to life. With years of experience in video production 
              and post-production, I specialize in creating engaging content that resonates 
              with audiences.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
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
