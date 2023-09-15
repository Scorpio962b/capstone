<template>
  <div>
    <div class="container">
      <div class="card">
        <div :user="user" :key="user.userID">
          <img :src="user.userUrl" :alt="user.firstName" />
        </div>
        <div>
          <h1>Welcome back, {{ user.firstName }}!</h1>
          <h2>User Information</h2>
          <p>Name: {{ user.firstName }} {{ user.lastName }}</p>
          <p>Age: {{ user.userAge }}</p>
          <p>Gender: {{ user.gender }}</p>
          <p>Role: {{ user.userRole }}</p>
          <p>Email Address: {{ user.emailAdd }}</p>
          <p>Password: {{ user.userPass }}</p>
          <button @click.prevent="logout()">Log Out</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
    computed: {
        user() {
            return this.$store.state.user || cookies.get("patient").result;
        },
    },
    methods: {
        logout() {
            cookies.remove("patient")
            router.push({ name: "login" });
        }
    }
  }
 </script>
 <style scoped>
 .container{
  padding-top: 8rem;
  padding-bottom: 5rem;
 } 
 </style>
