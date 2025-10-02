import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, FolderOpen, BookOpen, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import coursePreview from "@/assets/course-preview.jpg";

const SecretCourse = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="text-primary animate-pulse" size={32} />
              <h1 className="text-4xl md:text-6xl font-black font-montserrat gradient-text">
                SECRET COURSE UNLOCKED!
              </h1>
              <Sparkles className="text-accent animate-pulse" size={32} />
            </div>
            <p className="text-xl text-muted-foreground">
              You've discovered the hidden video editing course and resources!
            </p>
          </div>

          {/* Course Preview Image */}
          <Card className="overflow-hidden border-2 border-primary/50 glow-effect animate-scale-in">
            <img 
              src={coursePreview} 
              alt="Video Editing Course" 
              className="w-full h-auto object-cover"
            />
          </Card>

          {/* Course Links */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary smooth-transition hover:glow-effect group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 smooth-transition">
                    <BookOpen className="text-primary" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold font-montserrat">Full Course</h2>
                </div>
                <p className="text-muted-foreground">
                  Complete video editing course with step-by-step tutorials, project files, and professional techniques.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 glow-effect group"
                  onClick={() => window.open('https://drive.google.com/drive/folders/10dbBmpKQkzrWes-CAQvSNJxJh8IdSriI', '_blank')}
                >
                  <ExternalLink className="mr-2 group-hover:scale-110 smooth-transition" size={20} />
                  Access Course
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-accent/30 hover:border-accent smooth-transition hover:glow-effect group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 smooth-transition">
                    <FolderOpen className="text-accent" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold font-montserrat">Resources</h2>
                </div>
                <p className="text-muted-foreground">
                  Premium editing resources including presets, LUTs, sound effects, motion graphics templates, and more.
                </p>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-accent/50 hover:border-accent hover:bg-accent/10 group"
                  onClick={() => window.open('https://drive.google.com/drive/folders/1GlEaxTO6XMOPeu9vcJ5pKEvJknYOI52f', '_blank')}
                >
                  <ExternalLink className="mr-2 group-hover:scale-110 smooth-transition" size={20} />
                  Access Resources
                </Button>
              </div>
            </Card>
          </div>

          {/* Back Button */}
          <div className="text-center pt-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Home
            </Button>
          </div>

          {/* Easter Egg Message */}
          <div className="text-center text-sm text-muted-foreground/60 animate-fade-in">
            <p>🎉 Share this secret with fellow editors who are ready to level up! 🎉</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretCourse;
