<template>
    <div v-if="Products">
        <ProCard/>
    </div>
   
</template>

<script>

import ProCard from '@/components/ProductsComp.vue';


export default {
    computed: {
        Products(){
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('getProducts');
    },

    components:{
        ProCard,
    }
}
</script>