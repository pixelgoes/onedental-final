import React from 'react';
import { Helmet } from 'react-helmet';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  priceRange?: string;
  services?: string[];
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name = "OneDental Zaragoza",
  description = "Clínica dental avanzada en Zaragoza especializada en Digital Smile Design, implantes dentales, carillas de porcelana y tratamientos estéticos.",
  url = "https://onedental-zaragoza.com",
  telephone = "+34976527761",
  address = {
    streetAddress: "Calle Pablo Neruda 17",
    addressLocality: "Zaragoza",
    addressRegion: "Aragón",
    postalCode: "50018",
    addressCountry: "ES"
  },
  openingHours = [
    "Mo-Fr 09:00-20:00",
    "Sa 09:00-14:00"
  ],
  geo = {
    latitude: 41.6488226,
    longitude: -0.8890853
  },
  priceRange = "€€",
  services = [
    "Digital Smile Design",
    "Implantes Dentales",
    "Carillas de Porcelana",
    "Blanqueamiento Dental",
    "Ortodoncia",
    "Periodoncia",
    "Endodoncia"
  ]
}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${url}#organization`,
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "priceRange": priceRange,
    "image": [
      `${url}/images/clinica-moderna.jpg`,
      `${url}/images/doctor-profesional.jpg`,
      `${url}/images/instalaciones/recepcion-moderna.jpg`
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "openingHoursSpecification": openingHours.map(hours => {
      const [days, time] = hours.split(' ');
      const [opens, closes] = time.split('-');
      
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": days.split('-').map(day => {
          const dayMap: {[key: string]: string} = {
            'Mo': 'Monday',
            'Tu': 'Tuesday', 
            'We': 'Wednesday',
            'Th': 'Thursday',
            'Fr': 'Friday',
            'Sa': 'Saturday',
            'Su': 'Sunday'
          };
          return dayMap[day] || day;
        }),
        "opens": opens,
        "closes": closes
      };
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Dentales",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "provider": {
            "@id": `${url}#organization`
          }
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "María González"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Increíble transformación con Digital Smile Design. El Dr. Onésimo es excepcional."
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Primera Consulta Gratuita",
        "description": "Consulta inicial sin coste para nuevos pacientes",
        "price": "0",
        "priceCurrency": "EUR"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

interface DentistSchemaProps {
  name?: string;
  description?: string;
  specialties?: string[];
  education?: string[];
  experience?: string;
  image?: string;
}

export const DentistSchema: React.FC<DentistSchemaProps> = ({
  name = "Dr. Onésimo Fernández",
  description = "Especialista en Digital Smile Design y prótesis dental con más de 12 años de experiencia en Zaragoza.",
  specialties = [
    "Digital Smile Design",
    "Prótesis Dental",
    "Implantología",
    "Estética Dental"
  ],
  education = [
    "Licenciado en Odontología",
    "Especialista en Prótesis",
    "Certificado Digital Smile Design"
  ],
  experience = "12+ años",
  image = "/images/doctor-profesional.jpg"
}) => {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://onedental-zaragoza.com#dentist",
    "name": name,
    "description": description,
    "image": image,
    "jobTitle": "Director Médico y Dentista",
    "worksFor": {
      "@id": "https://onedental-zaragoza.com#organization"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Dentista",
      "occupationLocation": {
        "@type": "City",
        "name": "Zaragoza"
      },
      "skills": specialties,
      "experienceRequirements": experience
    },
    "alumniOf": education.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu
    })),
    "knowsAbout": specialties,
    "memberOf": {
      "@type": "ProfessionalService",
      "name": "Colegio Oficial de Dentistas de Aragón"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(dentistSchema)}
      </script>
    </Helmet>
  );
};

interface ServiceSchemaProps {
  name: string;
  description?: string;
  price?: number;
  duration?: string;
  category: string;
  provider?: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description = "",
  price,
  duration,
  category,
  provider = "OneDental Zaragoza"
}) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "category": category,
    "provider": {
      "@id": "https://onedental-zaragoza.com#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Zaragoza"
    },
    "offers": {
      "@type": "Offer",
      "price": price?.toString(),
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    },
    "additionalProperty": duration ? {
      "@type": "PropertyValue",
      "name": "Duración del tratamiento",
      "value": duration
    } : undefined
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ questions }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(qa => ({
      "@type": "Question",
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  potentialActions?: Array<{
    type: string;
    name: string;
    target: string;
  }>;
}

export const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({
  name = "OneDental Zaragoza",
  url = "https://onedental-zaragoza.com",
  potentialActions = [
    {
      type: "SearchAction",
      name: "Buscar servicios dentales",
      target: `${url}/servicios?q={search_term_string}`
    }
  ]
}) => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    "name": name,
    "url": url,
    "potentialAction": potentialActions.map(action => ({
      "@type": action.type,
      "target": action.target,
      "query-input": "required name=search_term_string"
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

// Componente todo-en-uno para SEO completo
export const CompleteSEO: React.FC<{
  page: 'home' | 'service' | 'about' | 'contact' | 'blog';
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  serviceData?: {
    name: string;
    price?: number;
    duration?: string;
    category: string;
  };
}> = ({
  page,
  title,
  description,
  keywords,
  image = "/images/clinica-moderna.jpg",
  url = "https://onedental-zaragoza.com",
  breadcrumbs,
  faqs,
  serviceData
}) => {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OneDental Zaragoza" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Hreflang para SEO internacional */}
      <link rel="alternate" hrefLang="es" href={url} />
      <link rel="alternate" hrefLang="es-ES" href={url} />
      
      {/* Additional meta tags para mejor SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="OneDental Zaragoza" />
      <meta name="publisher" content="OneDental Zaragoza" />
      <meta name="copyright" content="OneDental Zaragoza" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Schema markup condicional */}
      {page === 'home' && (
        <>
          <LocalBusinessSchema />
          <DentistSchema />
          <WebsiteSchema />
        </>
      )}
      
      {page === 'service' && serviceData && (
        <ServiceSchema {...serviceData} />
      )}
      
      {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
      {faqs && <FAQSchema questions={faqs} />}
    </Helmet>
  );
};
