import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CZ Net Data Best Practices",
  description: "CZ Net Data Best Practices",
  // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  // set the base to /docs/ for GitHub Pages
  // base: '/docs/',
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
      { text: 'Hello', link: 'hello.md' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/devincowan/docs' }
    ],

    // https://vitepress.dev/reference/default-theme-search#local-search
    search: {
      provider: 'local'
    },
  },
  ignoreDeadLinks: true,
})
