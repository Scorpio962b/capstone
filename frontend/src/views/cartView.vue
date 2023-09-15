<template>
  <div>
    <section>
      <div>
        <h1>Checkout</h1>
      </div>
    </section>
    <div v-if="cart > 0">
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cart" :key="product.product.ProdID">
              <td>{{ product.product.ProdID }}</td>
              <td>{{ product.product.ProdName }}</td>
              <td>{{ product.product.Catogary }}</td>
              <td><img class="imag" :src="product.prodURL" alt="product.prodName"></td>
              <td>R {{ product.product.amount }}</td>
              <td>
                <button @click="deleteCart(product)">-</button>
                {{ product.product.Quantity }}
                <button @click="addProduct(product)">+</button>
              </td>
              <td>R {{ calTotal(product) }}</td>
              <td>
                <button @click="deleteProduct(product.product.ProdID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="cart.length > 0">
        <div id="yourTotal"> Total: R {{ yourTotal }}</div>
      </div>
    </div>

    <form>
      <h2>Billing Address:</h2>
      <h2>Payment Information</h2>
      <p>Cardholder Name</p>
      <input type="text" name="name" required />
      <p>Card Number</p>
      <input type="number" name="card_number" id="card_number" required />
      <p>type</p>
      <select name="card_type" id="card_type" required>
        <option value="">--Select a Card Type--</option>
        <option value="tymebank">tymebank</option>
        <option value="paypal">paypal</option>
        <option value="MasterCard">MasterCard</option>
      </select>
      <div>
        <p>Expiry</p>
        <input type="date" name="exp_date" id="exp_date" required />
        <p>CVV</p>
        <input type="password" name="cvv" id="cvv" required />
      </div>
      <button @click="checkout" type="submit">Make your payment</button>
    </form>
  </div>
</template>
<script>
import sweetAlert from 'sweetalert'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  data() {
    return {
      cart: [], // Initialize cart data
    };
  },
  created() {
    // Retrieve cart data from local storage or your store
    const cart = JSON.parse(cookies.get('cart')) || [];
    this.cart = cart;
  },
  methods: {
    addProduct(product) {
      product.product.Quantity++;
      this.saveCart();
    },
    deleteCart(product) {
      if (product.product.Quantity > 1) {
        product.product.Quantity--;
        this.saveCart();
      }
    },
    deleteProduct(prodID) {
      const updatedCart = this.cart.filter(product => product.product.prodID !== prodID);
      this.cart = updatedCart;
      this.saveCart();
    },
    saveCart() {
    this.$cookies.set('cart', this.cart, { expires: '2d' }); 
  },
    calTotal(product) {
      return product.product.Amount * product.product.Quantity;
    },
    checkout(){
      sweetAlert({
            title: "Checkout",
            text: "Payment Successful",
            icon: "success",
            timer: 2000
          })
    }
  },
  computed: {
  yourTotal() {
    let total = 0;
    for (const product of this.cart) {
      total += this.calTotal(product);
    }
    return total;
  },
}
};
</script>

