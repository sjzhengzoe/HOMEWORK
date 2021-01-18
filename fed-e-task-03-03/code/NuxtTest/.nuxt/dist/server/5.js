exports.ids = [5];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=7d8023ae&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-7d8023ae>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7d8023ae>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-7d8023ae>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-7d8023ae>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? "Sign In" : "Sign up"))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-7d8023ae>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_vm._e(),_vm._ssrNode(" "),(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")]):_vm._e()],2),_vm._ssrNode(" <ul class=\"error-messages\" data-v-7d8023ae>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-7d8023ae>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form data-v-7d8023ae>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-7d8023ae><input type=\"text\" required=\"required\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-7d8023ae></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-7d8023ae><input type=\"email\" required=\"required\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-7d8023ae></fieldset> <fieldset class=\"form-group\" data-v-7d8023ae><input minlength=\"8\" type=\"password\" required=\"required\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-7d8023ae></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-7d8023ae>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? "Sign In" : "Sign up")+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=7d8023ae&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/api/user.js
 // 登录

const login = data => Object(request["b" /* request */])({
  method: "POST",
  url: "/api/users/login",
  data
}); // 注册

const register = data => Object(request["b" /* request */])({
  method: "POST",
  url: "/api/users",
  data
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "LoginIndex",
  middleware: "notAuthenticated",
  components: {},
  props: {},

  data() {
    return {
      errors: {},
      user: {
        username: "",
        email: "",
        password: ""
      }
    };
  },

  computed: {
    isLogin() {
      return this.$route.path == "/login";
    }

  },
  watch: {},
  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        }); // 存储客户端状态

        this.$store.commit("setUser", data.user); // 存储服务端状态

        Cookie.set("user", data.user);
        this.$router.push("/");
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    }

  },

  created() {},

  mounted() {}

});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d8023ae",
  "34527bb0"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map