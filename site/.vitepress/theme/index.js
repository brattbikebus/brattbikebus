import DefaultTheme from 'vitepress/theme'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Import your custom components
import Calendar from './components/Calendar.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Create Vuetify instance
    const vuetify = createVuetify({
      components,
      directives,
      theme: {
        defaultTheme: 'light'
      }
    })
    
    // Use Vuetify
    app.use(vuetify)
    
    // Register custom components
    app.component('Calendar', Calendar)
  }
}