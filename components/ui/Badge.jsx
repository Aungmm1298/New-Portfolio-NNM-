const palette = {
  brand:   'bg-brand-50 text-brand-600 border-brand-200/70',
  teal:    'bg-teal-50  text-teal-600  border-teal-200/70',
  rose:    'bg-rose-50  text-rose-600  border-rose-200/70',
  sky:     'bg-sky-50   text-sky-600   border-sky-200/70',
  amber:   'bg-amber-50 text-amber-700 border-amber-200/70',
  slate:   'bg-slate-100 text-slate-600 border-slate-200/70',
  current: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
};

export default function Badge({ children, variant = 'slate', className = '' }) {
  const cls = palette[variant] ?? palette.slate;
  return (
    <span
      className={`inline-block text-[0.67rem] font-semibold uppercase tracking-[2px]
        border px-2.5 py-0.5 rounded-full ${cls} ${className}`}
    >
      {children}
    </span>
  );
}
