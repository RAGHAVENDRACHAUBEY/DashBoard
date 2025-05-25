import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Feature from './components/Feature';
import Projects from './components/Projects';
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="bg-cover bg-center" style={{ backgroundImage: 'url("./src/assets/Homebanner.png")' }}>
        <Header />
        <HomePage />
      </div>
      <Feature/>
      <Projects/>
    </div>
  );
}

export default App;