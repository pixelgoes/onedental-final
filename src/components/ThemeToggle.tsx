import React from 'react';
import { Sun, Moon, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, actualTheme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4 text-yellow-500" />;
      case 'dark':
        return <Moon className="h-4 w-4 text-blue-300" />;
      case 'auto':
        return <Clock className="h-4 w-4 text-purple-500" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Modo claro';
      case 'dark':
        return 'Modo oscuro';
      case 'auto':
        return `Auto (${actualTheme === 'dark' ? 'oscuro' : 'claro'})`;
      default:
        return 'Cambiar tema';
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative group hover:scale-105 transition-all duration-300"
      title={getLabel()}
    >
      <div className="relative transition-transform duration-500 group-hover:rotate-12">
        {getIcon()}
      </div>
      
      {/* Efecto de brillo */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </Button>
  );
};

// Componente para animaciones de entrada
export const AnimatedSection: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
}> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(50px)';
      case 'down':
        return 'translateY(-50px)';
      case 'left':
        return 'translateX(50px)';
      case 'right':
        return 'translateX(-50px)';
      case 'scale':
        return 'scale(0.8)';
      default:
        return 'translateY(50px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateX(0) scale(1)' : getInitialTransform(),
      }}
    >
      {children}
    </div>
  );
};

// Componente para efectos hover avanzados
export const HoverCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  glowColor?: string;
}> = ({ children, className = '', hoverScale = 1.05, glowColor = 'blue' }) => {
  return (
    <div
      className={`group relative transition-all duration-300 ease-out cursor-pointer ${className}`}
      style={{
        transform: 'perspective(1000px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `perspective(1000px) scale(${hoverScale}) rotateX(5deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'perspective(1000px) scale(1) rotateX(0deg)';
      }}
    >
      {children}
      
      {/* Efecto de brillo */}
      <div 
        className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-${glowColor}-400 to-${glowColor}-600 blur-xl -z-10`}
      />
    </div>
  );
};

// Componente para loading animado
export const LoadingSpinner: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}> = ({ size = 'md', color = 'blue' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-${color}-600`}
      />
    </div>
  );
};

// Componente para botones animados
export const AnimatedButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false
}) => {
  const baseClasses = "relative overflow-hidden group transition-all duration-300 ease-out";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
        ${className}
      `}
    >
      {/* Efecto de onda */}
      <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      {/* Contenido */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      
      {/* Brillo superior */}
      <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </button>
  );
};

// Hook para animaciones de página
export const usePageTransition = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading, isVisible };
};

// Componente para transiciones de página
export const PageTransition: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isLoading, isVisible } = usePageTransition();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

// Componente para efectos de paralaje
export const ParallaxSection: React.FC<{
  children: React.ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 0.5, className = '' }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        ref.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
