import { defineConfig, loadEnv } from 'vitepress'

const env = loadEnv('', process.cwd())
const APP_BASE = env.VITE_APP_BASE || '/'
let APP_FULL_URL_IN = env.VITE_APP_FULL_URL || 'https://cuahsi-vitepress-example.netlify.app'
const APP_FULL_URL = APP_FULL_URL_IN.endsWith('/') ? APP_FULL_URL_IN : `${APP_FULL_URL_IN}/`

// https://vitepress.dev/reference/site-config
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    title: "CZ Net Data Best Practices",
    description: "CZ Net Data Best Practices",
    // https://vitepress.dev/guide/deploy#setting-a-public-base-path
    // set the base to /docs/ for GitHub Pages
    base: APP_BASE,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: 'index.md' },
        { text: 'Contribute', link: 'contribute.md' },
        { text: 'Data Publication Guidance', link: 'data_publication_guidance.md' },
        { text: 'Best Practices', 
          items: [ 
            { text: 'Sharing Geospatial Data', link: 'geospatial_data.md' },
            { text: 'Sharing Multiple Data Types Together', link: 'multiple_data_types.md' },
            { text: 'Sharing Samples and Sample Metadata', link: 'registering_samples.md' },
            { text: 'Sharing Laboratory Analytical Data', link: 'sample_data.md' },
            { text: 'Sharing Environmental Time Series Data', link: 'time_series_data.md' },

        ] },
        { text: 'Vitepress Examples', 
          items: [ 
            { text: 'Embedded Vue', link: 'examples/vitepress/vue.md' },
            { text: 'Vitepress API', link: 'examples/vitepress/api-examples.md' },
            { text: 'Markdown Examples', link: 'examples/vitepress/markdown-examples.md' },
        ] },
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/CUAHSI/vitepress-example' }
      ],

      // https://vitepress.dev/reference/default-theme-search#local-search
      search: {
        provider: 'local'
      },
      // https://vitepress.dev/reference/default-theme-edit-link#site-level-config
      editLink: {
        pattern: ({ filePath }) => {
          // trim the .md suffix
          const path = filePath.replace(/\.md$/, '')
          return `${APP_FULL_URL}/admin/#/edit/doc/${path}`
        }
      }
    },
    ignoreDeadLinks: true,
  }
})
