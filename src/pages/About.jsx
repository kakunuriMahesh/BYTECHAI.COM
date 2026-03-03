import { motion } from 'framer-motion';
import { HiLightningBolt, HiHeart, HiPuzzle } from 'react-icons/hi';
import { Link } from 'react-router-dom'; // Added for the Link component

const About = () => {
  const stats = [
    { label: 'Projects Brewing', value: '50+' },
    { label: 'Lines of Code', value: '1M+' },
    { label: 'Cups of Chai', value: '∞' },
    { label: 'Happy Clients', value: '100%' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      {/* Introduction */}
      <section className="max-w-4xl mx-auto text-center mb-32">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-chai font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-2 underline-offset-8"
        >
          Our Story
        </motion.span>
        <motion.h2 
          className="text-4xl sm:text-7xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Driven by <span className="text-chai">Passion</span>, <br />
          Built with <span className="italic">Obsession</span>.
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At BYTECHAI, we don't just "work" on projects. We live them. 
          We are a collective of digital craftsmen who believe that every pixel tells a story and every line of code should be a masterpiece. 
          Our obsession with perfection is what fuels our daily brew.
        </motion.p>
      </section>

      {/* The by[te]chai Philosophy */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: '[by]', 
              subtitle: 'Built by Humans', 
              icon: <HiHeart className="text-rose-500" />,
              desc: 'Empathy is our foundation. We build for people, not just for browsers. Our work is infused with human emotion and intuitive logic.' 
            },
            { 
              title: '<te>', 
              subtitle: 'Technology Obsessed', 
              icon: <HiLightningBolt className="text-amber-500" />,
              desc: 'We are tech-agnostic but performance-driven. If there is a better way to build it, we will find it and master it.' 
            },
            { 
              title: '{chai}', 
              subtitle: 'Served Simply', 
              icon: <HiPuzzle className="text-sky-500" />,
              desc: 'Complexity is easy; simplicity is hard. We distil complex problems into elegant, transparent, and approachable solutions.' 
            },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50 flex flex-col items-center text-center group"
            >
              <div className="
      text-6xl md:text-7xl
      font-black
      text-transparent
      bg-clip-text
      bg-[length:300%_300%]
      bg-gradient-to-r
      from-orange-500
      via-yellow-400
      via-pink-500
      to-orange-500
      animate-[var(--animate-crazy-border)]
      pointer-events-none
    "
    style={{
      WebkitTextStroke: "3px transparent",
    }}
              >{item.title}</div>
              {/* <div className="text-4xl mb-6">{item.icon}</div> */}
              <h3 className="text-2xl font-bold mb-4">{item.subtitle}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Crazy Performance / Passion */}
      <section className="bg-amber-900 rounded-[4rem] p-12 sm:p-24 text-white relative overflow-hidden max-w-7xl mx-auto mb-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-800/20 skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              We Code Like Our <br />
              Chai Depends On It.
            </h2>
            <p className="text-amber-100/80 text-lg mb-12">
              Bugs don't stand a chance against us. We've spent countless nights refining architectures, optimizing assets, and debating the perfect border-radius. This isn't just a job; it's our playground. We are relentless problem solvers who get a rush from turning "impossible" into "interactive."
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-4xl font-black mb-1">{s.value}</div>
                  <div className="text-amber-400 text-sm font-bold uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            initial={{ rotate: -5 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-2xl italic font-serif leading-relaxed">
              "Working with BYTECHAI is like having a team of obsessive geniuses in your corner. They didn't just meet the deadline; they destroyed it with quality."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-amber-400"></div>
              <span className="font-bold tracking-widest text-sm uppercase">Anonymous Client</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Call */}
      <section className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Want to see our madness in action?</h3>
        <p className="text-gray-500 mb-10">We are currently accepting new projects that challenge our boundaries.</p>
        <Link to="/projects" className="button-primary px-12 py-4 text-lg">
          Explore Our Portfolio
        </Link>
      </section>
    </div>
  );
};

export default About;