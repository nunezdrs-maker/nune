import { Button } from "./ui/button";
import { Users, Building2, Scale, Home, FileText } from "lucide-react";

export function Services() {
  const scrollToBooking = () => {
    const element = document.getElementById('reservar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg mb-8">
            <h2 className="text-2xl sm:text-3xl mb-1">Nuestros Servicios</h2>
            <p className="text-xs sm:text-sm text-slate-300">Soluciones adaptadas a cada tipo de cliente y situación</p>
          </div>
        </div>

        {/* Main service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Para Particulares */}
          <div className="border-2 border-brand-lighter rounded-lg p-6 bg-brand-lighter/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-lighter rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-brand-dark" />
              </div>
              <h3 className="text-lg sm:text-xl">Para Particulares</h3>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              ¿Tu casa o local ha sido okupado? Te acompañamos desde el primer minuto con dirección y estrategia legal eficaz.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-brand mt-1">✓</span>
                <span className="text-slate-700">Diagnóstico legal gratuito</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-brand mt-1">✓</span>
                <span className="text-slate-700">Mediación y negociación</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-brand mt-1">✓</span>
                <span className="text-slate-700">Intervención legal documentada</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-brand mt-1">✓</span>
                <span className="text-slate-700">Plan de prevención antiokupa</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-brand hover:bg-brand-dark text-white"
              onClick={scrollToBooking}
            >
              Solicitar Diagnóstico
            </Button>
          </div>

          {/* Para Empresas */}
          <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Building2 className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl">Para Empresas</h3>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Gestión profesional de carteras con soluciones escalables y reporting estratégico.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-blue-500 mt-1">✓</span>
                <span className="text-slate-700">Panel de control web</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-blue-500 mt-1">✓</span>
                <span className="text-slate-700">Informes periódicos detallados</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-blue-500 mt-1">✓</span>
                <span className="text-slate-700">Contactos marco y tarifas por volumen</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-blue-500 mt-1">✓</span>
                <span className="text-slate-700">Integración con sistemas ERP</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={scrollToBooking}
            >
              Contacto Comercial
            </Button>
          </div>
        </div>

        {/* Additional services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800 text-white p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h4>Prevención y Seguridad</h4>
            </div>
            <p className="text-slate-300 text-sm">
              Alarmas antiokupa, rondas de inspección y mantenimiento preventivo
            </p>
          </div>

          <div className="bg-slate-800 text-white p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <h4>Asesoría Legal</h4>
            </div>
            <p className="text-slate-300 text-sm">
              Equipo jurídico especializado y acompañamiento en procesos
            </p>
          </div>

          <div className="bg-slate-800 text-white p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4>Mantenimiento</h4>
            </div>
            <p className="text-slate-300 text-sm">
              Custodia y mantenimiento de inmuebles vacíos para evitar deterioros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
