import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEO({
  title = 'DESOKUPA - Desocupación Legal de Inmuebles | Recupera tu Propiedad',
  description = 'Servicios profesionales de desokupación legal en España. +8 años de experiencia, +300 inmuebles recuperados, 98% de éxito. Diagnóstico gratuito. Actuación 100% legal y documentada para particulares y empresas.',
  canonical = 'https://desokupacionleal.es',
  ogImage = 'https://desokupacionleal.es/og-image.jpg'
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'desokupa, desocupación legal, recuperar propiedad, okupas, desalojo legal, inmuebles okupados, abogados okupas, servicios antiokupa, prevención okupas, desokupación España');
    updateMetaTag('author', 'DESOKUPA - Desokupación Leal');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Spanish');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph / Facebook
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'DESOKUPA', true);
    updateMetaTag('og:locale', 'es_ES', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', canonical);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Mobile optimization
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('theme-color', '#fbbf24');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Canonical link
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.rel = 'canonical';
      document.head.appendChild(linkElement);
    }
    linkElement.href = canonical;

    // Schema.org structured data for Local Business
    const schemaScript = document.getElementById('schema-org');
    if (schemaScript) {
      schemaScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'schema-org';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://desokupacionleal.es/#organization',
          name: 'DESOKUPA - Desokupación Leal',
          description: 'Servicios profesionales de desokupación legal de inmuebles',
          url: 'https://desokupacionleal.es',
          telephone: '+34614013211',
          email: 'gestion@desokupacionleal.es',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'ES',
            addressLocality: 'España'
          },
          areaServed: {
            '@type': 'Country',
            name: 'España'
          },
          priceRange: '$$',
          image: ogImage,
          logo: 'https://desokupacionleal.es/logo.png',
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            opens: '00:00',
            closes: '23:59',
            description: 'Atención 24/7'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '300',
            bestRating: '5',
            worstRating: '1'
          }
        },
        {
          '@type': 'Service',
          '@id': 'https://desokupacionleal.es/#service',
          serviceType: 'Desocupación Legal de Inmuebles',
          provider: {
            '@id': 'https://desokupacionleal.es/#organization'
          },
          areaServed: {
            '@type': 'Country',
            name: 'España'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicios de Desokupación',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Desocupación para Particulares',
                  description: 'Diagnóstico legal gratuito, mediación, intervención legal documentada y plan de prevención antiokupa'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Desocupación para Empresas',
                  description: 'Gestión de carteras, panel de control web, informes periódicos y tarifas por volumen'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Prevención Antiokupa',
                  description: 'Alarmas antiokupa, rondas de inspección y mantenimiento preventivo'
                }
              }
            ]
          }
        },
        {
          '@type': 'WebSite',
          '@id': 'https://desokupacionleal.es/#website',
          url: 'https://desokupacionleal.es',
          name: 'DESOKUPA - Desokupación Leal',
          description: 'Recuperamos lo que es tuyo, con legalidad y profesionalidad',
          publisher: {
            '@id': 'https://desokupacionleal.es/#organization'
          },
          inLanguage: 'es-ES'
        },
        {
          '@type': 'WebPage',
          '@id': canonical + '#webpage',
          url: canonical,
          name: title,
          description: description,
          isPartOf: {
            '@id': 'https://desokupacionleal.es/#website'
          },
          about: {
            '@id': 'https://desokupacionleal.es/#organization'
          },
          inLanguage: 'es-ES'
        }
      ]
    });
    document.head.appendChild(script);
  }, [title, description, canonical, ogImage]);

  return null;
}
