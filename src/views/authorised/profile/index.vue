<template>
  <div class="profile-container">
    <div class="about">
      <img
        src="https://www.businessinsider.in/photo/92329217/how-to-check-who-is-looking-at-your-whatsapp-profile-online-status-and-last-seen.jpg?imgsize=29474"
        alt="User Profile"
        class="profile-pic"
      />
      <div class="info">
        <h1 class="username">Harshita Ji</h1>
        <div class="card">
          <div class="card-item">
            <span class="title">Posts</span>
            <span>22</span>
          </div>
          <div class="card-item">
            <span class="title">Follower</span>
            <span> 22K </span>
          </div>
          <div class="card-item">
            <span class="title">Following</span>
            <span> 1 </span>
          </div>
        </div>
      </div>
    </div>
    <div class="posts-container">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
</template>

<script>
import Post from "../../../components/post/index.vue";
export default {
  name: "Profile",
  components: { Post },
};
</script>

<style>
@import "./profile.style.css";
</style>
