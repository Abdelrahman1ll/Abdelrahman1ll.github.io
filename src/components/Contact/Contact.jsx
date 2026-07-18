import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import contactData from './data.json';

export default function Contact() {
  const [state, handleSubmit, reset] = useForm("mgvwrjbe");
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    await handleSubmit(e);
  };

  const handleReset = () => {
    reset();
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full min-h-full flex items-center justify-center p-4 md:p-6 animate-fade-in text-left">
      <div className="w-full flex flex-col gap-8">
        
        {/* Header: Title and Subtitle (Full-width at the top) */}
        <div>
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            {contactData.heading}<span className="text-purple-600">.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm max-w-2xl">
            {contactData.subheading}
          </p>
        </div>

        {/* Content Section: Info cards and form side-by-side */}
        <div className="w-full flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left column: Contact Info */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email item */}
              <div className="glass-panel rounded-2xl p-5 border-slate-200/50 dark:border-slate-800/60 flex items-center gap-4 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Email Me</span>
                  <a href={`mailto:${contactData.info.email}`} className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap">
                    {contactData.info.email}
                  </a>
                </div>
              </div>

              {/* Phone item */}
              <div className="glass-panel rounded-2xl p-5 border-slate-200/50 dark:border-slate-800/60 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.117-6.942-6.942l1.293-.97c.362-.271.528-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Call Me</span>
                  <a href={`tel:${contactData.info.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors whitespace-nowrap">
                    {contactData.info.phone}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="glass-panel rounded-2xl p-5 border-slate-200/50 dark:border-slate-800/60 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Location</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white whitespace-nowrap">
                    {contactData.info.location}
                  </span>
                </div>
              </div>

              {/* GitHub item */}
              <div className="glass-panel rounded-2xl p-5 border-slate-200/50 dark:border-slate-800/60 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">GitHub</span>
                  <a href={contactData.info.github} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors whitespace-nowrap">
                    Abdelrahman1ll
                  </a>
                </div>
              </div>

              {/* LinkedIn item */}
              <div className="glass-panel rounded-2xl p-5 border-slate-200/50 dark:border-slate-800/60 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">LinkedIn</span>
                  <a href={contactData.info.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">
                    Abdelrahman Mohamed
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/10 border border-purple-100/50 dark:border-purple-900/10 text-xs text-purple-900/80 dark:text-purple-300/80 leading-relaxed font-semibold">
              🚀 {contactData.info.availability}
            </div>
          </div>

          {/* Right column: Form */}
          <div className="flex-[1.2] w-full shrink-0">
            <div className="glass-panel rounded-4xl p-6 border-slate-200/50 dark:border-slate-800/85 relative overflow-hidden">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-up">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-6">
                  Message Sent!
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-xs leading-relaxed">
                  Thank you for reaching out. I'll review your details and respond as soon as possible.
                </p>
                <button 
                  onClick={handleReset}
                  className="mt-8 px-6 py-3 rounded-xl bg-brand-purple hover:bg-brand-purple-light text-white font-semibold text-xs transition-all cursor-pointer shadow-md shadow-brand-purple/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1">
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contactData.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 dark:focus:border-purple-500 focus:outline-none text-sm text-slate-800 dark:text-white transition-colors"
                      required
                    />
                  </div>
                  {/* Email Input */}
                  <div className="flex flex-col gap-1">
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contactData.form.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 dark:focus:border-purple-500 focus:outline-none text-sm text-slate-800 dark:text-white transition-colors"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-xs font-semibold text-rose-500 block px-1 mt-1"
                    />
                  </div>
                </div>
                {/* Subject Input */}
                <div className="flex flex-col gap-1">
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={contactData.form.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border dark:border-slate-800 dark:focus:border-purple-500 focus:outline-none text-sm text-slate-800 dark:text-white transition-colors"
                  />
                </div>
                {/* Message Input */}
                <div className="flex flex-col gap-1">
                  <textarea 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactData.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border dark:border-slate-800 dark:focus:border-purple-500 focus:outline-none text-sm text-slate-800 dark:text-white transition-colors resize-none"
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-xs font-semibold text-rose-500 block px-1 mt-1"
                  />
                </div>

                {errorMsg && (
                  <span className="text-xs font-semibold text-rose-500 block px-1">
                    {errorMsg}
                  </span>
                )}

                <button 
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4.5 rounded-xl bg-brand-purple hover:bg-brand-purple-light disabled:bg-brand-purple/40 text-white font-bold text-sm tracking-wide shadow-lg shadow-brand-purple/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {state.submitting && (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  <span>{state.submitting ? contactData.form.buttonSendingText : contactData.form.buttonText}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
