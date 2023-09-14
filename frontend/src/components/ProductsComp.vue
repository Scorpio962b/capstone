<template>
  <div class="container">
    <div class="card" v-for="product in products" :key="product.prodID">
      <div class="card-body">
        <img :src="product.prodURL" style="width:200px" />
        <h2>{{ product.prodName }}</h2>
        <p>R{{ product.amount}}</p>
      </div>
     <router-link class="btn" :to="{name: 'product', params: {prodID: product.prodID}}">View More</router-link>
    </div>
  </div>
</template>

<script>

export default {
  computed:{ 
    products(){
      return this.$store.state.products
    },
  },
  mounted(){
    this.$store.dispatch("getProducts")
  }
}
</script>
<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  width: 22rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
  height:200px!important;
}
@media(max-width:992px){
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .card {
  width: 20rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
}
}
@media(max-width:768px){
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .card {
  width: 10rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
}
}
@media (max-width:768px) {
  .container{
    align-items: center;
  }
}
</style>