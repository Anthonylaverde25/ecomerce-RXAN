"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to avoid hydration mismatch
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-light dark:bg-content-dark border border-border-light dark:border-border-dark">
        <div className="w-12 h-6" />
      </div>
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-light dark:bg-content-dark border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      title={`Cambiar a modo ${currentTheme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      {/* Sun Icon (visible in dark mode) */}
      <span className={`material-symbols-outlined text-xl transition-all ${
        currentTheme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0'
      }`}>
        light_mode
      </span>
      
      {/* Moon Icon (visible in light mode) */}
      <span className={`material-symbols-outlined text-xl transition-all ${
        currentTheme === 'light' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0'
      }`}>
        dark_mode
      </span>
    </button>
  );
}
