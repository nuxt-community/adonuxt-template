'use strict'

class NuxtController {
  async render ({ request, response, session }) {
    const NuxtService = await use('Nuxt')

    /**
     * Do not end the response when this method has been executed.
     * Nuxt will write the response in background and will close
     * the response when required.
     *
     * @type {Boolean}
     */
    response.implicitEnd = false

    /**
     * Since response is now handled by Nuxt, we should commit any session
     * values. This will make sure features like CSRF protection works as
     * expected.
     */
    await session.commit()

    /**
     * Finally handover request to nuxt
     */
    await NuxtService.render(request.request, response.response)
  }
}

module.exports = NuxtController
