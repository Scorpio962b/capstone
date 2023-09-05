<template>
  <div class="container">
    <div v-if="products">
    <div class="card" v-for="product of products" :key="product.ProdID">
      <div class="card-body">
        <h2>{{ product.prodName }}</h2>
        <img :src="product.prodURL" :alt="product.prodURL" />
      </div>
     <button>view more</button>
    </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>
<script>
export default {
    name: "products"
}

</script>

