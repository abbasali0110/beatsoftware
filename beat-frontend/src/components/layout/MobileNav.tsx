import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; to: string }[];
}

export default function MobileNav({ open, onClose, links }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-charcoal/70 backdrop-blur-sm lg:hidden" onClick={onClose} />}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-[88vw] bg-charcoal-gradient border-r border-white/10 transform transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <div>
              <p className="text-white text-xl font-extrabold tracking-[0.24em]">BEAT</p>
              <p className="text-white/60 text-xs tracking-[0.1em]">SOFTWARE COMPANY</p>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white p-1" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <nav className="p-4 space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-crimson text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto p-5 border-t border-white/10">
            <p className="text-white text-sm font-semibold mb-2">Have a product idea?</p>
            <p className="text-white/65 text-xs leading-relaxed mb-4">
              Let us design, build, and scale your software with a business-first approach.
            </p>
            <NavLink to="/contact" onClick={onClose} className="btn-primary w-full justify-center">
              Talk to Our Team <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
}
