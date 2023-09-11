<template>
    <div class="container">
       <div class="card">
        <form>
            <h1>login</h1>
            <div class="emailblock">
              <label for="emailAdd">Email</label>
              <input type="email" class="EMAIL">
            </div>
            <div class="passblock">
              <label for="userPass">password</label>
              <input type="password" class="PASSWORD">
            </div>
            <div class="buttons">
                <button type="submit" class="submit">login</button>
                <button type="reset"  class="reset">clear</button>
            </div>
        </form>
        <div>
            <router-link to="/register">Do not have an account?Register now!</router-link>
        </div>
       </div>
    </div>
</template>
<script>

export default {
    props: ['payload'],

data() {
    return {
        payload: {
            emailAdd: '',
            userPass: ''
        }
    }
},

computed: {
    Msg() {
        return this.$store.state.Msg
    },

    user() {
        return this.$store.state.user
    }
},

methods: {
    login() {
        this.$store.dispatch('login', this.payload)
        this.$router.push("/profile");
    }
},

mounted() {
  console.log(cookies.get('setToken'));
}
};


</script>