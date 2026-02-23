import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';

interface NewsletterForm {
  email: string;
}

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterForm>();

  const onSubmit = async (data: NewsletterForm) => {
    try {
      await fetch('/api/beat/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      alert('Thanks for subscribing!');
      reset();
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-crimson py-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Mail size={40} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Subscribe to our Newsletter</h2>
        <p className="text-white/80 mb-6">Stay updated with the latest news, product updates, and opportunities from Beat Technologies.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 justify-center">
          <div className="flex-1 max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
              })}
              className="w-full px-4 py-3 rounded text-rhino text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.email && (
              <p className="text-white/80 text-xs mt-1 text-left">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-rhino text-white px-8 py-3 rounded font-medium hover:bg-rhino-dark transition-colors duration-200 disabled:opacity-60"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}

