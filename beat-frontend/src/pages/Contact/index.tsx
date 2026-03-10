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
    <div className="bg-charcoal-dark">
      {/* ── HERO ── */}
      <section className="relative w-full -mt-[72px] bg-charcoal-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0B]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #DC143C 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-crimson/[0.08] rounded-full blur-[150px]" />

        <div className="container-xl relative z-10 pt-36 pb-16 sm:pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-crimson/30 bg-crimson/[0.10] text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              Get in Touch · KSA & India
            </div>
            <h1 className="font-extrabold leading-[0.93] tracking-tight mb-6">
              <span className="block text-[clamp(2.2rem,5.5vw,4rem)] text-white">
                Start a conversation
              </span>
              <span className="block text-[clamp(2.2rem,5.5vw,4rem)] bg-crimson-gradient bg-clip-text text-transparent mt-1">
                about your domain.
              </span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed border-l-2 border-crimson/50 pl-5">
              Whether you're evaluating a platform build, exploring a compliance
              gap, or ready to kick off an enterprise program — we respond within
              one business day.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESPONSE PROMISE ── */}
      <div className="bg-beige border-b border-black/[0.08]">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.07]">
            {promises.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4 px-6 sm:px-8 py-5">
                <div className="w-9 h-9 rounded-lg bg-crimson/[0.08] border border-crimson/[0.16] flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-crimson" />
                </div>
                <div>
                  <p className="text-rhino font-bold text-sm">{label}</p>
                  <p className="text-rhino/50 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="section-pad">
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
                <div className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl bg-gradient-to-b from-[#1e2438] to-[#111520] border border-white/[0.10]">
                  <div className="w-14 h-14 rounded-full bg-crimson/[0.12] border border-crimson/[0.25] flex items-center justify-center mb-6">
                    <ShieldCheck size={22} className="text-crimson" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Message received.</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                    We'll review your message and respond within one business
                    day. If NDA was requested, we'll include terms with our
                    first reply.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-crimson text-sm font-semibold hover:text-crimson/80 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/50 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("fullName", { required: true })}
                        placeholder="Jane Doe"
                        className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-crimson/50 transition-colors duration-200 ${errors.fullName ? "border-crimson/60" : "border-white/[0.10]"}`}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/50 mb-2">
                        Company *
                      </label>
                      <input
                        {...register("company", { required: true })}
                        placeholder="ACME Corporation"
                        className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-crimson/50 transition-colors duration-200 ${errors.company ? "border-crimson/60" : "border-white/[0.10]"}`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/50 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                        type="email"
                        placeholder="jane@company.com"
                        className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-crimson/50 transition-colors duration-200 ${errors.email ? "border-crimson/60" : "border-white/[0.10]"}`}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/50 mb-2">
                        Phone <span className="text-white/25 normal-case tracking-normal font-normal">(optional)</span>
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+966 or +91"
                        className="w-full bg-white/[0.04] border border-white/[0.10] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-crimson/50 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/50 mb-2">
                        Market *
                      </label>
                      <select
                        {...register("market", { required: true })}
                        className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-crimson/50 transition-colors duration-200 ${errors.market ? "border-crimson/60" : "border-white/[0.10]"}`}
                      >
                        <option value="" className="bg-[#1e2438]">Select market</option>
                        {markets.map((m) => (
                          <option key={m} value={m} className="bg-[#1e2438]">{m}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/50 mb-2">
                        Subject *
                      </label>
                      <select
                        {...register("subject", { required: true })}
                        className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-crimson/50 transition-colors duration-200 ${errors.subject ? "border-crimson/60" : "border-white/[0.10]"}`}
                      >
                        <option value="" className="bg-[#1e2438]">Select subject</option>
                        {subjects.map((s) => (
                          <option key={s} value={s} className="bg-[#1e2438]">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/50 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message", { required: true, minLength: 20 })}
                      rows={5}
                      placeholder="Describe your domain, operating scale, and what you're trying to solve..."
                      className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-crimson/50 transition-colors duration-200 resize-none ${errors.message ? "border-crimson/60" : "border-white/[0.10]"}`}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      {...register("ndaRequest")}
                      type="checkbox"
                      id="nda"
                      className="mt-0.5 w-4 h-4 rounded border-white/[0.20] bg-white/[0.04] accent-crimson cursor-pointer"
                    />
                    <label htmlFor="nda" className="text-sm text-white/50 cursor-pointer leading-relaxed">
                      I'd like to request an NDA for this conversation
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
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
                  className={`relative p-6 rounded-2xl border overflow-hidden ${
                    color === "amber"
                      ? "bg-gradient-to-br from-amber-400/[0.05] to-transparent border-amber-400/[0.14]"
                      : "bg-gradient-to-br from-sky-400/[0.05] to-transparent border-sky-400/[0.14]"
                  }`}
                >
                  <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r to-transparent ${color === "amber" ? "from-amber-400/30 via-amber-400/15" : "from-sky-400/30 via-sky-400/15"}`} />
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded border ${
                      color === "amber"
                        ? "text-amber-300/80 bg-amber-400/[0.07] border-amber-400/[0.18]"
                        : "text-sky-300/80 bg-sky-400/[0.07] border-sky-400/[0.18]"
                    }`}>
                      {market}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">{city}</h3>
                  <p className="text-white/40 text-xs mb-4">{country}</p>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={12} className="text-white/30 shrink-0 mt-0.5" />
                      <span className="text-white/55 text-xs leading-relaxed">{address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone size={12} className="text-white/30 shrink-0" />
                      <span className="text-white/55 text-xs">{phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail size={12} className="text-white/30 shrink-0" />
                      <span className="text-white/55 text-xs">{email}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock size={12} className="text-white/30 shrink-0" />
                      <span className="text-white/55 text-xs">{hours}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* NDA badge */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <ShieldCheck size={15} className="text-crimson/60 shrink-0" />
                <p className="text-xs text-white/40 leading-relaxed">
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
