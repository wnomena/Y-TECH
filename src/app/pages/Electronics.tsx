import { Wrench, CircuitBoard, Cpu, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/I_dontKnow/ImageWithFallback';

export default function Electronics() {
  const projects = [
    {
      title: 'Système Domotique IoT',
      description: 'Solution domotique complète avec capteurs sans fil, contrôle centralisé, automatisation par IA et application mobile. Gestion énergétique intelligente et sécurité intégrée.',
      image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['ESP32', 'MQTT', 'LoRaWAN', 'PCB Design'],
      features: [
        'Capteurs environnementaux multi-zones',
        'Contrôle éclairage et chauffage',
        'Sécurité avec détection intrusion',
        'Économie d\'énergie automatisée',
        'Interface mobile temps réel'
      ]
    },
    {
      title: 'Wearable de Santé Connecté',
      description: 'Dispositif portable de monitoring santé avec ECG, oxymètre, accéléromètre et GPS. Autonomie longue durée et synchronisation cloud pour suivi médical.',
      image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['ARM Cortex-M', 'Bluetooth LE', 'Altium Designer', 'FreeRTOS'],
      features: [
        'Monitoring ECG continu',
        'Oxymétrie et température',
        'Détection de chutes',
        'Batterie 7 jours',
        'Étanchéité IP68'
      ]
    },
    {
      title: 'Station Météo Professionnelle',
      description: 'Station météo autonome avec mesures multi-paramètres, transmission satellite, alimentation solaire et datalogger pour applications scientifiques et agricoles.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['STM32', 'Solar Power', 'LoRa', 'KiCad'],
      features: [
        'Mesures température/humidité/pression',
        'Anémomètre et pluviomètre',
        'Transmission satellite',
        'Alimentation solaire autonome',
        'Datalogger haute capacité'
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
              <Wrench className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold">Électronique</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
            Conception et développement de systèmes électroniques embarqués. De la conception de PCB
            aux prototypes fonctionnels, nous créons des solutions électroniques innovantes pour IoT,
            wearables et systèmes embarqués.
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Électroniques</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Arduino', icon: '🔌' },
            { name: 'ESP32/ESP8266', icon: '📡' },
            { name: 'STM32', icon: '⚙️' },
            { name: 'Raspberry Pi', icon: '🍓' },
            { name: 'KiCad/Altium', icon: '🔧' },
            { name: 'MQTT/LoRa', icon: '📶' },
            { name: 'Embedded C', icon: '💻' },
            { name: 'PCB Design', icon: '🖥️' },
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
              Projets <span className="text-red-600">Électroniques</span>
            </h2>
            <p className="text-xl text-gray-600">
              Systèmes embarqués et IoT innovants
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
                      <Cpu className="w-5 h-5 text-red-600" />
                      Composants et technologies
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
                      Caractéristiques techniques
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expertises Électroniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: CircuitBoard,
              title: 'Conception PCB',
              description: 'Design de circuits imprimés professionnels multi-couches optimisés'
            },
            {
              icon: Cpu,
              title: 'Systèmes Embarqués',
              description: 'Développement firmware temps réel pour microcontrôleurs et SoC'
            },
            {
              icon: Wrench,
              title: 'Prototypage IoT',
              description: 'Conception rapide de prototypes connectés avec capteurs et actionneurs'
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
          <h2 className="text-3xl font-bold mb-4">Concrétisez votre projet électronique</h2>
          <p className="text-xl mb-8 opacity-90">
            De l'idée au prototype fonctionnel, accompagnement complet
          </p>
          <button className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Consultation technique
          </button>
        </div>
      </section>
    </div>
  );
}
