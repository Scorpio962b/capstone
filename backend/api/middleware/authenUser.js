
const {sign, verify} = require('jsonwebtoken')
require("dotenv").config()

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.secretKey,
    {
        expiresIn: '1d'
    })
}
module.exports = {
    createToken
}
