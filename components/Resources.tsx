import { Button } from "./ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Resources() {
  const generateGuiaLegalPDF = async () => {
    try {
      toast.info("Generando PDF...", { description: "Por favor espera un momento" });
      
      // Dynamic import for jsPDF to reduce initial bundle size
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF();
      doc.setFont("helvetica");
      
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      let yPos = 20;
      
      const addText = (text: string, fontSize: number, isBold = false, color = [0, 0, 0], addMargin = 5) => {
        doc.setFontSize(fontSize);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.setFont("helvetica", isBold ? "bold" : "normal");
        
        const lines = doc.splitTextToSize(text, contentWidth);
        lines.forEach((line: string) => {
          if (yPos > 270) {
            doc.addPage();
            yPos = 20;
          }
          doc.text(line, margin, yPos);
          yPos += fontSize * 0.4;
        });
        yPos += addMargin;
      };
      
      // Header
      addText("DESOKUPACION LEAL", 20, true, [251, 191, 36], 5);
      addText("Guia Legal Antiokupa 2025", 16, true, [0, 0, 0], 3);
      addText("Normativa y procedimientos para recuperar la posesion de tu inmueble", 10, false, [100, 100, 100], 8);
      
      doc.setDrawColor(251, 191, 36);
      doc.setLineWidth(0.5);
      doc.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 10;
      
      // Section 1
      addText("1. Introduccion", 14, true, [251, 191, 36], 5);
      addText("La okupacion ilegal es un problema creciente en España. Esta guia proporciona informacion sobre los procedimientos legales disponibles para recuperar la posesion de un inmueble okupado de forma legal y segura.", 10, false, [0, 0, 0], 10);
      
      // Section 2
      addText("2. Marco Legal", 14, true, [251, 191, 36], 5);
      addText("El Codigo Penal español tipifica la ocupacion ilegal en el articulo 245. La Ley de Enjuiciamiento Civil establece procedimientos rapidos para la recuperacion de la posesion. La reforma de 2018 agilizo los desahucios en casos de okupacion.", 10, false, [0, 0, 0], 10);
      
      // Section 3
      addText("3. Tipos de Okupacion", 14, true, [251, 191, 36], 5);
      addText("• Okupacion de vivienda habitual", 10, false, [0, 0, 0], 3);
      addText("• Okupacion de segunda vivienda", 10, false, [0, 0, 0], 3);
      addText("• Okupacion de local comercial", 10, false, [0, 0, 0], 3);
      addText("• Inquilino que no paga y no se marcha", 10, false, [0, 0, 0], 10);
      
      // Section 4
      addText("4. Procedimientos Legales", 14, true, [251, 191, 36], 5);
      addText("4.1 Juicio Rapido (Vivienda Habitual)", 12, true, [0, 0, 0], 3);
      addText("Si la vivienda okupada es tu residencia habitual, puedes iniciar un procedimiento penal urgente. Plazo: 48-72 horas para denuncia policial. Las fuerzas de seguridad pueden actuar de inmediato.", 10, false, [0, 0, 0], 8);
      
      addText("4.2 Desahucio Express (Segunda Vivienda)", 12, true, [0, 0, 0], 3);
      addText("Para segundas viviendas, el procedimiento es civil. Plazo aproximado: 3-6 meses. Requiere demanda judicial con acreditacion de propiedad.", 10, false, [0, 0, 0], 8);
      
      addText("4.3 Proceso Civil Ordinario", 12, true, [0, 0, 0], 3);
      addText("Para casos complejos o con inquilinos morosos. Duracion: 6-18 meses. Permite reclamar daños y perjuicios ademas del desalojo.", 10, false, [0, 0, 0], 10);
      
      // Section 5
      addText("5. Pasos a Seguir", 14, true, [251, 191, 36], 5);
      addText("1. Documentar la okupacion con fotos, videos y testigos", 10, false, [0, 0, 0], 3);
      addText("2. Presentar denuncia en comisaria o ante el juzgado", 10, false, [0, 0, 0], 3);
      addText("3. Acreditar la propiedad del inmueble con escrituras", 10, false, [0, 0, 0], 3);
      addText("4. Contactar con abogado especializado", 10, false, [0, 0, 0], 3);
      addText("5. Iniciar procedimiento legal correspondiente", 10, false, [0, 0, 0], 3);
      addText("6. Seguir las indicaciones legales durante todo el proceso", 10, false, [0, 0, 0], 10);
      
      // New page
      doc.addPage();
      yPos = 20;
      
      // Section 6
      addText("6. Medidas de Prevencion", 14, true, [251, 191, 36], 5);
      addText("• Instalar alarmas antiokupa con conexion a central", 10, false, [0, 0, 0], 3);
      addText("• Cambiar cerraduras por modelos de alta seguridad", 10, false, [0, 0, 0], 3);
      addText("• Contratar servicio de vigilancia o rondas periodicas", 10, false, [0, 0, 0], 3);
      addText("• Mantener servicios basicos dados de alta", 10, false, [0, 0, 0], 3);
      addText("• Dejar señales de que la vivienda esta habitada", 10, false, [0, 0, 0], 3);
      addText("• Reforzar puertas y ventanas", 10, false, [0, 0, 0], 10);
      
      // Section 7
      addText("7. Errores Comunes a Evitar", 14, true, [251, 191, 36], 5);
      addText("NO HACER:", 11, true, [220, 38, 38], 3);
      addText("• NO tomar la justicia por tu mano", 10, false, [220, 38, 38], 2);
      addText("• NO cortar suministros sin orden judicial", 10, false, [220, 38, 38], 2);
      addText("• NO cambiar cerraduras si hay personas dentro", 10, false, [220, 38, 38], 2);
      addText("• NO amenazar o coaccionar a los okupas", 10, false, [220, 38, 38], 5);
      
      addText("SI HACER:", 11, true, [22, 163, 74], 3);
      addText("• SIEMPRE actuar dentro del marco legal", 10, false, [22, 163, 74], 2);
      addText("• Documentar todo el proceso", 10, false, [22, 163, 74], 2);
      addText("• Contar con asesoramiento profesional", 10, false, [22, 163, 74], 10);
      
      // Section 8
      addText("8. Necesitas Ayuda Profesional?", 14, true, [251, 191, 36], 5);
      addText("DESOKUPACION LEAL - Expertos en desocupacion legal", 11, true, [0, 0, 0], 5);
      addText("Telefono: 614 013 211 (Disponible 24/7)", 10, false, [0, 0, 0], 3);
      addText("Email: gestion@desokupacionleal.es", 10, false, [0, 0, 0], 3);
      addText("Ubicacion: Madrid, España", 10, false, [0, 0, 0], 5);
      addText("Ofrecemos diagnostico gratuito, mediacion profesional y recuperacion legal de inmuebles en toda España. Mas de 300 casos resueltos con exito.", 10, false, [0, 0, 0], 15);
      
      // Footer
      yPos = 280;
      addText("© 2025 DESOKUPACION LEAL - Todos los derechos reservados", 8, false, [148, 163, 184], 2);
      addText("Documento informativo - No constituye asesoramiento legal especifico", 8, false, [148, 163, 184], 0);
      
      doc.save("Guia-Legal-Antiokupa-2025-DESOKUPACION-LEAL.pdf");
      toast.success("¡PDF descargado correctamente!");
      
    } catch (error) {
      console.error("Error al generar PDF:", error);
      toast.error("Error al generar el PDF");
    }
  };

  const generateChecklistPDF = async () => {
    try {
      toast.info("Generando PDF...", { description: "Por favor espera un momento" });
      
      // Dynamic import for jsPDF to reduce initial bundle size
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF();
      doc.setFont("helvetica");
      
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      let yPos = 20;
      
      const addText = (text: string, fontSize: number, isBold = false, color = [0, 0, 0], addMargin = 5) => {
        doc.setFontSize(fontSize);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.setFont("helvetica", isBold ? "bold" : "normal");
        
        const lines = doc.splitTextToSize(text, contentWidth);
        lines.forEach((line: string) => {
          if (yPos > 270) {
            doc.addPage();
            yPos = 20;
          }
          doc.text(line, margin, yPos);
          yPos += fontSize * 0.4;
        });
        yPos += addMargin;
      };
      
      // Header
      addText("DESOKUPACION LEAL", 20, true, [251, 191, 36], 5);
      addText("Checklist de Prevencion Antiokupa", 16, true, [0, 0, 0], 3);
      addText("Medidas practicas para proteger tu inmueble", 10, false, [100, 100, 100], 8);
      
      doc.setDrawColor(251, 191, 36);
      doc.setLineWidth(0.5);
      doc.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 10;
      
      const sections = [
        {
          title: "Seguridad Fisica",
          items: [
            "Instalar cerradura de alta seguridad (minimo grado 3)",
            "Reforzar puertas con barras antipatico",
            "Proteger ventanas con rejas o persianas de seguridad",
            "Instalar puerta blindada o acorazada",
            "Sellar entradas secundarias (sotanos, garajes)"
          ]
        },
        {
          title: "Sistemas de Alarma y Vigilancia",
          items: [
            "Instalar alarma antiokupa con conexion a central",
            "Colocar camaras de vigilancia visibles",
            "Instalar sensores de movimiento",
            "Contratar servicio de vigilancia periodica",
            "Iluminacion exterior con sensor de movimiento"
          ]
        },
        {
          title: "Servicios y Mantenimiento",
          items: [
            "Mantener suministros dados de alta (luz, agua, gas)",
            "Contratar mantenimiento periodico del inmueble",
            "Realizar inspecciones quincenales o mensuales",
            "Mantener jardin y exterior cuidados",
            "Recoger el correo regularmente"
          ]
        },
        {
          title: "Documentacion Legal",
          items: [
            "Tener escrituras accesibles y actualizadas",
            "Registro de propiedad al dia",
            "Poliza de seguro multirriesgo vigente",
            "Certificado energetico actualizado",
            "Documentacion de IBI y servicios al corriente"
          ]
        },
        {
          title: "Señalizacion Disuasoria",
          items: [
            "Carteles visibles de 'Propiedad vigilada'",
            "Pegatinas de sistema de alarma visible",
            "Señales de 'Grabacion 24 horas'",
            "Aviso de sistema de seguridad activo",
            "Iluminacion programada automatica"
          ]
        },
        {
          title: "Recomendaciones Adicionales",
          items: [
            "Informar a vecinos de que la vivienda esta deshabitada temporalmente",
            "Contratar seguro especifico antiokupa",
            "Realizar fotografias periodicas del estado del inmueble",
            "Tener contacto de abogado especializado disponible",
            "Considerar arrendamiento temporal si va a estar mucho tiempo vacio"
          ]
        }
      ];
      
      sections.forEach((section) => {
        addText(section.title, 14, true, [251, 191, 36], 5);
        section.items.forEach((item) => {
          addText("[ ] " + item, 10, false, [0, 0, 0], 3);
        });
        yPos += 5;
      });
      
      // Contact box
      if (yPos > 220) {
        doc.addPage();
        yPos = 20;
      }
      
      addText("Necesitas Asesoramiento Personalizado?", 14, true, [251, 191, 36], 5);
      addText("DESOKUPACION LEAL", 11, true, [0, 0, 0], 3);
      addText("Expertos en prevencion y desocupacion legal", 10, false, [0, 0, 0], 5);
      addText("Telefono: 614 013 211 (Disponible 24/7)", 10, false, [0, 0, 0], 3);
      addText("Email: gestion@desokupacionleal.es", 10, false, [0, 0, 0], 3);
      addText("Ubicacion: Madrid, España", 10, false, [0, 0, 0], 5);
      addText("Ofrecemos asesoria gratuita sobre medidas de prevencion y proteccion de inmuebles.", 10, false, [0, 0, 0], 15);
      
      // Footer
      yPos = 280;
      addText("© 2025 DESOKUPACION LEAL - Todos los derechos reservados", 8, false, [148, 163, 184], 2);
      addText("Checklist informativo - Consulta con profesionales para implementacion especifica", 8, false, [148, 163, 184], 0);
      
      doc.save("Checklist-Prevencion-Antiokupa-DESOKUPACION-LEAL.pdf");
      toast.success("¡PDF descargado correctamente!");
      
    } catch (error) {
      console.error("Error al generar PDF checklist:", error);
      toast.error("Error al generar el PDF");
    }
  };

  const handleDownloadGuia = () => generateGuiaLegalPDF();
  const handleDownloadChecklist = () => generateChecklistPDF();

  const resources = [
    {
      icon: "📋",
      title: "Guía Legal Antiokupa 2025",
      description: "Normativa clara y procedimientos para recuperar la posesión",
      action: "Descargar PDF",
      onClick: handleDownloadGuia,
      downloadable: true
    },
    {
      icon: "📄",
      title: "Checklist de Prevención",
      description: "Medidas prácticas para inmuebles vacíos",
      action: "Descargar PDF",
      onClick: handleDownloadChecklist,
      downloadable: true
    },
    {
      icon: "⚖️",
      title: "Casos Prácticos",
      description: "Análisis de situaciones reales y soluciones aplicadas",
      action: "Ver Online",
      onClick: () => toast.info("Próximamente disponible"),
      downloadable: false
    }
  ];

  return (
    <section id="recursos" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Recursos y Normativa</h2>
          <p className="text-sm sm:text-base text-slate-600 px-4">
            Información actualizada sobre legislación y mejores prácticas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{resource.icon}</div>
              <h3 className="mb-2 text-base sm:text-lg">{resource.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">{resource.description}</p>
              <Button 
                variant="outline" 
                className="w-full gap-2 text-sm sm:text-base py-4 sm:py-5"
                onClick={resource.onClick}
              >
                {resource.action}
                {resource.downloadable ? <Download className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-slate-900 hover:bg-slate-800 text-white gap-2 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
            onClick={handleDownloadGuia}
          >
            <Download className="w-4 h-4" />
            Descargar Guía Legal PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
