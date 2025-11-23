import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clsx from 'classnames';
import Button from './Button';
import { packages } from '../data/packages';
import { services } from '../data/services';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

const getServicesMenu = () => [
  { label: 'Domestic Tour Package', id: 1 },
  { label: 'International Tour Package', id: 2 },
  { label: 'Spiritual Tours', id: 3 },
  { label: 'Corporate Travels', id: 4 },
  { label: 'Fixed Departure', id: 5 },
  { label: 'Hotel Booking', id: 6 },
  { label: 'Air Ticketing', id: 7 },
  { label: 'Adventure Tours', id: 8 },
  { label: 'Honeymoon Package', id: 9 },
];

const getPackagesMenu = () => {
  const domestic = packages.filter(p => p.category === 'Domestic');
  const international = packages.filter(p => p.category === 'International');
  const spiritual = packages.filter(p => p.category === 'Spiritual');

  const spiritualGrouped = [
    {
      name: 'Kashi Spiritual Tour',
      items: [
        { label: spiritual.find(p => p.id === 24)?.name, id: 24 }
      ]
    },
    {
      name: 'Chardham Yatra',
      items: [
        { label: spiritual.find(p => p.id === 19)?.name, id: 19 },
        { label: spiritual.find(p => p.id === 25)?.name, id: 25 },
        { label: spiritual.find(p => p.id === 26)?.name, id: 26 }
      ]
    },
    {
      name: 'Do Dhaam Yatra',
      items: [
        { label: spiritual.find(p => p.id === 27)?.name, id: 27 },
        { label: spiritual.find(p => p.id === 28)?.name, id: 28 },
        { label: spiritual.find(p => p.id === 29)?.name, id: 29 }
      ]
    },
    {
      name: 'Kedarnath Yatra',
      items: [
        { label: spiritual.find(p => p.id === 30)?.name, id: 30 },
        { label: spiritual.find(p => p.id === 31)?.name, id: 31 },
        { label: spiritual.find(p => p.id === 32)?.name, id: 32 }
      ]
    },
    {
      name: 'Amarnath Yatra',
      items: [
        { label: spiritual.find(p => p.id === 21)?.name, id: 21 }
      ]
    },
    {
      name: 'Kailash Mansarovar',
      items: [
        { label: spiritual.find(p => p.id === 20)?.name, id: 20 },
        { label: spiritual.find(p => p.id === 33)?.name, id: 33 }
      ]
    }
  ];

  const helicopterTours = [
    { label: spiritual.find(p => p.id === 34)?.name, id: 34 },
    { label: spiritual.find(p => p.id === 35)?.name, id: 35 },
    { label: spiritual.find(p => p.id === 36)?.name, id: 36 },
    { label: spiritual.find(p => p.id === 37)?.name, id: 37 }
  ];

  return [
    {
      category: 'Domestic Tour Packages',
      items: domestic.map(p => ({ label: p.name, id: p.id, subcategory: p.subcategory })),
    },
    {
      category: 'International Tour Packages',
      items: international.map(p => ({ label: p.name, id: p.id, subcategory: p.subcategory })),
    },
    {
      category: 'Spiritual Tour Packages',
      subGroups: spiritualGrouped,
    },
    {
      category: 'Helicopter Tours',
      items: helicopterTours,
    },
  ];
};

