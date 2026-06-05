import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [maskedEmail, setMaskedEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Safe email masking helper
  const maskEmail = (email) => {
    if (!email || !email.includes('@')) return '';
    const [name, domain] = email.split('@');
    const maskedName = name.length > 2
      ? `${name[0]}${'*'.repeat(name.length - 2)}${name[name.length - 1]}`
      : `${name[0]}*`;
    return `${maskedName}@${domain}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate safe API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setMaskedEmail(maskEmail(formData.email));
      setFormData({ name: '', email: '', message: '' });
      // TODO(security): Safe logging, avoid outputting sensitive payloads.
      console.log('Contact form submission status: success');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-slate-950/20">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] radial-blob-2 opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-left mb-16">
          <p className="text-sm font-mono text-[#14b8a6] tracking-wider uppercase mb-2">&gt; Connection</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Contact Me</h2>
          <div className="w-20 h-1 bg-[#14b8a6] mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="text-2xl font-semibold text-slate-200">Let's build something together</h3>
            <p className="text-slate-400 leading-relaxed">
              Whether you are looking to hire an intern, collaborate on an open-source hardware/software project, or just discuss circuits and code, feel free to reach out. I will get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-2xl text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 font-mono">Email</h4>
                  {/* Masked display of email to comply with secure coding standards */}
                  <span className="text-slate-200 font-medium hover:text-teal-400 transition-colors">
                    aarav.sharma.ece [at] gmail [dot] com
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-2xl text-[#c084fc]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 font-mono">Location Phone</h4>
                  <span className="text-slate-200 font-medium">+91-987******1</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-2xl text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 font-mono">Based In</h4>
                  <span className="text-slate-200 font-medium">New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 p-6 md:p-8 rounded-3xl">
              {submitStatus === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center p-3 bg-teal-950/40 border border-teal-500/20 text-[#14b8a6] rounded-full mb-2">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you. A secure confirmation has been registered for{' '}
                    <span className="font-mono text-teal-400">{maskedEmail}</span>.
                    I will check my telemetry logs and reply shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="mt-6 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="relative text-left">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-400 uppercase mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Kaushik Pressanna"
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-[#14b8a6]/60 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative text-left">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-400 uppercase mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. client@domain.com"
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-[#14b8a6]/60 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative text-left">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-slate-400 uppercase mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Type your design, hardware specifications, or project details..."
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-[#14b8a6]/60 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {submitStatus === 'error' && (
                    <p className="text-sm text-rose-400 text-left font-mono">
                      ! Please fill out all fields.
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-400 to-indigo-500 hover:from-teal-500 hover:to-indigo-600 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-full text-base transition-all duration-300"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
