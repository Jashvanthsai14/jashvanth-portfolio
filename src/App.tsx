import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Stats from '@/sections/Stats';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Certifications from '@/sections/Certifications';
import Education from '@/sections/Education';
import Contact from '@/sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent text-navy dark:text-slate-200">
      <div className="portfolio-shell pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem]">
        <div className="absolute right-[-6rem] top-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute left-[-8rem] top-40 h-96 w-96 rounded-full bg-brand-100/55 blur-3xl" />
      </div>

      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
