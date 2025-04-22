
import { useEffect } from 'react';

const Index = () => {
  // Redirect to the pure HTML/CSS/JS version
  useEffect(() => {
    // Use a short timeout to ensure the redirection happens after the component mounts
    const redirectTimer = setTimeout(() => {
      window.location.href = '/portfolio.html';
    }, 100);
    
    // Clean up timer on unmount
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white">
      <div className="text-center p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-indigo-700">Redirecting to Portfolio...</h1>
        <p className="mb-6 text-gray-600">If you are not redirected automatically, please click the link below:</p>
        <a 
          href="/portfolio.html" 
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
        >
          Go to Portfolio
        </a>
      </div>
    </div>
  );
};

export default Index;
