let _Vue = null
export default class VueRouter {
  static install (Vue) {
    // 1、判断当前插件是否已经被安装
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true
    // 2、把Vue构造函数记录到全局变量
    _Vue = Vue
    // 3、把创建 Vue 实例时候传入的 router 对象注入到 Vue 实例上
    // 混入 可以在 Vue 实例中混入一个选项
    _Vue.mixin({
      beforeCreate () {
        // 过滤组件的 router
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
        }
      }
    })
  }
}
