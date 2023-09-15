<template>
  <div class="container">

  <div class="proT">
    <div>
      <h2>add</h2>
      <Addprod />
    </div>
    <h2>products table</h2>
    <table v-if="Products">
      <thead>
        <tr>
          <th>name</th>
          <th>amount</th>
          <th>Catogary</th>
          <th>image</th>
          <th>delete</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in Products" :key="product">
          <td>{{ product.prodName }}</td>
          <td>R{{ product.amount }}</td>
          <td>{{ product.Catogary }}</td>
          <td><img class="imag" :src="product.prodURL" alt="product.prodName"></td>
          <td>{{ product.quantity }}</td>
          <td>
            <div class="buttons">
              <ProductUpdate :product="product" :prodID="product.prodID" />
              <button @click="deleteProduct(product.prodID)">delete</button>
            </div>
          </td>
          <td>
            <div class="buttons">
              <ProductUpdate :product="product" :prodID="product.prodID" />
              <button @click="updateProduct(product.prodID)">edit</button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <addProduct />
          </td>
        </tr>
      </tfoot>
    </table>
    <div v-else>Loading
      <Spinner/>
    </div>
  </div>
  <div class="userT">
    <h2>users table</h2>
    <table v-if="Users">
      <thead>
        <tr>
          <th>name</th>
          <th>surname</th>
          <th>age</th>
          <th>userRole</th>
          <th>gender</th>
          <th>email</th>
          <th>image</th>
          <th>delete</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in Users" :key="user">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.userRole}}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.emailAdd }}</td>
          <td><img :src="user.userUrl" class= "use" alt="user.firstName" ></td>
          <td>
            <div class="buttons">
              <!-- <UserUpdate :user="user" :userID="Users.userID" /> -->
              <button @click="deleteUser(users?.userID)">delete</button>
            </div>
          </td>
          <td>
            <div class="buttons">
              <!-- <UserUpdate :user="user" :userID="Users.userID" /> -->
              <button @click="updateUser(user.userID)">edit</button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table> 
    <div v-else>Loading
      <Spinner/>
    </div>
  </div>
  </div>
</template>
<script>
import Spinner from '@/components/SpinnerComp.vue'
import store from '@/store';
import axios from 'axios';
import Addprod from "@/components/addProduct.vue";
export default {
  computed: {
    props: ["product"],
      Products() {
          return this.$store.state.products;
      },
      Users(){
          return this.$store.state.users;
      }
  },  
  mounted() {
      this.$store.dispatch('getProducts'),
      this.$store.dispatch('getUsers');
  },
  methods: {
      async deleteProduct(prodID) {
      try {
        await axios.delete(
          `https://capstone-api-onzh.onrender.com/product/${prodID}`
        );
        this.$store.dispatch("getProducts");
        alert("Product has been deleted");
      } catch (err) {
        alert(err);
      }
    },
     async deleteUser(userID) {
        try {
        await axios.delete(
          `https://capstone-api-onzh.onrender.com/user/${userID}`
        );
        this.$store.dispatch("getUsers");
        alert("Users has been deleted");
      } catch (err) {
        alert(err);
      }
    }
  },

    updateProduct(prodID) {
      this.$store.dispatch("updateProduct", prodID);
    },
    updateUser(userID) {
      this.$store.dispatch("updateUser",userID);
    },

    
    
  components: {
    Spinner,
      store,
      Addprod,
  }
}
</script>
<style scoped>
.imag{
  width: 100%;
  height:200px!important;
}
.use{
  width: 100%;
  height:100px!important;
}
</style>
<style scoped>
.container{
  padding-top: 8rem;
}
</style>