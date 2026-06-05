import PlexusBackground from './components/PlexusBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Profiles from './components/Profiles';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-slate-300 overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-200">
      {/* Plexus/Constellation Background */}
      <PlexusBackground />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Sections Wrapper */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Articles />
        <Profiles />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900/60 bg-[#040510]/80 py-12 px-6 mt-12 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 text-sm text-slate-500">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center space-x-2 text-white font-mono text-base font-bold tracking-tight">
              <span className="text-[#14b8a6]">&lt;/&gt;</span>
              <span>dev</span>
              <span className="text-[#c084fc]">.ece</span>
            </div>
            <p className="text-xs">© {new Date().getFullYear()} Kaushik Pressanna. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#articles" className="hover:text-white transition-colors">Articles</a>
            <a href="#profiles" className="hover:text-white transition-colors">Profiles</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-xs text-slate-600">
            Crafted with React, Vite & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
