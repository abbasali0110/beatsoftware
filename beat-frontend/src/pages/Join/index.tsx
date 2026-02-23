import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/effect-cube';
import { ExternalLink, ArrowRight, Quote } from 'lucide-react';
import { thoughts } from '../../data/academy';
import Newsletter from '../../components/shared/Newsletter';

const IMAGE_URL = '/image/portal';

const industries = [
  {
    name: 'Beat Agro',
    desc: 'Dedicated team providing you with a complete range of services. Access Agenda articles and videos, all available on our platform — empowering farmers and agribusinesses.',
    imgNum: '31',
  },
  {
    name: 'Beat Fashions',
    desc: 'Dedicated team providing you with a complete range of services. Access Agenda articles and videos, all available on our platform — redefining retail and e-commerce.',
    imgNum: '32',
  },
  {
    name: 'Beat Real Estate',
    desc: 'Dedicated team providing you with a complete range of services. Access Agenda articles and videos, all available on our platform — transforming property management.',
    imgNum: '34',
  },
  {
    name: 'Beat Beverages',
    desc: 'Dedicated team providing you with a complete range of services. Access Agenda articles and videos, all available on our platform — innovating in the beverage industry.',
    imgNum: '33',
  },
];

export default function Join() {
  return (
    <section>
      {/* Hero */}
      <JoinHero />

      {/* Industries */}
      <IndustriesSection />

      {/* Partnership CTA */}
      <PartnershipCTA />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Newsletter */}
      <Newsletter />
    </section>
  );
}

/* ── Hero ── */
function JoinHero() {
  return (
    <div className="bg-charcoal-gradient text-white">
      <div className="container-xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="section-tag">Join Us</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
              Join the Beat and<br />help shape a<br /><span className="text-crimson">better future</span>
            </h1>
            <p className="text-surface-300 text-lg leading-relaxed mb-4">
              We believe that progress happens by bringing together people from all walks of life who
              have the drive and the influence to make a positive change.
            </p>
            <p className="text-surface-400 mb-6">
              A better future is everyone's business. Be part of that change and join our community.
            </p>
            <p className="text-crimson font-bold italic mb-8">
              Discover. Participate. Take Action.
            </p>
            <button className="btn-primary btn-lg">
              Sign up for Free <ArrowRight size={18} />
            </button>
          </div>

          {/* Right: image grid */}
          <div className="grid grid-cols-3 gap-3">
            {[24, 25, 27, 28, 29, 30].map((n) => (
              <div key={n} className="overflow-hidden rounded-xl">
                <img
                  src={`${IMAGE_URL}/${n}`}
                  alt=""
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-1 bg-crimson-gradient" />
    </div>
  );
}

/* ── Industries ── */
function IndustriesSection() {
  return (
    <div className="bg-white section-pad">
      <div className="container-xl">
        <div className="section-header-center">
          <span className="section-tag">Our Businesses</span>
          <h2 className="section-title">
            Explore Beat's <span className="text-crimson">Industries</span>
          </h2>
          <p className="section-desc mx-auto">
            Access our expert overview on Beat's businesses and engage with our global community —
            anywhere and anytime.
          </p>
        </div>

        <div className="space-y-16 mt-4">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`}
            >
              <div className={i % 2 !== 0 ? '[direction:ltr]' : ''}>
                <span className="section-tag">{`0${i + 1}`}</span>
                <h2 className="text-3xl font-black text-charcoal mb-4">{industry.name}</h2>
                <p className="text-surface-500 mb-6 leading-relaxed">{industry.desc}</p>
                <a href="#" className="btn-ghost-crimson self-start inline-flex">
                  Learn More <ExternalLink size={14} />
                </a>
              </div>
              <div className={i % 2 !== 0 ? '[direction:ltr]' : ''}>
                <div className="overflow-hidden rounded-2xl shadow-hover">
                  <img
                    src={`${IMAGE_URL}/${industry.imgNum}`}
                    alt={industry.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Partnership CTA ── */
function PartnershipCTA() {
  return (
    <div className="bg-charcoal section-pad">
      <div className="container-xl text-center">
        <span className="section-tag">Partnership</span>
        <h2 className="text-4xl font-black text-white mb-4">
          Explore our partnership program<br />for SME and MSME
        </h2>
        <p className="text-surface-400 text-lg max-w-2xl mx-auto mb-8">
          Unlock mutual growth opportunities by partnering with Beat Technologies.
          Together we build a stronger digital ecosystem.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-primary btn-lg">
            See All Programs <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn-ghost btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonials ── */
function TestimonialsSection() {
  return (
    <div className="bg-surface-50 section-pad">
      <div className="container-xl">
        <div className="section-header-center">
          <span className="section-tag">Community</span>
          <h2 className="section-title">
            See how our global community<br />makes a <span className="text-crimson">positive change</span>
          </h2>
          <p className="section-desc mx-auto">
            Tools you love, thoughtfully connected. All personalized giving you what you want, when you want.
          </p>
        </div>

        {/* Mobile: cube swiper */}
        <div className="sm:hidden mt-8">
          <Swiper
            modules={[EffectCube, Pagination]}
            effect="cube"
            grabCursor
            cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
            pagination
            className="h-72 w-72 mx-auto"
          >
            {thoughts.map((thought) => (
              <SwiperSlide key={thought.id}>
                <div className="bg-white rounded-xl shadow-card p-6 h-full flex flex-col justify-center">
                  <Quote className="text-crimson/20 mb-3" size={32} />
                  <p className="text-surface-600 italic text-sm mb-4 leading-relaxed">"{thought.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={thought.imgUrl} alt={thought.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-crimson/20" />
                    <div>
                      <p className="font-semibold text-charcoal text-sm">~ {thought.name}</p>
                      <p className="text-surface-400 text-xs">{thought.designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: horizontal swiper */}
        <div className="hidden sm:block mt-8">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            cssMode
            navigation
            pagination
            mousewheel
            keyboard
            className="pb-12"
          >
            {thoughts.map((thought) => (
              <SwiperSlide key={thought.id}>
                <div className="card flex flex-col md:flex-row items-center gap-10 px-8 md:px-16 py-10 mx-4">
                  <div className="shrink-0">
                    <img
                      src={thought.imgUrl}
                      alt={thought.name}
                      className="w-24 h-24 rounded-full object-cover shadow-hover ring-4 ring-crimson/15"
                    />
                  </div>
                  <div className="text-left">
                    <Quote className="text-crimson/20 mb-4" size={40} />
                    <p className="text-surface-600 italic text-lg mb-5 leading-relaxed">"{thought.quote}"</p>
                    <p className="font-bold text-charcoal">~ {thought.name}</p>
                    <p className="text-surface-400 text-sm mt-0.5">{thought.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
