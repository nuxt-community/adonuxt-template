'use strict'

const { Nuxt, Builder } = require('nuxt')
const Logger = use('Logger')

class NuxtService {
  constructor (Config, Env) {
    this.Config = Config
    this.Env = Env
    this.nuxt = null
  }

  /**
   * Starts the build process
   *
   * @method boot
   *
   * @return {Promise}
   */
  build (dev = this.Env.get('NODE_ENV') === 'development') {
    const config = this.Config.merge('nuxt', { dev })
    return new Promise(async (resolve, reject) => {
      this.nuxt = await new Nuxt(config)
      if (dev) {
        await new Builder(this.nuxt).build()
      }
      Logger.info('Nuxt is ready to handle requests')
      resolve(this)
    })
  }

  /**
   * Handles the HTTP request by making the appropriate
   * response, based upon the URL.
   *
   * @method render
   *
   * @param  {Object} req
   * @param  {Object} res
   *
   * @return {Promise}
   */
  render (req, res) {
    return new Promise((resolve, reject) => {
      this.nuxt.render(req, res, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  }
}
module.exports = NuxtService
