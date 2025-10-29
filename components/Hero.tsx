import { Button } from "./ui/button";
import { Shield, Phone, Play } from "lucide-react";
import logo from "figma:asset/2b8bb7dcc03ee542cf1a9d8448c5a59fffed45d6.png";
import heroImage1 from "figma:asset/01582eaa907bcef3e926722dd88ca6521dd03ed1.png";
import heroImage2 from "figma:asset/ba655dcbb89b3ac706a4880cddd2f7f762f7a90e.png";
import heroImage3 from "figma:asset/322bfb0504c616fe544d06622193feff5a310789.png";
import heroImage4 from "figma:asset/dca04aefb92dbd1752f2cc5f8631b362920356aa.png";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const carouselImages = [heroImage1, heroImage2, heroImage3, heroImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white py-20 px-4 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Navy Blue Overlay */}
      <div className="absolute inset-0 bg-slate-900/75 z-[1]"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-[2]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-brand-light" />
            <span className="text-xs sm:text-sm">Actuación 100% legal y documentada</span>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="DESOKUPACIÓN LEAL" className="w-32 h-32 md:w-40 md:h-40" />
        </div>

        {/* Title */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl mb-6 text-brand">
          DESOKUPA
        </h1>

        {/* Main heading */}
        <p className="text-center text-xl sm:text-2xl md:text-3xl mb-6 max-w-4xl mx-auto px-4">
          Recuperamos lo que es tuyo, con <span className="text-brand">legalidad</span> y{" "}
          <span className="text-brand">profesionalidad</span>
        </p>

        <p className="text-center text-sm sm:text-base text-slate-300 mb-10 max-w-3xl mx-auto px-4">
          Servicios profesionales de desocupación legal para particulares, empresas y fondos de inversión. Transparencia total, cobertura nacional y prevención antiokupa.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
          <Button 
            onClick={scrollToBooking}
            className="bg-brand hover:bg-brand-dark text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg gap-2 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap">Solicitar Diagnóstico Gratuito</span>
          </Button>
          <Button 
            onClick={scrollToMethod}
            variant="outline"
            className="bg-transparent border-2 border-slate-600 hover:bg-slate-800 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg gap-2 text-sm sm:text-base"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap">Ver Cómo Trabajamos</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl text-brand mb-2">+8</div>
            <div className="text-xs sm:text-sm text-slate-400">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl text-brand mb-2">+300</div>
            <div className="text-xs sm:text-sm text-slate-400">Inmuebles recuperados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl text-brand mb-2">98%</div>
            <div className="text-xs sm:text-sm text-slate-400">Casos de éxito</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl text-brand mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-slate-400">Atención urgente</div>
          </div>
        </div>
      </div>
    </section>
  );
}
