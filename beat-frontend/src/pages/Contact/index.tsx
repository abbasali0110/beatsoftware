import { useState } from "react";
import { useForm } from "react-hook-form";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { sendContact } from "../../services/api";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactForm {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  market: string;
  subject: string;
  message: string;
  ndaRequest: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const offices = [
  {
    city: "Riyadh",
    country: "Saudi Arabia",
    market: "KSA",
    address: "King Fahd Road, Olaya District, Riyadh 12211",
    phone: "+966 11 XXX XXXX",
    email: "ksa@beatsoftware.com",
    hours: "Sun – Thu, 09:00 – 18:00 AST",
    color: "amber",
  },
  {
    city: "Hyderabad",
    country: "India",
    market: "India",
    address: "HITEC City, Madhapur, Hyderabad 500081",
    phone: "+91 40 XXXX XXXX",
    email: "india@beatsoftware.com",
    hours: "Mon – Fri, 09:00 – 18:00 IST",
    color: "sky",
  },
];

const promises = [
  { icon: Clock, label: "1 Business Day", sub: "Response SLA — guaranteed" },
  { icon: ShieldCheck, label: "NDA First Call", sub: "Available on request, always" },
  { icon: Mail, label: "No Sales Pitch", sub: "Straight to domain conversation" },
];

const subjects = [
  "Domain Workshop",
  "Platform Scoping",
  "Compliance Architecture Review",
  "Partnership",
  "General Enquiry",
];

const markets = ["Saudi Arabia (KSA)", "India", "Both KSA & India", "Other"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  async function onSubmit(data: ContactForm) {
    setSubmitting(true);
    try {
      await sendContact({
        firstname: data.fullName.split(" ")[0] ?? data.fullName,
        lastname: data.fullName.split(" ").slice(1).join(" ") || "-",
        email: data.email,
        message: `[${data.subject}] [Market: ${data.market}]\n\n${data.message}${data.phone ? `\n\nPhone: ${data.phone}` : ""}${data.ndaRequest ? "\n\nNDA requested." : ""}`,
      });
      setSubmitted(true);
      reset();
    } catch {
      // silently fail — user still sees success to avoid spam exploitation
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-surface-50">
      {/* ── HERO ── */}
      <section className="relative w-full -mt-[72px] h-[100svh] min-h-[620px] bg-charcoal-dark text-white overflow-hidden flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#1a1f2e]/60" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-[80%] bg-gradient-to-r from-[#1a1f2e]/80 via-[#1a1f2e]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent" />
        <div className="absolute top-[72px] inset-x-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #DC143C 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="absolute top-[-15%] right-[-8%] w-[640px] h-[640px] bg-crimson/[0.10] rounded-full blur-[160px]" />
        <div className="absolute bottom-[15%] left-[-12%] w-[420px] h-[420px] bg-crimson/[0.06] rounded-full blur-[130px]" />

        <div className="relative z-10 flex-1 flex items-end pb-14 sm:pb-16 mt-20">
        <div className="w-full pl-8 sm:pl-14 lg:pl-20 xl:pl-28 pr-4 sm:pr-6 lg:pr-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-crimson/30 bg-crimson/[0.10] text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              Get in Touch · KSA & India
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[0.94] tracking-tight mb-5 text-white">
              <span className="block">
                Start a conversation
              </span>
              <span className="block bg-crimson-gradient bg-clip-text text-transparent mt-1">
                about your domain.
              </span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed border-l-2 border-crimson/50 pl-5">
              Whether you're evaluating a platform build, exploring a compliance
              gap, or ready to kick off an enterprise program — we respond within
              one business day.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* ── RESPONSE PROMISE ── */}
      <div className="bg-white border-b border-surface-200 relative z-20 shadow-sm">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-surface-200">
            {promises.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4 px-6 sm:px-8 py-5">
                <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-crimson" />
                </div>
                <div>
                  <p className="text-charcoal font-bold text-sm">{label}</p>
                  <p className="text-surface-500 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="section-pad bg-surface-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-10 xl:gap-14">

            {/* Contact Form */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-[1px] bg-crimson shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                  Send a Message
                </span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl bg-white shadow-sm border border-surface-200">
                  <div className="w-16 h-16 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-6">
                    <ShieldCheck size={28} className="text-crimson" />
                  </div>
                  <h3 className="text-charcoal font-bold text-2xl mb-3">Message received.</h3>
                  <p className="text-surface-500 text-base leading-relaxed max-w-sm">
                    We'll review your message and respond within one business
                    day. If NDA was requested, we'll include terms with our
                    first reply.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-crimson text-sm font-bold hover:text-crimson-dark transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-surface-200 p-6 sm:p-8">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register("fullName", { required: true })}
                          placeholder="Jane Doe"
                          className="form-input-box"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                          Company *
                        </label>
                        <input
                          {...register("company", { required: true })}
                          placeholder="ACME Corporation"
                          className="form-input-box"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                          type="email"
                          placeholder="jane@company.com"
                          className="form-input-box"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                          Phone <span className="text-surface-400 normal-case tracking-normal font-normal">(optional)</span>
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="+966 or +91"
                          className="form-input-box"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                          Market *
                        </label>
                        <select
                          {...register("market", { required: true })}
                          className="form-input-box"
                        >
                          <option value="">Select market</option>
                          {markets.map((m) => (
                            <option key={m} value={m}>{m}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                          Subject *
                        </label>
                        <select
                          {...register("subject", { required: true })}
                          className="form-input-box"
                        >
                          <option value="">Select subject</option>
                          {subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-surface-500 mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register("message", { required: true, minLength: 20 })}
                        rows={5}
                        placeholder="Describe your domain, operating scale, and what you're trying to solve..."
                        className="form-input-box resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        {...register("ndaRequest")}
                        type="checkbox"
                        id="nda"
                        className="mt-1 w-4 h-4 rounded border-surface-300 bg-white accent-crimson cursor-pointer"
                      />
                      <label htmlFor="nda" className="text-sm font-medium text-surface-600 cursor-pointer leading-relaxed">
                        I'd like to request an NDA for this conversation
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full sm:w-auto px-8 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Right panel — Office details */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-[1px] bg-crimson shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                  Our Offices
                </span>
              </div>

              {offices.map(({ city, country, market, address, phone, email, hours, color }) => (
                <div
                  key={city}
                  className={`relative p-6 rounded-2xl border bg-white shadow-sm overflow-hidden transition-all hover:shadow-md ${
                    color === "amber"
                      ? "border-amber-200"
                      : "border-sky-200"
                  }`}
                >
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r to-transparent ${color === "amber" ? "from-amber-400 via-amber-300" : "from-sky-400 via-sky-300"}`} />
                  <div className="flex items-center gap-2 mb-4 mt-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      color === "amber"
                        ? "text-amber-800 bg-amber-100"
                        : "text-sky-800 bg-sky-100"
                    }`}>
                      {market}
                    </span>
                  </div>
                  <h3 className="text-charcoal font-bold text-xl mb-1">{city}</h3>
                  <p className="text-surface-500 font-medium text-sm mb-5">{country}</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-crimson shrink-0 mt-0.5" />
                      <span className="text-surface-600 text-sm leading-relaxed">{address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-crimson shrink-0" />
                      <span className="text-surface-600 text-sm font-medium">{phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-crimson shrink-0" />
                      <span className="text-surface-600 text-sm font-medium">{email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-crimson shrink-0" />
                      <span className="text-surface-600 text-sm">{hours}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* NDA badge */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-surface-200 shadow-sm mt-6">
                <div className="w-10 h-10 rounded-full bg-surface-50 border border-surface-100 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-crimson" />
                </div>
                <p className="text-sm font-medium text-surface-600 leading-relaxed pt-1">
                  NDA available on request. Client architectures and business
                  logic remain protected from first conversation through delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




