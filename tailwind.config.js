/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem'
      },
      height: {
        '72': '17rem'
      },
      fontFamily: {
        sans: ['Hind Siliguri', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: {
          100: '#97A8ED',
          200: '#869AEA',
          300: '#748BE7',
          400: '#637DE3',
          500: '#526EE0',
          default: '#3455DB',
          600: '#2F51DA',
          700: '#2547D0',
          800: '#2241BF',
          900: '#1F3BAD'
        },
        accent: {
          100: '#00F500',
          200: '#00E000',
          300: '#00CC00',
          400: '#00B800',
          500: '#00A300',
          default: '#00800',
          600: '#007A00',
          700: '#006600',
          800: '#005200',
          900: '#003D00'
        }
      },
      opacity: {
        '10': '0.1',
        '20': '0.2'
      }
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      outline: '0 0 0 3px rgba(0, 86, 87,0.5)'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      secondary: 'var(--bg-secondary)'
    })
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
    boxShadow: ['focus-within', 'hover']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}
