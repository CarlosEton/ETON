import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局配置
import './assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'
import http from '../src/api/config'
import './mock'
// 第三方库
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  let token = store.state.user.token
  console.log(token)
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  create() {
    store.commit('addRoutes', router)
  }
}).$mount('#app')
