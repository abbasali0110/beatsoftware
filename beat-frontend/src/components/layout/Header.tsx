import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import MobileNav from "./MobileNav";

const primaryLinks = [
  { label: "Home", to: "/home" },
  { label: "Industries", to: "/industries" },
  { label: "Technologies", to: "/technologies" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
];

const secondaryLinks = [
  { label: "Portfolio / Case Studies", to: "/portfolio" },
  { label: "Global Presence", to: "/global-presence" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Careers", to: "/career" },
  { label: "Insights / Blog", to: "/insights" },
];

const navLinks = [
  ...primaryLinks.slice(0, 4),
  ...secondaryLinks,
  primaryLinks[4],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchValue.trim();
    if (!query) {
      return;
    }
    navigate(`/home?q=${encodeURIComponent(query)}`);
    setSearchValue("");
    setSearchOpen(false);
  };

  const headerClass = scrolled
    ? "header-glass"
    : "bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-transparent";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300  ${headerClass}`}
      >
        <div className="container-xl">
          <div className="h-[72px] flex items-center gap-4">
            <NavLink
              to="/home"
              className="flex items-center gap-3 shrink-0"
              aria-label="Beat Home"
            >
              <div className="w-10 h-10 rounded-xl bg-crimson-gradient shadow-glow flex items-center justify-center">
                <img
                  src="assets/images/logo/50.png"
                  alt="Beat Logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className="leading-none hidden sm:block">
                <p
                  className={`text-lg font-extrabold tracking-[0.28em] ${scrolled ? "text-charcoal" : "text-white"}`}
                >
                  BEAT
                </p>
                <p
                  className={`text-[11px] tracking-[0.12em] ${scrolled ? "text-surface-500" : "text-white/70"}`}
                >
                  SOFTWARE COMPANY
                </p>
              </div>
            </NavLink>

            <nav className="hidden lg:flex items-center gap-1 ml-1 flex-1">
              {primaryLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? scrolled
                          ? "text-crimson bg-crimson/10"
                          : "text-white bg-white/15"
                        : scrolled
                          ? "text-surface-600 hover:text-charcoal hover:bg-surface-100"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div
                className="relative"
                ref={moreRef}
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMoreOpen((prev) => !prev)}
                  onFocus={() => setMoreOpen(true)}
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    scrolled
                      ? "text-surface-600 hover:text-charcoal hover:bg-surface-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  More
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {moreOpen && (
                  <div className="absolute top-[110%] right-0 w-64 rounded-xl border border-surface-200 bg-white shadow-hover py-2 z-50">
                    {secondaryLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setMoreOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm transition-colors ${
                            isActive
                              ? "text-crimson bg-crimson/10 font-semibold"
                              : "text-surface-700 hover:bg-surface-50 hover:text-charcoal"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden md:flex items-center">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    autoFocus
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onBlur={() => !searchValue && setSearchOpen(false)}
                    placeholder="Search pages"
                    className={`w-44 text-sm py-2 px-3 rounded-l-xl border-y border-l focus:outline-none ${
                      scrolled
                        ? "border-surface-200 bg-white text-charcoal placeholder-surface-400"
                        : "border-white/35 bg-white/10 text-white placeholder-white/60 backdrop-blur-sm"
                    }`}
                  />
                  <button
                    type="submit"
                    className="bg-crimson text-white px-3 py-2 rounded-r-xl hover:bg-crimson-dark"
                  >
                    <Search size={15} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className={`p-2 rounded-lg transition-colors ${
                    scrolled
                      ? "text-surface-600 hover:text-charcoal hover:bg-surface-100"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label="Open search"
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            <NavLink
              to="/contact"
              className="hidden lg:inline-flex btn-primary"
            >
              Start a Project <ArrowRight size={16} />
            </NavLink>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-charcoal hover:bg-surface-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
      {/* <div className="h-[72px]" /> */}
    </>
  );
}
