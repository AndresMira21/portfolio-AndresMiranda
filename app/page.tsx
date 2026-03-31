import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </main>

  );
}