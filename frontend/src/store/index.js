import { createStore } from "vuex";
import axios from "axios";
const MyAPI = "https://capstone-api-onzh.onrender.com";
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
      console.log(products)
    },
    setProduct: (state, product) => {
      state.product = product;
      console.log(product);
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    // async getProducts(context) {
    //   try {
    //     const response = await fetch(`${MyAPI}/products`);
    //     // const response = await axios.get(`${MyAPI}/products`);
    //     // const result = await response.data();
    //     const result = await response.json();
    //     console.log(result);
    //     // const { products } =  data;
    //     if (result) {
    //       context.commit("setProducts", result);
    //     } else {
    //       alert("failed go fetch");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async getProducts(context) {
      try {
        const response = await fetch(`${MyAPI}/products`);
        if (!response.ok) {
          throw new Error(`Failed to fetch products (HTTP ${response.status})`);
        }
        const result = await response.json();
        context.commit("setProducts", result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
