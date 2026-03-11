import SectionHeading from "./ui/SectionHeading";
import SectionReveal from "./SectionReveal";
import { contact } from "@/data/portfolio";

const links = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    color:
      "from-brand-500/20 to-brand-600/10 border-brand-500/30 hover:border-brand-400/60",
    iconColor: "text-brand-400",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: contact.location,
    href: null,
    color:
      "from-teal-500/20 to-teal-600/10 border-teal-500/30 hover:border-teal-400/60",
    iconColor: "text-teal-400",
  },
  {
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    value: "View Profile",
    href: contact.linkedin,
    color:
      "from-sky-500/20 to-sky-600/10 border-sky-500/30 hover:border-sky-400/60",
    iconColor: "text-sky-400",
  },
  {
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: contact.whatsapp,
    color:
      "from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-400/60",
    iconColor: "text-green-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading eyebrow="Get In Touch" title="Contact Me" />
        </SectionReveal>

        <SectionReveal direction="up" delay="delay-1">
          <p className="text-center text-slate-400 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            {contact.message}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map(({ icon, label, value, href, color, iconColor }, i) => {
            const card = (
              <div
                className={`group flex items-center gap-4 p-5 rounded-2xl border bg-gradient-to-br ${color}
                  transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                    bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${icon} ${iconColor} text-base`} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[2.5px] text-slate-500 mb-0.5">
                    {label}
                  </p>
                  <p className="text-slate-200 font-medium text-sm">{value}</p>
                </div>
                {href && (
                  <i className="fas fa-arrow-right text-[10px] text-slate-600 group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                )}
              </div>
            );

            return (
              <SectionReveal
                key={label}
                direction="up"
                delay={`delay-${i + 2}`}
              >
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal direction="up" delay="delay-6">
          <div className="mt-16 flex justify-center">
            <div
              className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-700/50
              text-emerald-300 text-xs font-medium px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to new opportunities
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
