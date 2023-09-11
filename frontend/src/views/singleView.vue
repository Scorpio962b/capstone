<template>
    <div>
        <div v-if="product">
            <img :src="product.prodUrl" >
            <h2>{{ product.prodName }}</h2>
            <p>{{ product.Catogary }}</p>
        </div>
        <div class="text-white loading" v-else>
            loading 
            <Spinner/>
        </div>
    </div>
</template>
<script>
import Spinner from '../components/SpinnerComp.vue'
export default{
    computed:{
        product(){
            return this.$store.state.product;
        },
        mounted() {
            this.$store.dispatch('getProductById', this.$route.params.id);
        },
    },
    components: {
      Spinner
  }
}

</script>