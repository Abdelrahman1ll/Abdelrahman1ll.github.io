import React from 'react';

const sidebarData = {
  logo: {
    text: "{/}",
    gradient: "from-purple-600 to-indigo-600"
  },
  navItems: [
    {
      id: "home",
      label: "Home",
      icon: "home"
    },
    {
      id: "projects",
      label: "Projects",
      icon: "briefcase"
    },
    {
      id: "services",
      label: "Services",
      icon: "code"
    },
    {
      id: "awards",
      label: "Awards",
      icon: "trophy"
    },
    {
      id: "contact",
      label: "Contact",
      icon: "mail"
    }
  ]
};

const Icon = ({ name, className }) => {
  switch (name) {
    case 'home':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M12 12v3" />
        </svg>
      );
    case 'code':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case 'trophy':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a4.5 4.5 0 004.5-4.5V4.5h-9V10.5A4.5 4.5 0 0012 15zm0 0v4.5m-3 0h6M7.5 4.5H5A2.25 2.25 0 002.75 6.75v1.5M16.5 4.5h2.5A2.25 2.25 0 0121.25 6.75v1.5" />
        </svg>
      );
    case 'mail':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Sidebar({ activePage, setActivePage, darkMode, setDarkMode }) {
  return (
    <aside className="w-full md:w-16 h-auto md:h-full shrink-0 flex flex-row md:flex-col justify-between items-center py-2 md:py-4 px-4 md:px-0 z-50">
      {/* Logo */}
      <div className="hidden md:flex items-center justify-center text-2xl font-black select-none tracking-tight">
        <span className="text-slate-800 dark:text-white">{'{'}</span>
        <span className="text-brand-purple">/</span>
        <span className="text-slate-800 dark:text-white">{'}'}</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-row md:flex-col gap-2 md:gap-5 justify-around w-full md:w-auto items-center">
        {sidebarData.navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 relative group cursor-pointer ${
                isActive
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20'
                  : 'text-slate-700 hover:text-brand-purple hover:bg-brand-purple-very-light/50 dark:text-slate-500 dark:hover:text-brand-purple-light dark:hover:bg-slate-800/40'
              }`}
              aria-label={item.label}
            >
              <Icon name={item.icon} className="w-5.5 h-5.5 transition-transform duration-300 group-hover:scale-105" />
            </button>
          );
        })}
      </nav>

      {/* Toggle Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-11 h-11 rounded-xl flex items-center justify-center text-slate-700 hover:text-brand-purple hover:bg-brand-purple-very-light/50 dark:text-slate-500 dark:hover:text-yellow-400 dark:hover:bg-slate-800/40 transition-all duration-300 group cursor-pointer"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <svg className="w-5.5 h-5.5 transition-transform duration-500 group-hover:rotate-45" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        ) : (
          <svg className="w-5.5 h-5.5 transition-transform duration-500 group-hover:-rotate-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )}
      </button>
    </aside>
  );
}
