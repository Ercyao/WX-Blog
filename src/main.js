import Vue from 'vue'
import App from './App'
import '../static/iconfont/iconfont.css'

import './components/index.js' // 一劳永逸的组件注册

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
