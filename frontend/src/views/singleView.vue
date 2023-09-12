<template>
    <div>
        <div v-if="product">
            <img :src="product.prodURL" :alt="product.prodName" >
            <h2>{{ product.prodName }}</h2>
            <p>{{ product.Catogary }}</p>
            <button>addtocart</button>
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
    // props:["prodID"],
    computed:{
        product(){
            return this.$store.state.product;
        },

    },
    created(){
        this.$store.dispatch("getProductById",this.$route.params.prodID)
    },
    components: {
      Spinner
  }
}

</script>