import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Articles', id: 'articles' },
    { label: 'Profiles', id: 'profiles' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 20);

      // Simple intersection observer behavior
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060713]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2 text-white font-mono text-xl font-bold tracking-tight hover:opacity-90"
        >
          <span className="text-[#14b8a6] font-semibold">&lt;/&gt;</span>
          <span className="text-white">dev</span>
          <span className="text-[#c084fc]">.ece</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative py-1 text-sm font-medium transition-colors hover:text-white text-slate-300"
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#c084fc] rounded-full shadow-[0_0_8px_#c084fc]" />
              )}
            </button>
          ))}
        </div>

        {/* Hire Me Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick('contact')}
            className="group relative inline-flex items-center gap-1 bg-transparent border border-[#14b8a6]/40 text-[#14b8a6] hover:bg-[#14b8a6] hover:text-slate-950 font-medium px-5 py-2 rounded-full text-sm transition-all duration-300 overflow-hidden"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0b1e]/95 backdrop-blur-lg border-b border-white/5 py-6 px-8 flex flex-col space-y-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-lg font-medium py-2 transition-colors ${
                activeSection === item.id ? 'text-[#14b8a6]' : 'text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-center bg-[#14b8a6] text-slate-950 font-medium py-3 rounded-full text-sm hover:bg-[#14b8a6]/95 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
