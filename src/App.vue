<template>
  <div class="main-container">
    <!-- <PrimaryLayout /> -->
    <!-- <router-view /> -->
    <Signup />
    <!-- <Login /> -->
  </div>
</template>

<script>
import PrimaryLayout from "./views/authorised/index.vue";
import Login from "./views/SignIn.vue";
import Signup from "./views/Signup.vue";

export default {
  name: "App",
  components: {
    PrimaryLayout,
    Signup,
    Login,
  },
};
</script>

<style scoped>
.main-contianer {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
