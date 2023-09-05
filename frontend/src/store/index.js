import { createStore } from 'vuex'
import axios from 'axios'
const MyAPI ='https://capstone-api-onzh.onrender.com'
export default createStore({
  state: {
    products: null,
    users: null,
    product: null,
    user: null,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user =  user;
    },
  },
  actions: {
    async getProducts(context){
      try {
       const response =  await fetch(`${MyAPI}/products`);
       const {products} = await response.data;
       if (products)
       context.commit("setProducts",products);
      } catch{
        alert(error);
      }
    }
  },
})
