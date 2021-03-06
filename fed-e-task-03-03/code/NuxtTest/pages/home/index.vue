<!-- 首页 -->
<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab == 'your_feed' }"
                  exact
                  :to="{
                    path: '/',
                    query: { tag, tab: 'your_feed' },
                  }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :to="{ path: '/', query: { tab: 'global_feed' } }" :class="{ active: tab == 'global_feed' }" exact>Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link class="nav-link" :to="{ path: '/', query: { tag, tab: 'tag' } }" :class="{ active: tab == 'tag' }" exact>#{{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <div v-for="article in articles" :key="article.slug" class="article-preview">
            <div class="article-meta">
              <nuxt-link :to="'profile/' + article.author.username">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link :to="'profile/' + article.author.username" class="author">{{ article.author.username }}</nuxt-link>
                <span class="date">{{ article.createdAt | date("MMM DD,YYYY") }}</span>
              </div>
              <button @click="onFavorite(article)" :disabled="article.favoriteDisabled" class="btn btn-outline-primary btn-sm pull-xs-right" :class="{ active: article.favorited }">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link :to="'article/' + article.slug" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- 页码 -->
          <nav>
            <ul class="pagination">
              <li class="page-item" v-for="item in totalPage" :key="item" :class="{ active: item == page }">
                <nuxt-link
                  class="page-link"
                  :to="{
                    path: '/',
                    query: {
                      page: item,
                      tag: $route.query.tag,
                      tab,
                    },
                  }"
                  >{{ item }}</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <!-- 标签 -->
            <div class="tag-list">
              <nuxt-link
                :to="{
                  path: '/',
                  query: {
                    tab: 'tag',
                    page: $route.query.page,
                    tag,
                  },
                }"
                v-for="tag in tags"
                :key="tag"
                class="tag-pill tag-default"
                >{{ tag }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles, getYourFeedArticles, addFavorite, deleteFavorite } from "@/pages/api/article.js";
import { getTags } from "@/pages/api/tag.js";
import { mapState } from "vuex";
export default {
  name: "HomeIndex",
  components: {},
  props: {},
  async asyncData({ query, store }) {
    let limit = 2;
    let { tag, page = 1, tab = "global_feed" } = query;
    let getDataFun = store.state.user && tab == "your_feed" ? getYourFeedArticles : getArticles;

    const [articlesData, tagData] = await Promise.all([
      // 获取页面列表数据
      getDataFun({
        limit,
        offset: (page - 1) * limit,
        tag,
      }),
      // 获取标签数据
      getTags(),
    ]);
    const { tags } = tagData.data;
    const { articles } = articlesData.data;
    articles.forEach((article) => {
      article.favoriteDisabled = false;
    });

    return { ...articlesData.data, limit, tags, tag, page, tab };
  },
  watchQuery: ["page", "tag", "tab"],
  data() {
    return {
      articles: [],
      articlesCount: [],
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
    ...mapState(["user"]),
  },
  watch: {},
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 点赞
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      article.favoriteDisabled = false;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
