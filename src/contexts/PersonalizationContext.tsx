import React, { createContext, useContext, useEffect, useState } from 'react';

interface UserPreferences {
  nombre?: string;
  edad?: number;
  interesesTratamientos: string[];
  presupuestoAprox?: string;
  urgencia?: 'baja' | 'media' | 'alta';
  visitasAnteriores: boolean;
  preferenciaComunicacion: 'email' | 'telefono' | 'whatsapp';
  horariosPreferidos: string[];
  tratamientosFavoritos: string[];
  historialBusquedas: string[];
  paginasVisitadas: string[];
  tiempoSesion: number;
  dispositivoPreferido: 'movil' | 'desktop' | 'tablet';
  notificacionesActivadas: boolean;
}

interface RecomendacionTratamiento {
  id: string;
  nombre: string;
  motivo: string;
  prioridad: number;
  precio: number;
  duracion: string;
}

interface PersonalizationContextType {
  preferences: UserPreferences;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  addInterest: (tratamiento: string) => void;
  addFavorite: (tratamiento: string) => void;
  removeFavorite: (tratamiento: string) => void;
  addSearchHistory: (busqueda: string) => void;
  addPageVisit: (pagina: string) => void;
  getRecommendations: () => RecomendacionTratamiento[];
  getPersonalizedContent: () => any;
  clearUserData: () => void;
  isFirstVisit: boolean;
  sessionCount: number;
}

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined);

export const usePersonalization = () => {
  const context = useContext(PersonalizationContext);
  if (!context) {
    throw new Error('usePersonalization must be used within a PersonalizationProvider');
  }
  return context;
};

const defaultPreferences: UserPreferences = {
  interesesTratamientos: [],
  visitasAnteriores: false,
  preferenciaComunicacion: 'email',
  horariosPreferidos: [],
  tratamientosFavoritos: [],
  historialBusquedas: [],
  paginasVisitadas: [],
  tiempoSesion: 0,
  dispositivoPreferido: 'desktop',
  notificacionesActivadas: false,
};

