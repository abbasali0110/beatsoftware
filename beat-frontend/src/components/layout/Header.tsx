import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Globe, Menu, Search, X } from "lucide-react";
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

const regions = [
  { label: "India", code: "IN", flag: "/assets/images/flags/in.png" },
  { label: "Saudi Arabia", code: "SA", flag: "/assets/images/flags/sa.webp" },
  { label: "UAE", code: "AE", flag: "/assets/images/flags/ae.png" },
  { label: "Qatar", code: "QA", flag: "/assets/images/flags/qa.png" },
  { label: "UK", code: "UK", flag: "/assets/images/flags/gb.png" },
  { label: "USA", code: "US", flag: "/assets/images/flags/us.png" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<
    (typeof regions)[number] | null
  >(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const regionRef = useRef<HTMLDivElement>(null);
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
      if (regionRef.current && !regionRef.current.contains(e.target as Node)) {
        setRegionOpen(false);
      }
    };

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        setRegionOpen(false);
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
                  <div className="absolute top-full right-0 w-64 pt-2 z-50">
                    <div className="rounded-xl border border-surface-200 bg-white shadow-hover py-2">
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
              className="hidden lg:inline-flex h-10 items-center btn-primary"
            >
              Contact Us <ArrowRight size={16} />
            </NavLink>

            <div
              ref={regionRef}
              className="relative hidden lg:block"
              onMouseEnter={() => setRegionOpen(true)}
              onMouseLeave={() => setRegionOpen(false)}
            >
              <button
                type="button"
                onClick={() => setRegionOpen((prev) => !prev)}
                onFocus={() => setRegionOpen(true)}
                className={`inline-flex h-10 items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                  scrolled
                    ? "border-surface-200 bg-white text-charcoal hover:border-crimson/20"
                    : "border-white/15 bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                {selectedRegion ? (
                  <img
                    src={selectedRegion.flag}
                    alt={`${selectedRegion.label} flag`}
                    className="h-4 w-6 rounded-[2px] object-cover"
                  />
                ) : (
                  <Globe size={15} className="text-crimson" />
                )}
                <span>{selectedRegion?.label ?? "Region"}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform ${regionOpen ? "rotate-180" : ""}`}
                />
              </button>

              {regionOpen && (
                <div className="absolute right-0 top-full z-50 w-52 pt-2">
                  <div className="overflow-hidden rounded-xl border border-surface-200 bg-white py-2 shadow-hover">
                    {regions.map((region) => (
                      <button
                        key={region.code}
                        type="button"
                        onClick={() => {
                          setSelectedRegion(region);
                          setRegionOpen(false);
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${
                          selectedRegion?.code === region.code
                            ? "bg-crimson/10 font-semibold text-crimson"
                            : "text-surface-700 hover:bg-surface-50 hover:text-charcoal"
                        }`}
                      >
                        <img
                          src={region.flag}
                          alt={`${region.label} flag`}
                          className="h-4 w-6 rounded-[2px] object-cover"
                        />
                        <span>{region.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
        regions={regions}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />
      {/* <div className="h-[72px]" /> */}
    </>
  );
}
