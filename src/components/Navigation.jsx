import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import clsx from 'classnames';
import Button from './Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  // { label: 'Destinations', href: '/destinations' },
];

const servicesMenu = [
  { label: 'Domestic Tours', href: '/services' },
  { label: 'International Tours', href: '/services' },
  { label: 'Spiritual Tours', href: '/services' },
  { label: 'Corporate Travels', href: '/services' },
  { label: 'Fixed Departure', href: '/services' },
  { label: 'Hotel Booking', href: '/services' },
  { label: 'Air Ticketing', href: '/services' },
  { label: 'Adventures Tours', href: '/services' },
  { label: 'Honeymoon Packages', href: '/services' },
];

const packagesMenu = [
  {
    category: 'Domestic Tour Packages',
    items: [
      { label: 'Uttarakhand Packages', href: '/packages' },
      { label: 'Himachal Packages', href: '/packages' },
      { label: 'Kashmir Packages', href: '/packages' },
      { label: 'Rajasthan Packages', href: '/packages' },
      { label: 'Kerala Packages', href: '/packages' },
      { label: 'Ladakh Packages', href: '/packages' },
      { label: 'Gujarat Packages', href: '/packages' },
      { label: 'Northeast Packages', href: '/packages' },
      { label: 'Goa Packages', href: '/packages' },
      { label: 'Lakshadweep Packages', href: '/packages' },
      { label: 'Uttar Pradesh Packages', href: '/packages' },
    ],
  },
  {
    category: 'International Tour Packages',
    items: [
      { label: 'Bali Packages', href: '/packages' },
      { label: 'Andaman Packages', href: '/packages' },
      { label: 'Maldives Packages', href: '/packages' },
      { label: 'Thailand Packages', href: '/packages' },
      { label: 'Malaysia Packages', href: '/packages' },
      { label: 'Dubai Packages', href: '/packages' },
      { label: 'Sri Lanka Packages', href: '/packages' },
      { label: 'Bhutan Packages', href: '/packages' },
      { label: 'Nepal Packages', href: '/packages' },
    ],
  },
  {
    category: 'Spiritual Tour Packages',
    items: [
      { label: 'Kashi Tour Packages', href: '/packages' },
      { label: 'Chardham Yatra', href: '/packages' },
      { label: 'Chardham Yatra from Haridwar', href: '/packages' },
      { label: 'Chardham Yatra from Delhi', href: '/packages' },
      { label: 'Do Dhaam Yatra', href: '/packages' },
      { label: 'Do Dhaam Yatra from Haridwar', href: '/packages' },
      { label: 'Do Dhaam Yatra from Delhi', href: '/packages' },
      { label: 'Kedarnath Yatra', href: '/packages' },
      { label: 'Kedarnath Yatra from Haridwar', href: '/packages' },
      { label: 'Kedarnath Yatra from Delhi', href: '/packages' },
      { label: 'Amarnath Yatra', href: '/packages' },
      { label: 'Kailash Mansarovar Packages', href: '/packages' },
      { label: 'Kailash Mansarovar Parikarma from Kathmandu', href: '/packages' },
    ],
  },
  {
    category: 'Yatra tour by Helicopter',
    items: [
      { label: 'Chardham Yatra by Helicopter from Dehradun', href: '/packages' },
      { label: 'Do Dhaam Yatra by Helicopter from Dehradun', href: '/packages' },
      { label: 'Amarnath Yatra by Helicopter', href: '/packages' },
      { label: 'Kailash Mansarovar Yatra by Helicopter', href: '/packages' },
    ],
  },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

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
      <div className="w-full px-4 py-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-night/75 px-5 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Tripsy Holidays logo"
              className="h-12 w-12 rounded-full border border-white/20 object-cover"
            />
            <div className="leading-tight">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Tripsy Holidays</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                <span>{link.label}</span>
                <span className="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-white/80 transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </Link>
            ))}

            <div className="relative group">
              <button className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white flex items-center gap-2">
                <span>Services</span>
                <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-48 rounded-lg border border-white/10 bg-night/95 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-xl">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white flex items-center gap-2">
                <span>Packages</span>
                <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-56 rounded-lg border border-white/10 bg-night/95 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-xl z-50 py-1">
                {packagesMenu.map((category, idx) => (
                  <div key={category.category} className="relative group/submenu">
                    <button className="w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between">
                      <span>{category.category}</span>
                      <FaChevronDown className="text-xs" />
                    </button>
                    <div className="absolute left-full top-0 w-64 rounded-lg border border-white/10 bg-night/95 shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 backdrop-blur-xl z-50 py-1 pointer-events-none group-hover/submenu:pointer-events-auto">
                      {category.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/testimonials" className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white">
              <span>Testimonials</span>
              <span className="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-white/80 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>

            <Link to="/blog" className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white">
              <span>Blog</span>
              <span className="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-white/80 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>

            <Link to="/contact" className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white">
              <span>Contact</span>
              <span className="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-white/80 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>

            <Button variant="glow" size="sm" className="ml-4 tracking-[0.2em] uppercase">
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
          isOpen ? 'max-h-[80vh] pb-6 opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <nav className="space-y-2 rounded-3xl border border-white/10 bg-night/90 px-6 py-6 backdrop-blur-xl overflow-y-auto max-h-[70vh]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block px-4 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <span>Services</span>
              <FaChevronDown
                className={`text-xs transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`}
              />
            </button>
            {openDropdown === 'services' && (
              <div className="mt-1 space-y-1 pl-4">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'packages' ? null : 'packages')}
              className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <span>Packages</span>
              <FaChevronDown
                className={`text-xs transition-transform ${openDropdown === 'packages' ? 'rotate-180' : ''}`}
              />
            </button>
            {openDropdown === 'packages' && (
              <div className="mt-1 space-y-1 pl-4">
                {packagesMenu.map((category) => (
                  <div key={category.category}>
                    <button
                      onClick={() => setOpenSubDropdown(openSubDropdown === category.category ? null : category.category)}
                      className="w-full text-left flex items-center justify-between px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <span>{category.category}</span>
                      <FaChevronDown
                        className={`text-xs transition-transform ${openSubDropdown === category.category ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openSubDropdown === category.category && (
                      <div className="mt-1 space-y-1 pl-4">
                        {category.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                              setOpenSubDropdown(null);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/testimonials"
            className="block px-4 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>

          <Link
            to="/blog"
            className="block px-4 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="block px-4 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <Button variant="glow" className="w-full mt-4 uppercase tracking-[0.25em]">
            Plan a Consultation
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;