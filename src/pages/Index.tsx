import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <IntroAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
