import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Awards from './components/Awards/Awards';
import Contact from './components/Contact/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Synchronize dark class on index.html body/root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'projects':
        return <Projects />;
      case 'services':
        return <Services onNavigate={setActivePage} />;
      case 'awards':
        return <Awards />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="h-screen w-screen bg-neutral-bg dark:bg-[#080C14] text-slate-800 dark:text-slate-100 flex items-center justify-center relative grid-bg transition-colors duration-500 overflow-hidden p-1.25">
      
      {/* Background radial soft ambient glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-purple-600/5 dark:bg-purple-900/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-blue-600/5 dark:bg-blue-900/5 blur-[120px] pointer-events-none z-0"></div>
      
      {/* Outer panel container wrapping sidebar and content inside a single card */}
      <div className="w-full h-full rounded-4xl glass-panel flex flex-col-reverse md:flex-row p-2 md:p-4 gap-4 z-10 overflow-hidden">
        
        {/* Sidebar Nav */}
        <Sidebar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />

        {/* Content Area Viewport */}
        <main className={`grow min-h-0 h-full ${activePage === 'home' ? 'overflow-y-auto lg:overflow-hidden' : 'overflow-y-auto'}`}>
          <div className="w-full h-full p-1 md:p-2">
            {renderActivePage()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
