require ("dotenv").config();
const {createPool} = require("mysql")
const connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    multipleStatement:true,
    connectionLimit:30,
})
connection.getConnection((err)=> {
    if(err){
        console.log(err)
    }else{
        console.log("Database connected")
    }
    })

module.exports = connection
