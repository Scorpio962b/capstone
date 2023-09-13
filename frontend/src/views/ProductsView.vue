<template>
  <div v-if="Products">
      <ProCard :products="Products"/>
  </div>
  <div class="text-white loading" v-else>
        Please,give us a moment...
        <Spinner/>
    </div>
</template>

<script>
import ProCard from '../components/ProductsComp.vue'
import Spinner from '../components/SpinnerComp.vue'
export default {
    
  computed: {
      Products() {
          return this.$store.state.products;
          console.log(Products)
      }
  },
  mounted() {
      this.$store.dispatch('getProducts');
  },
  components: {
      ProCard,
      Spinner
  }
}
</script>
<style scoped>

</style>
