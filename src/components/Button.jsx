import clsx from 'classnames';

const sizeStyles = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-10 py-4 text-lg',
};

const variantStyles = {
  primary:
    'bg-gradient-to-r from-ocean to-primary hover:from-primary hover:to-ocean text-white shadow-[0_18px_35px_rgba(14,165,233,0.25)] focus-visible:ring-ocean/50',
  secondary:
    'bg-night/80 text-ocean border border-ocean/30 hover:bg-night focus-visible:ring-ocean/30 shadow-sm',
  outline:
    'border border-ocean/40 hover:bg-ocean/10 focus-visible:ring-ocean/40 text-slate-100',
  glow:
    'bg-gradient-to-r from-ocean to-primary hover:from-primary hover:to-ocean text-white shadow-[0_25px_45px_rgba(14,165,233,0.35)] focus-visible:ring-ocean/50',
};

function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-display font-bold tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night uppercase',
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export default Button;