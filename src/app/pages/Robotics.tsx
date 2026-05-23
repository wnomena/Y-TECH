import { Cpu, CircuitBoard, Cog, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/I_dontKnow/ImageWithFallback';

export default function Robotics() {
  const projects = [
    {
      title: 'Bras Robotique Industriel',
      description: 'Robot manipulateur 6 axes pour ligne de production avec précision sub-millimétrique. Système de vision intégré pour détection et tri d\'objets avec apprentissage adaptatif.',
      image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['ROS2', 'Python', 'C++', 'Computer Vision'],
      features: [
        'Contrôle précis 6 axes',
        'Vision par ordinateur intégrée',
        'Programmation par démonstration',
        'Détection de collision',
        'Interface de contrôle intuitive'
      ]
    },
    {
      title: 'Robot Mobile Autonome',
      description: 'Robot de navigation autonome pour entrepôts avec cartographie SLAM, évitement d\'obstacles dynamiques et gestion de flotte multi-robots.',
      image: 'https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['ROS', 'SLAM', 'LiDAR', 'Deep Learning'],
      features: [
        'Navigation autonome SLAM',
        'Évitement d\'obstacles temps réel',
        'Gestion de flotte intelligente',
        'Optimisation de trajectoires',
        'Recharge automatique'
      ]
    },
    {
      title: 'Drone Agricole Intelligent',
      description: 'Drone autonome pour surveillance et analyse de cultures avec IA embarquée. Détection précoce de maladies, cartographie multispectrale et pulvérisation ciblée.',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['PX4', 'OpenCV', 'TensorFlow Lite', 'GPS-RTK'],
      features: [
        'Vol autonome GPS-RTK',
        'Analyse multispectrale cultures',
        'Détection IA de maladies',
        'Pulvérisation ciblée',
        'Cartographie haute résolution'
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
              <Cpu className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold">Robotique</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
Entre conception mécanique, électronique et programmation de systèmes autonomes, nos membres collaborent pour relever des défis techniques captivants.
C'est l'endroit parfait pour dompter les microcontrôleurs, assembler vos premiers prototypes et propulser vos compétences d'ingénierie en équipe !
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Robotiques</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'ROS/ROS2', icon: '🤖' },
            { name: 'Arduino', icon: '🔌' },
            { name: 'Raspberry Pi', icon: '🍓' },
            { name: 'NVIDIA Jetson', icon: '🚀' },
            { name: 'SLAM', icon: '🗺️' },
            { name: 'Computer Vision', icon: '👁️' },
            { name: 'Embedded C++', icon: '⚙️' },
            { name: 'PID Control', icon: '📊' },
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
              Projets <span className="text-red-600">Robotiques</span>
            </h2>
            <p className="text-xl text-gray-600">
              Systèmes robotiques intelligents et autonomes
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
                      <CircuitBoard className="w-5 h-5 text-red-600" />
                      Technologies embarquées
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
                      Capacités robotiques
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Solutions Robotiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Cpu,
              title: 'Robotique Industrielle',
              description: 'Robots manipulateurs et systèmes d\'automatisation pour lignes de production'
            },
            {
              icon: Cog,
              title: 'Robots Mobiles',
              description: 'AGV et AMR pour transport autonome et navigation intelligente'
            },
            {
              icon: CircuitBoard,
              title: 'Systèmes Embarqués',
              description: 'Développement de firmware et contrôleurs temps réel pour robotique'
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
          <h2 className="text-3xl font-bold mb-4">Automatisez avec la robotique</h2>
          <p className="text-xl mb-8 opacity-90">
            Développons ensemble votre solution robotique sur mesure
          </p>
          <button className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Démarrer votre projet
          </button>
        </div>
      </section>
    </div>
  );
}
