<template>
  <div class="proT">
    <h2>products table</h2>
    <table v-if="Products">
      <thead>
        <tr>
          <th>name</th>
          <th>quantity</th>
          <th>amount</th>
          <th>Catogary</th>
          <th>image</th>
          <th>delete/edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in Products" :key="product">
          <td>{{ product.prodName }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.Catogary }}</td>
          <td>{{ product.imageURL }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <div class="buttons">
              <ProductUpdate :product="product" :prodID="product.prodID" />
              <button v-on:click="deleteProduct(product)">delete</button>
              <button v-on:click="editProduct(prodID)">edit</button>
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
          <th>gender</th>
          <th>email</th>
          <th>image</th>
          <th>delete/edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in Users" :key="user">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userURL}}</td>
          <td>
            <div class="buttons">
              <UserUpdate :user="user" :userID="Users.userID" />
              <button v-on:click="deleteProduct(user)">delete</button>
              <button v-on:click="editProduct(userID)">edit</button>
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
</template>
<script>
import Spinner from '../components/SpinnerComp.vue'
export default {
  computed: {
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
  components: {
      Spinner
  }
}

</script>
