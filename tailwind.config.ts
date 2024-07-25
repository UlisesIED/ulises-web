import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'phone': { 'max': '380px' },
      'tablet': { 'max': '680px', },
      'pcView': { 'min': '551px' },
      'movilView': { 'max': '550px' },
      'pcXs': { 'max': '780px', },
      'pc': { 'min': '781px', },
      'screen500': { 'min': '500px' },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        bounce: 'bounce 1.3s ease-in-out 0s 2 both',
        'move-x': 'moveX 4s linear 6s infinite',
        'fade-in-2': 'fadeIn 2s ease-out 2s forwards',
        'fade-in-2.2': 'fadeIn 2s ease-out 2.2s forwards',
        'fade-in-2.4': 'fadeIn 2s ease-out 2.4s forwards',
        'fade-in-2.6': 'fadeIn 2s ease-out 2.6s forwards',
        'fade-in-2.8': 'fadeIn 2s ease-out 2.8s forwards',
        'fade-in-3': 'fadeIn 2s ease-out 3s forwards',
        'fade-in-3.2': 'fadeIn 2s ease-out 3.2s forwards',
        'fade-in-3.4': 'fadeIn 2s ease-out 3.4s forwards',
        'fade-in-3.6': 'fadeIn 2s ease-out 3.6s forwards',
        'fade-in-3.8': 'fadeIn 2s ease-out 3.8s forwards',
        'fade-in-4': 'fadeIn 2s ease-out 4s forwards',
        'fade-in-4.2': 'fadeIn 2s ease-out 4.2s forwards',
        'fade-in-4.4': 'fadeIn 2s ease-out 4.4s forwards',
        'fade-in-4.6': 'fadeIn 2s ease-out 4.6s forwards',
        'fade-in-4.8': 'fadeIn 2s ease-out 4.8s forwards',
        'fade-in-5': 'fadeIn 2s ease-out 5s forwards',
        'fade-in-5.2': 'fadeIn 2s ease-out 5.2s forwards',
        'fade-in-5.4': 'fadeIn 2s ease-out 5.4s forwards',
        'fade-in-5.6': 'fadeIn 2s ease-out 5.6s forwards',
        'fade-in-5.8': 'fadeIn 2s ease-out 5.8s forwards',
        'fade-in-6': 'fadeIn 2s ease-out 6s forwards',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        moveX: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(50px)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        'KarmaSuture': ['KarmaSuture', 'Georgia'],
      },
      colors: {
        'text-normal': '#8d9cb1',
      },
    },
  },
  plugins: [

  ],


};
export default config;
