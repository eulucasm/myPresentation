import { Header } from './sections/Header';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ValuePropositionSection } from './sections/ValuePropositionSection';
import { LogoTicker } from './sections/LogoTicker';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { ProcessSection } from './sections/ProcessSection';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <ValuePropositionSection />
        <LogoTicker />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
