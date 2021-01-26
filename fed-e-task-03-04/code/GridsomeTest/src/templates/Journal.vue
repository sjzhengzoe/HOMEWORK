<template>
  <Layout>
    <div
      data-v-2a0eef53=""
      class="container journal-container"
      v-for="(item, index) in $page.allJournalData.edges"
      :key="index"
    >
      <div v-if="`/src/assets/data${$route.path}` == item.node.path">
        <div data-v-2a0eef53="" class="journal-header">
          <h1 data-v-2a0eef53="" class="journal-title">
            {{ item.node.data.post.title }}
          </h1>
          <div data-v-2a0eef53="" class="journal-meta">
            <div data-v-2a0eef53="" class="journal-author">
              <span data-v-2a0eef53="" class="label">Author</span
              ><span data-v-2a0eef53="" class="author-name">{{ item.node.data.post.author }}</span>
            </div>
            <div data-v-2a0eef53="" class="journal-date">
              <span data-v-2a0eef53="" class="label">Date</span>
              <div data-v-2a0eef53="">{{ item.node.data.post.date }}</div>
            </div>
            <div data-v-2a0eef53="" class="journal-time">
              <span data-v-2a0eef53="" class="label">Time</span
              ><span data-v-2a0eef53="">{{ item.node.data.post.timeToRead }} min read</span>
            </div>
          </div>
        </div>
        <div data-v-2a0eef53="" class="journal-content">
          <div class="journal-content" data-v-2a0eef53="" v-html="item.node.data.post.content" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{

    allJournalData{
      edges{
        node{
          path,
          data{
            post{
              title,
              date,
              content,
              author,
              timeToRead
            }
          }
        }
      } 
		}}
</page-query>

<script>
export default {
  name: "Journal",
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
