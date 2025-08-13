import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from '../icons/LucideIcons';
import { Calculator, Camera, Heart, Settings, Calendar, Users, BarChart3, Gift, Play, Shield } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [showSystemDropdown, setShowSystemDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '/', type: 'link' },
    { 
      name: 'Servicios', 
      href: '/servicios',
      type: 'dropdown',
      subItems: [
        { name: 'Digital Smile Design', href: '/servicios/digital-smile-design-zaragoza' },
        { name: 'Implantes Dentales', href: '/servicios/implantes-dentales-zaragoza' },
        { name: 'Carillas de Porcelana', href: '/servicios/carillas-porcelana-zaragoza' },
        { name: 'Blanqueamiento Dental', href: '/servicios/blanqueamiento-dental-zaragoza' },
        { name: 'Ortodoncia', href: '/servicios/ortodoncia-zaragoza' },
        { name: 'Periodoncia', href: '/servicios/periodoncia-zaragoza' },
        { name: 'Endodoncia', href: '/servicios/endodoncia-zaragoza' }
      ]
    },
    {
      name: 'Herramientas',
      href: '/herramientas',
      type: 'dropdown',
      subItems: [
        { name: 'Calculadora de Precios', href: '/calculadora-precios', icon: Calculator },
        { name: 'Tour Virtual 360°', href: '/tour-virtual', icon: Camera },
        { name: 'Testimonios', href: '/testimonios', icon: Heart },
        { name: 'Reservar Cita', href: '/reservar-cita', icon: Calendar },
        { name: 'Programa Referidos', href: '/programa-referidos', icon: Gift },
        { name: 'Centro Multimedia', href: '/centro-multimedia', icon: Play }
      ]
    },
    {
      name: 'Sistema',
      href: '/sistema',
      type: 'dropdown',
      subItems: [
        { name: 'CRM Dashboard', href: '/admin/dashboard', icon: Users },
        { name: 'Analytics Avanzado', href: '/admin/analytics', icon: BarChart3 }
      ]
    },
    { name: 'Blog', href: '/blog', type: 'link' },
    { name: 'Instalaciones', href: '/instalaciones', type: 'link' },
    { name: 'Contacto', href: '#contacto', type: 'scroll' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Calle Pablo Neruda, 17, Zaragoza</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Lun-Vie: 9:00-17:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <a href="tel:976527761" className="hover:text-blue-200">976 527 761</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-lg py-2' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">1D</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">OneDental</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">Clínica Dental Dr. Onésimo Fernández</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                if (item.type === 'dropdown') {
                  const isServices = item.name === 'Servicios';
                  const isTools = item.name === 'Herramientas';
                  const isSystem = item.name === 'Sistema';
                  
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        if (isServices) setShowServicesDropdown(true);
                        if (isTools) setShowToolsDropdown(true);
                        if (isSystem) setShowSystemDropdown(true);
                      }}
                      onMouseLeave={() => {
                        if (isServices) setShowServicesDropdown(false);
                        if (isTools) setShowToolsDropdown(false);
                        if (isSystem) setShowSystemDropdown(false);
                      }}
                    >
                      <button className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors flex items-center gap-1">
                        {item.name}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {((isServices && showServicesDropdown) || (isTools && showToolsDropdown) || (isSystem && showSystemDropdown)) && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700 z-50">
                          <div className="py-2">
                            {item.subItems?.map((subItem) => {
                              const IconComponent = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                  {IconComponent && <IconComponent className="h-4 w-4 mr-3 text-blue-600 dark:text-blue-400" />}
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                } else if (item.type === 'scroll') {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                    >
                      {item.name}
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <a
                href="tel:976527761"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar Ahora</span>
              </a>
              <a
                href="#cita"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Primera Consulta GRATUITA
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  if (item.type === 'dropdown') {
                    return (
                      <div key={item.name} className="flex flex-col">
                        <button className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left">
                          {item.name}
                        </button>
                        <div className="ml-4 space-y-2">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block text-gray-600 hover:text-blue-600 py-1 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  } else if (item.type === 'scroll') {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 font-medium py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    );
                  } else {
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`font-medium py-2 ${
                          location.pathname === item.href
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                })}
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <a
                    href="tel:976527761"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>976 527 761</span>
                  </a>
                  <a
                    href="#cita"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Primera Consulta GRATUITA
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/34976527761?text=Hola, me gustaría solicitar información sobre sus servicios dentales"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
        </svg>
      </a>
    </>
  );
};

export default Header;
