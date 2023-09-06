<template>
  <div class="container" v-if="products">
    <div class="card" v-for="product in products" :key="product.prodID">
      <div class="card-body">
      <!-- {{ products }} -->
        <h2>{{ product.prodName }}</h2>
        <img :src="product.prodURL" :alt="product.prodURL" />
      </div>
     <button>view more</button>
    </div>
  </div>
</template>
<script>
export default {
    // name: "products", 
    props:{product : object}
}
</script>
