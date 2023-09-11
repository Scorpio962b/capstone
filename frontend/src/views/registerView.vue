<template>
    <div class="container">
        <div class="card">
            <h1>register</h1>
            <form>
                <div>
                    <label for="firstName">First Name</label>
                    <input type="text">
                </div>
                <div>
                    <label for="lastName">Last Name</label>
                    <input type="text">
                </div>
                <div>
                    <label for="emailAdd">Your email</label>
                    <input type="text">
                </div>
                <div>
                    <label for="userPass">Password</label>
                </div>
                <button type="submit">register</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  props: ["user"],

  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        emailAdd: "",
        userPass: "",
      },
    };
  },

  methods: {
    registerUser() {
      this.$store.dispatch("register", this.user);
      this.$router.push("/");
    },
  },
};
</script>