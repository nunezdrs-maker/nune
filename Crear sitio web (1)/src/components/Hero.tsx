import { Button } from "./ui/button";
import { Shield, Phone, Play } from "lucide-react";
import logo from "figma:asset/2b8bb7dcc03ee542cf1a9d8448c5a59fffed45d6.png";

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('reservar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMethod = () => {
    const element = document.getElementById('metodo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-brand-light" />
            <span className="text-sm">Actuación 100% legal y documentada</span>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="DESOKUPACIÓN LEAL" className="w-32 h-32 md:w-40 md:h-40" />
        </div>

        {/* Title */}
        <h1 className="text-center text-5xl md:text-6xl mb-6 text-brand">
          DESOKUPA
        </h1>

        {/* Main heading */}
        <p className="text-center text-2xl md:text-3xl mb-6 max-w-4xl mx-auto">
          Recuperamos lo que es tuyo, con <span className="text-brand">legalidad</span> y{" "}
          <span className="text-brand">profesionalidad</span>
        </p>

        <p className="text-center text-slate-300 mb-10 max-w-3xl mx-auto">
          Servicios profesionales de desocupación legal para particulares, empresas y fondos de inversión. Transparencia total, cobertura nacional y prevención antiokupa.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={scrollToBooking}
            className="bg-brand hover:bg-brand-dark text-white px-8 py-6 rounded-lg gap-2"
          >
            <Phone className="w-5 h-5" />
            Solicitar Diagnóstico Gratuito
          </Button>
          <Button 
            onClick={scrollToMethod}
            variant="outline"
            className="bg-transparent border-2 border-slate-600 hover:bg-slate-800 text-white px-8 py-6 rounded-lg gap-2"
          >
            <Play className="w-5 h-5" />
            Ver Cómo Trabajamos
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-brand mb-2">+8</div>
            <div className="text-sm text-slate-400">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-brand mb-2">+300</div>
            <div className="text-sm text-slate-400">Inmuebles recuperados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-brand mb-2">98%</div>
            <div className="text-sm text-slate-400">Casos de éxito</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-brand mb-2">24/7</div>
            <div className="text-sm text-slate-400">Atención urgente</div>
          </div>
        </div>
      </div>
    </section>
  );
}
