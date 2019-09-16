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
  css: ['ant-design-vue/dist/antd.less', './static/css/reset.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/index',
    { src: '~/plugins/localStorage', ssr: false } // ssr=false才能持久化
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
    // extractCSS: { allChunks: true },
    splitChunks: {
      chunks: 'async',
      minSize: 30000, // 模块的最小体积
      minChunks: 1, // 模块的最小被引用次数
      maxAsyncRequests: 5, // 按需加载的最大并行请求数
      maxInitialRequests: 3, // 一个入口最大并行请求数
      automaticNameDelimiter: '~', // 文件名的连接符
      name: true,
      cacheGroups: { // 缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
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
