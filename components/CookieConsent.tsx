import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "./ui/button";
import { CookiePolicy } from "./CookiePolicy";
import { TermsConditions } from "./TermsConditions";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white border-2 border-slate-200 rounded-lg shadow-2xl p-6 mx-4 md:mx-0">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon and Title */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-brand-lighter rounded-lg flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-brand-dark" />
          </div>
          <div>
            <h3 className="text-lg mb-1">Uso de Cookies</h3>
          </div>
        </div>

        {/* Content */}
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs">
          <button
            onClick={() => setShowTerms(true)}
            className="text-brand hover:text-brand-dark underline transition-colors"
          >
            Términos y Condiciones
          </button>
          <span className="text-slate-300">|</span>
          <button
            onClick={() => setShowCookiePolicy(true)}
            className="text-brand hover:text-brand-dark underline transition-colors"
          >
            Política de Cookies
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={handleAccept}
            className="flex-1 bg-brand hover:bg-brand-dark text-slate-900"
          >
            Aceptar Todas
          </Button>
          <Button
            onClick={handleReject}
            variant="outline"
            className="flex-1 border-slate-300 hover:bg-slate-50"
          >
            Rechazar
          </Button>
        </div>

        {/* Footer text */}
        <p className="text-xs text-slate-500 mt-3 text-center">
          Puede cambiar sus preferencias en cualquier momento
        </p>
      </div>

      {/* Modals */}
      {showCookiePolicy && <CookiePolicy onClose={() => setShowCookiePolicy(false)} />}
      {showTerms && <TermsConditions onClose={() => setShowTerms(false)} />}
    </div>
  );
}
