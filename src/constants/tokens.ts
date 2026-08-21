export const COLORS = {
  // Primary accent colors
  CYAN: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#115e59',
  },
  VIOLET: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6d28d9',
    900: '#5b21b6',
    950: '#4c1d95',
  },
  EMERALD: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#14532d',
  },
} as const;

export const GLASS = {
  backdrop: {
    blur: 'backdrop-blur-xl',
    background: 'bg-background/80',
    border: 'border border-white/10',
    shadow: 'shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]',
  },
  subtle: {
    blur: 'backdrop-blur-sm',
    background: 'bg-background/60',
    border: 'border border-white/10',
    shadow: 'shadow-[0_4px_16px_0_rgba(31,38,135,0.2)]',
  },
} as const;

export const ANIMATIONS = {
  subtle: {
    fade: 'transition-all duration-300 ease-in-out',
    scale: 'transition-transform duration-200 ease-in-out hover:scale-105',
    slide: 'transition-all duration-300 ease-out',
  },
  strong: {
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
  },
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;