<template>
    <div>
      <div class="container flex-container">
        <button type="button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" style="color: aqua;" >Add</button>
  
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                <button type="button" data-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Name</label>
                    <input type="text" id="recipient-name" autocomplete="off" required name="ProdName" v-model="product.ProdName">
                  </div>
                  
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Price</label>
                    <input type="number" id="message-text" autocomplete="off" required name="Amount" v-model="product.amount">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Catogary</label>
                    <input type="text" id="message-text" autocomplete="off" required name="Catogary" v-model="product.Catogary">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Image</label>
                    <input type="text" id="message-text" autocomplete="off" required name="ProdUrl" v-model="product.ProdURL">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">description</label>
                    <input type="text" id="message-text" autocomplete="off" required name="ProdUrl" v-model="product.description">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" data-dismiss="modal">Close</button>
                <button @click="addProduct" type="button" data-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
   <script>
  
   export default {
     name: 'Addprod',
     props: ['ToggleModal'],
     data() {
       return {
        
           product: {
             ProdName: '',
             amount: '',
             Catogary: '', 
             ProdURL: '',
             description:','
           }
         
       };
     },
     methods: {
       addProduct() {
         this.$store.dispatch("addProduct",this.product)
       },
     }
   };
   </script>
 