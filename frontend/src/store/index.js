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
    async getProductById(context, id) {
      try {
        const {data} = await axios.get(`${MyAPI}product/${prodID}`); 
        context.commit("setProduct", data.results[0])
      } catch (e) {
        context.commit("setMsg", "An error occured")
        console.log(e);
      }
    },
  },
    async getUsers(context) {
      try {
        const {data} = await axios.get(`${MyAPI}users`); 

        if (data.results) {
          context.commit("setUsers", data.results );
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
    async getUserById(context, id) {
      try {
        const {data} = await axios.get(`${MyAPI}user/${userID}`); 
        context.commit("setUser", data.results[0])
      } catch (e) {
        context.commit("setMsg", "An error occured")
        console.log(e);
      }
    },
    async updateUser(context, payload){
      const res = await axios.patch(`${MyAPI}/users/${payload.userID}`,payload);
      const {result, err}= await res.data;
      if (result){
        context.commit(`setUsers`,result)
      }else{
        context.commit(`setMsg`, err)
      }
    },
    async addProduct(context, payload){
      const res = await axios.post(`${MyAPI}/products`, payload);
      const {result, err} = await res.data;
      if(result){
        context.commit('setMessage', result)
      } else context.commit('setMessage', err)
    },
    async updateProduct(context,payload){
      const res = await axios.patch(`${MyAPI}/products/${payload.id}`, payload);
      console.log(await payload.id)
      const {results,err} = await res.data;
      if(results){
        console.log(results)
        context.commit('setProducts', results);
      } else {
        // console.log(err)
        context.commit('setMessage', err)
      }
    },
    async deleteProduct(context, id){
      const res = await axios.delete(`${MyAPI}/products/${id}`);
      const {results, err, msg} = res.data;
      if(results, msg){
        context.dispatch('getProducts', results, msg);
      } else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, userID){
      const res = await axios.delete(`${MyAPI}/users/${userID}`);
      const {results, err} = res.data;
      if(results){
        context.commit('setMsg', results);
      } else {
        context.commit('setMsg', err);
      }
    },
})
