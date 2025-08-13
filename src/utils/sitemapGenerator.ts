interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

class SitemapGenerator {
  private baseUrl: string;
  private urls: SitemapUrl[];

  constructor(baseUrl: string = 'https://onedental-zaragoza.com') {
    this.baseUrl = baseUrl;
    this.urls = [];
  }

  addUrl(url: SitemapUrl) {
    this.urls.push(url);
  }

  generateStaticUrls() {
    const staticPages = [
      {
        loc: '/',
        changefreq: 'daily' as const,
        priority: 1.0,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/calculadora-precios',
        changefreq: 'weekly' as const,
        priority: 0.9,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/tour-virtual',
        changefreq: 'monthly' as const,
        priority: 0.8,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/testimonios',
        changefreq: 'weekly' as const,
        priority: 0.8,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/primera-consulta-gratuita',
        changefreq: 'daily' as const,
        priority: 0.9,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/urgencias-dentales',
        changefreq: 'monthly' as const,
        priority: 0.7,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/sobre-nosotros',
        changefreq: 'monthly' as const,
        priority: 0.7,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/equipo-medico',
        changefreq: 'monthly' as const,
        priority: 0.7,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/tecnologia',
        changefreq: 'monthly' as const,
        priority: 0.8,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/certificaciones',
        changefreq: 'monthly' as const,
        priority: 0.7,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/instalaciones',
        changefreq: 'monthly' as const,
        priority: 0.6,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/financiacion',
        changefreq: 'monthly' as const,
        priority: 0.8,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/garantias',
        changefreq: 'monthly' as const,
        priority: 0.8,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/cita-online',
        changefreq: 'daily' as const,
        priority: 0.9,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/reservar-cita',
        changefreq: 'daily' as const,
        priority: 0.9,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/blog',
        changefreq: 'weekly' as const,
        priority: 0.6,
        lastmod: new Date().toISOString().split('T')[0]
      },
      // Paquete 3 - Funcionalidades Avanzadas
      {
        loc: '/pagos',
        changefreq: 'monthly' as const,
        priority: 0.8,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/simulador-sonrisa',
        changefreq: 'monthly' as const,
        priority: 0.9,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/tienda-dental',
        changefreq: 'weekly' as const,
        priority: 0.7,
        lastmod: new Date().toISOString().split('T')[0]
      },
      // Páginas legales
      {
        loc: '/politica-privacidad',
        changefreq: 'yearly' as const,
        priority: 0.3,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/terminos-condiciones',
        changefreq: 'yearly' as const,
        priority: 0.3,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/politica-cookies',
        changefreq: 'yearly' as const,
        priority: 0.3,
        lastmod: new Date().toISOString().split('T')[0]
      },
      {
        loc: '/aviso-legal',
        changefreq: 'yearly' as const,
        priority: 0.3,
        lastmod: new Date().toISOString().split('T')[0]
      }
    ];

    staticPages.forEach(page => this.addUrl(page));
  }

  generateServiceUrls() {
    const services = [
      'digital-smile-design-zaragoza',
      'implantes-dentales-zaragoza',
      'carillas-porcelana-zaragoza',
      'blanqueamiento-dental-zaragoza',
      'ortodoncia-zaragoza',
      'periodoncia-zaragoza',
      'endodoncia-zaragoza',
      'cirugia-dental-zaragoza',
      'protesis-dental-zaragoza',
      'higiene-dental-zaragoza'
    ];

    services.forEach(service => {
      this.addUrl({
        loc: `/servicios/${service}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString().split('T')[0]
      });
    });
  }

  async generateBlogUrls() {
    try {
      // En un entorno real, esto vendría de una API o base de datos
      const blogPosts = [
        'que-es-digital-smile-design',
        'implantes-dentales-guia-completa',
        'carillas-porcelana-antes-despues',
        'blanqueamiento-dental-tipos',
        'ortodoncia-invisible-ventajas',
        'periodoncia-tratamiento-encias',
        'endodoncia-cuando-necesaria',
        'higiene-dental-profesional',
        'urgencias-dentales-que-hacer',
        'primera-visita-dentista'
      ];

      blogPosts.forEach(post => {
        this.addUrl({
          loc: `/blog/${post}`,
          changefreq: 'monthly',
          priority: 0.6,
          lastmod: new Date().toISOString().split('T')[0]
        });
      });
    } catch (error) {
      console.error('Error generating blog URLs:', error);
    }
  }

  generateXML(): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
    
    const urlEntries = this.urls.map(url => {
      let entry = '  <url>\n';
      entry += `    <loc>${this.baseUrl}${url.loc}</loc>\n`;
      
      if (url.lastmod) {
        entry += `    <lastmod>${url.lastmod}</lastmod>\n`;
      }
      
      if (url.changefreq) {
        entry += `    <changefreq>${url.changefreq}</changefreq>\n`;
      }
      
      if (url.priority !== undefined) {
        entry += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
      }
      
      entry += '  </url>\n';
      return entry;
    }).join('');
    
    const urlsetClose = '</urlset>';
    
    return xmlHeader + urlsetOpen + urlEntries + urlsetClose;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /api/

# Allow important files
Allow: /sitemap.xml
Allow: /robots.txt

# Sitemap location
Sitemap: ${this.baseUrl}/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`;
  }

  async generate(): Promise<{ sitemap: string; robots: string }> {
    // Limpiar URLs existentes
    this.urls = [];
    
    // Generar todas las URLs
    this.generateStaticUrls();
    this.generateServiceUrls();
    await this.generateBlogUrls();
    
    // Ordenar por prioridad descendente
    this.urls.sort((a, b) => (b.priority || 0) - (a.priority || 0));
    
    return {
      sitemap: this.generateXML(),
      robots: this.generateRobotsTxt()
    };
  }
}

// Función para descargar sitemap
export const downloadSitemap = async () => {
  const generator = new SitemapGenerator();
  const { sitemap, robots } = await generator.generate();
  
  // Crear y descargar sitemap.xml
  const sitemapBlob = new Blob([sitemap], { type: 'application/xml' });
  const sitemapUrl = URL.createObjectURL(sitemapBlob);
  const sitemapLink = document.createElement('a');
  sitemapLink.href = sitemapUrl;
  sitemapLink.download = 'sitemap.xml';
  sitemapLink.click();
  URL.revokeObjectURL(sitemapUrl);
  
  // Crear y descargar robots.txt
  const robotsBlob = new Blob([robots], { type: 'text/plain' });
  const robotsUrl = URL.createObjectURL(robotsBlob);
  const robotsLink = document.createElement('a');
  robotsLink.href = robotsUrl;
  robotsLink.download = 'robots.txt';
  robotsLink.click();
  URL.revokeObjectURL(robotsUrl);
};

// Función para generar sitemap automáticamente en el servidor
export const generateSitemapFiles = async () => {
  const generator = new SitemapGenerator();
  const { sitemap, robots } = await generator.generate();
  
  try {
    // En un entorno real, aquí escribirías los archivos al servidor
    console.log('Sitemap generado:', sitemap.length, 'caracteres');
    console.log('Robots.txt generado:', robots.length, 'caracteres');
    
    return { sitemap, robots };
  } catch (error) {
    console.error('Error generando archivos sitemap:', error);
    throw error;
  }
};

export default SitemapGenerator;
