import { useState, useEffect } from 'react';

const Users = ({ isDarkMode }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`https://reqres.in/api/users?page=${page}&per_page=${itemsPerPage}`, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      const data = await response.json();
      if (data && data.data) {
        setUsers(data.data);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };


  const filteredUsers = users.filter(user =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="p-6">
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Users Management</h1>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
         
          <div className={`p-6 rounded-lg ${
            isDarkMode 
              ? 'bg-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
              : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
          } border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Total Users</p>
                <p className={`text-2xl font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {totalPages * itemsPerPage}
                </p>
              </div>
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'} shadow-lg`}>
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
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
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Current Page Users</p>
                <p className={`text-2xl font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {users.length}
                </p>
              </div>
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'} shadow-lg`}>
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Filtered Users</p>
                <p className={`text-2xl font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {filteredUsers.length}
                </p>
              </div>
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'} shadow-lg`}>
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full md:w-96 px-4 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400' 
                : 'bg-white text-gray-800 border-gray-300 placeholder-gray-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className={`min-w-full divide-y divide-gray-200 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <thead>
              <tr>
                <th scope="col" className={`px-6 py-4 text-left text-xs font-bold border-b-2 ${
                  isDarkMode ? 'text-gray-200 bg-gray-700 border-gray-600' : 'text-gray-600 bg-gray-50 border-gray-300'
                } uppercase tracking-wider`}>ID</th>
                <th scope="col" className={`px-6 py-4 text-left text-xs font-bold border-b-2 ${
                  isDarkMode ? 'text-gray-200 bg-gray-700 border-gray-600' : 'text-gray-600 bg-gray-50 border-gray-300'
                } uppercase tracking-wider`}>Avatar</th>
                <th scope="col" className={`px-6 py-4 text-left text-xs font-bold border-b-2 ${
                  isDarkMode ? 'text-gray-200 bg-gray-700 border-gray-600' : 'text-gray-600 bg-gray-50 border-gray-300'
                } uppercase tracking-wider`}>First Name</th>
                <th scope="col" className={`px-6 py-4 text-left text-xs font-bold border-b-2 ${
                  isDarkMode ? 'text-gray-200 bg-gray-700 border-gray-600' : 'text-gray-600 bg-gray-50 border-gray-300'
                } uppercase tracking-wider`}>Last Name</th>
                <th scope="col" className={`px-6 py-4 text-left text-xs font-bold border-b-2 ${
                  isDarkMode ? 'text-gray-200 bg-gray-700 border-gray-600' : 'text-gray-600 bg-gray-50 border-gray-300'
                } uppercase tracking-wider`}>Email</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${
              isDarkMode ? 'divide-gray-700' : 'divide-gray-200'
            }`}>
              {loading ? (
                <tr>
                  <td colSpan="5" className={`px-6 py-8 text-center ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    <div className="flex justify-center items-center">
                      <svg className="animate-spin h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="5" className={`px-6 py-8 text-center ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className={`${
                    isDarkMode 
                      ? 'hover:bg-gray-700/50 transition-colors duration-150' 
                      : 'hover:bg-gray-50 transition-colors duration-150'
                  }`}>
                    <td className={`px-6 py-4 whitespace-nowrap border-b ${
                      isDarkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'
                    } font-medium`}>{user.id}</td>
                    <td className={`px-6 py-4 whitespace-nowrap border-b ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <img 
                        src={user.avatar} 
                        alt={`${user.first_name} ${user.last_name}`}
                        className="h-10 w-10 rounded-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(`${user.first_name} ${user.last_name}`)}&background=random`;
                        }}
                      />
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap border-b ${
                      isDarkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'
                    } font-medium`}>{user.first_name}</td>
                    <td className={`px-6 py-4 whitespace-nowrap border-b ${
                      isDarkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'
                    } font-medium`}>{user.last_name}</td>
                    <td className={`px-6 py-4 whitespace-nowrap border-b ${
                      isDarkMode ? 'text-gray-300 border-gray-700' : 'text-gray-500 border-gray-200'
                    }`}>{user.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className={`text-sm ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1 || loading}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                currentPage === 1 || loading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-600'
              } ${
                isDarkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || loading}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                currentPage === totalPages || loading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-600'
              } ${
                isDarkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users; 