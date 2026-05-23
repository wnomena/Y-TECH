import { Zap, Workflow, Timer, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/I_dontKnow/ImageWithFallback';

export default function Automation() {
  const projects = [
    {
      title: 'Automatisation de Pipeline CI/CD',
      description: 'Système complet d\'intégration et déploiement continus avec tests automatisés, analyse de code, build multi-environnements et déploiement orchestré sur Kubernetes.',
      image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes'],
      features: [
        'Tests automatisés multi-niveaux',
        'Analyse qualité de code',
        'Déploiement multi-environnements',
        'Rollback automatique',
        'Monitoring et alertes'
      ]
    },
    {
      title: 'Système de Gestion Documentaire',
      description: 'Plateforme d\'automatisation de traitement documentaire avec OCR, classification automatique par IA, extraction de données et archivage intelligent.',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Python', 'Tesseract OCR', 'NLP', 'ElasticSearch'],
      features: [
        'OCR haute précision',
        'Classification IA automatique',
        'Extraction de données structurées',
        'Recherche full-text avancée',
        'Workflow validation'
      ]
    },
    {
      title: 'Automatisation Marketing Multicanal',
      description: 'Plateforme d\'automatisation marketing avec segmentation intelligente, campagnes multicanales, scoring leads par IA et reporting temps réel.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Node.js', 'Redis', 'PostgreSQL', 'SendGrid API'],
      features: [
        'Segmentation client dynamique',
        'Campagnes email/SMS/push',
        'Lead scoring automatique',
        'A/B testing intégré',
        'Analytics temps réel'
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
              <Zap className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold">Automatisation</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
Du traitement de données de masse à l'interconnexion d'APIs complexes, nous concevons ensemble des workflows fluides pour éliminer les tâches répétitives.

Venez maîtriser les meilleurs outils de flux de travail, libérer le plein potentiel du code et propulser votre productivité vers une tout autre dimension !
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Outils d'Automatisation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Zapier/Make', icon: '⚡' },
            { name: 'Selenium', icon: '🤖' },
            { name: 'Ansible', icon: '🔧' },
            { name: 'Jenkins', icon: '🏗️' },
            { name: 'GitHub Actions', icon: '⚙️' },
            { name: 'Apache Airflow', icon: '🌊' },
            { name: 'Python Scripts', icon: '🐍' },
            { name: 'Power Automate', icon: '💼' },
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
              Projets <span className="text-red-600">d'Automatisation</span>
            </h2>
            <p className="text-xl text-gray-600">
              Solutions pour optimiser et automatiser vos processus
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
                      <Workflow className="w-5 h-5 text-red-600" />
                      Outils utilisés
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
                      Automatisations clés
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types d'Automatisation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Workflow,
              title: 'Process Automation',
              description: 'Automatisation de workflows métiers complexes et processus répétitifs'
            },
            {
              icon: Zap,
              title: 'DevOps & CI/CD',
              description: 'Pipelines automatisés de développement, test et déploiement'
            },
            {
              icon: Timer,
              title: 'Tâches Planifiées',
              description: 'Scripts et jobs automatiques pour maintenance et reporting'
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
          <h2 className="text-3xl font-bold mb-4">Gagnez du temps avec l'automatisation</h2>
          <p className="text-xl mb-8 opacity-90">
            Identifions ensemble les processus à automatiser dans votre organisation
          </p>
          <button className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Audit gratuit
          </button>
        </div>
      </section>
    </div>
  );
}
