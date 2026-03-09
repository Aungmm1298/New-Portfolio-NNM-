'use client';
import { useState, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import SectionReveal from './SectionReveal';
import { contact } from '@/data/portfolio';

/* ─ EmailJS config ─────────────────────────────────────────
   Replace the three placeholders below with values from
   https://dashboard.emailjs.com — see README for details.
──────────────────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

function InfoItem({ icon, label, value, href, color = 'brand' }) {
  const colorCls =
    color === 'teal' ? 'bg-teal-900/50   border-teal-600/40   text-teal-400'
      : color === 'whatsapp' ? 'bg-green-900/50  border-green-600/40  text-green-400'
        : 'bg-brand-700/50  border-brand-500/40  text-brand-400';

  const content = (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
        border ${colorCls} group-hover:scale-105 transition-transform`}>
        <i className={`${icon} text-base`} />
      </div>
      <div>
        <p className="text-[0.7rem] text-slate-400 uppercase tracking-[2px] font-medium mb-0.5">
          {label}
        </p>
        <p className="text-slate-400 font-medium text-sm">{value}</p>
      </div>
    </div>
  );

  return href
    ? <a href={href} rel="noopener noreferrer" target="_blank">{content}</a>
    : <div>{content}</div>;
}

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const subject = form.subject.value.trim();
    const msg = form.message.value.trim();

    if (!name || !email || !msg) {
      setStatus('error');
      setMessage('Please fill in all required fields.');
      return;
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Dynamically load EmailJS so it doesn't block server rendering
      const emailjs = (await import('@emailjs/browser')).default;
      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
      setStatus('success');
      setMessage('Your message was sent successfully! I will get back to you soon.');
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again or email me directly.');
    }
  }

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading eyebrow="Get In Touch" title="Contact Me" />
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — contact info */}
          <SectionReveal direction="left" delay="delay-1" className="lg:col-span-2">
            <div className="bg-brand-700/60 rounded-2xl border border-brand-600/40 shadow-sm p-7 h-full flex flex-col">
              <h3 className="font-serif text-xl font-semibold text-slate-100 mb-2">
                Let's Connect
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-7">
                {contact.message}
              </p>

              <div className="flex flex-col gap-4">
                <InfoItem
                  icon="fas fa-envelope"
                  label="Email"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                  color="brand"
                />
                <InfoItem
                  icon="fas fa-map-marker-alt"
                  label="Location"
                  value={contact.location}
                  color="teal"
                />
                <InfoItem
                  icon="fab fa-linkedin-in"
                  label="LinkedIn"
                  value="View Profile"
                  href={contact.linkedin}
                  color="brand"
                />
                <InfoItem
                  icon="fab fa-whatsapp"
                  label="WhatsApp"
                  value="Chat on WhatsApp"
                  href={contact.whatsapp}
                  color="whatsapp"
                />
              </div>

              {/* Availability badge */}
              <div className="mt-auto pt-7">
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200
                  text-emerald-700 text-xs font-medium px-3.5 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open to new opportunities
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Right — form */}
          <SectionReveal direction="right" delay="delay-2" className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-brand-700/60 rounded-2xl border border-brand-600/40 shadow-sm p-7"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-[2px] mb-1.5">
                    Name <span className="text-brand-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your full name"
                    className="w-full bg-brand-800/80 border border-brand-600/50 rounded-xl px-4 py-3 text-sm
                      text-slate-100 placeholder:text-slate-500 focus:outline-none
                      focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20
                      transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-[2px] mb-1.5">
                    Email <span className="text-brand-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    className="w-full bg-brand-800/80 border border-brand-600/50 rounded-xl px-4 py-3 text-sm
                      text-slate-100 placeholder:text-slate-500 focus:outline-none
                      focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20
                      transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-[2px] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can I help you?"
                  className="w-full bg-brand-800/80 border border-brand-600/50 rounded-xl px-4 py-3 text-sm
                    text-slate-100 placeholder:text-slate-500 focus:outline-none
                    focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20
                    transition-all duration-200"
                />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-[2px] mb-1.5">
                  Message <span className="text-brand-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full bg-brand-800/80 border border-brand-600/50 rounded-xl px-4 py-3 text-sm
                    text-slate-100 placeholder:text-slate-500 focus:outline-none
                    focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20
                    transition-all duration-200 resize-none"
                  required
                />
              </div>

              {/* Status message */}
              {message && (
                <p className={`text-sm font-medium mb-4 px-4 py-3 rounded-xl
                  ${status === 'success'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2.5 bg-brand-500
                  hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed
                  text-white font-semibold text-sm px-6 py-3.5 rounded-xl
                  transition-all duration-200 hover:-translate-y-0.5
                  hover:shadow-lg hover:shadow-brand-500/25"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10"
                        stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <><span>✉</span> Send Message</>
                )}
              </button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
