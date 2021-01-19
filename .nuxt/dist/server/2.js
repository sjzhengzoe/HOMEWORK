exports.ids = [2];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=2c43f698&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-2c43f698><div class=\"container\" data-v-2c43f698><h1 class=\"logo-font\" data-v-2c43f698>conduit</h1> <p data-v-2c43f698>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-2c43f698>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-2c43f698>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-2c43f698>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-2c43f698>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-2c43f698>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-2c43f698>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab == 'your_feed' },attrs:{"exact":"","to":{
                  path: '/',
                  query: { tag: _vm.tag, tab: 'your_feed' },
                }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-2c43f698>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab == 'global_feed' },attrs:{"to":{ path: '/', query: { tab: 'global_feed' } },"exact":""}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-2c43f698>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab == 'tag' },attrs:{"to":{ path: '/', query: { tag: _vm.tag, tab: 'tag' } },"exact":""}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-2c43f698>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-2c43f698>","</div>",[_c('nuxt-link',{attrs:{"to":'profile/' + article.author.username}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-2c43f698>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":'profile/' + article.author.username}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-2c43f698>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,"MMM DD,YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+" data-v-2c43f698><i class=\"ion-heart\" data-v-2c43f698></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":'article/' + article.slug}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-2c43f698>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-2c43f698>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: item == _vm.page }))+" data-v-2c43f698>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  path: '/',
                  query: {
                    page: item,
                    tag: _vm.$route.query.tag,
                    tab: _vm.tab,
                  },
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-2c43f698>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-2c43f698>","</div>",[_vm._ssrNode("<p data-v-2c43f698>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-2c43f698>","</div>",_vm._l((_vm.tags),function(tag){return _c('nuxt-link',{key:tag,staticClass:"tag-pill tag-default",attrs:{"to":{
                path: '/',
                query: {
                  tab: 'tag',
                  page: _vm.$route.query.page,
                  tag: tag,
                },
              }}},[_vm._v(_vm._s(tag))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=2c43f698&scoped=true&

// EXTERNAL MODULE: ./pages/api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/api/tag.js
 // 获取文章标签列表

const getTags = () => {
  return Object(request["b" /* request */])({
    method: "GET",
    url: "/api/tags"
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomeIndex",
  components: {},
  props: {},

  async asyncData({
    query,
    store
  }) {
    let limit = 2;
    let {
      tag,
      page = 1,
      tab = "global_feed"
    } = query;
    let getDataFun = store.state.user && tab == "your_feed" ? api_article["f" /* getYourFeedArticles */] : api_article["d" /* getArticles */];
    const [articlesData, tagData] = await Promise.all([// 获取页面列表数据
    getDataFun({
      limit,
      offset: (page - 1) * limit,
      tag
    }), // 获取标签数据
    getTags()]);
    const {
      tags
    } = tagData.data;
    const {
      articles
    } = articlesData.data;
    articles.forEach(article => {
      article.favoriteDisabled = false;
    });
    return { ...articlesData.data,
      limit,
      tags,
      tag,
      page,
      tab
    };
  },

  watchQuery: ["page", "tag", "tab"],

  data() {
    return {
      articles: [],
      articlesCount: []
    };
  },

  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },

    ...Object(external_vuex_["mapState"])(["user"])
  },
  watch: {},
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["b" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 点赞
        await Object(api_article["a" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  },

  created() {},

  mounted() {}

});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2c43f698",
  "74b13f4e"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map