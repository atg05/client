<template>
  <div class="layout">
    <Header />
    <Sidebar />
    <div class="body-container">
      <!-- <Profile /> -->
      <!-- <Post /> -->
      <Editor />
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/sidebar/index.vue";
import Header from "../../components/header/index.vue";
// import Feed from "../../views/authorised/feed/index.vue";
import Profile from "../../views/authorised/profile/index.vue";
import Editor from "../../views/authorised/editor/index.vue";

// import Post from "../../views/authorised/post/index.vue";

export default {
  name: "PrimaryLayout",
  components: {
    Header,
    Sidebar,
    Profile,
    Editor,
  },
};
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 300px auto;
}
.body-container {
  height: 91vh;
  margin: 1em 0 0 1em;
  padding-bottom: 20px;
  height: 88vh;
  overflow: hidden;
}
</style>
