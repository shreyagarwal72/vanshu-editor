import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import portfolioBg from "@/assets/portfolio-bg.jpg";

const Portfolio = () => {
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
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src={portfolioBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing a diverse range of video editing projects across different genres and styles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary smooth-transition cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div
                  className={`absolute inset-0 bg-primary/10 transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                ></div>
                <Play
                  className={`relative z-10 transition-all duration-300 ${
                    hoveredIndex === index ? "scale-125 text-primary" : "scale-100 text-foreground/40"
                  }`}
                  size={48}
                />
                <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-primary smooth-transition">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <button className="mt-4 text-primary hover:text-primary/80 smooth-transition flex items-center gap-2 text-sm font-medium">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
