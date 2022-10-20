import Vue from 'vue'
import App from './app.vue'

function isUrl (url) {
  return /^https?:\/\/.*ketangpai.com\/#\/homework.*/.test(url)
}
if (isUrl(window.location.href)) {
  console.log('插件已启动')
  const wokooApp = document.createElement('div')
  wokooApp.id = 'wokooApp-tm-plugin-72370'
  document.body.appendChild(wokooApp)
  const vm = new Vue({
    el: wokooApp,
    render: (h) => h(App),
  })
} else {
  console.error('此插件不适用本页面！')
}
