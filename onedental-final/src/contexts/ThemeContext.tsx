import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: Theme;
  actualTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('auto');
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  // Detectar preferencia del sistema
  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Detectar hora del día para modo automático
  const getTimeBasedTheme = (): 'light' | 'dark' => {
    const hour = new Date().getHours();
    return (hour >= 20 || hour <= 6) ? 'dark' : 'light';
  };

  // Determinar tema actual
  const determineActualTheme = (selectedTheme: Theme): 'light' | 'dark' => {
    switch (selectedTheme) {
      case 'light':
        return 'light';
      case 'dark':
        return 'dark';
      case 'auto':
        return getTimeBasedTheme();
      default:
        return getSystemTheme();
    }
  };

  // Cargar tema guardado
  useEffect(() => {
    const savedTheme = localStorage.getItem('onedental-theme') as Theme;
    if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      setTheme('auto');
    }
  }, []);

  // Actualizar tema actual cuando cambia la selección
  useEffect(() => {
    const newActualTheme = determineActualTheme(theme);
    setActualTheme(newActualTheme);
    
    // Aplicar clase al documento
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newActualTheme);
    
    // Guardar en localStorage
    localStorage.setItem('onedental-theme', theme);
    
    // Meta theme-color dinámico
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newActualTheme === 'dark' ? '#1f2937' : '#2563eb');
    }
  }, [theme]);

  // Escuchar cambios en preferencias del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'auto') {
        const newActualTheme = determineActualTheme(theme);
        setActualTheme(newActualTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Actualizar tema automático cada hora
  useEffect(() => {
    if (theme === 'auto') {
      const interval = setInterval(() => {
        const newActualTheme = getTimeBasedTheme();
        if (newActualTheme !== actualTheme) {
          setActualTheme(newActualTheme);
        }
      }, 60000 * 60); // Cada hora

      return () => clearInterval(interval);
    }
  }, [theme, actualTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme(prev => {
      switch (prev) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'auto';
        case 'auto':
          return 'light';
        default:
          return 'light';
      }
    });
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      actualTheme,
      setTheme: handleSetTheme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
