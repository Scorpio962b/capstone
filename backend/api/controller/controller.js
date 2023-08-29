//get - display
//post - add or insert data
//put - update the data
//patch - update specific part of data
//delete -delete data
const express = require ('express');
const  routes = express.Router();
const bodyParser = require('body-parser')
//import model objects 
const {users} = require('../model');
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
        users.register(req, res)
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
routes.get('/products/:id', (req, res)=>{
    showProductById (req, res)
})
routes.post('/products', bodyParser.json(),
    (req, res)=>{
        createProduct(req, res)
    })
routes.patch('/products/:id', bodyParser.json(),
    (req, res)=>{
        updateProduct(req, res)
    })
routes.delete('/products/:id', (req, res)=>{
    deleteProduct(req, res)
})

module.exports = {
    express, routes
}
