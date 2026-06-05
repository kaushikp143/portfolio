import { ExternalLink, Cpu, Code2, Cable } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: 'IoT Smart Energy Grid Monitor',
      icon: <Cable className="w-6 h-6 text-[#14b8a6]" />,
      desc: 'Edge-to-cloud power telemetry system. STM32 nodes measure active/reactive power metrics and stream via Modbus RTU to an ESP32 gateway. The gateway parses inputs and posts to a secure MQTT Broker. Data is visualized on a React dashboard with real-time updates and SMS anomaly alerts.',
      tags: ['ESP32', 'STM32', 'Modbus RTU', 'MQTT', 'React.js', 'Tailwind CSS', 'WebSockets'],
      github: 'https://github.com/kaushikp143/iot-smart-grid',
      demo: 'https://smartgrid-demo.kaushikp143.dev',
    },
    {
      title: 'Autonomous Robotics Platform (SLAM)',
      icon: <Cpu className="w-6 h-6 text-[#c084fc]" />,
      desc: 'Four-wheeled robotic rover featuring PID motor control and sensor fusion (IMU + wheel encoders) managed on an STM32 board with RTOS. A Raspberry Pi running ROS2 maps environments via LiDAR and performs path planning. Includes a custom React remote operator interface with live camera feed.',
      tags: ['C++', 'ROS2', 'STM32', 'Raspberry Pi', 'LiDAR', 'FreeRTOS', 'React.js'],
      github: 'https://github.com/kaushikp143/autonomous-slam-rover',
      demo: 'https://rover-dashboard.kaushikp143.dev',
    },
    {
      title: 'Plexus IoT Fleet Manager',
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      desc: 'Centralized dashboard built to handle provisioning, configuration updates, and secure Over-the-Air (OTA) firmware deployments across a fleet of 200+ ESP32 device nodes. Visualizes system resource metrics, connection status, and logs via a responsive grid interface.',
      tags: ['React.js', 'Vite', 'Tailwind', 'Node.js', 'WebSockets', 'Docker', 'ChartJS'],
      github: 'https://github.com/kaushikp143/plexus-fleet-manager',
      demo: 'https://plexus-fleet.kaushikp143.dev',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative overflow-hidden bg-slate-950/20">
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] radial-blob-1 opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-left mb-16">
          <p className="text-sm font-mono text-[#14b8a6] tracking-wider uppercase mb-2">&gt; Showcase</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#14b8a6] mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 hover:border-slate-700/80 p-6 md:p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(20,184,166,0.05)]"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-teal-400 group-hover:border-teal-500/30 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all duration-300">
                    {project.icon}
                  </div>
                  {/* Links */}
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                      title="View Code on Github"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Github links can open in new tab
                      }}
                    >
                      <GithubIcon className="w-4 h-4 text-slate-400 hover:text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                      title="View Live Demo"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Live demos simulated in this environment
                      }}
                    >
                      <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white" />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-100 mb-4 text-left group-hover:text-[#14b8a6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed text-left mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-[11px] font-mono font-medium bg-slate-950/80 border border-slate-800/60 px-2.5 py-1 rounded-md text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
