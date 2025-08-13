import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Badge } from './badge';

interface BreadcrumbItem {
  label: string;
  path?: string;
  isActive?: boolean;
}

interface BreadcrumbNavigationProps {
  className?: string;
}

export default function BreadcrumbNavigation({ className = '' }: BreadcrumbNavigationProps) {
  const location = useLocation();
  
  const routeMap: Record<string, string> = {
    '/': 'Inicio',
    '/servicios': 'Servicios',
    '/servicios/digital-smile-design-zaragoza': 'Digital Smile Design',
    '/servicios/implantes-dentales-zaragoza': 'Implantes Dentales',
    '/servicios/carillas-porcelana-zaragoza': 'Carillas de Porcelana',
    '/servicios/blanqueamiento-dental-zaragoza': 'Blanqueamiento Dental',
    '/servicios/ortodoncia-zaragoza': 'Ortodoncia',
    '/servicios/periodoncia-zaragoza': 'Periodoncia',
    '/servicios/endodoncia-zaragoza': 'Endodoncia',
    '/servicios/cirugia-dental-zaragoza': 'Cirugía Dental',
    '/servicios/protesis-dental-zaragoza': 'Prótesis Dental',
    '/servicios/higiene-dental-zaragoza': 'Higiene Dental',
    '/blog': 'Blog',
    '/sobre-nosotros': 'Sobre Nosotros',
    '/equipo-medico': 'Equipo Médico',
    '/tecnologia': 'Tecnología',
    '/certificaciones': 'Certificaciones',
    '/instalaciones': 'Instalaciones',
    '/primera-consulta-gratuita': 'Primera Consulta Gratuita',
    '/urgencias-dentales': 'Urgencias Dentales',
    '/financiacion': 'Financiación',
    '/garantias': 'Garantías',
    '/cita-online': 'Cita Online',
    '/reservar-cita': 'Reservar Cita',
    '/calculadora-precios': 'Calculadora de Precios',
    '/tour-virtual': 'Tour Virtual',
    '/testimonios': 'Testimonios',
    '/programa-referidos': 'Programa de Referidos',
    '/centro-multimedia': 'Centro Multimedia',
    '/politica-privacidad': 'Política de Privacidad',
    '/terminos-condiciones': 'Términos y Condiciones',
    '/politica-cookies': 'Política de Cookies',
    '/aviso-legal': 'Aviso Legal',
    '/pagos': 'Sistema de Pagos',
    '/simulador-sonrisa': 'Simulador de Sonrisa',
    '/tienda-dental': 'Tienda Dental',
    '/admin/dashboard': 'Dashboard',
    '/admin/analytics': 'Analytics',
    '/admin/business-intelligence': 'Business Intelligence',
    '/admin/notificaciones': 'Notificaciones'
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Inicio', path: '/' }
    ];

    let currentPath = '';

    pathnames.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathnames.length - 1;
      
      const label = routeMap[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
      
      breadcrumbs.push({
        label,
        path: isLast ? undefined : currentPath,
        isActive: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // No mostrar breadcrumbs en la página de inicio
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className={`bg-gray-50 border-b border-gray-200 py-3 ${className}`} aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              
              {index === 0 && (
                <Home className="h-4 w-4 text-gray-500 mr-2" />
              )}
              
              {breadcrumb.path ? (
                <Link
                  to={breadcrumb.path}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-semibold flex items-center">
                  {breadcrumb.label}
                  {breadcrumb.isActive && (
                    <Badge variant="outline" className="ml-2 text-xs">
                      Actual
                    </Badge>
                  )}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

// Schema markup para breadcrumbs (SEO)
export function BreadcrumbSchema({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.label,
      "item": breadcrumb.path ? `https://onedental-zaragoza.com${breadcrumb.path}` : undefined
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
