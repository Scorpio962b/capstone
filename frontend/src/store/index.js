import { createStore } from 'vuex'
import axios from 'axios'
import sweetAlert from 'sweetalert'
const MyAPI = 'https://capstone-api-onzh.onrender.com/'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import authuser from '@/services/authuser';

export default createStore({
  state: {
    products: null,
    users: null,
    product: null,
    user: null,
    msg: null,
    orders: null,
    cart: null,
    userAuth: null,
    userLoggedIn: false,
    setToken:null
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
      console.log('Product data received:',product);
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setUserLoggedIn(state, userLoggedIn) {
      state.userLoggedIn = userLoggedIn;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg: (state, msg) => {
      state.msg = msg;
    },
    setOrders(state, orders) {
      state.orders = orders;
    },

    setCart(state, cart) {
      state.cart = cart;
    },


  },
  actions: {
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${MyAPI}login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("patient", { msg, token, result });
          authuser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${MyAPI}register`, payload);
      console.log('Result:', res);
      let {result, msg, err} = await res.data;
      if(msg) {
        context.commit('setUsers', msg)
        context.commit(`setSpinner`, false);
      }else{
        context.commit(`setMsg`, err)
      }
    },
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
    async getProductById(context, prodID) {
      try {
        const {result} = (await axios.get(`${MyAPI}product/${prodID}`)).data;  
        console.log('Product data received from API:', result);
        if(result){
          context.commit("setProduct", result);
          context.dispatch("getProduct")
        }else{
          console.log("No data");
        }
      } catch (e) {
        context.commit("setMsg", "An error occured");
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
        context.commit('setMsg', result)
      } else context.commit('setMsg', err)
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
        context.commit('setMsg', err)
      }
    },
    async deleteProduct(context, id){
      const res = await axios.delete(`${MyAPI}/products/${id}`);
      const {results, err, msg} = res.data;
      if(results, msg){
        context.dispatch('getProducts', results, msg);
      } else {
        context.commit('setMsg', err);
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
