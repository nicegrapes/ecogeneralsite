import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2075BB',
        secondary: '#e91e63',
        accent: '#673ab7',
        error: '#03a9f4',
        warning: '#f44336',
        info: '#ff9800',
        success: '#9c27b0'
        }
    }
  }
})
