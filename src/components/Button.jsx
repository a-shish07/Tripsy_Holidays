import clsx from 'classnames';

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantStyles = {
  primary:
    'bg-ocean hover:bg-primary focus-visible:ring-primary shadow-glow text-white',
  secondary:
    'bg-white/10 hover:bg-white/20 focus-visible:ring-white text-white',
  outline:
    'border border-white/30 hover:border-white focus-visible:ring-white text-white',
  glow:
    'bg-gradient-to-r from-ocean to-primary hover:from-primary hover:to-ocean text-white shadow-[0_18px_35px_rgba(14,165,233,0.25)]',
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
        'inline-flex items-center justify-center rounded-full font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night',
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export default Button;