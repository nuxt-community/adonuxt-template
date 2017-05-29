'use strict'

const Env = use('Env')
const Config = use('Config')
const Nuxt = require('nuxt')

class NuxtController {

  constructor () {
    let config = Config.get('nuxt')
    config.dev = Env.get('NODE_ENV') === 'development'
    this.nuxt = new Nuxt(config)
      .then((nuxt) => {
        this.nuxt = nuxt
        if (config.dev) {
          this.nuxt.build()
        }
      })
  }

  * render (request, response) {
    this.nuxt.render(request.request, response.response)
  }
}

module.exports = new NuxtController()
