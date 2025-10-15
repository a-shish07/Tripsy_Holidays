import clsx from 'classnames';

function Container({ children, className, id }) {
  return (
    <section id={id} className={clsx('px-6 py-20 md:px-12 lg:px-24', className)}>
      <div className="mx-auto max-w-6xl space-y-12 md:space-y-16 lg:space-y-20">{children}</div>
    </section>
  );
}

export default Container;