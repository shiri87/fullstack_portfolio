// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/lib/util/colors'
// import light from './theme'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
// export default new Vuetify(opts,{
//     theme: {
//       themes: { light },
//     },
//   })