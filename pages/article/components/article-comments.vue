<!-- 评论组件 -->
<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="comment"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="article.author.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" type="button" v-on:click="setComment">
          Post Comment
        </button>
      </div>
    </form>

    <div v-for="item in comments" :key="item.id" class="card">
      <div class="card-block">
        <p class="card-text">{{ item.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            path: `/profile/${item.author.username}`,
          }"
          class="comment-author"
        >
          <img :src="item.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <a href="" class="comment-author">{{ item.author.username }}</a>
        <span class="date-posted">{{ item.createdAt | date("MMM DD, YYYY") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, setComments } from "@/pages/api/article.js";

export default {
  name: "ArticleComments",
  components: {},
  props: {
    article: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      comment: "",
      comments: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    async setComment() {
      let res = await setComments(this.article.slug, { comment: { body: this.comment } });
      this.comment = "";
      this.comments.unshift(res.data.comment);
    },
  },
  created() {},
  async mounted() {
    const { data } = await getComments(this.article.slug);
    this.comments = data.comments;
  },
};
</script>
<style scoped></style>
