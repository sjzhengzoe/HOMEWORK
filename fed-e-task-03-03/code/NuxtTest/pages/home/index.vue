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
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
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
                <span class="date">{{ article.createdAt }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{ active: article.favorited }"><i class="ion-heart"></i> {{ article.favoritesCount }}</button>
            </div>
            <nuxt-link :to="'profile/' + article.author.username" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- 页码 -->
          <nav>
            <ul class="pagination">
              <li class="page-item" v-for="item in totalPage" :key="item" :class="{ active: item == page }">
                <nuxt-link class="page-link" :to="'/?page=' + item">{{ item }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link to="/" v-for="tag in tags" :key="tag" class="tag-pill tag-default">{{ tag }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from "@/pages/api/article.js";
import { getTags } from "@/pages/api/tag.js";
export default {
  name: "HomeIndex",
  components: {},
  props: {},
  async asyncData({ query }) {
    let limit = 2;
    let page = Number.parseInt(query.page || 1);

    const { data } = await getArticles({
      limit,
      offset: (page - 1) * limit,
    });

    const tagData = await getTags();

    return { ...data, limit, page, tags: tagData.data.tags };
  },
  watchQuery: ["page"],
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
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
