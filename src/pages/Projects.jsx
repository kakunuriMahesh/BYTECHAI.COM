import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineCode, HiOutlineExternalLink, HiOutlineCube, HiOutlineChatAlt2, HiX } from 'react-icons/hi';

const projects = [
  { 
    id: 1,
    title: 'E-Commerce Engine Brew', 
    type: 'Web App',
    description: 'A robust, scalable e-commerce solution with real-time inventory and AI-driven recommendations.', 
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
    status: 'Merged',
    clientFeedback: 'The performance is night and day compared to our old system. BYTECHAI is phenomenal.',
    images: ['https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000']
  },
  { 
    id: 2,
    title: 'Health-Track Mobile', 
    type: 'Mobile App',
    description: 'Cross-platform health monitoring app with wearable integration and medical report analysis.', 
    tech: ['Flutter', 'Firebase', 'TensorFlow', 'Dart'],
    status: 'Active',
    clientFeedback: 'Intuitive design and solid architecture. Our users love the smooth experience.',
    images: ['https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1000']
  },
  { 
    id: 3,
    title: 'Finance Automation Bot', 
    type: 'Automation',
    description: 'Smart AI bot that automates reconciliation and financial reporting for fintech firms.', 
    tech: ['Python', 'AWS', 'OpenAI API', 'Pandas'],
    status: 'Stable',
    clientFeedback: 'Saved us 40 hours of manual work per week. Truly a game-changer.',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000']
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const stats = Array.from({ length: 52 }, () => Math.floor(Math.random() * 4));

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header & GitHub Style Heatmap */}
      <section className="mb-24">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-7xl font-bold mb-6">Built to <span className="text-chai italic text-5xl">Scale</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed">We maintain a high commit frequency on quality. Explore our digital repository of successfully brewed solutions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full lg:w-auto">
            <div className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Commit Activity</div>
            <div className="flex flex-wrap gap-1">
              {stats.map((val, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-3 rounded-sm transition-colors ${
                    val === 0 ? 'bg-gray-100' : 
                    val === 1 ? 'bg-amber-100' : 
                    val === 2 ? 'bg-amber-300' : 'bg-chai'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-3 text-[10px] items-center text-gray-400 font-bold">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-100 rounded-sm"></div>
                <div className="w-2 h-2 bg-amber-100 rounded-sm"></div>
                <div className="w-2 h-2 bg-amber-300 rounded-sm"></div>
                <div className="w-2 h-2 bg-chai rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Project Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <motion.div 
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group"
              whileHover={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-chai text-2xl group-hover:bg-chai group-hover:text-white transition-colors">
                  <HiOutlineCube />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                    proj.status === 'Merged' ? 'bg-green-50 text-green-600' : 
                    proj.status === 'Active' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'
                  }`}>
                    {proj.status}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">{proj.title}</h4>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">{proj.description}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                {proj.tech.slice(0, 3).map(t => (
                  <span key={t} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded uppercase">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Detail View (Overlay or Modal) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <img src={selectedProject.images[0]} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 left-6 p-3 bg-white/90 rounded-full text-gray-900 lg:hidden shadow-lg"
                >
                  <HiX size={24} />
                </button>
              </div>
              <div className="flex-1 p-8 sm:p-12 overflow-y-auto">
                <div className="hidden lg:flex justify-end mb-8">
                  <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <HiX size={32} />
                  </button>
                </div>
                <span className="text-chai font-bold tracking-widest uppercase text-xs mb-2 block">{selectedProject.type}</span>
                <h3 className="text-3xl sm:text-5xl font-bold mb-6">{selectedProject.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                  <div className="bg-amber-50 p-6 rounded-2xl">
                    <h5 className="font-bold mb-3 flex items-center gap-2"><HiOutlineCode className="text-chai" /> Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="text-xs font-bold bg-white text-chai px-3 py-1 rounded-full border border-amber-100">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h5 className="font-bold mb-3 flex items-center gap-2"><HiOutlineChatAlt2 className="text-chai" /> Client Note</h5>
                    <p className="text-xs italic text-gray-500">"{selectedProject.clientFeedback}"</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="button-primary flex-1 flex items-center justify-center gap-2 py-4">
                    <HiOutlineExternalLink /> Live Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline of Brewing Milestones */}
      <section className="mt-24 py-24 border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-[0.3em] text-gray-300">Milestone Timeline</h2>
        </div>
        <div className="relative max-w-4xl mx-auto pl-8 border-l border-amber-100">
          {[
            { date: 'Dec 2025', title: 'Enterprise Core Merged', desc: 'Successfully deployed the scalable architecture for a Fortune 500 client fintech project.' },
            { date: 'Oct 2025', title: 'AI Integration Mastered', desc: 'Released our proprietary LLM integration layer for real-time customer behavioral analysis.' },
            { date: 'Jun 2025', title: 'BYTECHAI v2.0 Launch', desc: 'Our team expanded to 10 digital craftsmen, focusing exclusively on full-service brews.' }
          ].map((m, i) => (
            <motion.div 
              key={i} 
              className="mb-16 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-chai rounded-full"></div>
              <span className="text-xs font-black text-chai uppercase tracking-widest">{m.date}</span>
              <h4 className="text-2xl font-bold mt-2 mb-3">{m.title}</h4>
              <p className="text-gray-500 leading-relaxed max-w-2xl">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;