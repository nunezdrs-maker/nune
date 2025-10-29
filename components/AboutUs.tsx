import { Shield, Users } from "lucide-react";

export function AboutUs() {
  return (
    <section id="quienes-somos" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - About */}
          <div>
            <h2 className="text-3xl sm:text-4xl mb-6">Quiénes Somos</h2>
            <p className="text-sm sm:text-base text-slate-700 mb-4">
              En DESOKUPACIÓN LEAL creemos que recuperar la posesión de un inmueble no debe implicar vulnerar derechos ni recurrir a métodos temerarios.
            </p>
            <p className="text-sm sm:text-base text-slate-700 mb-4">
              Somos un equipo multidisciplinar formado por abogados expertos en derecho inmobiliario, mediadores especializados, técnicos de seguridad y operarios cualificados. Nuestra misión es proteger el propietario con rigor, informarle en cada paso y ofrecerle garantías reales.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-brand-dark" />
                </div>
                <div>
                  <h4 className="mb-1">Legalidad Absoluta</h4>
                  <p className="text-sm text-slate-600">
                    Cada paso cuenta con respaldo jurídico y documentación oficial
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-brand-dark" />
                </div>
                <div>
                  <h4 className="mb-1">Transparencia Total</h4>
                  <p className="text-sm text-slate-600">
                    Informamos costes, plazos y riesgos antes de iniciar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-brand-dark" />
                </div>
                <div>
                  <h4 className="mb-1">Actuación Respetuosa</h4>
                  <p className="text-sm text-slate-600">
                    Respetamos los derechos de todas las partes involucradas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-center">Nuestra Trayectoria</h3>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-brand mb-2">+8</div>
                <div className="text-xs sm:text-sm text-slate-600">Años trabajando con rigor y profesionalidad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-brand mb-2">+300</div>
                <div className="text-xs sm:text-sm text-slate-600">Inmuebles recuperados con éxito</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-brand mb-2">98%</div>
                <div className="text-xs sm:text-sm text-slate-600">Casos resueltos bajo mediación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-brand mb-2">+15</div>
                <div className="text-xs sm:text-sm text-slate-600">Provincias con presencia activa</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-300">
              <p className="text-sm text-slate-600 italic text-center">
                "Para nosotros, la legalidad es un salvajes en el pilar de cada intervención."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
