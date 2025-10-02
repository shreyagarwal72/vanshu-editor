import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink } from "lucide-react";

const YouTubeSection = () => {
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
    <section id="youtube" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Youtube className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat">
              My <span className="gradient-text">YouTube</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational content, tutorials, and behind-the-scenes of my creative process
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="p-6 border-border hover:border-primary smooth-transition group animate-fade-in-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-full md:w-48 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-105 smooth-transition">
                  <Youtube className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-primary smooth-transition">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">{video.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{video.views} views</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 group-hover:border-primary"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Watch
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 glow-effect"
          >
            <Youtube className="mr-2" size={20} />
            Visit My Channel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
