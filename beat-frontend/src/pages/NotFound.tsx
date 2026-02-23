import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-crimson mb-4">404</h1>
      <h2 className="text-3xl font-bold text-rhino mb-3">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily
        unavailable.
      </p>
      <Link to="/home" className="btn-primary">Go Back Home</Link>
    </div>
  );
}
