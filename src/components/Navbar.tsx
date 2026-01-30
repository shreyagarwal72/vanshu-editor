import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = ["Home", "About", "Services", "Skills", "Contact"];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-2xl smooth-transition ${
        isScrolled ? "glass-strong" : "glass-subtle"
      }`}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold font-montserrat gradient-text hover:opacity-80 smooth-transition"
          >
            VA
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 rounded-xl text-foreground/70 hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] smooth-transition font-medium text-sm"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-xl bg-primary hover:bg-primary/90 text-sm px-5"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-[hsl(0_0%_100%/0.08)] smooth-transition text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] smooth-transition font-medium text-left"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="mt-2 rounded-xl bg-primary hover:bg-primary/90 w-full"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
