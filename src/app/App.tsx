import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Volunteer } from "./components/Volunteer";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
        <Certifications />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}