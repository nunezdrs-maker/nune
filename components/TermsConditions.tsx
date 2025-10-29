import { X } from "lucide-react";
import { Button } from "./ui/button";

interface TermsConditionsProps {
  onClose: () => void;
}

export function TermsConditions({ onClose }: TermsConditionsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto my-8">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl">Términos y Condiciones</h2>
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
            <h3 className="text-xl mb-3">1. Objeto y ámbito de aplicación</h3>
            <p className="text-slate-600 leading-relaxed">
              Los presentes Términos y Condiciones regulan el uso del sitio web desokupacionleal.es (en adelante, el "Sitio Web") 
              y los servicios ofrecidos por DESOKUPACIÓN LEAL (en adelante, "DESOKUPA"), especializada en la recuperación legal 
              de inmuebles okupados.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">2. Datos identificativos</h3>
            <div className="bg-slate-50 p-4 rounded-lg space-y-2 text-slate-600">
              <p><strong>Denominación social:</strong> DESOKUPACIÓN LEAL</p>
              <p><strong>Email:</strong> gestion@desokupacionleal.es</p>
              <p><strong>Teléfono:</strong> 614 013 211</p>
              <p><strong>Dirección:</strong> Madrid, España</p>
              <p><strong>Sitio web:</strong> www.desokupacionleal.es</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl mb-3">3. Servicios ofrecidos</h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              DESOKUPA ofrece servicios profesionales de desokupación legal, que incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Asesoramiento legal especializado en ocupación ilegal</li>
              <li>Gestión de procedimientos de desahucio express</li>
              <li>Negociación con okupas</li>
              <li>Coordinación con autoridades y cuerpos de seguridad</li>
              <li>Recuperación física del inmueble</li>
              <li>Cambio de cerraduras y securización</li>
              <li>Limpieza y acondicionamiento post-desokupación</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl mb-3">4. Condiciones de uso del sitio web</h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              El acceso y uso del Sitio Web implica la aceptación expresa de estos Términos y Condiciones. El usuario se compromete a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Utilizar el Sitio Web de conformidad con la ley y estos Términos</li>
              <li>No realizar actividades ilícitas o contrarias a la buena fe</li>
              <li>No introducir virus informáticos o realizar acciones que dañen el sistema</li>
              <li>No intentar acceder a áreas restringidas del Sitio Web</li>
              <li>Proporcionar información veraz y actualizada en los formularios</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl mb-3">5. Contratación de servicios</h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              El proceso de contratación se realiza a través de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Consulta inicial:</strong> Mediante formulario web o contacto telefónico</li>
              <li><strong>Evaluación del caso:</strong> Análisis de la situación y viabilidad</li>
              <li><strong>Presupuesto:</strong> Propuesta económica personalizada sin compromiso</li>
              <li><strong>Contrato:</strong> Firma de contrato de prestación de servicios</li>
              <li><strong>Ejecución:</strong> Inicio de las acciones legales y operativas</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Todos los presupuestos tienen una validez de 30 días naturales desde su emisión.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">6. Precios y formas de pago</h3>
            <p className="text-slate-600 leading-relaxed">
              Los precios se establecen en función de cada caso particular. DESOKUPA se reserva el derecho a modificar 
              los precios en cualquier momento, si bien se respetarán los precios indicados en los presupuestos aceptados. 
              Las formas de pago aceptadas incluyen transferencia bancaria, tarjeta de crédito y otros medios acordados.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">7. Obligaciones de DESOKUPA</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Actuar con la máxima diligencia profesional</li>
              <li>Mantener informado al cliente sobre el estado del proceso</li>
              <li>Respetar la confidencialidad de la información del cliente</li>
              <li>Cumplir estrictamente con la legalidad vigente</li>
              <li>Coordinar todas las actuaciones necesarias para la recuperación del inmueble</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl mb-3">8. Obligaciones del cliente</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Proporcionar toda la documentación requerida de forma veraz y completa</li>
              <li>Abonar los importes según lo acordado</li>
              <li>Colaborar en las gestiones necesarias</li>
              <li>Acreditar la titularidad o legitimación sobre el inmueble</li>
              <li>No interferir en las actuaciones de DESOKUPA</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl mb-3">9. Limitación de responsabilidad</h3>
            <p className="text-slate-600 leading-relaxed">
              DESOKUPA no se responsabiliza de los daños que pudieran haberse ocasionado en el inmueble durante la ocupación 
              ilegal. Tampoco será responsable de retrasos ocasionados por causas ajenas a su control, incluyendo decisiones 
              judiciales o administrativas. DESOKUPA actuará siempre dentro del marco legal vigente y no se responsabiliza 
              de las acciones de terceros.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">10. Propiedad intelectual e industrial</h3>
            <p className="text-slate-600 leading-relaxed">
              Todos los contenidos del Sitio Web (textos, imágenes, diseño, logotipos, estructura, etc.) son propiedad de 
              DESOKUPA o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o modificación 
              sin autorización expresa.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">11. Protección de datos</h3>
            <p className="text-slate-600 leading-relaxed">
              Los datos personales facilitados serán tratados conforme a lo establecido en la Política de Privacidad, 
              disponible en el Sitio Web, y de acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 
              de Protección de Datos.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">12. Duración y terminación</h3>
            <p className="text-slate-600 leading-relaxed">
              La prestación del servicio se extenderá hasta la recuperación efectiva del inmueble o hasta que concurran 
              causas que imposibiliten su ejecución. Cualquiera de las partes podrá resolver el contrato comunicándolo 
              por escrito con al menos 15 días de antelación, sin perjuicio de las obligaciones ya devengadas.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">13. Modificación de términos</h3>
            <p className="text-slate-600 leading-relaxed">
              DESOKUPA se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento. 
              Las modificaciones serán efectivas desde su publicación en el Sitio Web.
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-3">14. Legislación aplicable y jurisdicción</h3>
            <p className="text-slate-600 leading-relaxed">
              Estos Términos y Condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, 
              las partes se someten a los Juzgados y Tribunales del domicilio del consumidor o usuario.
            </p>
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
