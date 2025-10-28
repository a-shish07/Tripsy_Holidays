import clsx from 'classnames';

function SectionHeading({
  eyeline,
  title,
  subtitle,
  alignment = 'center',
  className,
}) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-4xl space-y-6 text-white',
        alignment === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyeline && (
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ocean/25 to-primary/25 border border-ocean/40 px-6 py-3 text-xs font-display font-bold uppercase tracking-[0.35em] text-ocean/95">
          {eyeline}
        </span>
      )}
      <h2 className="font-display text-5xl leading-tight tracking-tight text-white md:text-6xl lg:text-7xl font-bold">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-white/75 md:text-xl leading-relaxed font-body">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;