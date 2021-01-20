<!-- 个人信息组件 -->
<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        path: `/profile/${article.author.username}`,
      }"
    >
      <img :src="article.author.image" />
    </nuxt-link>

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

    <nuxt-link
      v-if="isSelf"
      class="btn btn-outline-secondary btn-sm"
      :to="{ name: 'editors', params: { slug: article.slug } }"
    >
      <i class="ion-edit"></i> Edit Article &nbsp;
    </nuxt-link>
    &nbsp;

    <button v-if="isSelf" class="btn btn-outline-danger btn-sm" v-on:click="deleArticleData">
      <i class="ion-trash-a"></i>
      &nbsp; Delete Article
    </button>

    <button
      v-if="!isSelf"
      class="btn btn-sm btn-outline-secondary"
      :class="{ active: article.author.following }"
      v-on:click="followOrDeleteUser"
    >
      <i class="ion-plus-round"></i>
      &nbsp; {{ article.author.following ? "Unfollow" : "Follow" }} {{ article.author.username }}
    </button>
    &nbsp;

    <button
      v-if="!isSelf"
      @click="onFavorite(article)"
      :disabled="article.favoriteDisabled"
      class="btn btn-sm btn-outline-primary"
      :class="{ active: article.favorited }"
    >
      <i class="ion-heart"></i>
      &nbsp; Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
import {
  getArticles,
  getYourFeedArticles,
  addFavorite,
  deleteFavorite,
} from "@/pages/api/article.js";
import { followUser, deleteFollowUser } from "@/pages/api/profile.js";
import { getArticle, deleteArticle } from "@/pages/api/article.js";
export default {
  name: "ActicleMeta",
  components: {},
  props: {
    article: {
      type: Object,
      required: true,
    },
    isSelf: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    async followOrDeleteUser() {
      let fn = this.article.author.following ? deleteFollowUser : followUser;
      let res = await fn(this.article.author.username);
      console.log(this.article.author.following, res.data.profile.following);
      this.article.author.following = res.data.profile.following;
    },
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
    async deleArticleData() {
      await deleteArticle(this.article.slug);
      this.$router.push("/");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
