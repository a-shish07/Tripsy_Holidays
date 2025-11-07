import clsx from 'classnames';

function SectionHeading({
  eyeline,
  title,
  subtitle,
  alignment = 'center',
  className,
  tone = 'light',
}) {
  const isLight = tone === 'light';

  return (
    <div
      className={clsx(
        'mx-auto max-w-4xl space-y-6',
        isLight ? 'text-slate-100' : 'text-slate-900',
        alignment === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyeline && (
        <span
          className={clsx(
            'inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-display font-bold uppercase tracking-[0.35em]',
            isLight
              ? 'border border-white/20 bg-white/5 text-ocean'
              : 'border border-ocean/30 bg-white text-ocean'
          )}
        >
          {eyeline}
        </span>
      )}
      <h2
        className={clsx(
          'font-display text-5xl leading-tight tracking-tight md:text-6xl lg:text-7xl font-bold',
          isLight ? 'text-slate-100' : 'text-slate-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'text-lg md:text-xl leading-relaxed font-body',
            isLight ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;