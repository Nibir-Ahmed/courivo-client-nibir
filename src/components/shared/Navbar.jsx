import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = (
    <>
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary transition'}>Home</NavLink>
      <NavLink to="/courses" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary transition'}>Courses</NavLink>
      {user && (
        <NavLink to="/dashboard/enrolled" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary transition'}>Dashboard</NavLink>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-2xl text-primary">Courivo</Link>

        <div className="hidden md:flex items-center gap-8 font-body text-gray-700 dark:text-gray-300">
          {navLinks}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {user ? (
            <div className="flex items-center gap-3">
              <img src={user.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'} alt="" className="w-9 h-9 rounded-full object-cover" title={user.displayName} />
              <button onClick={logout} className="btn-outline text-sm">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary text-sm">Login</Link>
          )}
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 font-body text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800 pt-4">
          {navLinks}
          <button onClick={toggleTheme} className="text-left">
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
          {user ? (
            <button onClick={logout} className="btn-outline text-sm w-fit">Logout</button>
          ) : (
            <Link to="/login" className="btn-primary text-sm w-fit">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;