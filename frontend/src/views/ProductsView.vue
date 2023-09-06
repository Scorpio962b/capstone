<template>
  <div v-if="products">
    <!-- <ProCard :prod = "products" /> -->
    <ProCard v-for="product in products" :key="product.prodID" :product="product"/>
   
    <!-- {{ products }} -->

  </div>
  <div v-else>Loading</div>
</template>

<script>
import ProCard from "@/components/ProductsComp.vue";

export default {
   
  components: {
    ProCard,
  },
  computed: {
    products() {
        console.log(this.$store.state.products);
      return this.$store.state.products;
    },
  },
  mounted() {
    return this.$store.dispatch("getProducts");
  },
};
</script>
