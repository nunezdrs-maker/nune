import { Shield, Eye, Flag, AlertTriangle } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Actuación Legal y Mediada",
      description: "Cada intervención cuenta con respaldo jurídico, mediación y documentación."
    },
    {
      icon: Eye,
      title: "Transparencia Integral",
      description: "Informamos costes, plazos y riesgos desde el primer contacto."
    },
    {
      icon: Flag,
      title: "Cobertura Nacional",
      description: "Actuamos en toda España con capacidad para múltiples inmuebles."
    },
    {
      icon: AlertTriangle,
      title: "Prevención Antiokupa",
      description: "Evitamos nuevas okupaciones con soluciones técnicas y seguimientos."
    }
  ];

  return (
    <section id="por-que-elegirnos" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Por qué elegir DESOKUPACIÓN LEAL</h2>
          <p className="text-sm sm:text-base text-slate-600 px-4">
            Somos el único servicio que combina legalidad absoluta, transparencia total y resultados garantizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
