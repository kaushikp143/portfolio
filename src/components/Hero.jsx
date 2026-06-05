import { useState, useEffect } from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const textOptions = ['AI & Embedded Systems Learner', 'IoT Solutions Creator', 'Full-Stack Web Architect'];
  const [optionIndex, setOptionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = textOptions[optionIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentText.substring(0, typedText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentText.substring(0, typedText.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setOptionIndex((prev) => (prev + 1) % textOptions.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, optionIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Blobs matching image gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 radial-blob-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] translate-x-1/2 translate-y-1/2 radial-blob-2 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none" />

      <div className="relative max-w-5xl w-full text-left z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 mb-8 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span>Available for internships & freelance</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.08] mb-6 select-none">
          Hi, I'm{' '}
          <span className="relative inline-block bg-[#008080]/20 border border-[#008080]/40 text-[#14b8a6] px-4 py-1 rounded-md text-glow-teal leading-none">
            Aarav
          </span>{' '}
          Sharma
          <br />
          building the{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-glow-purple font-extrabold">
            future
          </span>
          ,
          <br />
          circuit by pixel.
        </h1>

        {/* Typing Sub-Headline with circular graphic */}
        <div className="flex items-center space-x-3 text-lg md:text-2xl font-mono text-[#14b8a6] font-medium mb-8">
          <span className="text-[#c084fc]">&gt;</span>
          <span className="typing-cursor pr-1 min-h-[32px] flex items-center">
            {typedText}
          </span>
          {/* Decorative glowing ECE circular graphic */}
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full border border-teal-500/30 bg-teal-950/20 shadow-[0_0_10px_rgba(20,184,166,0.2)]">
            <span className="text-[11px] font-mono text-teal-400 font-bold">e</span>
            <span className="absolute inset-0 rounded-full border border-teal-400/20 animate-ping" />
          </div>
        </div>

        {/* Hero Paragraph */}
        <p className="max-w-2xl text-base md:text-xl text-slate-400 leading-relaxed mb-10">
          Electronics & Communication Engineering student crafting immersive web experiences and real-world IoT systems. I love where silicon meets software — building things that{' '}
          <span className="italic text-slate-200">think</span>,{' '}
          <span className="italic text-slate-200">sense</span>, and{' '}
          <span className="italic text-slate-200">delight</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative flex items-center space-x-2 bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-500 hover:from-teal-500 hover:via-indigo-600 hover:to-purple-600 text-white font-medium px-8 py-3.5 rounded-full text-base shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              alert('Resume download is simulated! In a production build, this would download Aarav_Sharma_Resume.pdf');
            }}
            className="flex items-center space-x-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-500 hover:bg-slate-800/80 text-slate-200 font-medium px-8 py-3.5 rounded-full text-base transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5 text-slate-400" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center space-x-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-500 hover:bg-slate-800/80 text-slate-200 font-medium px-8 py-3.5 rounded-full text-base transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5 text-slate-400" />
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </section>
  );
}
