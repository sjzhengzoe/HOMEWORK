<!-- 设置页 -->
<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">{{ field }} {{ message }}</li>
            </template>
          </ul>

          <form v-on:submit.prevent="submit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="userinfo.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="userinfo.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="userinfo.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="userinfo.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="userinfo.password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" v-on:click="exit">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { update } from "@/pages/api/user.js";
const Cookie = process.client ? require("js-cookie") : undefined;
import { mapMutations } from "vuex";
export default {
  name: "SettingsIndex",
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  components: {},
  props: {},
  data() {
    const { email = "", bio = "", image = "", username = "" } = this.$store.state.user;
    return {
      userinfo: {
        email,
        bio,
        image,
        password: "",
        username,
      },
      errors: {},
    };
  },
  computed: {},
  watch: {},
  methods: {
    ...mapMutations(["setUser"]),
    exit() {
      this.setUser(null);
      Cookie.remove("user");
      this.$router.push("/");
    },
    async submit() {
      let { email, bio, image, password, username } = this.userinfo;
      let params = { email, bio, image, password, username };
      if (!params.password) {
        delete params.password;
      }
      try {
        const res = await update({ user: params });
        const { user } = res.data;
        // 更新store
        this.setUser(user);
        // 更新服务器
        Cookie.set("user", user);
        this.$router.push({ path: `/profile/${user.username}` });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
