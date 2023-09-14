const Users = require('./users')
const cart = require('./cart')
module.exports = {
    users: new Users(),
    cart: new cart }