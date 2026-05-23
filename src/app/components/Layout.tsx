import { Outlet, Link, useLocation } from 'react-router';
import { Code, Smartphone, Monitor, Bot, Cpu, Palette, Zap, Wrench, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../../imports/image.png';

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/web', label: 'Web', icon: Code },
    { path: '/mobile', label: 'Mobile', icon: Smartphone },
    { path: '/desktop', label: 'Desktop', icon: Monitor },
    { path: '/ai', label: 'IA', icon: Bot },
    { path: '/robotics', label: 'Robotique', icon: Cpu },
    { path: '/automation', label: 'Automatisation', icon: Zap },
    { path: '/design', label: 'Design', icon: Palette },
    { path: '/electronics', label: 'Électronique', icon: Wrench },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImage} alt="Y-TECH" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold text-gray-900">
                <span className="text-red-600">Y-TECH</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImage} alt="Y-TECH" className="w-12 h-12 object-contain" />
                <span className="text-xl font-bold">
                  <span className="text-red-600">Y-TECH</span>
                </span>
              </div>
              <p className="text-gray-400">
                Club d'informatique à but non lucratif dédié à l'innovation technologique.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Nos Domaines</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/web" className="hover:text-red-600 transition-colors">Développement Web</Link></li>
                <li><Link to="/mobile" className="hover:text-red-600 transition-colors">Développement Mobile</Link></li>
                <li><Link to="/ai" className="hover:text-red-600 transition-colors">Intelligence Artificielle</Link></li>
                <li><Link to="/robotics" className="hover:text-red-600 transition-colors">Robotique</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Email: jsdev.web@gmail.com</p>
              <p className="text-gray-400">Rejoignez-nous pour innover ensemble</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Y-TECH. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
