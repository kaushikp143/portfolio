import { Cpu, Terminal, Network, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Embedded & Hardware',
      icon: <Cpu className="w-5 h-5 text-[#14b8a6]" />,
      skills: [
        { name: 'Microcontrollers (STM32, ESP32, AVR)', level: 90 },
        { name: 'C / C++ (Embedded Firmware)', level: 85 },
        { name: 'PCB Layout & Schematics (KiCad)', level: 75 },
        { name: 'FreeRTOS & RTOS Concepts', level: 70 },
        { name: 'Hardware Debugging (MSO, Logic Analyzers)', level: 80 },
      ],
    },
    {
      title: 'Software & Frontend',
      icon: <Terminal className="w-5 h-5 text-[#c084fc]" />,
      skills: [
        { name: 'React.js & JavaScript (ES6+)', level: 85 },
        { name: 'Tailwind CSS & Modern CSS Layouts', level: 90 },
        { name: 'TypeScript', level: 75 },
        { name: 'Python (Data Analysis, Scripting)', level: 80 },
        { name: 'REST & GraphQL APIs', level: 80 },
      ],
    },
    {
      title: 'IoT & Network Protocols',
      icon: <Network className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: 'MQTT & WebSockets', level: 90 },
        { name: 'SPI, I2C, UART, CAN Bus', level: 85 },
        { name: 'Wi-Fi & Bluetooth Low Energy (BLE)', level: 80 },
        { name: 'HTTP/HTTPS & TCP/IP stack', level: 85 },
        { name: 'Modbus & Industrial IoT standards', level: 70 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      skills: [
        { name: 'Git & GitHub Workflows', level: 88 },
        { name: 'Linux / Unix CLI', level: 82 },
        { name: 'Docker Containers', level: 70 },
        { name: 'PlatformIO & CMake', level: 80 },
        { name: 'VS Code & Vim', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden bg-slate-950/40">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 radial-blob-1 opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-left mb-16">
          <p className="text-sm font-mono text-[#14b8a6] tracking-wider uppercase mb-2">&gt; Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Skills & Tech Stack</h2>
          <div className="w-20 h-1 bg-[#14b8a6] mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 hover:border-slate-700/60 p-6 md:p-8 rounded-3xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2 text-left">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background:
                            catIdx % 2 === 0
                              ? 'linear-gradient(90deg, #14b8a6, #6366f1)'
                              : 'linear-gradient(90deg, #c084fc, #6366f1)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
