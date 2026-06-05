import { BookOpen, Calendar, Clock } from 'lucide-react';

export default function Articles() {
  const articles = [
    {
      title: 'Debugging SPI Bus Communication on STM32',
      date: 'May 14, 2026',
      readTime: '6 min read',
      desc: 'Step-by-step guide to configuring SPI registers, debugging timing mismatches, and utilizing logic analyzers to inspect clock edges and clock phases in hardware applications.',
      link: '#',
    },
    {
      title: 'Connecting React WebSockets to Hardware Nodes',
      date: 'April 22, 2026',
      readTime: '8 min read',
      desc: 'Explore the architectures required to bridge a physical ESP32 micro-controller to a modern web client. Covers Node.js backend relaying, MQTT translation, and react states.',
      link: '#',
    },
    {
      title: 'Why Web Developers Should Learn Microcontrollers',
      date: 'March 10, 2026',
      readTime: '5 min read',
      desc: 'An argument for expanding software paradigms into the physical world. How hardware constraints change code organization, resource allocations, and memory safety.',
      link: '#',
    },
  ];

  return (
    <section id="articles" className="py-24 px-6 md:px-12 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-left mb-16">
          <p className="text-sm font-mono text-[#14b8a6] tracking-wider uppercase mb-2">&gt; Publications</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Articles & Guides</h2>
          <div className="w-20 h-1 bg-[#14b8a6] mt-4 rounded-full" />
        </div>

        {/* Articles list layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 hover:border-slate-700/60 p-6 md:p-8 rounded-3xl flex flex-col justify-between text-left hover:scale-[1.01] transition-all duration-300"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center space-x-4 text-xs font-mono text-slate-400 mb-6">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-teal-500" />
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-[#c084fc]" />
                    {article.readTime}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-slate-100 hover:text-[#14b8a6] transition-colors mb-4 line-clamp-2">
                  <a href={article.link} onClick={(e) => e.preventDefault()}>
                    {article.title}
                  </a>
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-8">
                  {article.desc}
                </p>
              </div>

              {/* Read Link */}
              <div>
                <a
                  href={article.link}
                  className="inline-flex items-center text-sm font-semibold text-[#14b8a6] hover:text-teal-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`The tutorial "${article.title}" is simulated on this portfolio!`);
                  }}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Read Article</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
