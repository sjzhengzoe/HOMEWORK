import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e2f5306c = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _43ce097f = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _362b6ec9 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _3231b109 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _b576fe7a = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _fa92e3e6 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _18fbf456 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _e2f5306c,
    children: [{
      path: "",
      component: _43ce097f
    }, {
      path: "/login",
      component: _362b6ec9
    }, {
      path: "/register",
      component: _362b6ec9
    }, {
      path: "/profile/:username",
      component: _3231b109
    }, {
      path: "/settings",
      component: _b576fe7a
    }, {
      path: "/editor",
      component: _fa92e3e6
    }, {
      path: "/article:slug",
      component: _18fbf456
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
