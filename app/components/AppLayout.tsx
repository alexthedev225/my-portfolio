import BackgroundAnimation from "./BackgroundAnimation";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import About from "./About";
import Navbar from "./Navbar";  // Ajout de l'import
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function AppLayout() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col bg-black">
      <BackgroundAnimation />
      <Navbar /> {/* Ajout de la Navbar */}
      <div className="relative z-10 flex-1 container mx-auto px-4 py-30">
        <HeroSection scrollToSection={scrollToSection} />
        
        {/* Section "About" ajoutée ici */}
        <About scrollToSection={scrollToSection} fadeInUp={{}} staggerContainer={{}} />

        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