export const PersonalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [sessionCount, setSessionCount] = useState(0);
  const [sessionStartTime] = useState(Date.now());

  // Cargar preferencias guardadas
  useEffect(() => {
    const savedPreferences = localStorage.getItem('onedental-user-preferences');
    const visitCount = localStorage.getItem('onedental-visit-count');
    
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences({ ...defaultPreferences, ...parsed });
        setIsFirstVisit(false);
      } catch (error) {
        console.error('Error loading user preferences:', error);
      }
    }

    if (visitCount) {
      const count = parseInt(visitCount, 10);
      setSessionCount(count + 1);
      localStorage.setItem('onedental-visit-count', (count + 1).toString());
    } else {
      setSessionCount(1);
      localStorage.setItem('onedental-visit-count', '1');
    }

    // Detectar dispositivo
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const dispositivo = isMobile ? 'movil' : isTablet ? 'tablet' : 'desktop';
    
    updatePreferences({ dispositivoPreferido: dispositivo });
  }, []);

  // Guardar tiempo de sesión al salir
  useEffect(() => {
    const handleBeforeUnload = () => {
      const tiempoSesion = Date.now() - sessionStartTime;
      updatePreferences({ 
        tiempoSesion: preferences.tiempoSesion + tiempoSesion 
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [preferences.tiempoSesion, sessionStartTime]);

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    const newPreferences = { ...preferences, ...updates };
    setPreferences(newPreferences);
    localStorage.setItem('onedental-user-preferences', JSON.stringify(newPreferences));
  };

  const addInterest = (tratamiento: string) => {
    if (!preferences.interesesTratamientos.includes(tratamiento)) {
      updatePreferences({
        interesesTratamientos: [...preferences.interesesTratamientos, tratamiento]
      });
    }
  };

  const addFavorite = (tratamiento: string) => {
    if (!preferences.tratamientosFavoritos.includes(tratamiento)) {
      updatePreferences({
        tratamientosFavoritos: [...preferences.tratamientosFavoritos, tratamiento]
      });
    }
  };

  const removeFavorite = (tratamiento: string) => {
    updatePreferences({
      tratamientosFavoritos: preferences.tratamientosFavoritos.filter(t => t !== tratamiento)
    });
  };

  const addSearchHistory = (busqueda: string) => {
    const historial = [busqueda, ...preferences.historialBusquedas.filter(h => h !== busqueda)];
    updatePreferences({
      historialBusquedas: historial.slice(0, 10) // Mantener solo las últimas 10
    });
  };

  const addPageVisit = (pagina: string) => {
    const visitas = [pagina, ...preferences.paginasVisitadas.filter(p => p !== pagina)];
    updatePreferences({
      paginasVisitadas: visitas.slice(0, 20) // Mantener solo las últimas 20
    });
  };

  const getRecommendations = (): RecomendacionTratamiento[] => {
    const recomendaciones: RecomendacionTratamiento[] = [];

    // Recomendaciones basadas en intereses
    if (preferences.interesesTratamientos.includes('estetico')) {
      recomendaciones.push({
        id: 'digital-smile-design',
        nombre: 'Digital Smile Design',
        motivo: 'Basado en tu interés en tratamientos estéticos',
        prioridad: 90,
        precio: 2500,
        duracion: '6-8 semanas'
      });
    }

    if (preferences.interesesTratamientos.includes('blanqueamiento')) {
      recomendaciones.push({
        id: 'blanqueamiento-dental',
        nombre: 'Blanqueamiento Dental',
        motivo: 'Perfecto para conseguir una sonrisa más blanca',
        prioridad: 85,
        precio: 350,
        duracion: '1-2 sesiones'
      });
    }

    // Recomendaciones basadas en edad
    if (preferences.edad && preferences.edad > 40) {
      recomendaciones.push({
        id: 'implantes-dentales',
        nombre: 'Implantes Dentales',
        motivo: 'Solución duradera para reemplazar piezas perdidas',
        prioridad: 88,
        precio: 1200,
        duracion: '3-4 meses'
      });
    }

    if (preferences.edad && preferences.edad < 30) {
      recomendaciones.push({
        id: 'ortodoncia',
        nombre: 'Ortodoncia Invisible',
        motivo: 'Ideal para corregir la alineación dental',
        prioridad: 82,
        precio: 2800,
        duracion: '12-24 meses'
      });
    }

    // Recomendaciones basadas en presupuesto
    if (preferences.presupuestoAprox === 'bajo') {
      recomendaciones.push({
        id: 'higiene-dental',
        nombre: 'Higiene Dental Profesional',
        motivo: 'Mantén tu salud dental con nuestros tratamientos preventivos',
        prioridad: 95,
        precio: 80,
        duracion: '1 sesión'
      });
    }

    // Recomendaciones basadas en urgencia
    if (preferences.urgencia === 'alta') {
      recomendaciones.push({
        id: 'urgencias-dentales',
        nombre: 'Atención de Urgencias',
        motivo: 'Para solucionar tu problema dental de inmediato',
        prioridad: 100,
        precio: 150,
        duracion: 'Inmediato'
      });
    }

    // Recomendaciones para usuarios recurrentes
    if (sessionCount > 3) {
      recomendaciones.push({
        id: 'consulta-gratuita',
        nombre: 'Primera Consulta Gratuita',
        motivo: 'Ya que has visitado varias veces, te ofrecemos una consulta gratuita',
        prioridad: 95,
        precio: 0,
        duracion: '30 minutos'
      });
    }

    return recomendaciones.sort((a, b) => b.prioridad - a.prioridad).slice(0, 3);
  };

  const getPersonalizedContent = () => {
    const content: any = {
      heroMessage: 'Bienvenido a OneDental',
      ctaPrimary: 'Primera Consulta GRATUITA',
      ctaSecondary: 'Ver Servicios'
    };

    // Personalización basada en visitas
    if (isFirstVisit) {
      content.heroMessage = '¡Bienvenido a OneDental Zaragoza!';
      content.ctaPrimary = 'Conoce Nuestros Servicios';
      content.showTour = true;
    } else if (sessionCount > 5) {
      content.heroMessage = `¡Hola de nuevo! Es tu visita número ${sessionCount}`;
      content.ctaPrimary = 'Reservar Cita';
      content.showLoyaltyOffer = true;
    }

    // Personalización basada en favoritos
    if (preferences.tratamientosFavoritos.length > 0) {
      content.featuredTreatments = preferences.tratamientosFavoritos;
    }

    // Personalización basada en dispositivo
    if (preferences.dispositivoPreferido === 'movil') {
      content.layout = 'mobile-first';
      content.showQuickAccess = true;
    }

    // Personalización basada en hora
    const hora = new Date().getHours();
    if (hora < 12) {
      content.greeting = 'Buenos días';
    } else if (hora < 18) {
      content.greeting = 'Buenas tardes';
    } else {
      content.greeting = 'Buenas noches';
    }

    // Personalización basada en intereses
    if (preferences.interesesTratamientos.includes('urgente')) {
      content.showUrgencyBanner = true;
    }

    return content;
  };

  const clearUserData = () => {
    localStorage.removeItem('onedental-user-preferences');
    localStorage.removeItem('onedental-visit-count');
    setPreferences(defaultPreferences);
    setSessionCount(0);
    setIsFirstVisit(true);
  };

  return (
    <PersonalizationContext.Provider value={{
      preferences,
      updatePreferences,
      addInterest,
      addFavorite,
      removeFavorite,
      addSearchHistory,
      addPageVisit,
      getRecommendations,
      getPersonalizedContent,
      clearUserData,
      isFirstVisit,
      sessionCount
    }}>
      {children}
    </PersonalizationContext.Provider>
  );
};

// Hook para recomendaciones inteligentes
export const useSmartRecommendations = () => {
  const { preferences, getRecommendations } = usePersonalization();
  const [recommendations, setRecommendations] = useState<RecomendacionTratamiento[]>([]);

  useEffect(() => {
    setRecommendations(getRecommendations());
  }, [preferences]);

  return recommendations;
};

// Hook para contenido adaptativo
export const useAdaptiveContent = () => {
  const { getPersonalizedContent, preferences } = usePersonalization();
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    setContent(getPersonalizedContent());
  }, [preferences]);

  return content;
};
