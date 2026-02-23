import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CheckCircle, Users, Share2, ArrowRight } from 'lucide-react';
import { topCourses, projects, skillBenefits } from '../../data/academy';
import LiveProject from '../../components/shared/LiveProject';
import { sendContact } from '../../services/api';

interface EnrollForm {
  name: string;
  email: string;
  mobile: string;
  course?: string;
}

export default function Academy() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnrollForm>();

  const onSubmit = async (data: EnrollForm) => {
    try {
      await sendContact({ name: data.name, email: data.email, mobile: data.mobile, course: data.course });
      alert('Enrolled successfully! We will contact you soon.');
      reset();
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section>
      {/* Banner */}
      <AcademyBanner register={register} handleSubmit={handleSubmit} errors={errors} isSubmitting={isSubmitting} onSubmit={onSubmit} />

      {/* Proficient CTA */}
      <div className="bg-white section-pad-sm">
        <div className="container-xl text-center">
          <p className="text-surface-500 mb-1">Everything you need to become a</p>
          <h2 className="text-3xl font-black text-charcoal mb-6">
            Proficient <span className="text-crimson">Software Developer</span>
          </h2>
          <Link to="/academy/enroll" className="btn-primary btn-lg">
            Get Started for Free <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Why Choose Beat */}
      <WhyChooseBeat />

      {/* Get Skilled */}
      <SkillSection />

      {/* Top Courses */}
      <TopCoursesSection />

      {/* Trending Courses */}
      <TrendingCoursesSection />

      {/* Live Projects */}
      <div className="bg-surface-50 section-pad">
        <div className="container-xl">
          <LiveProject projects={projects} />
        </div>
      </div>
    </section>
  );
}

/* ── Banner ── */
function AcademyBanner({ register, handleSubmit, errors, isSubmitting, onSubmit }: any) {
  return (
    <div className="bg-charcoal-gradient text-white">
      <div className="container-xl py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left — Heading */}
          <div className="flex-1 max-w-xl">
            <span className="section-tag">Beat Academy</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
              Best<br /><span className="text-crimson">Tech Company</span>
            </h1>
            <p className="text-surface-300 text-lg leading-relaxed mb-6">
              Learn industry-relevant skills with top tech veterans.
              Join thousands of students building their future with Beat.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Live Projects', 'Expert Mentors', 'Job Placement', 'Certifications'].map((tag) => (
                <span key={tag} className="badge badge-dark">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right — Enrollment Form */}
          <div className="w-full lg:w-96 bg-white rounded-2xl shadow-hover p-7 shrink-0">
            <div className="h-1 bg-crimson-gradient rounded-full -mt-7 mx-0 mb-6 -mx-7 rounded-t-2xl" />
            <h3 className="text-xl font-bold text-charcoal mb-5">Enroll Now</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="form-label">Your name</label>
                <input
                  className="form-input-box"
                  {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Min 3 characters' } })}
                />
                {errors.name && <p className="form-error">{errors.name.message}</p>}
              </div>
              <div>
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-input-box"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                />
                {errors.email && <p className="form-error">{errors.email.message}</p>}
              </div>
              <div>
                <label className="form-label">Mobile</label>
                <input
                  type="tel"
                  className="form-input-box"
                  {...register('mobile', {
                    required: 'Mobile is required',
                    pattern: { value: /^[0-9_-]{10,12}$/, message: 'Enter valid mobile number' },
                    maxLength: { value: 10, message: 'Enter 10 digit mobile' },
                  })}
                />
                {errors.mobile && <p className="form-error">{errors.mobile.message}</p>}
              </div>
              <div>
                <label className="form-label">Course you are interested in</label>
                <textarea rows={2} className="form-input-box resize-none" {...register('course')} />
              </div>
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-sm text-surface-600 cursor-pointer">
                  <input type="checkbox" className="accent-crimson w-4 h-4" required />
                  I'm not a robot
                </label>
                <button type="submit" disabled={isSubmitting} className="btn-primary">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-1 bg-crimson-gradient" />
    </div>
  );
}

