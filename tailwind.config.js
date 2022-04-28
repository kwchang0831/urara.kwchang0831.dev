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
      {
        // Nord Remix Light
        light: {
          primary: '#88C0D0', // nord8
          'primary-content': '#ECEFF4', // nord6
          secondary: '#5E81AC', // nord10
          'secondary-content': '#ECEFF4', // nord6
          accent: '#81A1C1', // nord9
          'accent-content': '#ECEFF4', // nord6
          neutral: '#D8DEE9', // nord1
          'neutral-content': '#3B4252', // nord4
          'base-100': '#FFFFFF', // white
          'base-200': '#ECEFF4', // nord6
          'base-300': '#E5E9F0', // nord5
          'base-content': '#2E3440', // nord0
          info: '#B48EAD', // nord15
          success: '#A3BE8C', // nord14
          warning: '#EBCB8B', // nord13
          error: '#BF616A' // nord11
        }
      },
      {
        // Nord Remix Dark
        dark: {
          primary: '#88C0D0', // nord8
          'primary-content': '#ECEFF4', // nord6
          secondary: '#5E81AC', // nord10
          'secondary-content': '#ECEFF4', // nord6
          accent: '#81A1C1', // nord9
          'accent-content': '#ECEFF4', // nord6
          neutral: '#3B4252', // nord1
          'neutral-content': '#D8DEE9', // nord4
          'base-100': '#2E3440', // nord0
          'base-200': '#292E39', // nordtheme.com
          'base-300': '#242933', // nordtheme.com
          'base-content': '#D8DEE9', // nord4
          info: '#B48EAD', // nord15
          success: '#A3BE8C', // nord14
          warning: '#EBCB8B', // nord13
          error: '#BF616A' // nord11
        }
      },
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
      'business',
      'night',
      'coffee'
    ]
  }
}
