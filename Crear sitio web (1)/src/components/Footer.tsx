import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import logo from "figma:asset/2b8bb7dcc03ee542cf1a9d8448c5a59fffed45d6.png";

export function Footer() {
  const scrollToBooking = () => {
    const element = document.getElementById('reservar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="DESOKUPACIÓN LEAL" className="w-20 h-20 mb-4" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Recuperamos lo que es tuyo con legalidad y profesionalidad
            </p>
            <div className="inline-block bg-brand/10 border border-brand/20 rounded-lg px-4 py-2">
              <p className="text-brand-light text-xs">Atención 24/7</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white mb-6 relative inline-block">
              Navegación
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('por-que-elegirnos')} className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Por Qué Elegirnos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('metodo')} className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Nuestro Método
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('casos-exito')} className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Casos de Éxito
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('quienes-somos')} className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('recursos')} className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Recursos
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white mb-6 relative inline-block">
              Legal
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#aviso-legal" className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#privacidad" className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#condiciones" className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Condiciones de Servicio
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-slate-400 hover:text-brand-light transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white mb-6 relative inline-block">
              Contacto
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:614013211" className="flex items-start gap-3 text-slate-400 hover:text-brand-light transition-colors group">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                    <Phone className="w-4 h-4 text-brand-light" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Teléfono 24/7</p>
                    <p className="text-sm">614 013 211</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:gestion@desokupacionleal.es" className="flex items-start gap-3 text-slate-400 hover:text-brand-light transition-colors group">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                    <Mail className="w-4 h-4 text-brand-light" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Email</p>
                    <p className="text-sm break-all">gestion@desokupacionleal.es</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-brand-light" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Ubicación</p>
                  <p className="text-sm">Madrid, España</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2025 DESOKUPACIÓN LEAL. Todos los derechos reservados.
            </p>
            <button 
              onClick={scrollToBooking}
              className="text-sm text-brand-light hover:text-brand-lighter transition-colors flex items-center gap-1"
            >
              Solicitar Consulta Gratuita
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
