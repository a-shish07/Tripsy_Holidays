import clsx from 'classnames';

function Container({ children, className, id }) {
  return (
    <section id={id} className={clsx('px-4 py-16 sm:px-6 md:px-8 lg:px-12', className)}>
      <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">{children}</div>
    </section>
  );
}

export default Container;