import { Smartphone, Apple, Download, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/I_dontKnow/ImageWithFallback';

export default function MobileDev() {
  const projects = [
    {
      title: 'Application de Livraison de Repas',
      description: 'Application mobile complète pour la commande et livraison de repas. Interface intuitive avec géolocalisation en temps réel, système de paiement mobile et notifications push.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
      features: [
        'Géolocalisation en temps réel',
        'Paiement mobile sécurisé',
        'Notifications push intelligentes',
        'Chat avec livreur',
        'Programme de fidélité'
      ]
    },
    {
      title: 'Réseau Social Fitness',
      description: 'Plateforme sociale dédiée au fitness avec suivi d\'entraînements, partage de performances, défis communautaires et coaching personnalisé via IA.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Flutter', 'Dart', 'TensorFlow Lite', 'Cloud Firestore'],
      features: [
        'Suivi d\'entraînements',
        'Analyse IA de performances',
        'Défis communautaires',
        'Plans personnalisés',
        'Intégration wearables'
      ]
    },
    {
      title: 'App de Gestion Financière',
      description: 'Application de gestion de finances personnelles avec analyse de dépenses, budgets intelligents, alertes automatiques et conseils d\'épargne personnalisés.',
      image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Swift', 'SwiftUI', 'Core Data', 'Charts'],
      features: [
        'Synchronisation bancaire',
        'Analyse automatique des dépenses',
        'Budgets intelligents',
        'Alertes personnalisées',
        'Rapports visuels détaillés'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/20 rounded-xl backdrop-blur">
              <Smartphone className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold">Développement Mobile</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
Ici, nous explorons ensemble la création d'applications, des designs UI/UX aux technologies cross-platform et natives.
À travers des défis de code et des ateliers pratiques, nous transformons vos idées en applications prêtes à installer.
Notre but est de propulser les compétences de chaque membre dans un esprit de partage et d'entraide.
Rejoignez-nous pour concevoir les applications de demain et faire vibrer la communauté tech mobile !
          </p>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Plateformes & Frameworks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'React Native', icon: '⚛️' },
            { name: 'Flutter', icon: '🎯' },
            { name: 'Swift/iOS', icon: '🍎' },
            { name: 'Kotlin/Android', icon: '🤖' },
            { name: 'Expo', icon: '📱' },
            { name: 'Firebase', icon: '🔥' },
            { name: 'SQLite', icon: '💾' },
            { name: 'GraphQL', icon: '📊' },
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center border border-gray-100"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <div className="font-semibold text-gray-800">{tech.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Applications <span className="text-red-600">Mobiles</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nos applications mobiles innovantes et performantes
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl shadow-2xl"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Apple className="w-5 h-5 text-red-600" />
                      Stack technique
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600" />
                      Fonctionnalités principales
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Expertises Mobile</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Apple,
              title: 'Apps Natives',
              description: 'Développement natif iOS (Swift) et Android (Kotlin) pour performances maximales'
            },
            {
              icon: Smartphone,
              title: 'Apps Cross-Platform',
              description: 'Applications multiplateformes avec React Native et Flutter pour réduire les coûts'
            },
            {
              icon: Download,
              title: 'Publication Store',
              description: 'Assistance complète pour publication sur App Store et Google Play Store'
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-red-600"
            >
              <service.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Votre application mobile vous attend</h2>
          <p className="text-xl mb-8 opacity-90">
            Transformons votre idée en application mobile performante
          </p>
          <button className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Lancer votre projet
          </button>
        </div>
      </section>
    </div>
  );
}
