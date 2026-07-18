import { useRef, useState, useEffect } from 'react';
import homeData from './data.json';

const Icon = ({ name, className }) => {
  switch (name) {
    case 'globe':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-.11-8.156-.318m16.312 0a11.954 11.954 0 00-16.312 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'phone':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h9" />
        </svg>
      );
    case 'desktop':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15.75V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
        </svg>
      );
    case 'api':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      );
    case 'rocket':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.97 14.97 0 00-6.16 12.12 14.97 14.97 0 0012.12-6.16zm-5.84 2.58h-4.8a6 6 0 007.38-5.84m3.42 3.42l3.24 3.24" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Home({ onNavigate }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err);
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section className="w-full h-full flex flex-col lg:flex-row gap-6 animate-fade-in overflow-y-auto lg:overflow-hidden">
      {/* 1. Left Section: About Me Card */}
      <div className="w-full lg:w-87.5 lg:h-full shrink-0 flex flex-col">
        <div className="shadow-[0_10px_30px_rgba(0,0,0,0.03)] glass-card-interactive bg-gradient-hero rounded-4xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden group">
          {/* Subtle background glow */}
          <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-linear-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Decorative Sparkle Label */}
          <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 z-10 bg-white/80 dark:bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-200/40 dark:border-slate-800/30 w-fit">
            <svg className="w-4 h-4 text-purple-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.173-.44.814-.44.987 0l1.594 4.053a.5.5 0 00.383.332l4.37.587c.478.064.669.64.321.974l-3.232 3.109a.5.5 0 00-.142.443l.876 4.312c.095.467-.406.831-.818.577L12 15.68l-3.83 2.21a.5.5 0 00-.236.417c-.412.254-.913-.11-.818-.577l.876-4.312a.5.5 0 00-.142-.443L4.618 9.947c-.348-.334-.157-.91.322-.974l4.37-.587a.5.5 0 00.382-.332l1.594-4.053z" />
            </svg>
            <span className="text-[10px] font-bold tracking-wider uppercase">About Me</span>
          </div>

          {/* User Photo & Floating Spheres */}
          <div className="my-auto relative flex justify-center items-center z-10">
            <div className="absolute top-2 left-6 w-10 h-10 rounded-full bg-linear-to-tr from-blue-400 to-indigo-500 shadow-lg animate-float opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-8 right-4 w-8 h-8 rounded-full bg-linear-to-tr from-pink-400 to-rose-500 shadow-lg animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-0 w-6 h-6 rounded-full bg-linear-to-tr from-yellow-300 to-orange-400 shadow-md animate-float pointer-events-none" style={{ animationDelay: '3s' }}></div>
            <div className="relative w-56 h-56 rounded-full p-1.5 bg-linear-to-tr from-purple-500 via-pink-400 to-blue-500 shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 p-0.5 overflow-hidden">
                <img
                  src={homeData.aboutMe.avatar}
                  alt={homeData.aboutMe.name}
                  className="w-full h-full object-cover object-top rounded-full select-none"

                />
              </div>
            </div>
          </div>

          {/* User Info Texts */}
          <div className="text-left z-10">
            <span className="text-slate-400 text-xs font-semibold">Hi, I'm</span>
            <h1 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight mt-0.5 leading-tight">
              {homeData.aboutMe.name}
            </h1>
            <p className="text-purple-600 dark:text-purple-400 font-bold text-xs mt-0.5">
              {homeData.aboutMe.title}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed mt-2">
              {homeData.aboutMe.bio}
            </p>
          </div>

          {/* Core Skills Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4 z-10">
            {homeData.aboutMe.tags.map((tag) => (
              <div
                key={tag.name}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-xs border border-transparent ${tag.colorClass}`}
              >
                <Icon name={tag.icon} className="w-3.5 h-3.5" />
                <span>{tag.name}</span>
              </div>
            ))}
          </div>

          {/* Signature & CTA Button */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-200/40 dark:border-slate-800/40 z-10">
            <div className="font-signature text-2xl text-slate-800 dark:text-slate-100 rotate-[-4deg] pl-1 select-none">
              {homeData.aboutMe.signature}
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="w-11 h-11 rounded-full bg-linear-to-tr from-brand-purple to-indigo-600 hover:from-brand-purple-light hover:to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-brand-purple/20 active:scale-95 transition-all cursor-pointer"
              aria-label="Contact Abdelrahman"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Middle Section: Title, Video Showcase (Left) + Stats (Right), and 4 Services row below */}
      <div className="grow h-auto lg:h-full flex flex-col justify-between gap-6">
        {/* Header Title */}
        <div className="flex items-center justify-between text-left px-2 shrink-0">
          <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center">
            {homeData.featuredWork.title}
            <span className="text-brand-purple font-extrabold ml-1">.</span>
          </h2>
          {/* Subtle top right icon indicator */}
          <div className="text-slate-700 dark:text-slate-400 hover:text-brand-purple transition-colors cursor-pointer">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>

        {/* Middle content section (Featured Video & Stats Cards side-by-side) */}
        <div className="grow flex flex-col md:flex-row gap-6 min-h-0">
          {/* Video Showcase Card */}
          <div className="grow h-64 lg:h-auto shadow-[0_10px_30px_rgba(0,0,0,0.03)] glass-card-interactive bg-gradient-showcase rounded-4xl p-3 flex flex-col justify-between relative overflow-hidden group min-h-0">
            {/* Main Video Element */}
            <div className="w-full h-full rounded-3xl overflow-hidden relative cursor-pointer shadow-inner" onClick={togglePlay}>
              <video
                ref={videoRef}
                src={homeData.featuredWork.videoUrl}
                className="w-full h-full object-cover select-none scale-100 group-hover:scale-102 transition-transform duration-700"
                loop
                muted
                playsInline
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className={`w-14 h-14 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${isPlaying ? 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100' : 'opacity-100 scale-100'
                    }`}
                  aria-label={isPlaying ? "Pause Case Study" : "Play Case Study"}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 ml-0" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Bottom Featured overlay tag */}
              <div className="absolute bottom-4 left-4 flex justify-between items-end right-4 pointer-events-none">
                <div className="text-left text-white drop-shadow-md">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-200">
                    {homeData.featuredWork.subtitle}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('projects');
                    }}
                    className="pointer-events-auto mt-0.5 flex items-center gap-1 text-xs font-bold hover:text-purple-300 transition-colors group/link cursor-pointer"
                  >
                    <span>{homeData.featuredWork.actionText}</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats stack on the right (matches height of video card) */}
          <div className="w-full md:w-55 shrink-0 flex flex-col justify-between gap-4 h-auto lg:h-full">
            {/* Stat Card 1: Completed Projects */}
            <div
              onClick={() => onNavigate('projects')}
              className="flex-1 shadow-[0_10px_30px_rgba(0,0,0,0.03)] glass-card-interactive bg-#FFFFFF dark:bg-slate-900/60 rounded-4xl p-5 flex flex-col justify-between text-left cursor-pointer relative overflow-hidden group min-h-0"
            >
              <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 to-transparent pointer-events-none"></div>
              <div className="flex justify-between items-start z-10">
                <div>
                  <span className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
                    {homeData.stats.projects.count}
                  </span>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold tracking-wide mt-1.5 leading-tight">
                    {homeData.stats.projects.label}
                  </p>
                </div>
                {/* Sparkline icon */}
                <div className="text-orange-500">
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
              </div>

              {/* Inline SVG Chart */}
              <div className="w-full h-12 relative z-10 mt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(249, 115, 22, 0.4)" />
                      <stop offset="100%" stopColor="rgba(249, 115, 22, 0.0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,25 Q15,10 30,22 T60,5 T90,12 L100,5"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,25 Q15,10 30,22 T60,5 T90,12 L100,5 L100,30 L0,30 Z"
                    fill="url(#orangeGrad)"
                  />
                </svg>
              </div>
            </div>

            {/* Stat Card 2: Awards */}
            <div
              onClick={() => onNavigate('awards')}
              className="flex-1 shadow-[0_10px_30px_rgba(0,0,0,0.03)] glass-card-interactive bg-linear-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-4xl p-5 flex flex-col justify-between text-left cursor-pointer relative overflow-hidden group text-white min-h-0"
            >
              <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 to-transparent pointer-events-none"></div>
              <div className="flex justify-between items-start z-10">
                <div>
                  <span className="text-3xl font-black tracking-tight">
                    {homeData.stats.awards.count}
                  </span>
                  <p className="text-[10px] text-purple-100 font-bold tracking-wide mt-1.5 leading-tight">
                    {homeData.stats.awards.label}
                  </p>
                </div>
                {/* Trophy outline */}
                <div className="text-white">
                  <svg className="w-5.5 h-5.5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.375m-1.5 0H9m.75-1.125c.29 0 .562-.095.78-.258a2.98 2.98 0 00-.78-.867V8.25h1.5v3.375M16.5 8.25v3.375c0 .621-.504 1.125-1.125 1.125h-.375m-1.5 0H9M16.5 8.25a3 3 0 00-3-3h-3a3 3 0 00-3 3m9 0V6a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 006 6v2.25m10.5 0h-9m9 0a3 3 0 01-3 3h-3a3 3 0 01-3-3" />
                  </svg>
                </div>
              </div>

              {/* Solid color trophy block */}
              <div className="w-full flex justify-center items-end h-12 mt-2 relative z-10">
                <div className="w-full h-full bg-white/20 rounded-xl flex items-center justify-center shadow-xs border border-white/10">
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest text-center leading-tight px-1">
                    Top Rated Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: 4 Services Grid row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0 h-auto lg:h-145px">
          {homeData.services.map((service) => {
            return (
              <div
                key={service.slug}
                onClick={() => onNavigate('services')}
                className={`${service.bg} shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-transparent rounded-2xl p-3.5 flex flex-col justify-between h-full text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <div className="flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 shadow-xs flex items-center justify-center shrink-0">
                    <Icon name={service.icon} className={`w-4.5 h-4.5 ${service.text}`} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold text-slate-800 dark:text-white leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[9px] mt-0.5 leading-snug line-clamp-2 text-slate-500 dark:text-slate-400">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <svg className={`w-3.5 h-3.5 ${service.text} hover:translate-x-0.5 transition-transform`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
