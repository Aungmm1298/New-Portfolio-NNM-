import { navigation, contact } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-xl font-semibold text-brand-500">
              Naing Naing Maw
            </p>
            <p className="text-slate-400 text-xs mt-0.5">
              Electrical Power Engineer · MBA Candidate · Istanbul
            </p>
          </div>


          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full flex items-center justify-center
                bg-brand-800 hover:bg-brand-700 border border-brand-700/60
                hover:border-brand-500 text-slate-400 hover:text-brand-400
                transition-all duration-200 hover:-translate-y-0.5"
            >
              <i className="fas fa-envelope text-xs" />
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full flex items-center justify-center
                bg-brand-800 hover:bg-green-900/60 border border-brand-700/60
                hover:border-green-600/60 text-slate-400 hover:text-green-400
                transition-all duration-200 hover:-translate-y-0.5"
            >
              <i className="fab fa-whatsapp text-xs" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full flex items-center justify-center
                bg-brand-800 hover:bg-brand-700 border border-brand-700/60
                hover:border-brand-500 text-slate-400 hover:text-brand-400
                transition-all duration-200 hover:-translate-y-0.5"
            >
              <i className="fab fa-linkedin-in text-xs" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-700/40 text-center">
          <p className="text-slate-400 text-xs">
            © {year} Naing Naing Maw. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
