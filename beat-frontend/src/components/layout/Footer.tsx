import { NavLink } from 'react-router-dom';
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';

const companyLinks = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/home#services' },
  { label: 'Careers', to: '/career' },
  { label: 'Contact', to: '/contact' },
];

const capabilityLinks = [
  { label: 'Product Engineering', to: '/contact' },
  { label: 'AI & Data Solutions', to: '/contact' },
  { label: 'Cloud & DevOps', to: '/contact' },
  { label: 'Cybersecurity Services', to: '/contact' },
  { label: 'Technology Consulting', to: '/contact' },
];

const resourceLinks = [
  { label: 'Join Community', to: '/join' },
  { label: 'Apply for Roles', to: '/career/apply' },
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms of Use', to: '#' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/beat-technologies/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@beat786', label: 'YouTube' },
  { icon: MessageCircle, href: 'https://wa.me/918799346695', label: 'WhatsApp' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

function FooterLink({ to, label }: { to: string; label: string }) {
  const isExternal = to.startsWith('http');
  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-surface-400 hover:text-white text-sm"
      >
        {label}
        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    );
  }

  if (to === '#') {
    return <span className="text-surface-400 text-sm">{label}</span>;
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm transition-colors ${isActive ? 'text-crimson' : 'text-surface-400 hover:text-white'}`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="h-1 bg-crimson-gradient" />

      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10">
          <div className="xl:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-crimson-gradient flex items-center justify-center shadow-glow">
                <img src="assets/images/logo/50.png" alt="Beat" width={20} height={20} />
              </div>
              <div>
                <p className="text-white font-extrabold text-lg tracking-[0.22em]">BEAT</p>
                <p className="text-white/65 text-xs tracking-[0.1em]">SOFTWARE COMPANY</p>
              </div>
            </div>

            <p className="text-surface-400 text-sm leading-relaxed max-w-md mb-6">
              Beat Software Technologies Pvt. Ltd. builds digital products, data systems, and talent programs
              that help companies move faster with confidence.
            </p>

            <div className="space-y-3 mb-6">
              <a href="mailto:contact@beatsoftware.com" className="flex items-center gap-2 text-surface-300 text-sm hover:text-white">
                <Mail size={16} className="text-crimson" /> contact@beatsoftware.com
              </a>
              <a href="tel:+918799346695" className="flex items-center gap-2 text-surface-300 text-sm hover:text-white">
                <Phone size={16} className="text-crimson" /> +91 8799346695
              </a>
              <p className="flex items-start gap-2 text-surface-300 text-sm">
                <MapPin size={16} className="text-crimson mt-0.5" /> India | Serving global clients remotely
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-surface-400 hover:text-white hover:bg-crimson hover:border-crimson transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase mb-5 tracking-[0.12em]">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase mb-5 tracking-[0.12em]">Capabilities</h3>
            <ul className="space-y-3">
              {capabilityLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase mb-5 tracking-[0.12em]">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="text-white text-sm font-semibold mb-1">Need a quick estimate?</p>
              <p className="text-surface-400 text-xs mb-3">Share your requirements and get a response in 24 hours.</p>
              <NavLink to="/contact" className="btn-primary w-full justify-center">
                Request Proposal
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-charcoal-dark/70">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-surface-500 text-xs">© {new Date().getFullYear()} Beat Software Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="text-surface-600 text-xs">Built for modern businesses and future-ready teams.</p>
        </div>
      </div>
    </footer>
  );
}

