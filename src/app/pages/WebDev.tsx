import { Code, Globe, Smartphone, Zap, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/I_dontKnow/ImageWithFallback';

export default function WebDev() {
  const projects = [
    {
      title: 'Plateforme E-Commerce',
      description: 'Une plateforme e-commerce complète avec gestion des produits, panier d\'achats, et système de paiement intégré. Interface moderne et responsive avec React et Node.js.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'Gestion de catalogues produits',
        'Panier d\'achats en temps réel',
        'Paiement sécurisé Stripe',
        'Dashboard administrateur',
        'Suivi des commandes'
      ]
    },
    {
      title: 'Application de Gestion de Projets',
      description: 'Un outil collaboratif de gestion de projets inspiré de Trello et Asana. Permet la création de tableaux, tâches, et suivi en temps réel avec notifications.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      features: [
        'Tableaux Kanban interactifs',
        'Collaboration en temps réel',
        'Notifications push',
        'Gestion des équipes',
        'Rapports et analytics'
      ]
    },
    {
      title: 'Portail Éducatif en Ligne',
      description: 'Plateforme d\'apprentissage en ligne avec cours vidéos, quiz interactifs, suivi de progression et certificats. Système de gestion pour enseignants et étudiants.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Next.js', 'PostgreSQL', 'AWS S3', 'WebRTC'],
      features: [
        'Cours vidéos streaming',
        'Quiz et évaluations',
        'Suivi de progression',
        'Classes virtuelles live',
        'Certificats automatiques'
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
              <Code className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold">Développement Web</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
            Partage de connaissancce lors des réunions hébdomadaire et conception de divers projets selon les besoins de certaines demandes en externe ainsi que l'inspiration de chacun. Concversation autour d'une table concernant les évolution du marchées, autraides pour le bon déroulement de projet et partages de solutions sur des BUG complexes
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Maîtrisées</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'React', icon: '⚛️' },
            { name: 'Vue.js', icon: '💚' },
            { name: 'Angular', icon: '🅰️' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'Django', icon: '🐍' },
            { name: 'Laravel', icon: '🔺' },
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'MongoDB', icon: '🍃' },
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
              Projets <span className="text-red-600">Réalisés</span>
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez quelques-uns de nos projets web les plus innovants
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
                      <Zap className="w-5 h-5 text-red-600" />
                      Technologies utilisées
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
                      Fonctionnalités clés
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Services Web</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: 'Sites Web Vitrine',
              description: 'Sites web modernes et optimisés SEO pour présenter votre entreprise'
            },
            {
              icon: Smartphone,
              title: 'Applications Web Progressives',
              description: 'PWA offrant une expérience mobile native sur navigateur'
            },
            {
              icon: Zap,
              title: 'API & Backend',
              description: 'Développement d\'APIs REST et GraphQL performantes et sécurisées'
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
          <h2 className="text-3xl font-bold mb-4">Besoin d'un projet web ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour discuter de votre projet
          </p>
          <button className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Démarrer un projet
          </button>
        </div>
      </section>
    </div>
  );
}
