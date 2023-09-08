<template>
  <div class="container">
    <div class="card" v-for="product in products" :key="product.prodID">
      <div class="card-body">
        <img :src="product.prodURL"  />
        <h2>{{ product.prodName }}</h2>
      </div>
    <router-link class="btn" :to="{name: 'product', params: {id: product.prodID}}">View More</router-link>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    products: Array
  },
  products(){
    return this.$store.state.products
  },
  mounted(){
    this.$store.dispatch("getProducts")
  }
}
</script>
<style scoped>

</style>
