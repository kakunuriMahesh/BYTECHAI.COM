import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import logo from '../assets/bytechaiLogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/">
              <img src={logo} className="w-40 h-auto" alt="BYTECHAI Logo" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Where technology meets creativity. We brew high-performance digital solutions with a human touch.
            </p>
            <div className="flex gap-4">
              {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-chai hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-gray-400">Company</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Projects', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-chai transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-gray-400">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-chai transition-colors text-sm font-medium">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-chai transition-colors text-sm font-medium">Help Center</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-chai transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-chai transition-colors text-sm font-medium">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact Hint */}
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-gray-400">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Stay updated with our latest brews and tech insights.</p>
            <div className="flex bg-gray-50 rounded-2xl p-1.5 border border-gray-100">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none px-4 text-xs flex-1"
              />
              <button className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-chai transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[11px] font-medium tracking-wide">
            © {currentYear} BYTECHAI. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-400 text-[11px] font-medium tracking-wide flex items-center gap-2">
            MADE WITH <span className="text-chai">☕</span> IN HYDERABAD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;