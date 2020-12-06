import fs from 'fs'
import glob from 'glob'
import path from 'path'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'
import postcssPresetEnv from 'postcss-preset-env'
import * as SITE_INFO from './assets/content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

export default {
  target: 'static',
  // ? The env Property: https://nuxtjs.org/api/configuration-env/
  env: {
    url: process.env.NODE_ENV === 'production' ? process.env.URL : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'en-US'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&display=swap'
      }
    ]
  },
  generate: {
    routes() {
      return getDynamicPaths('assets/content')
    },
    fallback: true,
    subFolders: false
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f3f5f4' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-tooltip.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit', 'nuxt-purgecss'],
  markdownit: {
    injected: true,
    html: true,
    linkify: true
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-import': postcssImport,
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nesting': postcssNesting,
        'postcss-preset-env': postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false
          }
        })
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Custom additions configuration
   */
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss',
    whitelist: ['dark-mode', 'light-mode', 'btn', 'icon', 'main'],
    whitelistPatterns: [/^article/, /image$/]
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax'
      }
    }
  },
  pwa: {
    icon: {
      source: 'static/icon.png',
      filename: 'icon.png'
    },
    manifest: { name: SITE_INFO.sitename || process.env.npm_package_name || '', lang: process.env.lang },
    meta: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
      ogHost: process.env.URL
      // ogImage: '/ogp.jpg'
    }
  }
}

function getDynamicPaths(cwdPath) {
  console.log('Getting dynamic paths')

  console.log('Getting dynamic paths for "adventures/*.json"')
  const adventuresPaths = glob
    .sync('adventures/*.json', { cwd: cwdPath })
    .map(filepath => `/${path.basename(filepath, '.json')}`)

  console.log('Getting dynamic paths for "journal_entries/*.json"')
  const journalEntriesPaths = glob
    .sync('journal_entries/*.json', { cwd: cwdPath, absolute: true })
    .map(filepath => {
      return {
        slug: path.basename(filepath, '.json'),
        ...JSON.parse(fs.readFileSync(filepath, { encoding: 'utf-8' }))
      }
    })
    .map(journalEntry => {
      return `/${JSON.parse(journalEntry.adventure).slug}/${journalEntry.slug}`
    })

  const routes = [...adventuresPaths, ...journalEntriesPaths]
  console.log('Dynamic routes generated: ', routes)
  return routes
}
