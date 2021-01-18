exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles",
    params
  });
}; // 获取关注的用户的文章

const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles/feed",
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}/comments`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=93180182&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-93180182>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-93180182>","</div>",[_vm._ssrNode("<h1 data-v-93180182>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('acticle-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-93180182>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-93180182><div class=\"col-md-12\" data-v-93180182>"+(_vm._s(_vm.article.body))+"</div></div> <hr data-v-93180182> "),_vm._ssrNode("<div class=\"article-actions\" data-v-93180182>","</div>",[_c('acticle-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-93180182>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-93180182>","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=93180182&scoped=true&

// EXTERNAL MODULE: ./pages/api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/index.vue?vue&type=template&id=73827aa5&scoped=true&
var componentsvue_type_template_id_73827aa5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      path: ("/profile/" + (_vm.article.author.username)),
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-73827aa5>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        path: ("/profile/" + (_vm.article.author.username)),
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-73827aa5>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD,YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.article.author.following }))+" data-v-73827aa5><i class=\"ion-plus-round\" data-v-73827aa5></i>\n      Follow Eric Simons <span class=\"counter\" data-v-73827aa5>(10)</span></button>\n   \n  <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.article.author.favorited }))+" data-v-73827aa5><i class=\"ion-heart\" data-v-73827aa5></i>\n      Favorite Post <span class=\"counter\" data-v-73827aa5>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var componentsvue_type_template_id_73827aa5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/index.vue?vue&type=template&id=73827aa5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var componentsvue_type_script_lang_js_ = ({
  name: "ActicleMeta",
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {};
  },

  computed: {},
  watch: {},
  methods: {},

  created() {},

  mounted() {}

});
// CONCATENATED MODULE: ./pages/article/components/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_componentsvue_type_script_lang_js_ = (componentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_componentsvue_type_script_lang_js_,
  componentsvue_type_template_id_73827aa5_scoped_true_render,
  componentsvue_type_template_id_73827aa5_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "73827aa5",
  "29ae9d3e"
  
)

/* harmony default export */ var components = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=138b332c&scoped=true&
var article_commentsvue_type_template_id_138b332c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\" data-v-138b332c><div class=\"card-block\" data-v-138b332c><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-138b332c></textarea></div> <div class=\"card-footer\" data-v-138b332c><img"+(_vm._ssrAttr("src",_vm.article.author.image))+" class=\"comment-author-img\" data-v-138b332c> <button class=\"btn btn-sm btn-primary\" data-v-138b332c>\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(item){return _vm._ssrNode("<div class=\"card\" data-v-138b332c>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-138b332c><p class=\"card-text\" data-v-138b332c>"+_vm._ssrEscape(_vm._s(item.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-138b332c>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          path: ("/profile/" + (item.author.username)),
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":item.author.image}})]),_vm._ssrNode("\n       \n      <a href class=\"comment-author\" data-v-138b332c>"+_vm._ssrEscape(_vm._s(item.author.username))+"</a> <span class=\"date-posted\" data-v-138b332c>"+_vm._ssrEscape(_vm._s(_vm._f("date")(item.createdAt,"MMM DD, YYYY")))+"</span>")],2)],2)})],2)}
var article_commentsvue_type_template_id_138b332c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=138b332c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
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

/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  components: {},
  props: {
    article: {
      type: Object,
      require: true
    }
  },

  data() {
    return {
      comments: []
    };
  },

  computed: {},
  watch: {},
  methods: {},

  created() {},

  async mounted() {
    const {
      data
    } = await Object(api_article["e" /* getComments */])(this.article.slug);
    console.log("sujie", data);
    this.comments = data.comments;
  }

});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_138b332c_scoped_true_render,
  article_commentsvue_type_template_id_138b332c_scoped_true_staticRenderFns,
  false,
  article_comments_injectStyles,
  "138b332c",
  "474c46af"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleIndex",
  components: {
    ActicleMeta: components,
    ArticleComments: article_comments
  },
  props: {},

  data() {
    return {};
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        // 避免子组件不能正确覆盖父组件
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["c" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  computed: {},
  watch: {},
  methods: {},

  created() {},

  mounted() {}

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "93180182",
  "135821fd"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map