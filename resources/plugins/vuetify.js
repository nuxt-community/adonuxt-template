import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import LRU from 'lru-cache'

Vue.use(Vuetify, {
  theme: {
    primary: '#121212',
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.darken2,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  options: {
    themeCache: LRU({
      max: 10,
      maxAge: 1000 * 60 * 60
    }),
    minifyTheme: function (val) {
      return val.replace(/[\s|\r\n|\r|\n]/g, '')
    }
  }
})
