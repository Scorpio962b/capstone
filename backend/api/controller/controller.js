//get - display
//post - add or insert data
//put - update the data
//patch - update specific part of data
//delete -delete data
const express = require ('express');
const  routes = express.Router();
const bodyParser = require('body-parser')
//import model objects 
const {users , orders} = require('../model');
const { showProducts,showProductById,createProduct,updateProduct,deleteProduct} = require('./product.js');
// User's router 
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(),
    (req, res)=> {
        users.register(req, res)
    })
routes.post('/login', bodyParser.json(),
    (req, res)=> {
        users.login(req, res)
    })
    routes.patch('/user/:id', bodyParser.json(),
    (req, res)=>{
        users.updateUser(req, res)
    })
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})
//product router
routes.get('/products', (req, res)=>{
    showProducts(req, res)
})
routes.get('/product/:id', (req, res)=>{
    showProductById (req, res)
})
routes.post('/products', bodyParser.json(),
    (req, res)=>{
        createProduct(req, res)
    })
routes.patch('/product/:id', bodyParser.json(),
    (req, res)=>{
        updateProduct(req, res)
    })
routes.delete('/product/:id', (req, res)=>{
    deleteProduct(req, res)
})
routes.get("/orders", (req, res) => {
    orders.getOrders(req, res);
  });
  
  routes.get("/user/:id/carts", (req, res) => {
    orders.getCart(req, res);
  });
  
  routes.post("/user/:id/cart", bodyParser.json(), (req, res) => {
    orders.addToCart(req, res);
  });
  
  routes.patch("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
    orders.updateCart(req, res);
  });
  
  routes.delete("/user/:id/cart", (req, res) => {
    orders.clearCart(req, res);
  });
  
  routes.delete("/user/:id/cart/:id", (req, res) => {
    orders.removeFCart(req, res);
  });

module.exports = {
    express, routes
}
