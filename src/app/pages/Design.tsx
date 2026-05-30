import { Palette, Layers, PenTool, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/I_dontKnow/ImageWithFallback';
import {NavigateToYMCAMadaOrFomr,Params} from '../components/I_dontKnow/ContactAndJoin'

export default function Design() {
  const projects = [
    {
      title: 'Identité Visuelle d\'Entreprise',
      description: 'Création complète d\'identité de marque incluant logo, charte graphique, typographie, palette de couleurs et guidelines d\'utilisation pour startup tech innovante.',
      image: 'https://images.unsplash.com/photo-1725347740938-73127ed5d91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Adobe Illustrator', 'Figma', 'Photoshop', 'InDesign'],
      features: [
        'Logo et variations',
        'Charte graphique complète',
        'Templates documents',
        'Guidelines de marque',
        'Assets réseaux sociaux'
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
              <Palette className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold">PAO & Design Graphique</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
Transformez vos concepts en interfaces mémorables en plongeant au cœur de notre univers dédié au Design UI/UX et au graphisme.

En manipulant la puissance créative de la suite Adobe et l’agilité collaborative de Figma, nos membres façonnent des maquettes interactives et des visuels à fort impact.

Rejoignez-nous pour aiguiser votre œil artistique, maîtriser les meilleurs outils de prototypage du marché et donner une esthétique professionnelle à tous vos projets digitaux !
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Outils Créatifs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Photoshop', icon: '🎨' },
            { name: 'Illustrator', icon: '✏️' },
            { name: 'InDesign', icon: '📄' },
            { name: 'Figma', icon: '🎯' },
            { name: 'After Effects', icon: '🎬' },
            { name: 'Premiere Pro', icon: '🎥' },
            { name: 'XD', icon: '🖌️' },
            { name: 'Lightroom', icon: '📸' },
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
              Créations <span className="text-red-600">Graphiques</span>
            </h2>
            <p className="text-xl text-gray-600">
              Portfolio de nos réalisations design et PAO
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
                      <PenTool className="w-5 h-5 text-red-600" />
                      Logiciels utilisés
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
                      Livrables inclus
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Services Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Palette,
              title: 'Identité Visuelle',
              description: 'Création de logos, chartes graphiques et éléments de marque cohérents'
            },
            {
              icon: Layers,
              title: 'Print & Digital',
              description: 'Supports de communication print et web optimisés pour l\'impression'
            },
            {
              icon: PenTool,
              title: 'Illustration & Motion',
              description: 'Illustrations personnalisées et animations graphiques professionnelles'
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
          <h2 className="text-3xl font-bold mb-4">Donnez vie à votre vision créative</h2>
          <p className="text-xl mb-8 opacity-90">
            Collaborons sur votre prochain projet graphique
          </p>
          <button onClick={() => NavigateToYMCAMadaOrFomr(Params.Contact)} className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Brief créatif
          </button>
        </div>
      </section>
    </div>
  );
}