function Navigation({ openBookingForm }) {
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
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        isScrolled
          ? 'border-white/10 bg-night/95 shadow-[0_20px_50px_rgba(16,28,56,0.55)] backdrop-blur-xl'
          : 'border-transparent bg-night/75 backdrop-blur-xl',
      )}
    >
      <div className="w-full px-4 py-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-night/80 px-6 py-3.5 shadow-[0_22px_55px_rgba(16,28,56,0.45)] backdrop-blur-2xl md:px-8 hover:shadow-[0_30px_70px_rgba(46,76,165,0.45)] transition-shadow duration-300">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpg"
              alt="Tripsy Holidays logo"
              className="h-10 w-10 rounded-full border-2 border-ocean/40 object-cover shadow-lg group-hover:shadow-ocean/40 transition-all duration-300"
            />
            <div className="leading-tight hidden sm:block">
              <span className="text-xs uppercase tracking-[0.35em] text-ocean font-bold">Tripsy</span>
              <span className="text-xs uppercase tracking-[0.35em] text-slate-300 block">Holidays</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Link
                  to={link.href}
                  className="group relative px-6 py-2 text-sm font-display font-bold tracking-wider text-slate-200 hover:text-ocean transition-colors duration-300"
                >
                  <span>{link.label}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-ocean to-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </motion.div>
            ))}

            <div className="relative group">
              <button className="group relative px-6 py-2 text-sm font-display font-bold tracking-wider text-slate-200 hover:text-ocean transition-colors duration-300 flex items-center gap-2">
                <span>Services</span>
                <FaChevronDown className="text-xs transition-transform group-hover:rotate-180 duration-300" />
              </button>
              <div className="absolute left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-night/95 shadow-[0_26px_60px_rgba(15,23,42,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-xl z-50 overflow-hidden">
                {getServicesMenu().map((item) => (
                  <Link
                    key={item.id}
                    to={`/service/${item.id}`}
                    className="block px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-ocean hover:bg-ocean/10 transition-all duration-200 border-b border-white/10 last:border-b-0 tracking-wide"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="group relative px-6 py-2 text-sm font-display font-bold tracking-wider text-slate-200 hover:text-ocean transition-colors duration-300 flex items-center gap-2">
                <span>Packages</span>
                <FaChevronDown className="text-xs transition-transform group-hover:rotate-180 duration-300" />
              </button>
              <div className="absolute left-0 mt-3 w-72 rounded-2xl border border-white/10 bg-night/95 shadow-[0_28px_70px_rgba(15,23,42,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-xl z-50 overflow-visible">
                {getPackagesMenu().map((category) => (
                  <div key={category.category} className="relative group/submenu border-b border-white/10 last:border-b-0">
                    <button className="w-full text-left px-6 py-3.5 text-sm text-slate-200 hover:text-ocean hover:bg-ocean/10 transition-all duration-200 flex items-center justify-between font-semibold tracking-wide">
                      <span>{category.category}</span>
                      <FaChevronDown className="text-xs transition-transform group-hover/submenu:rotate-90 duration-300" />
                    </button>
                    <div className="absolute left-full top-0 ml-0 w-80 rounded-2xl border border-white/10 bg-night/95 shadow-[0_28px_70px_rgba(15,23,42,0.18)] opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 backdrop-blur-xl z-[60] overflow-hidden pointer-events-none group-hover/submenu:pointer-events-auto max-h-96 overflow-y-auto">
                      {category.items ? (
                        category.items.map((item) => (
                          <Link
                            key={item.id}
                            to={item.subcategory === 'Uttarakhand' ? '/packages/uttarakhand' : item.subcategory === 'Himachal Pradesh' ? '/packages/himachal' : item.subcategory === 'Kashmir' ? '/packages/kashmir' : `/package/${item.id}`}
                            className="block px-6 py-3 text-sm text-slate-200 hover:text-ocean hover:bg-ocean/10 transition-all duration-200 font-medium tracking-wide border-b border-white/10 last:border-b-0"
                          >
                            {item.label}
                          </Link>
                        ))
                      ) : (
                        category.subGroups?.map((group) => (
                          <div key={group.name} className="border-b border-white/10 last:border-b-0">
                            <div className="px-6 py-3 text-xs font-display font-bold text-ocean/90 bg-ocean/10 tracking-widest uppercase">
                              {group.name}
                            </div>
                            {group.items.map((item) => (
                              <Link
                                key={item.id}
                                to={`/package/${item.id}`}
                                className="block px-8 py-2.5 text-sm text-slate-200 hover:text-ocean hover:bg-ocean/10 transition-all duration-200 font-medium tracking-wide border-b border-white/10 last:border-b-0"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/testimonials" className="group relative px-6 py-2 text-sm font-display font-bold tracking-wider text-slate-200 hover:text-ocean transition-colors duration-300">
              <span>Testimonials</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-ocean to-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>

            <Link to="/blog" className="group relative px-6 py-2 text-sm font-display font-bold tracking-wider text-slate-200 hover:text-ocean transition-colors duration-300">
              <span>Blog</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-ocean to-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>

            <Link to="/contact" className="group relative px-6 py-2 text-sm font-display font-bold tracking-wider text-slate-200 hover:text-ocean transition-colors duration-300">
              <span>Contact</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-ocean to-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>

            <Button 
              variant="glow" 
              size="sm" 
              className="ml-6 tracking-[0.2em] uppercase font-bold"
              onClick={openBookingForm}
            >
              Book Now
            </Button>
          </nav>

          <button
            type="button"
            className="text-2xl text-slate-100 lg:hidden"
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
        <nav className="space-y-2 rounded-2xl border border-white/10 bg-night/95 px-6 py-6 backdrop-blur-xl overflow-y-auto max-h-[70vh] shadow-[0_26px_60px_rgba(15,23,42,0.14)]">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.href}
                className="block px-5 py-3 text-base font-display font-bold tracking-wider text-slate-200 hover:text-ocean hover:bg-ocean/10 rounded-xl transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <div>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between px-5 py-3 text-base font-display font-bold tracking-wider text-slate-200 hover:text-ocean hover:bg-ocean/10 rounded-xl transition-all duration-200"
            >
              <span>Services</span>
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`}
              />
            </button>
            {openDropdown === 'services' && (
              <div className="mt-2 space-y-1 pl-4 border-l-2 border-ocean/20">
                {getServicesMenu().map((item) => (
                  <Link
                    key={item.id}
                    to={`/service/${item.id}`}
                    className="block px-4 py-2 text-sm text-slate-200 hover:text-ocean hover:bg-ocean/10 rounded-lg transition-all duration-200 font-medium tracking-wide"
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
              className="w-full flex items-center justify-between px-5 py-3 text-base font-display font-bold tracking-wider text-slate-200 hover:text-ocean hover:bg-ocean/10 rounded-xl transition-all duration-200"
            >
              <span>Packages</span>
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${openDropdown === 'packages' ? 'rotate-180' : ''}`}
              />
            </button>
            {openDropdown === 'packages' && (
              <div className="mt-2 space-y-1 pl-4 border-l-2 border-ocean/20">
                {getPackagesMenu().map((category) => (
                  <div key={category.category}>
                    <button
                      onClick={() => setOpenSubDropdown(openSubDropdown === category.category ? null : category.category)}
                      className="w-full text-left flex items-center justify-between px-4 py-2 text-sm text-slate-200 hover:text-ocean hover:bg-ocean/10 rounded-lg transition-all duration-200 font-semibold tracking-wide"
                    >
                      <span>{category.category}</span>
                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${openSubDropdown === category.category ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {openSubDropdown === category.category && (
                      <div className="mt-1 space-y-1 pl-4 border-l border-ocean/10">
                        {category.items ? (
                          category.items.map((item) => (
                            <Link
                              key={item.id}
                              to={item.subcategory === 'Uttarakhand' ? '/packages/uttarakhand' : item.subcategory === 'Himachal Pradesh' ? '/packages/himachal' : item.subcategory === 'Kashmir' ? '/packages/kashmir' : `/package/${item.id}`}
                              className="block px-3 py-1.5 text-sm text-slate-200 hover:text-ocean hover:bg-ocean/5 rounded-lg transition-all duration-200 font-medium tracking-wide"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                                setOpenSubDropdown(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          ))
                        ) : (
                          category.subGroups?.map((group) => (
                            <div key={group.name} className="mb-2">
                              <div className="px-3 py-1.5 text-xs font-display font-bold text-ocean/90 mb-1 tracking-widest uppercase">
                                {group.name}
                              </div>
                              <div className="space-y-1 pl-3 border-l border-ocean/10">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.id}
                                    to={`/package/${item.id}`}
                                    className="block px-2 py-1 text-sm text-slate-200 hover:text-ocean hover:bg-ocean/5 rounded-lg transition-all duration-200 font-medium tracking-wide"
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
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/testimonials"
            className="block px-5 py-3 text-base font-display font-bold tracking-wider text-slate-200 hover:text-ocean hover:bg-ocean/10 rounded-xl transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>

          <Link
            to="/blog"
            className="block px-5 py-3 text-base font-display font-bold tracking-wider text-slate-200 hover:text-ocean hover:bg-ocean/10 rounded-xl transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="block px-5 py-3 text-base font-display font-bold tracking-wider text-slate-200 hover:text-ocean hover:bg-ocean/10 rounded-xl transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <Button 
            variant="glow" 
            className="w-full mt-6 uppercase tracking-[0.25em] font-bold"
            onClick={() => {
              openBookingForm();
              setIsOpen(false);
            }}
          >
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;