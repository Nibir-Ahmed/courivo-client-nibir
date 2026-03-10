import { Link } from 'react-router-dom';
import { FaXTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D1A] text-gray-400 font-body">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="font-heading font-bold text-2xl text-white">Courivo</span>
          <p className="mt-3 text-sm leading-relaxed">
            Learn from the best. Grow at your own pace. Courivo connects learners with world-class courses.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
            <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition"><FaXTwitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs">
        © {new Date().getFullYear()} Courivo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;