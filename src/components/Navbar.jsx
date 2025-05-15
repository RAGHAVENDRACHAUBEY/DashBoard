import { useState } from 'react';


const Navbar = ({ isDarkMode, onToggleDarkMode, onToggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <nav className={`${isDarkMode ? 'bg-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.4)]' : 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.2)]'} transition-colors duration-200 z-40 relative`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              onClick={onToggleSidebar}
              className={`lg:hidden p-2 rounded-md ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-lg ${
                isDarkMode 
                  ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                  : 'text-gray-700 hover:bg-gray-200'
              } transition-colors duration-200`}
            >
              {isDarkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className={`p-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-500'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded-full`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {isNotificationsOpen && (
                <div className={`origin-top-right absolute right-0 mt-2 w-80 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } ring-1 ring-black ring-opacity-5 rounded-lg shadow-lg z-[100]`}>
                  <div className="py-1">
                    <div className={`px-4 py-2 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} border-b border-gray-200`}>
                      <h3 className="font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <a href="#" className={`block px-4 py-2 text-sm ${
                        isDarkMode ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'
                      }`}>
                        New user registered
                      </a>
                      <a href="#" className={`block px-4 py-2 text-sm ${
                        isDarkMode ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'
                      }`}>
                        System update completed
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 focus:outline-none"
              >
                <div className="relative">
                  <img
                    className="h-8 w-8 rounded-full border-2 border-white"
                    src="https://ui-avatars.com/api/?name=Raghavendra+Chaubey&background=0D8ABC&color=fff"
                    alt="Profile"
                  />
                  <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white"></span>
                </div>
                <div className="hidden md:block text-left">
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Raghavendra Chaubey</p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Frontend Developer</p>
                </div>
              </button>

              {isProfileOpen && (
                <div className={`origin-top-right absolute right-0 mt-2 w-48 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-[100]`}>
                  <div className="py-1">
                    <div className={`px-4 py-2 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Signed in as</p>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>raghavendra@example.com</p>
                    </div>
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        isDarkMode ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        isDarkMode ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Settings
                    </a>
                    <div className={`border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <button
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          isDarkMode ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;