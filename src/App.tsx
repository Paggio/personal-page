import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { PublicationsSection } from "@/components/PublicationsSection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ExperienceSection />

      {/* Skills + Education side by side */}
      <section className="border-b-2 border-black px-6 py-12 md:px-16">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <SkillsSection />
          <EducationSection />
        </div>
      </section>

      <PublicationsSection />

      <footer className="border-t-2 border-black bg-primary px-6 py-4 text-center font-mono text-sm text-primary-foreground">
        pagetti.mattia@gmail.com
      </footer>
    </div>
  );
}

export default App;
