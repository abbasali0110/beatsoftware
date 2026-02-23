import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { sendContact } from '../../services/api';

interface EnrollFormData {
  name: string;
  email: string;
  mobile: string;
  course?: string;
}

export default function Enroll() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnrollFormData>();

  const onSubmit = async (data: EnrollFormData) => {
    try {
      await sendContact(data);
      alert('Enrollment submitted! We will contact you shortly.');
      reset();
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="beat-layout">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-rhino mb-2">Enroll Now</h1>
          <p className="text-gray-500">Get started with your learning journey at Beat Academy</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="form-label">Your name *</label>
              <input
                className="form-input"
                placeholder="Enter your full name"
                {...register('name', {
                  required: 'Name is required',
                  minLength: { value: 3, message: 'Name should be at least 3 characters' },
                })}
              />
              {errors.name && <p className="form-error">{errors.name.message}</p>}
            </div>

            <div>
              <label className="form-label">Email address *</label>
              <input
                type="email"
                className="form-input"
                placeholder="your@email.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' },
                })}
              />
              {errors.email && <p className="form-error">{errors.email.message}</p>}
            </div>

            <div>
              <label className="form-label">Mobile number *</label>
              <input
                type="tel"
                className="form-input"
                placeholder="10-digit mobile number"
                {...register('mobile', {
                  required: 'Mobile is required',
                  pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit mobile number' },
                })}
              />
              {errors.mobile && <p className="form-error">{errors.mobile.message}</p>}
            </div>

            <div>
              <label className="form-label">Course you are interested in</label>
              <textarea
                rows={3}
                className="form-input resize-none"
                placeholder="e.g., Java Full Stack, Python, Angular..."
                {...register('course')}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="accent-crimson w-4 h-4" required />
                I'm not a robot
              </label>
              <button type="submit" disabled={isSubmitting} className="btn-primary">
                {isSubmitting ? 'Submitting...' : 'Enroll Now'}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link to="/academy" className="text-crimson text-sm hover:text-crimson-dark transition-colors">
            ← Back to Academy
          </Link>
        </div>
      </div>
    </div>
  );
}