/* ── Why Choose Beat ── */
function WhyChooseBeat() {
  const items = [
    { icon: '🎓', title: 'Expert Instructors', desc: 'Learn from industry veterans with years of hands-on experience.' },
    { icon: '💻', title: 'Practical Learning', desc: 'Hands-on projects and real-world applications in every course.' },
    { icon: '📜', title: 'Certification', desc: 'Get industry-recognized certifications upon course completion.' },
    { icon: '🤝', title: 'Career Support', desc: 'We help you land your dream job with placement assistance.' },
    { icon: '🕐', title: 'Flexible Schedule', desc: 'Learn at your own pace with flexible timing options.' },
    { icon: '🌐', title: 'Online & Offline', desc: 'Choose between online sessions or in-person learning.' },
  ];

  return (
    <div className="bg-surface-50 section-pad">
      <div className="container-xl">
        <div className="section-header-center">
          <span className="section-tag">Why Us</span>
          <h2 className="section-title">
            Why Choose <span className="text-crimson">Beat Academy?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={item.title} className="card p-6 group" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="w-12 h-12 rounded-xl bg-crimson/10 border border-crimson/15 flex items-center justify-center text-2xl mb-4 group-hover:bg-crimson/15 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
              <p className="text-surface-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Get Skilled ── */
function SkillSection() {
  return (
    <div className="bg-white section-pad">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag">Skills</span>
            <h2 className="section-title accent-line-bottom">
              Get Skilled with <span className="text-crimson">Beat</span>
            </h2>
            <p className="section-desc mb-8">
              Our structured programs are designed to take you from beginner to job-ready professional.
            </p>
            <ul className="space-y-4">
              {skillBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="text-crimson" size={12} />
                  </div>
                  <span className="text-surface-600 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-charcoal rounded-2xl p-8 shadow-card-dark">
            <p className="text-surface-400 text-xs uppercase font-semibold mb-6" style={{ letterSpacing: '0.12em' }}>
              Program Outcomes
            </p>
            {[
              { label: 'Placement Rate', val: '85%' },
              { label: 'Avg. Salary Hike', val: '40%' },
              { label: 'Students Trained', val: '5000+' },
              { label: 'Industry Partners', val: '50+' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                <span className="text-surface-400 text-sm">{stat.label}</span>
                <span className="text-white font-bold text-lg">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Top Courses ── */
function TopCoursesSection() {
  return (
    <div className="bg-charcoal section-pad">
      <div className="container-xl">
        <div className="section-header-center">
          <span className="section-tag">Enroll Today</span>
          <h2 className="text-4xl font-black text-white leading-tight mb-4">
            Our Top Courses
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Industry-curated programs designed to make you job-ready.
          </p>
        </div>

        {/* Mobile: list */}
        <div className="flex flex-col gap-3 md:hidden mt-10">
          {topCourses.map((course, i) => (
            <div key={course.id + i} className="card-dark p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-surface-400 uppercase font-semibold mb-1">Become a</p>
                <p className="text-white font-bold uppercase">{course.heading}</p>
              </div>
              <Link to="/academy/enroll" className="btn-primary text-xs px-4 py-2">
                Know More
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop: cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {topCourses.map((course, i) => (
            <div
              key={course.id + i}
              className="card-dark overflow-hidden group hover:ring-2 hover:ring-crimson transition-all cursor-pointer"
              onClick={() => window.location.href = '/academy/enroll'}
            >
              <div className="overflow-hidden">
                <img
                  src={course.imgUrl}
                  alt={course.heading}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold mb-2">{course.heading}</h3>
                <p className="text-surface-400 text-xs leading-relaxed mb-4">{course.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-surface-500 text-xs">
                    <Users size={12} />
                    <span>{course.students} Students</span>
                  </div>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-surface-500 text-xs hover:text-crimson transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Share2 size={12} />
                    <span>{course.share}K+</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/academy/enroll" className="btn-primary btn-lg">
            Enroll Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Trending Courses ── */
function TrendingCoursesSection() {
  const trendingCourses = [
    { name: 'Java Full Stack', icon: '☕', category: 'Programming' },
    { name: 'Python', icon: '🐍', category: 'Programming' },
    { name: 'Angular', icon: '🅰️', category: 'Frontend' },
    { name: 'Spring Boot', icon: '🌱', category: 'Backend' },
    { name: 'SQL', icon: '🗄️', category: 'Database' },
    { name: 'Data Analytics', icon: '📊', category: 'Data Science' },
  ];

  return (
    <div className="bg-surface-50 section-pad">
      <div className="container-xl">
        <div className="section-header-center">
          <span className="section-tag">In Demand</span>
          <h2 className="section-title">Trending Courses</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {trendingCourses.map((course) => (
            <div
              key={course.name}
              className="card p-5 text-center group hover:ring-2 hover:ring-crimson cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {course.icon}
              </div>
              <p className="font-semibold text-charcoal text-sm">{course.name}</p>
              <p className="text-surface-400 text-xs mt-1">{course.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
