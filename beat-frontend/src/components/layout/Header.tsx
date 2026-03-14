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
  { label: "India", code: "IN", flag: "/images/flags/in.png" },
  { label: "Saudi Arabia", code: "SA", flag: "/images/flags/sa.webp" },
  { label: "UAE", code: "AE", flag: "/images/flags/ae.png" },
  { label: "Qatar", code: "QA", flag: "/images/flags/qa.png" },
  { label: "UK", code: "UK", flag: "/images/flags/gb.png" },
  { label: "USA", code: "US", flag: "/images/flags/us.png" },
];

const searchQuickLinks = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Insights", to: "/insights" },
  { label: "Global Presence", to: "/global-presence" },
  { label: "Contact Us", to: "/contact" },
];

const searchSuggestions = [
  "Compliance architecture",
  "Case studies",
  "KSA delivery",
  "Enterprise modernization",
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
        setSearchOpen(false);
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="container-xl">
          <div className="flex h-[72px] items-center gap-4">
            <NavLink
              to="/home"
              className="flex shrink-0 items-center gap-3"
              aria-label="Beat Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-crimson-gradient shadow-glow">
                <img
                  src="/images/logo/50.png"
                  alt="Beat Logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className="hidden leading-none sm:block">
                <p
                  className={`text-lg font-extrabold tracking-[0.28em] ${
                    scrolled ? "text-charcoal" : "text-white"
                  }`}
                >
                  BEAT
                </p>
                <p
                  className={`text-[11px] tracking-[0.12em] ${
                    scrolled ? "text-surface-500" : "text-white/70"
                  }`}
                >
                  SOFTWARE COMPANY
                </p>
              </div>
            </NavLink>

            <nav className="ml-1 hidden flex-1 items-center gap-1 lg:flex">
              {primaryLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? scrolled
                          ? "bg-crimson/10 text-crimson"
                          : "bg-white/15 text-white"
                        : scrolled
                          ? "text-surface-600 hover:bg-surface-100 hover:text-charcoal"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
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
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                    scrolled
                      ? "text-surface-600 hover:bg-surface-100 hover:text-charcoal"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  More
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {moreOpen && (
                  <div className="absolute right-0 top-full z-50 w-64 pt-2">
                    <div className="rounded-xl border border-surface-200 bg-white py-2 shadow-hover">
                      {secondaryLinks.map((link) => (
                        <NavLink
                          key={link.to}
                          to={link.to}
                          onClick={() => setMoreOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm transition-colors ${
                              isActive
                                ? "bg-crimson/10 font-semibold text-crimson"
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

            <NavLink
              to="/contact"
              className="hidden h-10 items-center lg:inline-flex btn-primary"
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

            <div className="hidden items-center md:flex">
              <button
                onClick={() => setSearchOpen(true)}
                className={`rounded-lg p-2 transition-colors ${
                  scrolled
                    ? "text-surface-600 hover:bg-surface-100 hover:text-charcoal"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                aria-label="Open search"
              >
                <Search size={18} />
              </button>
            </div>

            <button
              className={`rounded-lg p-2 transition-colors lg:hidden ${
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

      {searchOpen && (
        <div className="fixed inset-0 z-[70] bg-charcoal/45 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            onClick={() => setSearchOpen(false)}
            aria-hidden="true"
          />
          <div className="relative mx-auto mt-24 w-[min(92vw,48rem)] px-4">
            <div className="overflow-hidden rounded-3xl border border-white/12 bg-[#0b1222]/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-crimson">
                    Search
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    Find pages, services, and domain content.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-lg p-2 text-white/65 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-5 py-5 sm:px-6 sm:py-6">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-3"
                >
                  <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-3">
                    <Search size={18} className="shrink-0 text-crimson" />
                    <input
                      autoFocus
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search pages, services, markets..."
                      className="w-full bg-transparent text-base text-white placeholder:text-white/40 focus:outline-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary h-12 shrink-0">
                    Search
                  </button>
                </form>

                <div className="mt-6 grid gap-5 sm:grid-cols-[1.3fr_0.9fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                      Popular Searches
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {searchSuggestions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSearchValue(item)}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 transition-colors hover:border-crimson/25 hover:text-white"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                      Quick Links
                    </p>
                    <div className="mt-3 space-y-2">
                      {searchQuickLinks.map((link) => (
                        <NavLink
                          key={link.to}
                          to={link.to}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <span>{link.label}</span>
                          <ArrowRight size={14} className="text-crimson" />
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className="h-[72px]" /> */}
    </>
  );
}

