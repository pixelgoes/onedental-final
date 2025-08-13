import React from 'react';

interface SchemaMarkupAdvancedProps {
  type: 'organization' | 'service' | 'article' | 'webpage' | 'dentist' | 'medicalclinic' | 'faq' | 'breadcrumb';
  data?: any;
}

export default function SchemaMarkupAdvanced({ type, data = {} }: SchemaMarkupAdvancedProps) {
  const baseUrl = 'https://onedental-zaragoza.com';
  
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "DentalClinic",
      "name": "OneDental Zaragoza",
      "description": "Clínica dental especializada en Zaragoza con tecnología avanzada Digital Smile Design, implantes dentales y ortodoncia invisible",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo.png`,
        "width": 300,
        "height": 100
      },
      "image": [
        `${baseUrl}/images/clinica-moderna.jpg`,
        `${baseUrl}/images/equipo-dental.jpg`,
        `${baseUrl}/images/digital-smile-design.JPG`
      ],
      "telephone": "+34976527761",
      "email": "info@onedental.es",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle Pablo Neruda, 17",
        "addressLocality": "Zaragoza",
        "addressRegion": "Aragón",
        "postalCode": "50018",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.656,
        "longitude": -0.877
      },
      "openingHours": [
        "Mo-Fr 09:00-20:00",
        "Sa 09:00-14:00"
      ],
      "priceRange": "€€",
      "paymentAccepted": ["Cash", "Credit Card", "Financing", "Insurance"],
      "currenciesAccepted": "EUR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Dentales",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Smile Design",
              "description": "Diseño digital de sonrisa con tecnología 3D"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Implantes Dentales",
              "description": "Implantes dentales con garantía de 10 años"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Ortodoncia Invisible",
              "description": "Tratamiento de ortodoncia con Invisalign"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/onedentalzaragoza",
        "https://www.instagram.com/onedentalzaragoza", 
        "https://www.google.com/maps/place/OneDental"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    
    dentist: {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": data.name || "Dr. Onésimo",
      "description": data.description || "Especialista en Digital Smile Design y estética dental",
      "image": data.image || `${baseUrl}/images/doctor-profesional.jpg`,
      "worksFor": {
        "@type": "DentalClinic",
        "name": "OneDental Zaragoza",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calle Pablo Neruda, 17",
          "addressLocality": "Zaragoza",
          "postalCode": "50018",
          "addressCountry": "ES"
        }
      },
      "medicalSpecialty": [
        "Dental implantology",
        "Cosmetic dentistry", 
        "Digital Smile Design",
        "Oral surgery"
      ],
      "memberOf": data.memberOf || [
        "Colegio Oficial de Odontólogos de Aragón",
        "Sociedad Española de Implantes"
      ],
      "alumniOf": data.education || "Universidad de Zaragoza",
      "hasCredential": data.credentials || [
        "Licenciado en Odontología",
        "Especialista en Implantología",
        "Certificado Digital Smile Design"
      ]
    },
    
    medicalclinic: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "OneDental Zaragoza",
      "description": "Clínica dental especializada con tecnología avanzada",
      "medicalSpecialty": [
        "Digital Smile Design",
        "Dental implantology", 
        "Orthodontics",
        "Cosmetic dentistry",
        "Periodontics",
        "Endodontics"
      ],
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Digital Smile Design",
          "description": "Diseño digital de sonrisa personalizado"
        },
        {
          "@type": "MedicalProcedure", 
          "name": "Implantes Dentales",
          "description": "Colocación de implantes con cirugía guiada"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Ortodoncia Invisible", 
          "description": "Tratamiento con alineadores transparentes Invisalign"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tratamientos Dentales",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Primera Consulta Gratuita",
            "description": "Evaluación completa sin coste",
            "price": "0",
            "priceCurrency": "EUR"
          }
        ]
      }
    },
    
    service: {
      "@context": "https://schema.org",
      "@type": "MedicalService",
      "name": data.name || "Servicios Dentales",
      "description": data.description || "Servicios dentales especializados con tecnología avanzada",
      "provider": {
        "@type": "DentalClinic",
        "name": "OneDental Zaragoza",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calle Pablo Neruda, 17",
          "addressLocality": "Zaragoza",
          "postalCode": "50018",
          "addressCountry": "ES"
        },
        "telephone": "+34976527761"
      },
      "areaServed": {
        "@type": "City",
        "name": "Zaragoza",
        "addressCountry": "ES"
      },
      "availableLanguage": ["es"],
      "category": data.category || "Dental Care",
      "hasOfferCatalog": data.offers,
      "aggregateRating": data.rating || {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87"
      },
      ...data
    },
    
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.questions?.map((q: any) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      })) || []
    },
    
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data.breadcrumbs?.map((item: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url ? `${baseUrl}${item.url}` : undefined
      })) || []
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title,
      "description": data.description,
      "author": {
        "@type": "Organization",
        "name": "OneDental Zaragoza",
        "url": baseUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": "OneDental Zaragoza",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/logo.png`,
          "width": 300,
          "height": 100
        }
      },
      "datePublished": data.datePublished,
      "dateModified": data.dateModified || data.datePublished,
      "image": {
        "@type": "ImageObject",
        "url": data.image,
        "width": data.imageWidth || 1200,
        "height": data.imageHeight || 630
      },
      "url": data.url,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": data.url
      },
      "articleSection": data.category || "Salud Dental",
      "keywords": data.keywords,
      "wordCount": data.wordCount,
      "inLanguage": "es",
      ...data
    },
    
    webpage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": data.title,
      "description": data.description,
      "url": data.url,
      "inLanguage": "es",
      "isPartOf": {
        "@type": "WebSite",
        "name": "OneDental Zaragoza",
        "url": baseUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      "about": {
        "@type": "DentalClinic",
        "name": "OneDental Zaragoza"
      },
      "breadcrumb": data.breadcrumb,
      "mainEntity": data.mainEntity,
      "significantLink": data.significantLinks,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".description"]
      },
      ...data
    }
  };

  const schema = schemas[type];

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

