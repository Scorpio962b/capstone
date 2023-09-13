<template>
    <div>
        <div v-if="User">
            <div v-for="user in users">
            <img :src="User.userUrl" :alt="User.firstName" >
            <h2>{{ User.firstName }}</h2>
            <p>{{ User.lastName}}</p>
            <p>{{ User.emailAdd }}</p>
        </div>
    </div>
        <div class="text-white loading" v-else>
            <Spinner/>
        </div>
    </div>
</template>
<script>
import Spinner from '../components/SpinnerComp.vue'
export default{
    computed:{
        User(){
          return this.$store.state.user;
          
        }
    },
    created(){
        this.$store.dispatch("getUserById",this.$route.params.userID)
    },
    components: {
      Spinner
  }
}

</script>