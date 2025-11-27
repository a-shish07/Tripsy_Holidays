import clsx from 'classnames';

const sizeStyles = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-10 py-4 text-lg',
};

const variantStyles = {
  primary:
    'bg-gradient-to-r from-primary to-ocean hover:from-ocean hover:to-primary text-white shadow-[0_20px_35px_rgba(14,165,233,0.25)] focus-visible:ring-ocean/40',
  secondary:
    'bg-white text-primary border border-slate-200 hover:border-primary/50 hover:shadow-lg focus-visible:ring-primary/30 shadow-sm',
  outline:
    'border border-primary/30 hover:bg-primary/10 focus-visible:ring-primary/30 text-slate-700',
  glow:
    'bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white shadow-[0_30px_55px_rgba(255,138,92,0.35)] focus-visible:ring-accent/40',
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
        'inline-flex items-center justify-center rounded-full font-display font-bold tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white uppercase',
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export default Button;