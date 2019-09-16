const env = require('./env.config') // 全局环境接口配置
const { THEME } = require('./plugins/antd-theme') // 自定义主题

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios',
    { src: '~/plugins/localStorage', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],
  /*
   ** axios modules
   ** https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true, // Can be also an object with default options
    prefix: '/api',
    credentials: true
  },
  /*
   ** proxy modules
   */
  proxy: {
    '/api': {
      target: env[process.env.mode].BASE_URL,
      pathRewrite: {
        '^/api': '/',
        changeOrigin: true
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: { allChunks: true },
    extend (config, ctx) {},
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: THEME
      }
    }
  },
  server: {
    port: 8888, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  env: {
    // 配置接口请求域名
    baseUrl: env[process.env.mode].BASE_URL
  }
}
