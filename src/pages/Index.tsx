
import { useEffect } from 'react';

const Index = () => {
  // Redirect to the pure HTML/CSS/JS version
  useEffect(() => {
    window.location.href = '/portfolio.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Portfolio...</h1>
        <p className="mb-4">If you are not redirected automatically, please click the link below:</p>
        <a href="/portfolio.html" className="text-blue-600 hover:underline">Go to Portfolio</a>
      </div>
    </div>
  );
};

export default Index;
