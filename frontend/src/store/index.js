import { createStore } from 'vuex'
import axios from 'axios'
import sweetAlert from 'sweetalert'
const MyAPI = 'https://capstone-api-onzh.onrender.com/'

export default createStore({
  state: {
    products: null,
    users: null,
    product: null,
    user: null,
    msg: null
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
      state.user = user;
    },
    setMsg: (state, msg) => {
      state.msg = msg;
    },

  },
  actions: {
    async getProducts(context) {
      try {
        const {data} = await axios.get(`${MyAPI}products`); 

        if (data.results) {
          context.commit("setProducts", data.results );
        } else {
          // alert("error");
          sweetAlert({
            title: "Error",
            text:data.msg,
            icon:"error",
            timer: 2000
          })
        }
      } catch (e) {
        context.commit("setMsg", "An error occured")
        console.log(e);
      }
    },
    async getProduct(context, id) {
      try {
        const {data} = await axios.get(`${MyAPI}product/` + id); 
        context.commit("setProduct", data.results[0])
      } catch (e) {
        context.commit("setMsg", "An error occured")
        console.log(e);
      }
    },
  },
})
