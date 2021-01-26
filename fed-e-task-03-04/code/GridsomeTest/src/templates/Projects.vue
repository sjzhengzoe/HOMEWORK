<template>
  <Layout>
    <div
      data-v-7f3c42a8=""
      class="project"
      v-for="(item, index) in $page.allProjectsData.edges"
      :key="index"
    >
      <div
        data-v-7f3c42a8=""
        class="container"
        v-if="`/src/assets/data${$route.path}` == item.node.path"
      >
        <div data-v-7f3c42a8="" class="project-header">
          <h1 data-v-7f3c42a8="" class="project-title">
            {{ item.node.data.post.title }}
          </h1>
          <div data-v-7f3c42a8="" class="project-info">
            <div data-v-7f3c42a8="" class="categories-container">
              <div data-v-7f3c42a8="" class="categories">
                <span data-v-7f3c42a8="" class="label">Categories</span>
                <span
                  data-v-7f3c42a8=""
                  class="category"
                  v-for="child in item.node.data.post.categories"
                  :key="child + item"
                  >{{ child }}</span
                >
              </div>
            </div>
            <div data-v-7f3c42a8="" class="year-container">
              <span data-v-7f3c42a8="" class="label">Year</span>
              <div data-v-7f3c42a8="">{{ item.node.data.post.date }}</div>
            </div>
          </div>
        </div>
        <div>
          <p v-html="item.node.data.post.content" />
          <img :src="item.node.data.post.img" alt="img" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
    allProjectsData{
      edges{
        node{
          path,
          data{
            post{
              img,
              title,
              date,
              content,
              categories,project_bg_color,project_fg_color
            }
          }
        }
      } 
		}
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Pineapple",
      bodyAttrs: {
        style: `color:${this.color}`,
      },
    };
  },
  name: "Projects",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    color: (vm) => {
      let color;
      vm.$page.allProjectsData.edges.forEach((item) => {
        let result = `/src/assets/data${vm.$route.path}` == item.node.path;
        if (result) {
          color = item.node.data.post.project_fg_color;
        }
      });
      return color;
    },
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
