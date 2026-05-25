'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useSyncExternalStore } from 'react';
import { colorThemes, designThemes, ColorTheme, DesignTheme } from '@/lib/themes';

interface ThemeContextType {
  colorTheme: ColorTheme;
  designTheme: DesignTheme;
  setColorTheme: (id: string) => void;
  setDesignTheme: (id: string) => void;
  colorThemes: ColorTheme[];
  designThemes: DesignTheme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getColorThemeFromStorage(): string {
  return localStorage.getItem('tostem-color-theme') || '';
}

function getDesignThemeFromStorage(): string {
  return localStorage.getItem('tostem-design-theme') || '';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use useSyncExternalStore to subscribe to localStorage changes
  const savedColorId = useSyncExternalStore(subscribeToStorage, getColorThemeFromStorage, () => '');
  const savedDesignId = useSyncExternalStore(subscribeToStorage, getDesignThemeFromStorage, () => '');

  // Derive theme from saved IDs
  const colorTheme = colorThemes.find(t => t.id === savedColorId) || colorThemes[0];
  const designTheme = designThemes.find(t => t.id === savedDesignId) || designThemes[0];

  const setColorTheme = useCallback((id: string) => {
    localStorage.setItem('tostem-color-theme', id);
    // Trigger storage event for same-tab update
    window.dispatchEvent(new StorageEvent('storage', { key: 'tostem-color-theme' }));
  }, []);

  const setDesignTheme = useCallback((id: string) => {
    localStorage.setItem('tostem-design-theme', id);
    window.dispatchEvent(new StorageEvent('storage', { key: 'tostem-design-theme' }));
  }, []);

  // Update CSS variables when themes change
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', colorTheme.primary);
    root.style.setProperty('--theme-accent', colorTheme.accent);
    root.style.setProperty('--theme-primary-light', colorTheme.primaryLight);
    root.style.setProperty('--theme-accent-light', colorTheme.accentLight);
    root.style.setProperty('--theme-primary-dark', colorTheme.primaryDark);
    root.style.setProperty('--theme-gradient', colorTheme.gradient);
    root.style.setProperty('--theme-gradient-dark', colorTheme.gradientDark);

    root.style.setProperty('--design-card-radius', designTheme.cardRadius);
    root.style.setProperty('--design-card-shadow', designTheme.cardShadow);
    root.style.setProperty('--design-card-border', designTheme.cardBorder);
    root.style.setProperty('--design-card-bg', designTheme.cardBg);
    root.style.setProperty('--design-section-spacing', designTheme.sectionSpacing);
    root.style.setProperty('--design-heading-weight', designTheme.headingWeight);
    root.style.setProperty('--design-button-radius', designTheme.buttonRadius);
    root.style.setProperty('--design-card-hover-shadow', designTheme.cardHoverShadow);
  }, [colorTheme, designTheme]);

  return (
    <ThemeContext.Provider value={{ colorTheme, designTheme, setColorTheme, setDesignTheme, colorThemes, designThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
