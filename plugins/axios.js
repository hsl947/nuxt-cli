import { vue } from './antd-ui'

export default function({ $axios, redirect }) {
  const token = `asdfghjkl11111111111111111111111111111111`
  $axios.setHeader('x-Token', token)
  $axios.setToken(token)

  // 添加请求拦截器
  $axios.onRequest((config) => {
    console.log(`req---`, config)
    config.timeout = 10000
  })

  // 添加响应拦截器
  $axios.onResponse((config) => {
    console.log(`res---`, config)
    if (process.client) {
      vue.$message.info('This is a normal message')
    }
  })

  // 添加请求错误拦截器
  $axios.onRequestError((error) => {
    console.log(`reqError---`, error)
  })

  // 添加响应错误拦截器
  $axios.onResponseError((error) => {
    console.log(`resError---`, error)
  })

  // 添加统一错误拦截器，包括请求和响应
  $axios.onError((error) => {
    console.log(`onError---`, error)
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect(`/login`)
    }
    if (code === 404) {
      redirect('/404')
    }
  })
}
