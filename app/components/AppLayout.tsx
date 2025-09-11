import BackgroundAnimation from "./BackgroundAnimation";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import Skills from "./Skills";
import Navbar from "./Navbar";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function AppLayout() {
  // Fonction de scroll fluide
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col bg-black">
      {/* Animation de fond */}
      <BackgroundAnimation />

      {/* Navbar sticky avec scroll et highlight dynamique */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Contenu principal */}
      <div className="relative z-10 flex-1 container mx-auto px-4 pt-30 space-y-16">
        {/* Hero Section */}
        <HeroSection scrollToSection={scrollToSection} id="hero" />

        {/* Séparation subtile */}
        <div className="h-1 w-1/2 bg-white/10 mx-auto my-12 rounded-full" />

        {/* Project Section */}
        <ProjectSection id="projects" />

        {/* Séparation subtile */}
        <div className="h-1 w-1/2 bg-white/10 mx-auto my-12 rounded-full" />

        {/* Skills Section */}
        <Skills id="skills" />

        {/* Séparation subtile */}
        <div className="h-1 w-1/2 bg-white/10 mx-auto my-12 rounded-full" />

        {/* Contact Section */}
        <ContactSection id="contact" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
