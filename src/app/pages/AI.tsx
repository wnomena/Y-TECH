import { Bot, Brain, Sparkles, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/I_dontKnow/ImageWithFallback';

export default function AI() {
  const projects = [
    {
      title: 'Système de Recommandation Intelligent',
      description: 'Moteur de recommandation avancé utilisant le deep learning pour personnaliser l\'expérience utilisateur. Analyse comportementale en temps réel avec modèles d\'apprentissage continu.',
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['TensorFlow', 'Python', 'Scikit-learn', 'Apache Spark'],
      features: [
        'Apprentissage profond multi-modèles',
        'Personnalisation en temps réel',
        'A/B testing automatisé',
        'Analyse prédictive avancée',
        'Scalabilité cloud native'
      ]
    },
    {
      title: 'Assistant Virtuel Conversationnel',
      description: 'Chatbot intelligent avec traitement du langage naturel (NLP), compréhension contextuelle et apprentissage continu des interactions utilisateur.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['GPT-4', 'LangChain', 'BERT', 'Rasa'],
      features: [
        'Compréhension du langage naturel',
        'Conversations contextuelles',
        'Support multilingue',
        'Intégration API multiple',
        'Analytics conversationnels'
      ]
    },
    {
      title: 'Système de Vision par Ordinateur',
      description: 'Solution de reconnaissance et classification d\'images pour contrôle qualité industriel avec détection d\'anomalies en temps réel et reporting automatique.',
      image: 'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['PyTorch', 'OpenCV', 'YOLO', 'FastAPI'],
      features: [
        'Détection d\'objets en temps réel',
        'Classification multi-classes',
        'Segmentation d\'images',
        'Détection d\'anomalies',
        'Pipeline automatisé'
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
              <Bot className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold">Intelligence Artificielle</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
            À travers des ateliers pratiques et des projets stimulants, nous plongeons au cœur de l'analyse de données, de l'automatisation intelligente et du machine learning.
Rejoignez-nous pour décoder les algorithmes de demain, booster vos compétences et concevoir des solutions IA innovantes !
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies IA & ML</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'TensorFlow', icon: '🧠' },
            { name: 'PyTorch', icon: '🔥' },
            { name: 'Scikit-learn', icon: '🔬' },
            { name: 'OpenCV', icon: '👁️' },
            { name: 'Keras', icon: '🎯' },
            { name: 'Hugging Face', icon: '🤗' },
            { name: 'LangChain', icon: '🔗' },
            { name: 'Apache Spark', icon: '⚡' },
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
              Projets <span className="text-red-600">IA & ML</span>
            </h2>
            <p className="text-xl text-gray-600">
              Solutions d'intelligence artificielle innovantes et performantes
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
                      <Brain className="w-5 h-5 text-red-600" />
                      Stack IA utilisée
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
                      Capacités clés
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Domaines d'Expertise IA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Machine Learning',
              description: 'Modèles prédictifs, classification, régression et clustering avancés'
            },
            {
              icon: Bot,
              title: 'NLP & Chatbots',
              description: 'Traitement du langage naturel et assistants conversationnels intelligents'
            },
            {
              icon: Sparkles,
              title: 'Computer Vision',
              description: 'Reconnaissance d\'images, détection d\'objets et analyse visuelle'
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
          <h2 className="text-3xl font-bold mb-4">Intégrez l'IA à votre business</h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez comment l'intelligence artificielle peut transformer votre activité
          </p>
          <button className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Consulter nos experts IA
          </button>
        </div>
      </section>
    </div>
  );
}
