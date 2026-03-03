import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiChevronRight } from 'react-icons/hi';

const Contact = () => {
  const contactInfo = [
    { icon: <HiMail />, label: 'Email Us', value: 'maheshkakunuri3@gmail.com', link: 'mailto:maheshkakunuri3@gmail.com' },
    { icon: <HiPhone />, label: 'Call Us', value: '+91 7981881518', link: 'tel:+917981881518' },
    { icon: <HiLocationMarker />, label: 'Location', value: 'Hyderabad, India', link: '#' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Contact info / Text */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
            Ready to <span className="text-chai italic">Brew</span> Your Project?
          </h2>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">
            Have a question, a feedback, or a crazy idea that needs technical steeping? We're just a message away. Reach out and let's start something amazing today.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.a 
                href={info.link}
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-100 transition-all group"
              >
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-chai text-2xl group-hover:bg-chai group-hover:text-white transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">{info.label}</p>
                  <p className="text-gray-900 font-bold">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className="bg-white p-8 sm:p-12 rounded-[3.5rem] shadow-2xl border border-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 group">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-chai/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-chai/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 mb-10">
              <label className="text-xs font-bold text-gray-400 uppercase ml-2">Project Brief</label>
              <textarea 
                placeholder="Tell us about your brewing project..." 
                className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-chai/20 outline-none transition-all min-h-[150px] resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="button-primary w-full py-5 flex items-center justify-center gap-3 text-lg group"
            >
              Send Message <HiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-[11px] text-gray-400 mt-6 tracking-wide italic">"We promise to get back to you within 24 hours."</p>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;