import { Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold font-montserrat gradient-text mb-4 hover:opacity-80 smooth-transition"
            >
              Vanshu Agarwal
            </button>
            <p className="text-muted-foreground">
              Professional video editor and creative mind, transforming ideas into visual stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Services", "Skills", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary smooth-transition"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="tel:9412104618"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
              >
                <Phone size={18} />
                <span>9412104618</span>
              </a>
              <a
                href="mailto:sanjayvansu1973@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
              >
                <Mail size={18} />
                <span>sanjayvansu1973@gmail.com</span>
              </a>
              <a
                href="#youtube"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
              >
                <Youtube size={18} />
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Vanshu Agarwal. All rights reserved.</p>
            <p>
              Crafted with passion for visual storytelling
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
