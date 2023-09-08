<template>
    <div>
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
       
    }
}

</script>