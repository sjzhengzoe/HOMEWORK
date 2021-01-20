<!-- 个人信息页 -->
<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>

            <!-- 跳转到编辑页面 -->
            <nuxt-link
              v-if="username == $store.state.user.username"
              class="btn btn-sm btn-outline-secondary action-btn"
              :to="{ path: '/settings' }"
            >
              <i class="ion-gear-a"></i>
              Edit Profile Settings
            </nuxt-link>

            <!-- 关注 | 取关 -->
            <button
              v-if="username !== $store.state.user.username"
              class="btn btn-sm btn-outline-secondary action-btn"
              v-on:click="followOrDeleteUser"
            >
              <i class="ion-plus-round"></i>
              {{ profile.following ? "Unfollow Eric Simons" : " Follow Eric Simons" }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <!-- 该作者的文章列表 -->
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{ active: tag !== 'favorites' }"
                  :to="{ name: 'profile', params: { username } }"
                  >My Articles</nuxt-link
                >
              </li>

              <!-- 该作者 喜欢的文章列表 -->
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{ active: tag == 'favorites' }"
                  :to="{
                    name: 'profile',
                    path: '/profile',
                    params: {
                      username,
                    },
                    query: { tag: 'favorites' },
                  }"
                  >Favorited Articles</nuxt-link
                >
              </li>
            </ul>
          </div>

          <!-- 文章列表 -->
          <div v-for="(article, index) in articlesData" :key="index" class="article-preview">
            <div class="article-meta">
              <nuxt-link :to="{ name: 'profile', params: { username: article.author.username } }"
                ><img :src="article.author.image"
              /></nuxt-link>
              <div class="info">
                <nuxt-link
                  exact
                  :to="{ name: 'profile', params: { username: article.author.username } }"
                  class="author"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{ article.createdAt | date("MMM DD,YYYY") }}</span>
              </div>
              <button
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              exact
              :to="{ name: 'article', params: { slug: article.slug } }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.body }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfiles, followUser, deleteFollowUser } from "@/pages/api/profile.js";
import {
  getArticles,
  getYourFeedArticles,
  addFavorite,
  deleteFavorite,
} from "@/pages/api/article.js";

export default {
  name: "ProfileIndex",
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  components: {},
  props: {},
  watchQuery: ["tag"],
  data() {
    return {
      profile: {},
      username: "",
      tag: "",
      articlesData: [],
    };
  },
  async asyncData({ query, params }) {
    let res = await getProfiles(params.username);
    let article = await getArticles({ author: params.username });
    let feedArticle = await getArticles({ favorited: params.username });
    let articlesData = query.tag == "favorites" ? feedArticle.data.articles : article.data.articles;

    articlesData.forEach((article) => {
      article.favoriteDisabled = false;
    });

    return {
      profile: res.data.profile,
      username: params.username,
      tag: query.tag || "",
      articlesData,
    };
  },
  computed: {},
  methods: {
    async followOrDeleteUser() {
      let fn = this.profile.following ? deleteFollowUser : followUser;
      let res = await fn(this.username);
      console.dir(res.data.profile);
      this.profile = res.data.profile;
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
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
