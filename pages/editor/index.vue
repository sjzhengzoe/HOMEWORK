<!-- 编辑页 -->
<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">{{ field }} {{ message }}</li>
            </template>
          </ul>
          <form v-on:submit.prevent="">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="nowTag"
                  @keydown.enter="addTag"
                />
                <div class="tag-list">
                  <span class="tag-default tag-pill" v-for="tag in article.tagList" :key="tag">
                    <i class="ion-close-round" v-on:click="deleTage(tag)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                v-on:click="addArticleAction"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addArticle, getArticle, updateArticle } from "@/pages/api/article.js";

export default {
  name: "EditorIndex",
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  components: {},
  props: {},
  data() {
    return {
      errors: {},
      nowTag: "",
      article: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
    };
  },

  computed: {},
  watch: {},
  methods: {
    deleTage(tag) {
      let taglist = this.article.tagList;
      let newdata = taglist.filter((item) => item != tag);
      this.article.tagList = newdata;
    },
    addTag() {
      this.article.tagList.push(this.nowTag);
      this.nowTag = "";
    },
    async addArticleAction() {
      try {
        let res;
        if (this.$route.params.slug) {
          res = await updateArticle({ article: this.article });
        } else {
          res = await addArticle({ article: this.article });
        }

        this.$router.push({ name: "article", params: { slug: res.data.article.slug } });
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    },
  },
  created() {},
  async mounted() {
    if (this.$route.params.slug) {
      const res = await getArticle(this.$route.params.slug);
      const article = res.data.article;
      this.article.title = article.title || "";
      this.article.description = article.description || "";
      this.article.body = article.body || "";
      this.article.tagList = article.tagList || [];
    }
  },
};
</script>
<style scoped></style>
