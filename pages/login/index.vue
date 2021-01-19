<!-- 登录注册页 -->
<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign In" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <!-- 登录页 -->
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <!-- 注册页 -->
            <nuxt-link v-if="!isLogin" to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">{{ field }} {{ message }}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input class="form-control form-control-lg" v-model="user.username" type="text" required placeholder="Your Name" />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" v-model="user.email" type="email" required placeholder="Email" />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" v-model="user.password" minlength="8" type="password" required placeholder="Password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign In" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/pages/api/user.js";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  name: "LoginIndex",
  middleware: "notAuthenticated",
  components: {},
  props: {},
  data() {
    return {
      errors: {},
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    isLogin() {
      return this.$route.path == "/login";
    },
  },
  watch: {},
  methods: {
    async onSubmit() {
      try {
        const { data } = this.isLogin
          ? await login({
              user: this.user,
            })
          : await register({
              user: this.user,
            });

        // 存储客户端状态
        this.$store.commit("setUser", data.user);
        // 存储服务端状态
        Cookie.set("user", data.user);

        this.$router.push("/");
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
