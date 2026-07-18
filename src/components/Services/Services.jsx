import servicesData from './data.json';

const servicesList = [
  {
    title: "Web Development",
    description: "Creating highly performant, responsive, and SEO-optimized web applications using modern stacks like React, Next.js, and Vite. Focused on accessibility, speed, and premium user experiences.",
    icon: "globe",
    price: "From $2,500",
    features: ["Single Page Applications (SPAs)", "Server-Side Rendering (SSR)", "Custom Headless CMS Integrations", "Interactive UI Animations", "SEO & Performance Optimization"]
  },
  {
    title: "Mobile Apps",
    description: "Designing and developing cross-platform native mobile applications for iOS & Android. Leveraging React Native and Flutter to deliver smooth gestures, fast boot times, and offline capabilities.",
    icon: "phone",
    price: "From $3,500",
    features: ["Cross-Platform App Development", "Push Notification Systems", "Native API Integrations", "App Store & Play Store Publishing", "Local Storage & Data Sync"]
  },
  {
    title: "Desktop Apps",
    description: "Developing robust, lightweight desktop clients for Windows and macOS systems using Electron.js. Connecting with backend servers to manage systems, such as enterprise cashier and POS software.",
    icon: "desktop",
    price: "From $4,000",
    features: ["Windows & macOS native clients", "Auto-update pipelines", "Low memory footprint", "Local system file operations", "System tray menu integration"]
  },
  {
    title: "Backend & API Architecture",
    description: "Building scalable, secured, and high-performance server structures using Node.js, Express, and FastAPI. Designing clean REST & GraphQL APIs integrated with databases like PostgreSQL and Redis.",
    icon: "rocket",
    price: "From $2,000",
    features: ["Microservices Architecture", "REST & GraphQL Gateways", "JWT Auth & Role-Based Access Control", "Database Indexing & Query Tuning", "Docker & Kubernetes Deployment"]
  }
];

const workflowSteps = [
  { step: "01", name: "Discovery", desc: "Understanding goals, requirements, target audience, and preparing initial wireframes." },
  { step: "02", name: "Design & Specs", desc: "Crafting beautiful UI mockups in Figma and mapping out database & API structures." },
  { step: "03", name: "Development", desc: "Writing clean, commented, and thoroughly tested code with continuous integration." },
  { step: "04", name: "Launch & Support", desc: "Deploying applications, configuring monitoring, and providing post-launch optimization." }
];

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

export default function Services({ onNavigate }) {
  return (
    <section className="w-full p-4 md:p-6 animate-fade-in flex flex-col gap-8 text-left">
      <div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Services<span className="text-purple-600">.</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm max-w-xl">
          High-end full-stack consulting and development. Custom software tailored to match your specific business requirements.
        </p>
      </div>

      {/* Services detailed list */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {servicesList.map((service, index) => {
          const serviceColors = [
            { border: 'hover:border-blue-500/30', text: 'text-blue-600 dark:text-blue-400' },
            { border: 'hover:border-emerald-500/30', text: 'text-emerald-600 dark:text-emerald-400' },
            { border: 'hover:border-indigo-500/30', text: 'text-indigo-600 dark:text-indigo-400' },
            { border: 'hover:border-rose-500/30', text: 'text-rose-600 dark:text-rose-400' }
          ];
          const color = serviceColors[index % serviceColors.length];

          return (
            <div
              key={service.title}
              className={`glass-panel rounded-4xl p-6 md:p-8 flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 ${color.border} group`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center ${color.text} shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon name={service.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 bg-slate-100/60 dark:bg-slate-800/40 px-3.5 py-1.5 rounded-xl border border-slate-200/20 dark:border-slate-800/20">
                    {service.price}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>

                <div className="mt-2 border-t border-slate-200/30 dark:border-slate-800/30 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Included Deliverables</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                    {service.features.map(feat => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <svg className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Technical Capabilities Section */}
      <div className="flex flex-col gap-6 mt-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
            {servicesData.heading}<span className="text-purple-600">.</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
            {servicesData.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(servicesData.skills).map(([category, items], index) => {
            // Define unique theme coloring for each category to match existing design language
            const themes = [
              {
                bg: "bg-[#F5F3FF] dark:bg-purple-950/20",
                border: "border-purple-100/50 dark:border-purple-900/20 hover:border-purple-400/40",
                accent: "bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                bg: "bg-[#FFF7ED] dark:bg-orange-950/20",
                border: "border-orange-100/50 dark:border-orange-900/20 hover:border-orange-400/40",
                accent: "bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                )
              },
              {
                bg: "bg-[#EFF6FF] dark:bg-blue-950/20",
                border: "border-blue-100/50 dark:border-blue-900/20 hover:border-blue-400/40",
                accent: "bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                bg: "bg-[#ECFDF5] dark:bg-emerald-950/20",
                border: "border-emerald-100/50 dark:border-emerald-900/20 hover:border-emerald-400/40",
                accent: "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                bg: "bg-[#FFF1F2] dark:bg-rose-950/20",
                border: "border-rose-100/50 dark:border-rose-900/20 hover:border-rose-400/40",
                accent: "bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ];

            const theme = themes[index % themes.length];

            return (
              <div 
                key={category}
                className={`glass-panel rounded-4xl p-6 border transition-all duration-300 ${theme.border} group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform ${theme.accent}`}>
                    {theme.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
                    {category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span 
                      key={item}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold shadow-xs border border-transparent transition-all hover:scale-105 duration-200 ${theme.accent}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Development Process / Workflow */}
      <div className="glass-panel rounded-4xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/50 mt-2 flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full pointer-events-none"></div>

        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
            How I Work<span className="text-purple-600">.</span>
          </h3>
          <p className="text-slate-400 text-xs mt-1">My structured, collaborative lifecycle ensures projects are delivered on time and spec.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map(step => (
            <div key={step.step} className="flex flex-col gap-2 relative">
              <span className="text-4xl font-black text-purple-600/10 dark:text-purple-400/10 select-none">
                {step.step}
              </span>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white mt-2.5">
                {step.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200/30 dark:border-slate-800/30 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium text-center sm:text-left">
            Have a custom requirement? Let's discuss it to get a customized estimate.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 rounded-xl bg-brand-purple hover:bg-brand-purple-light text-white font-semibold text-xs transition-all shadow-md shadow-brand-purple/20 active:scale-95 cursor-pointer"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
