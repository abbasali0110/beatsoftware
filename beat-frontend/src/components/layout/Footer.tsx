import { useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import CtaBand from "../shared/CtaBand";

// DATA

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Careers", to: "/career", badge: "We're Hiring" },
  { label: "Academy", to: "/academy" },
  { label: "Join Community", to: "/join" },
  { label: "Media Inquiries", to: "/contact" },
];

const serviceLinks = [
  { label: "Digital Modernization", to: "/services" },
  { label: "Cloud & DevOps", to: "/services" },
  { label: "AI & Data Solutions", to: "/services" },
  { label: "SaaS Product Engineering", to: "/services" },
  { label: "Enterprise Integration", to: "/services" },
  { label: "Managed Support & AMC", to: "/services" },
];

const knowledgeLinks = [
  { label: "Case Studies", to: "/portfolio" },
  { label: "Client Success Stories", to: "/portfolio" },
  { label: "Whitepapers", to: "/contact" },
  { label: "Tech Insights Blog", to: "/contact" },
  { label: "Delivery Standards Brief", to: "/contact" },
];

const offices = [
  {
    flagSrc: "assets/images/flags/in.png",
    flagAlt: "India flag",
    city: "India (HQ)",
    role: "Headquarters - Engineering CoE",
    line1: "Remote-first, Pan-India delivery",
    line2: "24/5 engineering capacity",
  },
  {
    flagSrc: "assets/images/flags/sa.webp",
    flagAlt: "Saudi Arabia flag",
    city: "Saudi Arabia",
    role: "Regional Office - KSA",
    line1: "Riyadh - in-country delivery",
    line2: "ZATCA-aligned ops",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/beat-technologies/",
    label: "LinkedIn",
  },
  { icon: Youtube, href: "https://www.youtube.com/@beat786", label: "YouTube" },
  {
    icon: MessageCircle,
    href: "https://wa.me/918799346695",
    label: "WhatsApp",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "#" },
  { label: "Terms of Service", to: "#" },
  { label: "Cookie Policy", to: "/contact" },
  { label: "Security", to: "#" },
];

// HELPERS

function FooterLink({
  to,
  label,
  badge,
}: {
  to: string;
  label: string;
  badge?: string;
}) {
  const inner = (
    <>
      {label}
      {badge && (
        <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-crimson/15 text-crimson border border-crimson/25 leading-none">
          {badge}
        </span>
      )}
    </>
  );

  if (to.startsWith("http")) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-surface-400 hover:text-white text-sm transition-colors duration-200"
      >
        {inner}
        <ArrowUpRight
          size={11}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </a>
    );
  }

  if (to === "#") {
    return (
      <Link
        to="/contact"
        className="group inline-flex items-center gap-1 text-surface-400 hover:text-white text-sm transition-colors duration-200"
      >
        {inner}
        <ArrowUpRight
          size={11}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </Link>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `inline-flex items-center gap-1 text-sm transition-colors duration-200 ${
          isActive ? "text-crimson" : "text-surface-400 hover:text-white"
        }`
      }
    >
      {inner}
    </NavLink>
  );
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-white/90 font-bold text-xs uppercase tracking-[0.14em] mb-5">
      {children}
    </h3>
  );
}

// COMPONENT

