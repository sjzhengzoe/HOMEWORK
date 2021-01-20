import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3449c5f2 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _d0385cb2 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _64ceaba1 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _44f917e1 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _292c162a = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _287aec35 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _2bc35b2e = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _3449c5f2,
    children: [{
      path: "",
      component: _d0385cb2
    }, {
      path: "/login",
      component: _64ceaba1
    }, {
      path: "/register",
      component: _64ceaba1
    }, {
      path: "/profile/:username",
      component: _44f917e1,
      name: "profile"
    }, {
      path: "/settings",
      component: _292c162a
    }, {
      path: "/editor",
      component: _287aec35
    }, {
      path: "/article/:slug",
      component: _2bc35b2e,
      name: "article"
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
