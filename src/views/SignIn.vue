<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="loginUser" class="form-container">
      <InputField
        label="Email"
        type="email"
        id="email"
        name="email"
        :value="email"
        @update:value="(newValue) => (email = newValue)"
        required
      />
      <InputField
        label="Password"
        type="password"
        id="password"
        name="password"
        :value="password"
        @update:value="(newValue) => (password = newValue)"
        required
      />
      <Button type="submit">Login</Button>
    </form>
  </div>
</template>

<script>
import InputField from "../components/atoms/input/index.vue";
import Button from "../components/atoms/button/index.vue";

export default {
  name: "Login",
  components: {
    InputField,
    Button,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      // Send login request to server
    },
  },
};
</script>

<style scoped>
.container,
.form-container {
  min-width: 300px;
  margin: 10em auto;
  max-width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  border: 2px solid greenyellow;
  padding: 2%;
  border-radius: 5px;
}

.form-container {
  margin: 0;
  border: none;
}

input {
  width: 100%;
  height: 2em;
}

button {
  width: 100%;
  background-color: var(--primary-color);
}
</style>
