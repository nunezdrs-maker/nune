import { Search, Users, Scale, Key } from "lucide-react";
import { motion } from "motion/react";

export function Method() {
  const steps = [
    {
      number: 1,
      title: "Diagnóstico Legal",
      description: "Analizamos títulos de propiedad, situación registral y definimos la estrategia legal más efectiva",
      icon: Search
    },
    {
      number: 2,
      title: "Mediación y Negociación",
      description: "Buscamos desalojo voluntario con propuesta de condiciones favorables para todas las partes",
      icon: Users
    },
    {
      number: 3,
      title: "Intervención Legal",
      description: "Ejecutamos acciones judiciales o extrajudiciales con personal especializado y respaldo legal",
      icon: Scale
    },
    {
      number: 4,
      title: "Entrega y Prevención",
      description: "Entregamos llaves y acta de posesión, implementando plan antiokupa para evitar reocupaciones",
      icon: Key
    }
  ];

  return (
    <section id="metodo" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900">Nuestro Método</h2>
          <p className="text-sm sm:text-base text-slate-600 px-4">
            Proceso claro, legal y documentado de principio a fin
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-lighter via-brand-light to-brand-lighter -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="mb-3 text-slate-900">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Icon Circle */}
                  <motion.div
                    className="relative flex-shrink-0 z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-brand-light to-brand-dark rounded-full flex items-center justify-center shadow-lg shadow-brand/30">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    {/* Pulse animation */}
                    <motion.div
                      className="absolute inset-0 bg-brand-light rounded-full opacity-20"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-600 text-sm">
            Cada caso es único. Adaptamos nuestro método a tu situación específica
          </p>
        </motion.div>
      </div>
    </section>
  );
}
