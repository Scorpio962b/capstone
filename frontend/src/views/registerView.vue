<template>
    <div class="container">
        <div class="card">
            <h1>register</h1>
            <form @submit.prevent="registerUser">
                <div>
                    <label for="firstName">First Name</label>
                    <input type="text" v-model="user.firstName">
                </div>
                <div>
                    <label for="lastName">Last Name</label>
                    <input type="text" v-model="user.lastName">
                </div>
                <div>
                    <label for="age">age</label>
                    <input type="number" v-model="user.userAge">
                </div>
                <div>
                    <label for="gender">gender</label>
                    <input type="text" v-model="user.gender">
                </div>
                <div>
                    <label for="emailAdd" >Your email</label>
                    <input type="text" v-model="user.emailAdd">
                </div>
                <div>
                    <label for="userPass">Password</label>
                    <input type="password" v-model="user.userPass">
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
        userAge: "",
        gender: "",
        userRole:"user",
        emailAdd: "",
        userPass: "",
      }, 
    };
  },

  methods: {
    registerUser() {
      this.$store.dispatch("register", this.user)
      .then(() => {
            sweetAlert({
            title: "success",
            text:"you have successfully registered",
            icon:"success",
            confirmButtontext: "ok",
            timer:1000
          })
        })
      this.$router.push("/login");
    },
  },
};
</script>