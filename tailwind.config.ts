import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './emails/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontSize: {
        '5xl': '2.60rem'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-pp-editorial)', 'PP Editorial New', 'serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        'pp-editorial': ['var(--font-pp-editorial)', 'PP Editorial New', 'serif'],
        montiac: ['var(--font-montiac)', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        gray: colors.neutral,
        darkGray: '#252525',
        hotPink: '#FF1966',
        dark: '#111111',
        light: '#FAFAFA',
        violetDark: '#4c2889',
        brown: '#252525',
        green: '#34504e',
        natural: '#EAE9E0',
        orange_custom: '#df441b',
        yellow_custom: '#edf671',

        pill_red: '#CE502D',
        pill_purple: '#E8C0C9',
        pill_blue: '#3335E9',
        pill_yellow: '#EFF87D',
        pill_green: '#5E3E39',
        pill_black: '#545454',
        pill_brand: '#34504e',

        topic_red: '#DF431C',
        topic_purple: '#3235F3',
        topic_pink: '#F0BEC9',
        topic_yellow: '#ECf867',
        topic_brown: '#653B37',
        topic_gray: '#545454',
        topic_blue: '#166ee1',
        topic_green: '#9ae095',
        topic_lightblue: '#d1e2ff',
        topic_lightgreen: '#3e703e',

        topic_contrast: {
          red: '#FFFFFF',
          purple: '#FFFFFF',
          pink: '#333333',
          yellow: '#1A1A80',
          brown: '#FFFFFF',
          gray: '#FFFFFF',
          blue: '#FFFFFF',
          green: '#333333',
          lightblue: '#333333',
          lightgreen: '#FFFFFF'
        },

        brand_bg: '#F0F0EA',
        brand_text: '#34504E',
        brand_text_light: 'rgba(52, 80, 78, 0.50)',
        brand_danger: 'DF441B',
        band_chip_bg: '#E5E5DA',
        brand_bg2: '#E7E6DC',
        brand_border: 'rgba(52, 80, 78, 0.20)',

        dark_green: '#3c5654',
        gray_subtitle: '#3e404c',

        purple_bg: '#f3f3fc',
        purple_border: 'rgba(211,210,244,.8)',
        purple_text: '#443fde',

        yellow_bg: '#edf671',
        yellow_border: '#edf671',
        yellow_text: '#edf671',

        orange_bg: '#fef7f1',
        orange_border: 'rgba(252,229,212,.8)',
        orange_text: '#c98b40',

        filter_text: '#030407',
        // filter_bg: '#f9f9fb',
        filter_borders: '#e9ecf0',

        header_link: '#3a504e',

        status_green: '#3DB9B0',
        status_red: '#FF5C31',
        status_gray: '#738583',
        status_blue: '#8486F8',
        status_yellow: '#EAB308',

        tierra: '#643C37',
        'tierra-orange': '#DF441B'
      },
      backgroundImage: {
        'dotted-border':
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='2'%3e%3cline x1='0' y1='0' x2='100%25' y2='0' stroke='white' stroke-width='3' stroke-dasharray='2%2c5' stroke-linecap='butt'/%3e%3c/svg%3e\")"
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100% ': { opacity: '0.2' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      },
      animationDelay: {
        3000: '3000ms',
        3500: '3500ms',
        4000: '4000ms'
      },
      animationDuration: {
        2000: '2000ms',
        3000: '3000ms'
      }
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2048px'
      // => @media (min-width: 2048px) { ... }
    }
  },
  safelist: [
    'bg-topic_red',
    'bg-topic_purple',
    'bg-topic_pink',
    'bg-topic_yellow',
    'bg-topic_brown',
    'bg-topic_gray',
    'bg-topic_blue',
    'bg-topic_green',
    'bg-topic_lightblue',
    'bg-topic_lightgreen',
    'text-topic_contrast-red',
    'text-topic_contrast-purple',
    'text-topic_contrast-pink',
    'text-topic_contrast-yellow',
    'text-topic_contrast-brown',
    'text-topic_contrast-gray',
    'text-topic_contrast-blue',
    'text-topic_contrast-green',
    'text-topic_contrast-lightblue',
    'text-topic_contrast-lightgreen'
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    animate,
    typography,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};

export default config;
