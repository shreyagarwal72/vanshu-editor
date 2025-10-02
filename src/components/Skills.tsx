import { Card } from "@/components/ui/card";
import { Film, Palette, Music, Zap, Camera, Sparkles } from "lucide-react";

const Skills = () => {
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

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional expertise across all aspects of video production and post-production
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-6 border-border hover:border-primary smooth-transition group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 smooth-transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-montserrat mb-1">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-semibold text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent smooth-transition"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in">
            <h3 className="text-2xl font-bold font-montserrat mb-4 text-center">
              Software Proficiency
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Photoshop", "Illustrator", "Audition", "Cinema 4D"].map(
                (software, index) => (
                  <div
                    key={index}
                    className="p-4 bg-muted/50 rounded-lg hover:bg-primary/10 smooth-transition"
                  >
                    <p className="font-semibold">{software}</p>
                  </div>
                )
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
