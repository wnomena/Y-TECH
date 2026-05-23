import { Link } from 'react-router';
import { Code, Smartphone, Monitor, Bot, Cpu, Palette, Zap, Wrench, ArrowRight } from 'lucide-react';
import logoImage from '../../imports/image.png';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Applications web modernes et performantes',
      link: '/web',
      color: 'text-red-600'
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Applications iOS et Android natives',
      link: '/mobile',
      color: 'text-red-600'
    },
    {
      icon: Monitor,
      title: 'Développement Desktop',
      description: 'Logiciels multiplateformes professionnels',
      link: '/desktop',
      color: 'text-red-600'
    },
    {
      icon: Bot,
      title: 'Intelligence Artificielle',
      description: 'Solutions IA et Machine Learning',
      link: '/ai',
      color: 'text-red-600'
    },
    {
      icon: Cpu,
      title: 'Robotique',
      description: 'Systèmes robotiques intelligents',
      link: '/robotics',
      color: 'text-red-600'
    },
    {
      icon: Zap,
      title: 'Automatisation',
      description: 'Automatisation de processus métiers',
      link: '/automation',
      color: 'text-red-600'
    },
    {
      icon: Palette,
      title: 'PAO Design',
      description: 'Design graphique et publication',
      link: '/design',
      color: 'text-red-600'
    },
    {
      icon: Wrench,
      title: 'Électronique',
      description: 'Systèmes électroniques embarqués',
      link: '/electronics',
      color: 'text-red-600'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Section Image - Légèrement à gauche */}
          <div className="lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={logoImage}
                alt="Y-TECH Logo"
                className="w-80 h-80 object-contain drop-shadow-2xl animate-pulse"
              />
            </div>
          </div>

          {/* Section Contenu */}
          <div className="lg:w-3/5 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900">
                Bienvenue chez <span className="text-red-600">Y-TECH</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Un club d'informatique à but non lucratif dédié à l'innovation technologique régissant sous l'autorité de la communauté de YMCA Madagascar
              </p>
              <div className="h-1 w-24 bg-red-600 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Nous œuvrons dans tout le secteur digital, offrant expertise et innovation
              dans les domaines les plus avancés de la technologie moderne. Notre mission
              est de former, partager et créer des solutions technologiques innovantes.
            </p>

            <div className="flex gap-4 pt-6">
              <Link
                to="/web"
                className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Découvrir nos projets
              </Link>
              <button className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl">
                Rejoindre le club
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-red-600">Domaines d'Expertise</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explorez nos différents secteurs d'activité et découvrez nos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600 group hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors w-fit">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <div className="flex items-center text-red-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à nous rejoindre ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Faites partie de la communauté Y-TECH et développez vos compétences technologiques
          </p>
          <button className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}
