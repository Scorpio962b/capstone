<template>
    <div v-if="product" :key="product.prodID">
        <div>
            <img :src="product.prodUrl" >
            <h2>{{ product.prodName }}</h2>
            <p>{{ product.Catogary }}</p>
        </div>
        
    </div>
</template>
<script>
export default{
    computed:{
        product(){
            return this.$store.state.product;
        },
        id(){
            return this.$route.params.id;
        },
        mounted() {
            this.$store.dispatch("getProduct", this.$route.params.id);
        },
    }
}

</script>