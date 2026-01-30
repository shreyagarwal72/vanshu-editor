import { Youtube, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = ["Home", "About", "Services", "Skills", "Contact"];

  return (
    <footer className="relative pt-16 pb-8">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="glass-subtle rounded-3xl p-10 mb-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold font-montserrat gradient-text mb-4 hover:opacity-80 smooth-transition inline-block"
              >
                Vanshu Agarwal
              </button>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional video editor and creative mind, transforming ideas into visual stories that captivate and inspire.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold font-montserrat mb-4 text-foreground/80 uppercase tracking-wider">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-muted-foreground hover:text-primary smooth-transition text-sm text-left py-1"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold font-montserrat mb-4 text-foreground/80 uppercase tracking-wider">Connect</h3>
              <div className="space-y-3">
                <a
                  href="tel:9412104618"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition text-sm"
                >
                  <Phone size={16} />
                  <span>9412104618</span>
                </a>
                <a
                  href="mailto:sanjayvansu1973@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition text-sm"
                >
                  <Mail size={16} />
                  <span>sanjayvansu1973@gmail.com</span>
                </a>
                <a
                  href="https://www.youtube.com/@nextupstudioyt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition text-sm"
                >
                  <Youtube size={16} />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Vanshu Agarwal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart size={14} className="text-primary" /> for visual storytelling
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
