import { useState } from "react";
import { Button } from "./ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function SuccessCases() {
  const scrollToBooking = () => {
    const element = document.getElementById('reservar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      text: "Profesionales excepcionales. Recuperamos nuestra casa sin problemas legales y con total transparencia de costes. El equipo nos guió en cada paso del proceso.",
      author: "Ana G.",
      location: "Madrid",
      rating: 5,
      case: "Vivienda familiar okupada"
    },
    {
      text: "Servicio rápido y eficaz. En menos de un mes recuperamos nuestro local comercial gracias a su equipo legal. No podríamos estar más satisfechos con el resultado.",
      author: "Carlos R.",
      location: "Barcelona",
      rating: 5,
      case: "Local comercial"
    },
    {
      text: "Excelente atención al cliente. Nos mantuvieron informados en todo momento y resolvieron todo sin complicaciones. Muy profesionales y cercanos.",
      author: "María L.",
      location: "Valencia",
      rating: 5,
      case: "Piso heredado"
    },
    {
      text: "Después de meses de frustración con otros servicios, desokupaleal resolvió nuestro problema en tiempo récord. Su método legal es impecable y efectivo.",
      author: "Javier M.",
      location: "Sevilla",
      rating: 5,
      case: "Inmueble de inversión"
    },
    {
      text: "Como propietaria de varios inmuebles, he trabajado con diferentes empresas. desokupaleal destaca por su profesionalidad y resultados. Totalmente recomendable.",
      author: "Isabel F.",
      location: "Málaga",
      rating: 5,
      case: "Cartera de inmuebles"
    },
    {
      text: "Trato cercano, actuación rápida y solución definitiva. Además implementaron medidas antiokupa que nos dan tranquilidad. Excelente inversión.",
      author: "Roberto S.",
      location: "Bilbao",
      rating: 5,
      case: "Vivienda vacacional"
    },
    {
      text: "Resolvieron una situación muy complicada de forma legal y documentada. El equipo jurídico es excepcional. Recuperamos nuestro inmueble en 3 semanas.",
      author: "Laura P.",
      location: "Zaragoza",
      rating: 5,
      case: "Piso alquilado"
    },
    {
      text: "Desde el primer contacto hasta la entrega de llaves, todo fue perfecto. Transparencia total en costes y tiempos. Muy agradecidos con su trabajo.",
      author: "Miguel A.",
      location: "Murcia",
      rating: 5,
      case: "Casa familiar"
    },
    {
      text: "Empresa seria y comprometida. Nos ayudaron no solo a recuperar el inmueble sino también a implementar medidas preventivas. Servicio integral de calidad.",
      author: "Patricia V.",
      location: "Granada",
      rating: 5,
      case: "Local en alquiler"
    },
    {
      text: "Situación resuelta de forma profesional y eficiente. El seguimiento constante y la comunicación fueron inmejorables. 100% recomendable.",
      author: "Alberto C.",
      location: "Alicante",
      rating: 5,
      case: "Apartamento turístico"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="casos-exito" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Casos de Éxito</h2>
          <p className="text-sm sm:text-base text-slate-300 px-4">Testimonios reales de clientes satisfechos</p>
          <p className="text-sm sm:text-base text-brand-light mt-2">+300 casos resueltos con éxito</p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-brand-lighter opacity-50" />
            </div>
            
            <div className="flex gap-1 justify-center mb-4 sm:mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-brand text-brand" />
              ))}
            </div>

            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 italic text-center leading-relaxed min-h-[100px] sm:min-h-[120px] flex items-center justify-center px-2">
              "{currentTestimonial.text}"
            </p>

            <div className="text-center">
              <p className="text-slate-900 mb-1">
                {currentTestimonial.author}
              </p>
              <p className="text-sm text-slate-600">{currentTestimonial.location}</p>
              <p className="text-xs text-brand-dark mt-2 bg-brand-lighter/20 inline-block px-4 py-1 rounded-full">
                {currentTestimonial.case}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-brand hover:bg-brand-dark text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-brand hover:bg-brand-dark text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex gap-2 justify-center mb-12 flex-wrap max-w-md mx-auto">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all ${
                index === currentIndex
                  ? "w-8 h-2 bg-brand"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-500"
              } rounded-full`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl text-brand mb-2">98%</div>
            <div className="text-xs sm:text-sm text-slate-400">Satisfacción</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl text-brand mb-2">+300</div>
            <div className="text-xs sm:text-sm text-slate-400">Casos resueltos</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl text-brand mb-2">4.9/5</div>
            <div className="text-xs sm:text-sm text-slate-400">Valoración media</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl text-brand mb-2">24h</div>
            <div className="text-xs sm:text-sm text-slate-400">Respuesta media</div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="text-center max-w-2xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-700">
          <div className="inline-block bg-brand/10 rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-brand-light" />
          </div>
          <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">Nuestra Garantía</h3>
          <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 px-2">
            Si no recuperamos tu inmueble bajo las condiciones acordadas, devolvemos parte del coste según contrato
          </p>
          <Button 
            className="bg-brand hover:bg-brand-dark text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
            onClick={scrollToBooking}
          >
            Conocer Condiciones
          </Button>
        </div>
      </div>
    </section>
  );
}
