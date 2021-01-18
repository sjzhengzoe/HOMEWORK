<!-- 个人信息组件 -->
<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        path: `/profile/${article.author.username}`,
      }"
      ><img :src="article.author.image"
    /></nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
          path: `/profile/${article.author.username}`,
        }"
        class="author"
        >{{ article.author.username }}</nuxt-link
      >
      <span class="date">{{ article.createdAt | date("MMM DD,YYYY") }}</span>
    </div>

    <button class="btn btn-sm btn-outline-secondary" :class="{ active: article.author.following }">
      <i class="ion-plus-round"></i>
      &nbsp; Follow Eric Simons <span class="counter">(10)</span>
    </button>
    &nbsp;
    <button class="btn btn-sm btn-outline-primary" :class="{ active: article.author.favorited }">
      <i class="ion-heart"></i>
      &nbsp; Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ActicleMeta",
  components: {},
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
