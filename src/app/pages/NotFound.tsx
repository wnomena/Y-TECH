import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-red-600 text-9xl font-bold">404</div>
          <h1 className="text-4xl font-bold text-gray-900">Page non trouvée</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="flex gap-4 justify-center pt-6">
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Page précédente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
