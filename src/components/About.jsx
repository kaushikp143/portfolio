import { Cpu, Code, Layers, GraduationCap } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Cpu className="w-8 h-8 text-[#14b8a6]" />,
      title: 'Hardware & Silicon',
      desc: 'Deep roots in circuit analysis, PCB design, microcontrollers, and low-level communication protocols. I speak binary, SPI, I2C, and register maps.',
    },
    {
      icon: <Code className="w-8 h-8 text-[#c084fc]" />,
      title: 'Software & Frontend',
      desc: 'Crafting responsive user interfaces using React, modern CSS, and state management. Creating dashboards that interact in real time with remote edge devices.',
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-400" />,
      title: 'Cyber-Physical Systems',
      desc: 'Integrating software stacks with physical sensor nodes, RTOS, actuators, and communication backbones like MQTT and WebSockets to create unified IoT systems.',
    },
  ];

  const milestones = [
    {
      year: '2023 - Present',
      title: 'B.Tech in Electronics & Comm. Engineering',
      institution: 'State Technical University',
      detail: 'Specializing in Embedded Systems and IoT. Core courses include Microprocessors, Digital Signal Processing, Computer Networks, and Control Systems.',
    },
    {
      year: '2024',
      title: 'Embedded Systems & Robotics Intern',
      institution: 'AeroLink Technologies',
      detail: 'Assisted in building firmware and debugging sensor hubs for remote environmental monitoring stations utilizing FreeRTOS and STM32.',
    },
    {
      year: '2022',
      title: 'Electronics Project Assistant',
      institution: 'High-School STEM Lab',
      detail: 'Designed and fabricated custom microcontroller shield modules and organized hands-on microcontroller workshops for 100+ junior students.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-left mb-16">
          <p className="text-sm font-mono text-[#14b8a6] tracking-wider uppercase mb-2">&gt; Biography</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-[#14b8a6] mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-semibold text-slate-200">
              Where Silicon Meets Software
            </h3>
            <p className="text-slate-400 leading-relaxed">
              My journey started with a fascination for how code, which lives in the abstract, can physically change the world. By choosing Electronics & Communication, I gained the foundation to understand hardware from the transistor level up. By teaching myself modern web stacks, I learned to bring that hardware to people's screens.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, I specialize in building complete vertical stacks—from writing C/C++ firmware running on an ESP32 or STM32 microcontroller to building real-time telemetry dashboards using React and WebSockets.
            </p>

            {/* Core Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-5 rounded-2xl hover:border-slate-700/80 transition-all duration-300"
                >
                  <div className="mb-4">{card.icon}</div>
                  <h4 className="text-base font-semibold text-slate-200 mb-2">{card.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Timeline / Education */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 p-6 md:p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2 mb-6">
                <GraduationCap className="w-6 h-6 text-[#c084fc]" />
                <span>Education & Experience</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Timeline Dot */}
                    <div className="absolute left-[7px] top-1.5 w-[10px] h-[10px] rounded-full bg-slate-800 border-2 border-[#c084fc] group-hover:bg-[#c084fc] transition-all duration-300 shadow-[0_0_8px_rgba(192,132,252,0.4)]" />

                    <span className="text-xs font-mono text-[#c084fc] font-semibold">
                      {milestone.year}
                    </span>
                    <h4 className="text-base font-semibold text-slate-200 mt-1">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">{milestone.institution}</p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {milestone.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
