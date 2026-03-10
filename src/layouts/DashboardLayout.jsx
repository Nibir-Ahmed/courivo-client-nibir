import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, PlusCircle, BookMarked, LogOut } from 'lucide-react';

const DashboardLayout = () => {
  const { user, logout } = useAuth();

  const links = [
    { to: '/dashboard/enrolled', label: 'My Enrolled Courses', icon: BookMarked },
    { to: '/dashboard/add-course', label: 'Add Course', icon: PlusCircle },
    { to: '/dashboard/my-courses', label: 'My Added Courses', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950">
      <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <p className="font-heading font-bold text-lg text-gray-900 dark:text-white truncate">
            {user?.displayName || 'User'}
          </p>
          <p className="text-xs text-gray-400 truncate mt-1">{user?.email}</p>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <button
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-all w-full"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;