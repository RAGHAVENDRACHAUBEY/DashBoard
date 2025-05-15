import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Reports from '../pages/Reports';

const Dashboard = lazy(() => import('../components/Dashboard'));
const Users = lazy(() => import('../pages/Users'));
const Report = lazy(() => import('../pages/Reports'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const AppRoutes = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-200`}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar isDarkMode={isDarkMode} isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} onToggleSidebar={toggleSidebar} />
          <main className={`flex-1 overflow-y-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-200`}>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Dashboard isDarkMode={isDarkMode} />} />
                <Route path="/users" element={<Users isDarkMode={isDarkMode} />} />
                <Route path="/report" element={<Reports isDarkMode={isDarkMode} />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppRoutes; 