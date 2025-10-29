import { Button } from "./ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

export function Resources() {
  const resources = [
    {
      icon: "📋",
      title: "Guía Legal Antiokupa 2025",
      description: "Normativa clara y procedimientos para recuperar la posesión",
      action: "Descargar PDF"
    },
    {
      icon: "📄",
      title: "Checklist de Prevención",
      description: "Medidas prácticas para inmuebles vacíos",
      action: "Ver Checklist"
    },
    {
      icon: "⚖️",
      title: "Casos Prácticos",
      description: "Análisis de situaciones reales y soluciones aplicadas",
      action: "Leer Casos"
    }
  ];

  return (
    <section id="recursos" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Recursos y Normativa</h2>
          <p className="text-slate-600">
            Información actualizada sobre legislación y mejores prácticas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="mb-2">{resource.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{resource.description}</p>
              <Button variant="outline" className="w-full gap-2">
                {resource.action}
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-slate-900 hover:bg-slate-800 text-white gap-2">
            <Download className="w-4 h-4" />
            Descargar Kit Completo
          </Button>
        </div>
      </div>
    </section>
  );
}
