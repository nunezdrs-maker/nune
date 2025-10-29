import { X } from "lucide-react";
import { Button } from "./ui/button";

interface CookiePolicyProps {
  onClose: () => void;
}

export function CookiePolicy({ onClose }: CookiePolicyProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto my-8">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl">Política de Cookies</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-xl mb-3">1. ¿Qué son las cookies?</h3>
            <p className="text-slate-600 leading-relaxed">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador del usuario. 
              Se utilizan para garantizar el funcionamiento técnico del sitio, personalizar la experiencia del usuario 
              y recopilar estadísticas sobre el uso del sitio.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">2. Uso de cookies en este sitio web</h3>
            <p className="text-slate-600 leading-relaxed">
              Este sitio web utiliza cookies propias y de terceros. Al acceder por primera vez, el usuario puede 
              aceptar, rechazar o configurar el uso de cookies mediante el sistema de consentimiento. 
              Puede cambiar sus preferencias en cualquier momento.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">3. Gestión del consentimiento</h3>
            <p className="text-slate-600 leading-relaxed">
              El consentimiento del usuario se solicita al acceder al sitio web mediante un banner. Este banner permite 
              aceptar todas las cookies, rechazarlas o configurarlas por categorías. El consentimiento se registra 
              y documenta para cumplir con las normativas vigentes de protección de datos.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">4. Categorías de cookies utilizadas</h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              Las cookies utilizadas en este sitio web se clasifican en las siguientes categorías:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Necesarias:</strong> imprescindibles para el funcionamiento del sitio.</li>
              <li><strong>Preferencias:</strong> permiten recordar información que cambia la forma en que se comporta el sitio.</li>
              <li><strong>Estadísticas:</strong> ayudan a comprender cómo interactúan los usuarios.</li>
              <li><strong>Marketing:</strong> se utilizan para rastrear a los visitantes y mostrar anuncios relevantes.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl mb-3">5. Cookies empleadas</h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              Las cookies activas en este sitio web pueden incluir:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-3 text-left">Nombre</th>
                    <th className="border border-slate-200 p-3 text-left">Duración</th>
                    <th className="border border-slate-200 p-3 text-left">Finalidad</th>
                    <th className="border border-slate-200 p-3 text-left">Tipo</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600">
                  <tr>
                    <td className="border border-slate-200 p-3">cookieConsent</td>
                    <td className="border border-slate-200 p-3">1 año</td>
                    <td className="border border-slate-200 p-3">Almacena la preferencia de cookies del usuario</td>
                    <td className="border border-slate-200 p-3">Necesaria</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3">_ga</td>
                    <td className="border border-slate-200 p-3">2 años</td>
                    <td className="border border-slate-200 p-3">Google Analytics - Distingue usuarios</td>
                    <td className="border border-slate-200 p-3">Estadística</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3">_gid</td>
                    <td className="border border-slate-200 p-3">24 horas</td>
                    <td className="border border-slate-200 p-3">Google Analytics - Distingue usuarios</td>
                    <td className="border border-slate-200 p-3">Estadística</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl mb-3">6. Desactivación desde el navegador</h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              Además de gestionar las cookies desde el banner, el usuario puede eliminar o bloquear las cookies desde 
              su navegador web. Las instrucciones para hacerlo varían según el navegador:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Google Chrome:</strong> Configuración {'>'} Privacidad y seguridad {'>'} Cookies</li>
              <li><strong>Mozilla Firefox:</strong> Opciones {'>'} Privacidad y seguridad {'>'} Cookies</li>
              <li><strong>Safari:</strong> Preferencias {'>'} Privacidad {'>'} Cookies</li>
              <li><strong>Microsoft Edge:</strong> Configuración {'>'} Privacidad {'>'} Cookies</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl mb-3">7. Cambios en la Política de Cookies</h3>
            <p className="text-slate-600 leading-relaxed">
              DESOKUPACIÓN LEAL se reserva el derecho a modificar esta Política de Cookies cuando sea necesario 
              por motivos técnicos, normativos o por cambios en los servicios ofrecidos. Cualquier modificación 
              será publicada en esta misma página.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">8. Responsable del tratamiento</h3>
            <div className="bg-slate-50 p-4 rounded-lg space-y-2 text-slate-600">
              <p><strong>Responsable:</strong> DESOKUPACIÓN LEAL</p>
              <p><strong>Email de contacto:</strong> gestion@desokupacionleal.es</p>
              <p><strong>Teléfono:</strong> 614 013 211</p>
              <p><strong>Dirección:</strong> Madrid, España</p>
            </div>
          </section>

          <section className="text-sm text-slate-500 pt-4 border-t border-slate-200">
            <p>Última actualización: 29 de octubre de 2025</p>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-6 flex justify-end">
          <Button onClick={onClose} className="bg-brand hover:bg-brand-dark text-slate-900">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
