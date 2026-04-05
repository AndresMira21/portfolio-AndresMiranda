import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto flex w-full flex-col gap-8 px-4 pb-16 pt-28 md:gap-10 md:px-6 md:pt-32">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
