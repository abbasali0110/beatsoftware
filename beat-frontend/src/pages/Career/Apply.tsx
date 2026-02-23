import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { applyForJob } from '../../services/api';

interface ApplyFormData {
  name: string;
  email: string;
  resume?: FileList;
}

export default function Apply() {
  const location = useLocation();
  const { opportunityId, opportunityName } = (location.state as { opportunityId?: number; opportunityName?: string }) || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>();

  const onSubmit = async (data: ApplyFormData) => {
    try {
      await applyForJob({
        name: data.name,
        email: data.email,
        resume: data.resume?.[0],
        opportunityId: opportunityId ?? 0,
      });
      alert('Application submitted successfully! We will get back to you soon.');
      reset();
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="beat-layout">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-rhino mb-2">Apply Now</h1>
          {opportunityName && (
            <p className="text-crimson font-semibold text-lg">{opportunityName}</p>
          )}
          <p className="text-gray-500 mt-1">Fill in the details below to submit your application</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="form-label">Full name *</label>
              <input
                className="form-input"
                placeholder="Your full name"
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
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
                })}
              />
              {errors.email && <p className="form-error">{errors.email.message}</p>}
            </div>

            <div>
              <label className="form-label">Resume / CV</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-crimson/10 file:text-crimson hover:file:bg-crimson/20 cursor-pointer"
                {...register('resume')}
              />
              <p className="text-gray-400 text-xs mt-1">Accepted formats: PDF, DOC, DOCX</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="accent-crimson w-4 h-4" required />
                I'm not a robot
              </label>
              <button type="submit" disabled={isSubmitting} className="btn-primary">
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link to="/career" className="text-crimson text-sm hover:text-crimson-dark transition-colors">
            ← Back to Careers
          </Link>
        </div>
      </div>
    </div>
  );
}
