const db = require("../config/index.js");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/authenUser.js");
class Users {
  fetchUsers(req, res) {
    const query = `
        SELECT userID, firstName, 
        lastName,userAge, gender, userRole, 
        emailAdd,userPass,userUrl
        FROM users;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, 
        lastName,userAge, gender, userRole, 
        emailAdd,userPass,userURl
        FROM users
        WHERE userID = ${req.params.id};
        `;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const query = `SELECT emailAdd, userPass
        FROM users
        WHERE emailAdd = '${emailAdd}';`;
    db.query(query, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided the wrong email",
        });
      } else {
        await compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          //create token
          const token = createToken({
            emailAdd,
            userPass,
          });
          if (cResult) {
            res.json({
              msg: "Logged in",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid password or you didn't register",
            });
          }
        });
      }
    });
  }
  async register(req, res) {
    const data = req.body;
    // Encrypt password
    data.userPass = await hash(data.userPass, 15);
    // Payload
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    // Query
    const query = `
        INSERT INTO users
        SET ?;
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      // Create token
      let token = createToken(user);

      res.json({
        status: res.statusCode,
        token,
        msg: "you have successfully registered.",
      });
    });
  }
  updateUser(req, res) {
    const query = `
        UPDATE users
        SET ?
        WHERE userID = ?
        `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user record was updated.",
      });
    });
  }
  deleteUser(req, res) {
    const query = `
        DELETE FROM users
        WHERE userID = ${req.params.id};
        `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A user record was deleted.",
      });
    });
  }
}
module.exports = Users;
