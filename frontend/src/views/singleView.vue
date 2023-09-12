<template>
    <div>
        <div v-if="products">
            <div v-for="product in products" :key="product.prodID"> 
                <img :src="product.prodUrl" >
                <h2>{{ product.prodName }}</h2>
                <p>{{ product.Catogary }}</p>
            </div>
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
    props:["prodID"],
    created(){
        this.$store.dispatch("getProductById",this.prodID)
    },
    computed:{
        products(){
            return this.$store.state.products;
        },

    },
    components: {
      Spinner
  }
}

</script>