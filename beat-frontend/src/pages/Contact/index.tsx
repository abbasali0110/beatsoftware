import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { sendContact } from '../../services/api';

interface ContactForm {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export default function Contact() {
  return (
    <div>
      {/* Primary Contact */}
      <GetInTouchSection />

      {/* Secondary — Tell Us More */}
      <TellUsMoreSection />

      {/* Map */}
      <MapSection />
    </div>
  );
}

/* ── Get In Touch ── */
function GetInTouchSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    try {
      await sendContact(data);
      alert('Message sent successfully!');
      reset();
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Left — charcoal info panel */}
        <div className="bg-charcoal text-white px-10 lg:px-16 py-16 flex flex-col justify-center">
          <span className="section-tag">Contact</span>
          <h2 className="text-4xl font-black text-white leading-tight mb-4">
            Get in <span className="text-crimson">Touch</span>
          </h2>
          <p className="text-surface-400 mb-10 leading-relaxed">
            You need more information? We are happy to help. Reach out to our team and we will
            get back to you within 24 hours.
          </p>

          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-crimson/15 border border-crimson/20 flex items-center justify-center shrink-0">
                <MapPin className="text-crimson" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Find us at the office</h4>
                <p className="text-surface-400 text-sm leading-relaxed">
                  HAL Main Gate, LBS Nagar,<br />Bangalore — 560013
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-crimson/15 border border-crimson/20 flex items-center justify-center shrink-0">
                <Phone className="text-crimson" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Give us a ring</h4>
                <p className="text-surface-400 text-sm leading-relaxed">
                  +91 8799346695<br />+91 7865544123
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-crimson/15 border border-crimson/20 flex items-center justify-center shrink-0">
                <Clock className="text-crimson" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Working hours</h4>
                <p className="text-surface-400 text-sm">Mon — Fri, 8:00 AM – 10:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-crimson/15 border border-crimson/20 flex items-center justify-center shrink-0">
                <Mail className="text-crimson" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email us</h4>
                <p className="text-surface-400 text-sm">contact@beatsoftware.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — white form panel */}
        <div className="bg-white px-10 lg:px-16 py-16 flex flex-col justify-center">
          <h2 className="text-3xl font-black text-charcoal mb-2">Contact Us</h2>
          <p className="text-surface-500 text-sm mb-8">Fill in the form and we'll be in touch shortly.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">First name</label>
                <input
                  className="form-input"
                  {...register('firstname', { required: 'Required', minLength: { value: 3, message: 'Min 3 characters' } })}
                />
                {errors.firstname && <p className="form-error">{errors.firstname.message}</p>}
              </div>
              <div>
                <label className="form-label">Last name</label>
                <input
                  className="form-input"
                  {...register('lastname', { required: 'Required', minLength: { value: 3, message: 'Min 3 characters' } })}
                />
                {errors.lastname && <p className="form-error">{errors.lastname.message}</p>}
              </div>
            </div>

            <div>
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-input"
                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
              />
              {errors.email && <p className="form-error">{errors.email.message}</p>}
            </div>

            <div>
              <label className="form-label">Your message</label>
              <textarea
                rows={4}
                className="form-input resize-none"
                {...register('message', { required: 'Message is required', minLength: { value: 50, message: 'At least 50 characters' } })}
              />
              {errors.message && <p className="form-error">{errors.message.message}</p>}
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-sm text-surface-600 cursor-pointer">
                <input type="checkbox" className="accent-crimson w-4 h-4" required />
                I'm not a robot
              </label>
              <button type="submit" disabled={isSubmitting} className="btn-primary">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ── Tell Us More ── */
interface TellUsMoreForm {
  tumFirstname: string;
  tumLastname: string;
  tumEmail: string;
  tumMessage: string;
}

function TellUsMoreSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TellUsMoreForm>();

  const onSubmit = async (data: TellUsMoreForm) => {
    try {
      await sendContact({ firstname: data.tumFirstname, lastname: data.tumLastname, email: data.tumEmail, message: data.tumMessage });
      alert('Message sent successfully!');
      reset();
    } catch {
      alert('Something went wrong.');
    }
  };

  return (
    <div className="bg-surface-50 section-pad">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto">
          <div className="section-header-center">
            <span className="section-tag">Leave a Message</span>
            <h2 className="section-title">Tell us more about yourself</h2>
            <p className="section-desc mx-auto">
              Whether you have questions or you would just like to say hello, contact us.
            </p>
          </div>

          <div className="card p-8 mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="form-label">First name</label>
                  <input
                    className="form-input-box"
                    {...register('tumFirstname', { required: 'Required', minLength: { value: 3, message: 'Min 3 chars' } })}
                  />
                  {errors.tumFirstname && <p className="form-error">{errors.tumFirstname.message}</p>}
                </div>
                <div>
                  <label className="form-label">Last name</label>
                  <input
                    className="form-input-box"
                    {...register('tumLastname', { required: 'Required', minLength: { value: 3, message: 'Min 3 chars' } })}
                  />
                  {errors.tumLastname && <p className="form-error">{errors.tumLastname.message}</p>}
                </div>
              </div>
              <div>
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-input-box"
                  {...register('tumEmail', { required: 'Required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                />
                {errors.tumEmail && <p className="form-error">{errors.tumEmail.message}</p>}
              </div>
              <div>
                <label className="form-label">Your message</label>
                <textarea rows={4} className="form-input-box resize-none" {...register('tumMessage')} />
              </div>
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-sm text-surface-600 cursor-pointer">
                  <input type="checkbox" className="accent-crimson w-4 h-4" required />
                  I'm not a robot
                </label>
                <button type="submit" disabled={isSubmitting} className="btn-primary">
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Map ── */
interface MapForm {
  fullname: string;
  mapemail: string;
  mapmessage: string;
}

function MapSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MapForm>();

  const onSubmit = async (data: MapForm) => {
    try {
      await sendContact({ name: data.fullname, email: data.mapemail, message: data.mapmessage });
      alert('Message sent!');
      reset();
    } catch {
      alert('Something went wrong.');
    }
  };

  return (
    <div className="relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53275.83330223951!2d83.5033319091444!3d26.145604599999988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefb37c65040b96f0!2sBEAT%20Software%20Technologies%20Pvt.%20Ltd.!5e1!3m2!1sen!2ssa!4v1655528229386!5m2!1sen!2ssa"
        width="100%"
        height="560"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Beat office location"
      />

      {/* Overlay form — desktop only */}
      <div className="hidden lg:block absolute top-8 right-8 bg-white rounded-2xl shadow-hover p-8 w-96">
        <div className="h-1 bg-crimson-gradient rounded-full -mt-8 -mx-8 mb-6 rounded-t-2xl" />
        <h2 className="text-xl font-bold text-charcoal mb-5">Contact Us</h2>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="text-crimson shrink-0 mt-0.5" size={15} />
            <div>
              <p className="font-semibold text-charcoal text-xs mb-0.5">Find us at</p>
              <p className="text-surface-500 text-xs">Jamalpur Bikkampur,<br />U.P. — 275304</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="text-crimson shrink-0 mt-0.5" size={15} />
            <div>
              <p className="font-semibold text-charcoal text-xs mb-0.5">Call us</p>
              <p className="text-surface-500 text-xs">+91 8799346695<br />Mon–Fri, 8–22</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input placeholder="Full name" className="form-input-box text-sm" {...register('fullname', { required: true, minLength: 3 })} />
              {errors.fullname && <p className="form-error">Required (min 3 chars)</p>}
            </div>
            <div>
              <input type="email" placeholder="Email" className="form-input-box text-sm" {...register('mapemail', { required: true })} />
              {errors.mapemail && <p className="form-error">Required</p>}
            </div>
          </div>
          <textarea
            rows={3}
            placeholder="Your message (min 50 chars)"
            className="form-input-box resize-none text-sm"
            {...register('mapmessage', { required: true, minLength: 50 })}
          />
          {errors.mapmessage && <p className="form-error">Min 50 characters</p>}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs text-surface-500 cursor-pointer">
              <input type="checkbox" className="accent-crimson" required />
              Not a robot
            </label>
            <button type="submit" disabled={isSubmitting} className="btn-primary text-sm px-4 py-2">
              {isSubmitting ? '...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