// Hook para generar schema específico por página
export function usePageSchema(pageType: string, params?: any) {
  const baseUrl = 'https://onedental-zaragoza.com';
  
  const schemaTemplates: Record<string, any> = {
    'digital-smile-design': {
      type: 'service',
      data: {
        name: "Digital Smile Design Zaragoza",
        description: "Diseño digital de sonrisa personalizado con tecnología 3D avanzada",
        category: "Cosmetic Dentistry",
        offers: {
          "@type": "OfferCatalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Consulta Digital Smile Design",
              "description": "Evaluación y diseño digital de sonrisa",
              "price": "0",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      }
    },
    
    'implantes-dentales': {
      type: 'service',
      data: {
        name: "Implantes Dentales Zaragoza",
        description: "Implantes dentales con tecnología Nobel Biocare y garantía de 10 años",
        category: "Oral Surgery",
        offers: {
          "@type": "OfferCatalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Implante Dental Completo",
              "description": "Implante + corona con garantía",
              "priceRange": "1200-2500 EUR",
              "priceCurrency": "EUR"
            }
          ]
        }
      }
    },
    
    'equipo-medico': {
      type: 'dentist',
      data: {
        name: "Dr. Onésimo - Director Médico",
        description: "Especialista en Digital Smile Design, implantología y estética dental",
        memberOf: [
          "Colegio Oficial de Odontólogos de Aragón",
          "Digital Smile Design Organization",
          "Sociedad Española de Implantología"
        ],
        credentials: [
          "Licenciado en Odontología - Universidad de Zaragoza",
          "Máster en Implantología Oral",
          "Certificación Digital Smile Design",
          "Especialista en Estética Dental"
        ]
      }
    },
    
    'tecnologia': {
      type: 'medicalclinic',
      data: {
        name: "OneDental Zaragoza - Tecnología Avanzada",
        description: "Clínica dental con la tecnología más avanzada en Zaragoza"
      }
    },

    'blog': {
      type: 'webpage',
      data: {
        name: "Blog Dental OneDental Zaragoza",
        description: "Artículos sobre salud dental, consejos y novedades",
        mainEntity: {
          "@type": "Blog",
          "name": "Blog OneDental",
          "description": "Información actualizada sobre tratamientos dentales"
        }
      }
    }
  };
  
  return schemaTemplates[pageType];
}
