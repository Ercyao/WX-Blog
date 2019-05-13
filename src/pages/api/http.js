import qs from 'qs'

var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()

// fly.config.baseURL='http://xx.xx.xx.xx:xxxx/api/v3/' // 配置请求基地址

// 添加请求拦截器
fly.interceptors.request.use(
  async config => {
    wx.showLoading({
      title: '拼命加载中...'
    })
    // 给所有请求添加自定义header
    config.headers['X-Tag'] = 'flyio'
    return config
  }, error => {
    return Promise.reject(error)
  })

// 添加响应拦截器
fly.interceptors.response.use(
  response => {
    wx.hideLoading()
    return Promise.resolve(response.data)
  },
  error => {
    let errorMsg = '网络不流畅，请稍后再试！'
    // 对响应错误做点什么
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          errorMsg = '请求错误(400)'
          break
        case 401:
          errorMsg = '未授权，请重新登录(401)'
          break
        case 403:
          errorMsg = '拒绝访问(403)'
          break
        case 404:
          errorMsg = '找不到该资源(404)'
          break
        case 500:
          errorMsg = '服务器错误(500)'
          break
      }
    } else {
      errorMsg = error.message
    }

    console.error('请求错误:', error)

    wx.hideLoading()
    wx.showToast({
      title: errorMsg,
      icon: 'none'
    })
    return Promise.reject(errorMsg)
  }
)

export default {
  get: (url, params, config = {}) => {
    return fly.request(url, params, {
      method: 'get',
      headers: config.headers || {}
    }).then(res => {
      return res
    }).catch(err => {
      return err
    })
  },

  post: (url, data, config = {}) => {
    return fly.request(url, qs.stringify(data), {
      method: 'post',
      headers: config.headers || {}
    }).then(res => {
      return res
    }).catch(err => {
      return err
    })
  },

  del: (url, data, config = {}) => {
    return fly.request(url, qs.stringify(data), {
      method: 'delete',
      headers: config.headers || {}
    }).then(res => {
      return res
    }).catch(err => {
      return err
    })
  }
}
