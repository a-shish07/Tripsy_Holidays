import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

const quickLinks = [
  { label: 'About', href: '#experience' },
  // { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
];

const socials = [
  { label: 'Instagram', href: '#', handle: '@tripsyholidays' },
  { label: 'Facebook', href: '#', handle: '/tripsyholidays' },
  { label: 'YouTube', href: '#', handle: '@tripsyjourneys' },
];

function Footer({ currentYear }) {
  return (
    <footer className="border-t border-white/10 bg-night/90">
      <Container className="pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Tripsy Holidays logo"
                className="h-14 w-14 rounded-full border border-white/20 object-cover"
              />
              <div>
                <p className="font-display text-xl tracking-widest text-white">TRIPSY</p>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Holidays</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Tripsy Holidays is a boutique travel atelier specializing in bespoke journeys worldwide. We
              transform travel ideas into refined experiences with exceptional care.
            </p>
            <SectionHeading
              alignment="left"
              title={<span className="text-ocean">+91 98765 43210</span>}
              subtitle="concierge@tripsyholidays.com"
              className="space-y-2"
            />
          </div>
          <div>
            <h4 className="text-sm uppercase  text-white/40">Quick Links</h4>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm uppercase  text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase  text-white/40">Follow Us</h4>
            <ul className="mt-6 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm uppercase  text-white/60 transition hover:text-white"
                  >
                    {social.label} {social.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.35em] text-white/40">
          © {currentYear} Tripsy Holidays. Crafted with heart and wanderlust.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;