export default function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Crimson accent bar */}
      <div className="h-[3px] bg-crimson-gradient" />
      <CtaBand />
      <footer className="bg-brand-navy text-white">
        {/* MAIN COLUMNS */}
        <div className="container-xl py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-6">
            {/* Brand */}
            <div className="sm:col-span-2 xl:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-crimson-gradient flex items-center justify-center shadow-glow">
                  <img
                    src="assets/images/logo/50.png"
                    alt="Beat"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p className="text-white font-extrabold text-lg tracking-[0.22em]">
                    BEAT
                  </p>
                  <p className="text-white/40 text-xs tracking-[0.1em]">
                    SOFTWARE COMPANY
                  </p>
                </div>
              </div>

              <p className="text-surface-300 text-base leading-relaxed mb-6">
                Enterprise software engineering and technology consulting.
                Delivering outcomes - not just code - for businesses in India
                and Saudi Arabia since 2014.
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href="mailto:contact@beatsoftware.com"
                  className="flex items-center gap-2.5 text-surface-300 text-base hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-crimson shrink-0" />
                  contact@beatsoftware.com
                </a>
                <a
                  href="tel:+918799346695"
                  className="flex items-center gap-2.5 text-surface-300 text-base hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-crimson shrink-0" />
                  +91 8799 346 695
                </a>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {socialLinks.map(({ icon: Icon, href, label }) =>
                  href.startsWith("http") ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-surface-300 hover:text-white hover:bg-crimson hover:border-crimson hover:shadow-[0_0_15px_rgba(220,20,60,0.4)] transition-all duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  ) : (
                    <Link
                      key={label}
                      to="/contact"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-surface-300 hover:text-white hover:bg-crimson hover:border-crimson hover:shadow-[0_0_15px_rgba(220,20,60,0.4)] transition-all duration-200"
                    >
                      <Icon size={18} />
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* Company + Services + Knowledge + Newsletter */}
            <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-6">
              <div>
                <ColHeading>Company</ColHeading>
                <ul className="space-y-2.5">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ColHeading>Services</ColHeading>
                <ul className="space-y-2.5">
                  {serviceLinks.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ColHeading>Knowledge</ColHeading>
                <ul className="space-y-2.5">
                  {knowledgeLinks.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter signup - full row across middle three columns */}
              <div className="sm:col-span-2 xl:col-span-3 rounded-xl border border-crimson/25 bg-crimson/[0.06] p-4">
                {/* Gift badge */}
                <div className="inline-flex items-center gap-1.5 bg-crimson text-white text-[10px] font-extrabold uppercase tracking-[0.1em] rounded-full px-2.5 py-1 mb-3">
                  <span>Free</span> Download
                </div>

                <p className="text-white text-base font-bold leading-snug mb-1">
                  Get our 2026 Enterprise Security Checklist
                </p>
                <p className="text-surface-300 text-sm leading-relaxed mb-4">
                  47-point audit used by our clients before every major release.
                  Instant PDF - no pitch, no follow-up unless you want one.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  aria-label="Newsletter Subscription"
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <input
                    type="email"
                    placeholder="Work email"
                    className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-surface-700 focus:outline-none focus:border-crimson/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-crimson hover:bg-crimson-dark text-white rounded-lg px-3 py-2 text-xs font-bold transition-colors whitespace-nowrap"
                  >
                    Access Checklist
                  </button>
                </form>

                <p className="text-surface-400 text-xs mt-3">
                  Join 1,200+ CTOs & engineering leads. Unsubscribe anytime.
                </p>
              </div>
            </div>
            {/* Offices */}
            <div className="xl:col-span-2">
              <ColHeading>Offices</ColHeading>
              <div className="space-y-6">
                {offices.map(
                  ({ flagSrc, flagAlt, city, role, line1, line2 }) => (
                    <div key={city}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <img
                          src={flagSrc}
                          alt={flagAlt}
                          className="h-4 w-6 rounded-sm object-cover border border-white/15"
                        />
                        <span className="text-white text-sm font-semibold">
                          {city}
                        </span>
                        {city === "Saudi Arabia" && (
                          <span className="inline-flex items-center rounded-full border border-crimson/35 bg-crimson/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-crimson">
                            ZATCA-aligned
                          </span>
                        )}
                      </div>
                      <p className="text-crimson text-xs font-bold uppercase tracking-wider mb-1 mt-1 pl-[1.625rem]">
                        {role}
                      </p>
                      <p className="text-surface-300 text-sm leading-relaxed pl-[1.625rem]">
                        {line1}
                      </p>
                      <p className="text-surface-300 text-sm leading-relaxed pl-[1.625rem]">
                        {line2}
                      </p>
                      {city === "Saudi Arabia" && (
                        <div className="mt-3 pl-[1.625rem]">
                          <div className="inline-block bg-white rounded-lg px-3 py-2">
                            <img
                              src="assets/images/vision2030.png"
                              alt="Saudi Vision 2030"
                              className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* LEGAL BAR */}
        <div className="container-xl border-t border-white/5 py-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            <span className="text-xs font-bold tracking-widest uppercase">
              AWS Partner Network
            </span>
            <span className="text-xs font-bold tracking-widest uppercase">
              ISO 27001 Certified
            </span>
            <span className="text-xs font-bold tracking-widest uppercase">
              ZATCA Compliant
            </span>
            <span className="text-xs font-bold tracking-widest uppercase">
              Microsoft Solutions Partner
            </span>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-surface-400 text-sm text-center sm:text-left">
              (c) {new Date().getFullYear()} Beat Software Technologies Pvt.
              Ltd. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
              {legalLinks.map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to === "#" ? "/contact" : to}
                  className="text-surface-400 hover:text-white text-sm transition-colors"
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 text-surface-400 hover:text-white text-sm transition-colors duration-200"
            >
              Back to top
              <span className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-crimson group-hover:border-crimson transition-all duration-200">
                <ArrowUp size={11} />
              </span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
