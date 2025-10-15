import clsx from 'classnames';

function Badge({ children, className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border border-ocean/30 bg-ocean/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-ocean',
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Badge;