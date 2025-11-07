import { Link } from 'react-router-dom';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

const quickLinks = [
  { label: 'About', href: '/experience' },
  // { label: 'Destinations', href: '/destinations' },
  { label: 'Packages', href: '/packages' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/tripsy_holidays?igsh=MWJqOWphNWVrNDVyZw==', handle: '@tripsy_holidays' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1Btt9Lrg57/', handle: '/tripsyholidays' },
  { label: 'YouTube', href: 'https://www.youtube.com/@TripsyHolidays', handle: '@TripsyHolidaysyoutube' },
];

function Footer({ currentYear }) {
  return (
    <footer className="relative border-t border-white/10 bg-night overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-night/90 via-night/85 to-night/70" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-ocean/30 blur-3xl opacity-40" />
      
      <Container className="relative pb-12 pt-20">
        <div className="grid gap-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img
                src="/logo.jpg"
                alt="Tripsy Holidays logo"
                className="h-16 w-16 rounded-full border-2 border-ocean/40 object-cover shadow-lg"
              />
              <div>
                <p className="font-display text-3xl tracking-widest text-white font-bold">TRIPSY</p>
                <p className="text-xs uppercase tracking-[0.45em] text-ocean font-display font-bold">Holidays</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-white/70 font-body font-normal max-w-xs">
              Luxury travel experiences crafted with passion. We transform travel dreams into extraordinary journeys worldwide.
            </p>
            <div className="space-y-4 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-white/50 font-display font-bold mb-2">Call Us</p>
                <p className="text-xl text-ocean font-display font-bold">+91 9667493957</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-white/50 font-display font-bold mb-2">Email</p>
                <p className="text-base text-ocean font-display font-bold ">Tripsyholidays@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-ocean font-display font-bold mb-8">Explore</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-ocean transition duration-300 font-medium tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-ocean font-display font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-white/70 hover:text-ocean transition duration-300 font-medium tracking-wide">Domestic Tours</a></li>
              <li><a href="#" className="text-white/70 hover:text-ocean transition duration-300 font-medium tracking-wide">International Tours</a></li>
              <li><a href="#" className="text-white/70 hover:text-ocean transition duration-300 font-medium tracking-wide">Hotel Booking</a></li>
              <li><a href="#" className="text-white/70 hover:text-ocean transition duration-300 font-medium tracking-wide">Air Ticketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-ocean font-display font-bold mb-8">Connect</h4>
            <ul className="space-y-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-ocean transition duration-300 font-medium tracking-wide"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm uppercase text-white/50 font-display font-semibold">
              © {currentYear} Tripsy Holidays. All rights reserved.
            </p>
            <p className="text-sm text-white/50 font-body font-normal tracking-wide">
              ✨ Crafted with passion • Designed for wanderlust
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 flex justify-center">
            <p className="text-base text-white/40 font-body font-normal tracking-wide font-serif">
              Made & Developed by <a href="https://tjfdigital.com/" target="_blank" rel="noopener noreferrer" className="text-ocean hover:text-ocean/80 transition duration-300">TJF Digital</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;