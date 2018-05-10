'use strict'

const { resolve } = require('path')

module.exports = {
  router: {
    base: '/',
    scrollBehaviour: () => ({
      x: 0,
      y: 0
    })
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Adonuxt',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'dns-prefetch',
        href: '//fonts.googleapis.com'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    noscript: [
      {
        innerHtml: `
      <h1>Javascript Disabled</h1>
      <p>It appears that you do not have Javascript enabled. This application relies on Javascript for most of our features.<p>
      <p>Please enable Javascript and <a href=".">reload</a> in order to use this site.</p>
    `
      }
    ]
  },
  /**
   * Plugins definitions
   */
  plugins: ['~/plugins/vuetify.js'],
  /**
   * Global css loader
   */
  css: ['~/assets/style/app.styl'],
  /**
  * Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /**
  * Nuxt Source directory
  */
  srcDir: resolve(__dirname, '..', 'resources'),
  /**
  * Build configuration
  */
  build: {
    extractCSS: true,
    cache: true,
    // parallel: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
