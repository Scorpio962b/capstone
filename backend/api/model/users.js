const db = require('../config/index.js')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/authenUser.js')
class Users{
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, 
        lastName,userAge, gender, userRole, 
        emailAdd,userPass
        FROM users;
        `
        db.query(query, 
            (err, results)=>{
              if(err) throw err 
              res.json({
                status: res.statusCode,
                results
              })
            })
    }
    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, 
        lastName,userAge, gender, userRole, 
        emailAdd,userPass
        FROM users
        WHERE userID = ${req.params.id};
        `
        db.query(query, 
            (err, result)=>{
                if(err) throw err 
                res.json({
                    status: res.statusCode,
                    result
                })
            })
    }
    login(req, res) {
    }
    async register(req, res) {
        const data = req.body 
        // Encrypt password
        data.userPass = await hash(data.userPass,15)
        // Payload
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        // Query
        const query = `
        INSERT INTO users
        SET ?;
        `
        db.query(query,
            [data],
             (err)=>{
            if(err) throw err 
            // Create token
            let token = createToken(user)
            res.cookie("LegitUser", token, 
            {
                maxAge: 3600000,
                httpOnly: true
            })
            res.json({
                status: res.statusCode,
                msg: "You are now registered."
            })
        })
    }
    updateUser(req, res) {
        const query = `
        UPDATE users
        SET ?
        WHERE userID = ?
        `
        db.query(query,
            [req.body, req.params.id],
            (err)=> {
                if(err) throw err 
                res.json({
                    status: res.statusCode,
                    msg: "The user record was updated."
                })
            } )
    }
    deleteUser(req, res) {
        const query = `
        DELETE FROM users
        WHERE userID = ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                msg: "A user record was deleted."
            })
        })
    }
}
module.exports = Users

