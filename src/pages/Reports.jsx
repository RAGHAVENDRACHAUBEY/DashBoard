const Reports = ({isDarkMode}) => {
  return (
    <div className="p-6">
      <div className={`rounded-lg shadow-sm p-6 ${
        isDarkMode 
          ? 'bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
          : 'bg-white shadow-sm'
      }`}>
        <h1 className={`text-2xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>Reports</h1>
        <p className={`${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>View and analyze your application reports here.</p>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
         
          <div className={`p-6 rounded-lg ${
            isDarkMode 
              ? 'bg-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
              : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
          } border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>User Activity</p>
                </div>
                <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2,543</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Active users this month</p>
              </div>
            </div>
          </div>

         
          <div className={`p-6 rounded-lg ${
            isDarkMode 
              ? 'bg-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
              : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
          } border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>System Performance</p>
                </div>
                <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>99.9%</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Uptime this month</p>
              </div>
            </div>
          </div>

         
          <div className={`p-6 rounded-lg ${
            isDarkMode 
              ? 'bg-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
              : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
          } border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-red-500/20' : 'bg-red-100'}`}>
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Error Reports</p>
                </div>
                <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>12</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Errors this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 