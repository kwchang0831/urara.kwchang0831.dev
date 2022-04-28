import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default /** @type {import('tailwindcss/tailwind-config').TailwindConfig} */ {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        default: {
          primary: '#1C4E80',
          'primary-content': '#ECEFF4',
          secondary: '#7C909A',
          'secondary-content': '#ECEFF4',
          accent: '#EA6947',
          'accent-content': '#ECEFF4',
          neutral: '#3B4252',
          'neutral-content': '#D8DEE9',
          'base-100': '#212121',
          'base-200': '#1c1c1c',
          'base-300': '#1a1a1a',
          'base-content': '#e7edef',
          info: '#0091D5',
          success: '#6BB187',
          warning: '#DBAE59',
          error: '#AC3E31'
        }
      },
      'business',
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'synthwave',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'pastel',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'night',
      'coffee'
    ]
  }
}
