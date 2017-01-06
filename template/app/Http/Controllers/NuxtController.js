'use strict'

const Env = use('Env')
const Config = use('Config')
const Nuxt = require('nuxt')

class NuxtController {

  constructor () {
    this.nuxt = new Nuxt(Config.get('nuxt'))
    if (Env.get('NODE_ENV') === 'development') {
      this.nuxt.build()
    }
  }

  * render (request, response) {
    this.nuxt.render(request.request, response.response)
  }
}

module.exports = new NuxtController()
