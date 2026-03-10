import { Link } from "react-router-dom";

export default function IndustriesStickyHeader() {
  return (
    <div className="sticky top-[72px] z-30 border-y border-surface-100 bg-white/95 backdrop-blur">
      <div className="container-xl py-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs sm:text-sm font-semibold text-charcoal">
          Industries We Serve
        </p>
        <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm">
          <a
            href="#industries-grid"
            className="text-surface-600 hover:text-charcoal transition-colors"
          >
            Mega-Categories
          </a>
          <a
            href="#contact-us"
            className="text-surface-600 hover:text-charcoal transition-colors"
          >
            Contact Us
          </a>
          <Link to="/contact" className="btn-primary">
            Book a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
