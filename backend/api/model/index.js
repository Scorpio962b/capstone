const Users = require('./users')
const Orders = require('./orders')
module.exports = {
    users: new Users(),
    orders: new Orders }