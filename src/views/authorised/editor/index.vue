<template>
  <textarea class="editor" />
  <div>
    <!-- <div class="privacy-container">Public Private</div> -->
    <Button>Post</Button>
  </div>
  <div class="post-container">Column Wise posts</div>
</template>

<script>
import Button from "../../../components/atoms/button/index.vue";

export default {
  components: {
    Button,
  },
  mounted() {},
  methods: {
    async submitPost() {
      // get the post content as a JSON object
      const outputData = await this.editor.save();
      // handle submission logic here
      // e.g. send outputData to server or emit an event
      console.log("Submitted post:", outputData);
    },
  },
  beforeDestroy() {
    // destroy the editor when the component is destroyed to avoid memory leaks
  },
};
</script>

<style scoped>
@import "./editor.style.css";
</style>
