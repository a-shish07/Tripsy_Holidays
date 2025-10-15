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
        'mx-auto max-w-3xl space-y-4 text-white',
        alignment === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyeline && (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-ocean">
          {eyeline}
        </span>
      )}
      <h2 className="font-display text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-white/70 md:text-xl">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;