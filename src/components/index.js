import Vue from 'vue'

/** ***     自动注册组件 不需要再important     *** **/
// function capitalizeFirstLetter (string) {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }
const requireComponent = require.context(
  '.', true, /\.vue$/
  // 找到components文件夹下以.vue命名的文件
)
requireComponent.keys().forEach(fileName => {
  const componetConfig = requireComponent(fileName)
  let a = fileName.lastIndexOf('/')
  fileName = '.' + fileName.slice(a)

  const componetName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')

  console.log('自动注册组件', componetName)
  Vue.component(componetName, componetConfig.default || componetConfig)
})
