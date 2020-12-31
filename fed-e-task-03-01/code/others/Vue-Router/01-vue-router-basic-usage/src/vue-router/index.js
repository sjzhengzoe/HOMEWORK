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
        // 过滤组件的 beforeCreate
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      }
    })
  }

  constructor (options) {
    this.options = options
    this.routeMap = {}
    this.data = _Vue.observable({
      current: window.location.pathname
    })
  }

  init () {
    this.createRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }

  createRouteMap () {
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

  initComponents (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render (h) {
        return h(
          'a',
          {
            attrs: {
              href: this.to
            },
            on: {
              click: this.clickHandler
            }
          },
          [this.$slots.default]
        )
      },
      // template: '<a :href="to"><slot></slot></a>'

      methods: {
        clickHandler (e) {
          history.pushState({}, '', this.to)
          this.$router.data.current = this.to
          e.preventDefault()
        }
      }
    })
    Vue.component('router-view', {
      render: h => {
        const component = this.routeMap[this.data.current]
        return h(component)
      }
    })
  }

  initEvent () {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}
