<!-- layout 组件 -->
<template>
  <div>
    <!-- 头部 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="editor"> <i class="ion-compose"></i>&nbsp;New Post </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/settings"> <i class="ion-gear-a"></i>&nbsp;Settings </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile"><img src="" alt="" />zhengsujie</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- 子组件的内容 -->
    <nuxt-child />
    <!-- 尾部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution"> An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT. </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
  components: {},
  props: {},
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
