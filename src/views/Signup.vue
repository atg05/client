<!-- Register.vue -->

<template>
  <div class="container">
    <span class="material-symbols-outlined"> account_circle </span>
    <Heading :level="1"> Register Yourself Today</Heading>
    <InputField
      label="First Name"
      type="text"
      id="firstName"
      name="firstName"
      :value="firstName"
      @update:value="(newValue) => (firstName = newValue)"
      required
    />
    <InputField
      label="Last Name"
      type="text"
      id="lastName"
      name="lastName"
      :value="lastName"
      @update:value="(newValue) => (lastName = newValue)"
      required
    />
    <InputField
      label="Email"
      type="email"
      id="email"
      name="email"
      v-model="email"
      :value="email"
      @update:value="(newValue) => (email = newValue)"
      required
    />
    <InputField
      label="Password"
      type="password"
      id="password"
      name="password"
      v-model="password"
      :value="password"
      @update:value="(newValue) => (password = newValue)"
      required
    />

    <Button @click="registerUser">Register</Button>
  </div>
</template>

<script>
import InputField from "../components/atoms/input/index.vue";
import Button from "../components/atoms/button/index.vue";
import Heading from "../components/atoms/headings/index.vue";

export default {
  name: "Register",
  components: {
    InputField,
    Button,
    Heading,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registerUser() {
      this.$nextTick(async () => {
        await fetch("http://localhost:4000/api/v1/auth/register", {
          method: "POST",
          headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          }),
          Cache: "default",
        });

        // Perform user registration logic here
      });

      // Perform user registration logic here
    },
  },
};
</script>

<style scoped>
.container {
  min-width: 300px;
  margin: 10em auto;
  max-width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  padding: 2%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
