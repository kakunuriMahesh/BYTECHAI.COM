import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb, HiOutlineDeviceMobile, HiOutlineGlobeAlt, HiOutlineLightningBolt, HiStar } from 'react-icons/hi';
import { FaCode, FaCoffee } from 'react-icons/fa';
import logo from '../assets/bytechaiLogo.png';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    { icon: <HiOutlineGlobeAlt />, title: 'Websites', desc: 'Custom, high-performance web applications built with modern frameworks.' },
    { icon: <HiOutlineDeviceMobile />, title: 'Mobile Apps', desc: 'Responsive and intuitive mobile experiences for iOS and Android.' },
    { icon: <HiOutlineLightBulb />, title: 'AI Tools', desc: 'Smart AI integrations to automate and enhance your business workflows.' },
    { icon: <HiOutlineLightningBolt />, title: 'Automations', desc: 'Efficiency-driven solutions to save time and reduce manual workload.' }
  ];

  const testimonials = [
    { name: 'Rahul Sharma', role: 'Startup Founder', text: 'BYTECHAI transformed our vision into a stunning reality. Their attention to detail is unmatched.', rating: 5 },
    { name: 'Priya Patel', role: 'Marketing Director', text: 'Professional, responsive, and incredibly creative. They brew digital magic!', rating: 5 },
    { name: 'Mark Wilson', role: 'CTO, TechFlow', text: 'Clean code and exceptional strategy. The best partner for any high-scale project.', rating: 5 }
  ];

  const faqs = [
    { q: 'What services do you offer?', a: 'We specialize in custom web development, mobile app creation, AI-driven tools, and business automations.' },
    { q: 'How long does a project take?', a: 'Timelines vary based on complexity. A standard website typically takes 2-4 weeks, while complex apps may take 2-3 months.' },
    { q: 'Do you offer maintenance?', a: 'Yes, we provide ongoing support and maintenance packages to keep your digital products running smoothly.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-gradient-chai">
        {/* Requested Background Icons */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <FaCode className="text-8xl sm:text-9xl text-chai animate-float absolute top-16 left-8 sm:left-16" />
          <FaCoffee className="text-8xl sm:text-9xl text-chai animate-float absolute bottom-24 right-8 sm:right-20" style={{ animationDelay: '1.4s' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} className="max-w-xs sm:max-w-md h-auto mx-auto mb-8" alt="BYTECHAI Logo" />
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Technology <span className="text-chai">Brewed</span> to Perfection
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We blend clean code with creative strategy to build human-centric digital experiences that scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/about" className="button-primary text-lg px-10 py-4">
            See What’s Brewing
          </Link>
          <Link to="/contact" className="px-10 py-4 border-2 border-chai text-chai rounded-full font-medium hover:bg-chai hover:text-white transition-all">
            Get in Touch
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">What We Brew</h2>
          <p className="text-gray-500 max-w-xl mx-auto">High-quality digital solutions tailored to your unique business needs.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="card-brew text-center group">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-chai text-3xl mx-auto mb-6 group-hover:bg-chai group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Our Brewing Process</h2>
            <p className="text-gray-600 mb-8 text-lg">We don't just write code; we steep ideas until they're ready for the world. Our collaborative approach ensures every detail is polished.</p>
            
            <div className="space-y-6">
              {[
                { step: '01', title: 'Gathering Ingredients', desc: 'Understanding your goals, audience, and technical requirements.' },
                { step: '02', title: 'Steeping Ideas', desc: 'Designing and architecting the perfect solution for your needs.' },
                { step: '03', title: 'Perfectly Brewed', desc: 'Agile development with continuous feedback and refinement.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-chai font-bold text-2xl opacity-30">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-tr from-chai to-amber-200 rounded-3xl p-8 aspect-video flex items-center justify-center text-white text-9xl">
              <HiOutlineLightBulb className="animate-float" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-chai overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Client Feedback</h2>
            <p className="text-gray-500">What people are saying about our brew.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, j) => <HiStar key={j} />)}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-chai/10 rounded-full flex items-center justify-center text-chai font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">FAQs</h2>
          <p className="text-gray-500">Frequently Asked Questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i} 
              className="group bg-white border border-gray-100 rounded-2xl p-6 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <summary className="list-none flex justify-between items-center font-bold text-lg">
                {faq.q}
                <span className="text-chai group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
