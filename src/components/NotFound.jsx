import { Link, useNavigate } from 'react-router';


const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // goes to the previous page
  };

  return (
    <>
      
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md space-y-4">
          <h1 className="text-6xl font-bold text-red-600">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900">Page Not Found</h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-4 flex gap-4 justify-center">
            <button
              onClick={handleGoBack}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Go Back
            </button>
            <Link
              to="/"
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
