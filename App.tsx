import { lazy, Suspense } from "react";
import { Hero } from "./components/Hero";
import { SEO } from "./components/SEO";
import { Toaster } from "./components/ui/sonner";

// Lazy load components below the fold for better initial load performance
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Method = lazy(() => import("./components/Method").then(m => ({ default: m.Method })));
const SuccessCases = lazy(() => import("./components/SuccessCases").then(m => ({ default: m.SuccessCases })));
const AboutUs = lazy(() => import("./components/AboutUs").then(m => ({ default: m.AboutUs })));
const Resources = lazy(() => import("./components/Resources").then(m => ({ default: m.Resources })));
const BookingSection = lazy(() => import("./components/BookingSection").then(m => ({ default: m.BookingSection })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const CookieConsent = lazy(() => import("./components/CookieConsent").then(m => ({ default: m.CookieConsent })));

// Lightweight loading fallback
const SectionLoader = () => <div className="h-20" />;

export default function App() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Method />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SuccessCases />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Resources />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BookingSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CookieConsent />
      </Suspense>
      <Toaster />
    </div>
  );
}
