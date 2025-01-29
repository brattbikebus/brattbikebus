import { loadEnv } from 'vitepress'
// load env that are exported in the build process
const env = loadEnv('', process.cwd())

export const APP_BASE = env.VITE_APP_BASE || '/'

let APP_FULL_URL_IN = env.VITE_APP_FULL_URL || 'https://cuahsi-vitepress-example.netlify.app'
export const APP_FULL_URL = APP_FULL_URL_IN.endsWith('/') ? APP_FULL_URL_IN : `${APP_FULL_URL_IN}/`
