import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  schema?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

interface DynamicMetaProps {
  data: MetaData;
}

export default function DynamicMeta({ data }: DynamicMetaProps) {
  const baseUrl = 'https://onedental-zaragoza.com';
  const defaultImage = `${baseUrl}/images/clinica-moderna.jpg`;
  
  const {
    title,
    description,
    keywords,
    ogTitle = title,
    ogDescription = description,
    ogImage = defaultImage,
    ogUrl,
    twitterCard = 'summary_large_image',
    canonicalUrl,
    schema,
    noindex = false,
    nofollow = false
  } = data;

  const robots = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <Helmet>
      {/* Título optimizado */}
      <title>{title}</title>
      
      {/* Meta básicos */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      
      {/* URL canónica */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph para redes sociales */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OneDental Zaragoza" />
      <meta property="og:locale" content="es_ES" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Meta adicionales para clínicas dentales */}
      <meta name="geo.region" content="ES-AR" />
      <meta name="geo.placename" content="Zaragoza" />
      <meta name="geo.position" content="41.656;-0.877" />
      <meta name="ICBM" content="41.656, -0.877" />
      
      {/* Meta para el sector salud */}
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="es" />
      <meta name="DC.coverage" content="Zaragoza, España" />
      
      {/* Schema markup si se proporciona */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}\n      
      {/* Metadatos específicos para móvil */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect para optimización */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
}

// Hook para generar meta data específica por página
export function usePageMeta(pageType: string, params?: any): MetaData {
  const baseTitle = "OneDental Zaragoza - Clínica Dental Especializada";
  const baseDescription = "Clínica dental en Zaragoza con la tecnología más avanzada. Digital Smile Design, implantes, ortodoncia invisible y más. Primera consulta gratuita.";
  
  const metaTemplates: Record<string, MetaData> = {
    home: {
      title: baseTitle,
      description: baseDescription,
      keywords: "dentista Zaragoza, clínica dental, Digital Smile Design, implantes dentales Zaragoza, ortodoncia invisible",
      ogImage: "/images/clinica-moderna.jpg",
      canonicalUrl: "https://onedental-zaragoza.com/"
    },
    
    'digital-smile-design': {
      title: "Digital Smile Design Zaragoza - Diseña tu Sonrisa Perfecta | OneDental",
      description: "Transforma tu sonrisa con Digital Smile Design en Zaragoza. Tecnología 3D avanzada para el diseño de sonrisa perfecto. Consulta gratuita.",
      keywords: "Digital Smile Design Zaragoza, diseño sonrisa 3D, carillas digitales, estética dental Zaragoza",
      ogImage: "/images/digital-smile-design.JPG",
      canonicalUrl: "https://onedental-zaragoza.com/servicios/digital-smile-design-zaragoza"
    },
    
    'implantes-dentales': {
      title: "Implantes Dentales Zaragoza - Recupera tu Sonrisa | OneDental",
      description: "Implantes dentales en Zaragoza con garantía de 10 años. Tecnología Nobel Biocare y profesionales especializados. Financiación disponible.",
      keywords: "implantes dentales Zaragoza, implantes Nobel Biocare, cirugía dental, prótesis dental",
      ogImage: "/images/implante-dental.jpg",
      canonicalUrl: "https://onedental-zaragoza.com/servicios/implantes-dentales-zaragoza"
    },
    
    'carillas-porcelana': {
      title: "Carillas de Porcelana Zaragoza - Sonrisa Natural | OneDental",
      description: "Carillas de porcelana en Zaragoza para una sonrisa perfecta y natural. Resultados inmediatos con 7 años de garantía.",
      keywords: "carillas porcelana Zaragoza, carillas dentales, estética dental, sonrisa perfecta",
      ogImage: "/images/carillas-dentales.jpg",
      canonicalUrl: "https://onedental-zaragoza.com/servicios/carillas-porcelana-zaragoza"
    },
    
    'blanqueamiento-dental': {
      title: "Blanqueamiento Dental Zaragoza - Sonrisa Blanca | OneDental",
      description: "Blanqueamiento dental profesional en Zaragoza. Resultados visibles desde la primera sesión. Técnicas seguras y efectivas.",
      keywords: "blanqueamiento dental Zaragoza, dientes blancos, blanqueamiento profesional",
      ogImage: "/images/blanqueamiento_1.jpg",
      canonicalUrl: "https://onedental-zaragoza.com/servicios/blanqueamiento-dental-zaragoza"
    },
    
    'ortodoncia': {
      title: "Ortodoncia Zaragoza - Invisalign y Ortodoncia Tradicional | OneDental",
      description: "Ortodoncia en Zaragoza con Invisalign y brackets tradicionales. Especialistas certificados con planes de financiación.",
      keywords: "ortodoncia Zaragoza, Invisalign, brackets, alineadores transparentes",
      ogImage: "/images/tecnologia-dental.jpg",
      canonicalUrl: "https://onedental-zaragoza.com/servicios/ortodoncia-zaragoza"
    },
    
    'primera-consulta': {
      title: "Primera Consulta Gratuita - Clínica Dental Zaragoza | OneDental",
      description: "Reserva tu primera consulta dental gratuita en Zaragoza. Diagnóstico completo y plan de tratamiento personalizado sin coste.",
      keywords: "consulta dental gratuita Zaragoza, revisión dental gratis, diagnóstico dental",
      canonicalUrl: "https://onedental-zaragoza.com/primera-consulta-gratuita"
    },
    
    'urgencias': {
      title: "Urgencias Dentales 24h Zaragoza - Atención Inmediata | OneDental",
      description: "Atención de urgencias dentales 24 horas en Zaragoza. Dolor dental, rotura, emergencias. Llamar: 976 527 761",
      keywords: "urgencias dentales Zaragoza, dentista urgencias, dolor dental 24h",
      canonicalUrl: "https://onedental-zaragoza.com/urgencias-dentales"
    },
    
    'tecnologia': {
      title: "Tecnología Dental Avanzada Zaragoza - Equipos de Última Generación | OneDental",
      description: "Descubre la tecnología dental más avanzada en Zaragoza. Escáner intraoral, CAD/CAM, cirugía guiada y más innovaciones.",
      keywords: "tecnología dental Zaragoza, equipos dentales avanzados, CAD/CAM, escáner intraoral",
      canonicalUrl: "https://onedental-zaragoza.com/tecnologia"
    },
    
    'certificaciones': {
      title: "Certificaciones y Acreditaciones - Calidad Garantizada | OneDental Zaragoza",
      description: "Conoce nuestras certificaciones de calidad ISO 9001, acreditaciones profesionales y formación continua del equipo médico.",
      keywords: "certificaciones dentales, ISO 9001, acreditaciones médicas, calidad dental",
      canonicalUrl: "https://onedental-zaragoza.com/certificaciones"
    },
    
    'financiacion': {
      title: "Financiación Dental Zaragoza - Pago a Plazos sin Intereses | OneDental",
      description: "Financia tu tratamiento dental en Zaragoza hasta 60 meses sin intereses. Múltiples opciones de pago y financiación inmediata.",
      keywords: "financiación dental Zaragoza, pago plazos dentista, financiación sin intereses",
      canonicalUrl: "https://onedental-zaragoza.com/financiacion"
    },
    
    'garantias': {
      title: "Garantías Tratamientos Dentales - Hasta 10 Años | OneDental Zaragoza",
      description: "Garantías de hasta 10 años en implantes, 7 años en carillas y satisfacción garantizada en todos los tratamientos dentales.",
      keywords: "garantías dentales, garantía implantes, garantía carillas, satisfacción garantizada",
      canonicalUrl: "https://onedental-zaragoza.com/garantias"
    },
    
    'sobre-nosotros': {
      title: "Sobre Nosotros - Clínica Dental OneDental Zaragoza",
      description: "Conoce OneDental, clínica dental especializada en Zaragoza. Historia, misión, valores y compromiso con la excelencia dental.",
      keywords: "OneDental Zaragoza, clínica dental historia, equipo médico",
      canonicalUrl: "https://onedental-zaragoza.com/sobre-nosotros"
    },
    
    'equipo-medico': {
      title: "Equipo Médico Especializado - Dr. Onésimo y Equipo | OneDental Zaragoza",
      description: "Conoce a nuestro equipo médico especializado liderado por el Dr. Onésimo. Profesionales certificados en todas las especialidades dentales.",
      keywords: "Dr. Onésimo, equipo médico dental, especialistas dentales Zaragoza",
      canonicalUrl: "https://onedental-zaragoza.com/equipo-medico"
    },
    
    'blog': {
      title: "Blog Dental - Consejos y Novedades | OneDental Zaragoza",
      description: "Blog dental con consejos de higiene, novedades en tratamientos y información sobre salud bucodental. Artículos de profesionales.",
      keywords: "blog dental, consejos dentales, higiene bucodental, salud dental",
      canonicalUrl: "https://onedental-zaragoza.com/blog"
    },
    
    '404': {
      title: "Página no encontrada (404) - OneDental Zaragoza",
      description: "La página que buscas no existe. Encuentra información sobre nuestros servicios dentales en Zaragoza o contacta con nosotros.",
      noindex: true
    }
  };
  
  return metaTemplates[pageType] || metaTemplates.home;
}
