import { Wrench, CircuitBoard, Cpu, CheckCircle } from 'lucide-react';
import { Params,NavigateToYMCAMadaOrFomr } from '../components/I_dontKnow/ContactAndJoin';

export default function Electronics() {
  const projects = [];

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

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expertises Électroniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
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
          <button onClick={() => NavigateToYMCAMadaOrFomr(Params.Contact)} className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Consultation technique
          </button>
        </div>
      </section>
    </div>
  );
}
