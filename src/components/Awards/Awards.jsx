import React from 'react';

const achievements = [
  {
    year: "2025",
    title: "Best SaaS Solution Award",
    issuer: "Tech Innovation Summit",
    description: "Awarded for the development and architecture of a scalable, high-conversion analytics platform for business operations."
  },
  {
    year: "2024",
    title: "Outstanding Mobile UI Award",
    issuer: "Design & UX Showcase",
    description: "Honored for designing a minimalist, high-accessibility banking mobile user interface that recorded 98% user satisfaction."
  },
  {
    year: "2023",
    title: "Top-Rated Full-Stack Contractor",
    issuer: "Upwork Global Developer Network",
    description: "Ranked in the top 1% of independent developers globally based on client satisfaction, job success score, and technical scope."
  },
  {
    year: "2022",
    title: "Developer of the Year (Egypt)",
    issuer: "Regional Tech Coalition",
    description: "Presented to the most impactful developer contributing to local open-source libraries and digital startup products."
  }
];

const badges = [
  { label: "AWS Certified Developer", icon: "cloud" },
  { label: "React Native Lead Cert", icon: "shield" },
  { label: "GraphQL Architect Expert", icon: "academic" },
  { label: "MongoDB Dev Specialist", icon: "database" }
];

const Icon = ({ name, className }) => {
  switch (name) {
    case 'cloud':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case 'academic':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      );
    case 'database':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.277-3.694 4.125-8.25 4.125s-8.25-1.848-8.25-4.125M3.75 10.125v3.75m16.5-3.75v3.75m-16.5 0c0 2.277-3.694 4.125-8.25 4.125s-8.25-1.848-8.25-4.125M3.75 13.875v3.75" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Awards() {
  return (
    <section className="w-full p-4 md:p-6 animate-fade-in flex flex-col gap-8 text-left">
      <div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Awards<span className="text-purple-600">.</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm max-w-xl">
          Recognition, industry certifications, and milestones achieved through dedicated full-stack execution.
        </p>
      </div>

      {/* Badges and Certifications */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="glass-panel border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-4 flex items-center gap-3 bg-white/40 dark:bg-slate-900/40"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Icon name={badge.icon} className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-snug">
              {badge.label}
            </span>
          </div>
        ))}
      </div>

      {/* Awards History Timeline */}
      <div className="glass-panel rounded-[2.5rem] p-6 md:p-10 border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden flex flex-col gap-8">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none"></div>

        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
            History & Milestones<span className="text-purple-600">.</span>
          </h3>
          <p className="text-slate-400 text-xs mt-1">Honors received for product development, code quality, and engineering excellence.</p>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-6 md:pl-8 border-l border-slate-200 dark:border-slate-800 flex flex-col gap-8">
          {achievements.map((item) => (
            <div key={item.title} className="relative group">
              {/* Point Indicator */}
              <div className="absolute -left-7.75 md:-left-9.75 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-purple-600 group-hover:scale-125 transition-transform duration-300"></div>

              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-sm font-black text-purple-600 dark:text-purple-400">
                    {item.year}
                  </span>
                  <h4 className="text-base font-bold text-slate-800 dark:text-white">
                    {item.title}
                  </h4>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Issued by {item.issuer}
                </span>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
