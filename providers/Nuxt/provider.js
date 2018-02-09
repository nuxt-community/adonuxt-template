'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class NuxtProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonuxt/Nuxt', () => {
      const Config = this.app.use('Adonis/Src/Config')
      const Env = this.app.use('Adonis/Src/Env')
      const dev = Env.get('NODE_ENV') === 'development'
      const instance = new (require('.'))(Config, Env)
      if (!dev) {
        return instance
      }
      return instance.build()
    })
  }

  boot () {
    const Env = this.app.use('Adonis/Src/Env')
    const dev = Env.get('NODE_ENV') === 'development'
    if (!dev) {
      const instance = this.app.use('Adonuxt/Nuxt')
      instance.build()
    }
  }
}

module.exports = NuxtProvider
