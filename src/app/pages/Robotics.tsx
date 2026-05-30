import { Cpu, CircuitBoard, Cog, CheckCircle } from 'lucide-react';
import {NavigateToYMCAMadaOrFomr,Params} from "../components/I_dontKnow/ContactAndJoin"

export default function Robotics() {
  const projects = [];

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
          <button onClick={() => NavigateToYMCAMadaOrFomr(Params.Contact) } className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Démarrer votre projet
          </button>
        </div>
      </section>
    </div>
  );
}
