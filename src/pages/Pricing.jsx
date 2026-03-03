import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';

const webPlans = [
  { 
    name: 'Basic', 
    price: '$999', 
    desc: 'Perfect for small businesses and personal brands.',
    features: ['5 Responsive Pages', 'SEO Optimization', 'Contact Form', '1 Month Support', 'SSL Certificate'] 
  },
  { 
    name: 'Standard', 
    price: '$1999', 
    desc: 'Advanced features for growing companies.',
    popular: true,
    features: ['10 Responsive Pages', 'Custom UI/UX Design', 'Blog Integration', 'Speed Optimization', '3 Months Support'] 
  },
  { 
    name: 'Premium', 
    price: '$2999', 
    desc: 'Full-scale solutions with complex functionality.',
    features: ['Unlimited Pages', 'E-commerce Setup', 'User Authentication', 'API Integrations', '6 Months Support'] 
  },
];

const appPlans = [
  { name: 'Basic App', price: '$4999', desc: 'Single platform focused application.', features: ['iOS or Android', 'MVP Features', 'User Login', 'Push Notifications'] },
  { name: 'Standard App', price: '$9999', desc: 'Robust cross-platform experience.', features: ['iOS & Android (Flutter)', 'Admin Dashboard', 'Payment Gateway', 'Cloud Integration'] },
  { name: 'Premium App', price: '$14999', desc: 'Enterprise-grade custom software.', features: ['Custom Architecture', 'Real-time Features', 'Scalable Backend', 'Long-term Support'] },
];

const PricingCard = ({ plan }) => {
  const whatsappUrl = `https://wa.me/917981881518?text=Hi%20BYTECHAI,%20I'm%20interested%20in%20the%20${plan.name}%20plan.`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-3xl flex flex-col h-full transition-all duration-300 ${
        plan.popular 
          ? 'bg-white border-2 border-chai shadow-2xl scale-105 z-10' 
          : 'bg-white border border-gray-100 shadow-xl'
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-chai text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </span>
      )}
      <div className="mb-8">
        <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{plan.desc}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
          <span className="text-gray-400">/project</span>
        </div>
      </div>
      <ul className="space-y-4 mb-10 flex-1">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
            <HiCheck className="text-chai mt-0.5 flex-shrink-0" size={18} />
            {f}
          </li>
        ))}
      </ul>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`w-full text-center py-4 rounded-xl font-bold transition-all ${
          plan.popular 
            ? 'bg-chai text-white hover:bg-amber-700 shadow-lg shadow-amber-200' 
            : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
        }`}
      >
        Know More
      </a>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2 
          className="text-4xl sm:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Simple, <span className="text-chai">Transparent</span> Pricing
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          No hidden fees. Choose a plan that fits your vision and let's start brewing.
        </p>
      </div>

      <div className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gray-200 flex-1"></div>
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Websites</h3>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {webPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gray-200 flex-1"></div>
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Mobile Apps</h3>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {appPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
      
      <div className="mt-24 p-12 bg-amber-50 rounded-[3rem] text-center border border-amber-100">
        <h3 className="text-3xl font-bold mb-4">Need a custom blend?</h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto italic">"Every project is unique. If our standard plans don't fit your needs, let's chat and create a custom quote just for you."</p>
        <a 
          href="https://wa.me/917981881518?text=Hi%20BYTECHAI,%20I'd%20like%20to%20discuss%20a%20custom%20project."
          className="button-primary px-12 py-4"
        >
          Contact for Custom Quote
        </a>
      </div>
    </div>
  );
};

export default Pricing;
