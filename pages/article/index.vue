<!-- 列表页 -->
<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <acticle-meta :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <acticle-meta :article="article" />
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <article-comments :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, getComments } from "@/pages/api/article.js";
import MarkdownIt from "markdown-it";
import ActicleMeta from "./components";
import ArticleComments from "./components/article-comments";

export default {
  name: "ArticleIndex",
  components: {
    ActicleMeta,
    ArticleComments,
  },
  props: {},
  data() {
    return {};
  },
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          // 避免子组件不能正确覆盖父组件
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
  async asyncData({ params, store, router }) {
    const { data } = await getArticle(params.slug);
    const { article } = data;

    if (store.state.user.username === article.author.username) {
      console.log(router);
    } else {
      const md = new MarkdownIt();
      article.body = md.render(article.body);
      return { article };
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
