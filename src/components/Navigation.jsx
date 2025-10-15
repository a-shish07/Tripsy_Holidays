import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import clsx from 'classnames';
import Button from './Button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-night/90 shadow-[0_16px_48px_rgba(12,23,42,0.45)] backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-night/75 px-5 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Tripsy Holidays logo"
              className="h-12 w-12 rounded-full border border-white/20 object-cover"
            />
            <div className="leading-tight">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Tripsy Holidays</span>
              {/* <span className="block font-display text-lg text-white">Designing Bespoke Journeys</span> */}
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                <span>{link.label}</span>
                <span className="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-white/80 transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>
            ))}
            <Button variant="glow" size="sm" className="tracking-[0.2em] uppercase">
              Plan a Consultation
            </Button>
          </nav>

          <button
            type="button"
            className="text-2xl text-white lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          'lg:hidden px-4 transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <nav className="space-y-4 rounded-3xl border border-white/10 bg-night/90 px-6 py-6 text-center text-white/80 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-base font-medium tracking-[0.2em] uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="glow" className="w-full uppercase tracking-[0.25em]">
            Plan a Consultation
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;