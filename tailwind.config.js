/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 季節ごとのテーマカラー
        spring: {
          light: '#f9e7f5',
          DEFAULT: '#f8bbd0',
          dark: '#ec407a',
        },
        summer: {
          light: '#e3f2fd',
          DEFAULT: '#90caf9',
          dark: '#1976d2',
        },
        autumn: {
          light: '#fff3e0',
          DEFAULT: '#ffe0b2',
          dark: '#ff9800',
        },
        winter: {
          light: '#e8f5e9',
          DEFAULT: '#c8e6c9',
          dark: '#43a047',
        },
        // 基本的なUIカラー
        primary: {
          DEFAULT: '#FF9045',
          foreground: '#FFFFFF',
          light: '#FFE0C4',
        },
        accent: {
          DEFAULT: '#f1f5f9',
          foreground: '#1e293b',
        },
        background: {
          DEFAULT: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#64748b',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#0f172a',
        },
        input: {
          DEFAULT: '#e2e8f0',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}
