const db = require("../config/index.js");

class cart {
  getCart(req, res) {
    const query = `SELECT orderID,userID,firstName, prodName, prodID, Amount FROM cart`; 

    db.query(query, (err, res) => {
      if (err) {
        console.error(err); 
        res.json({
                  status: res.statusCode,
                  results,
                });
        return;
      }
    });
  }

  getCarts(req, res) {
    const query = `SELECT cart.orderID,users.userID, users.firstName,Products.prodName,Products.prodID, orders.Amount, 
    FROM users
    INNER JOIN  ON users.userID = users.userID 
    INNER JOIN Products ON Products.prodID = Products.prodID`; 

    db.query(query, (err, res) => {
      if (err) {
        console.error(err);
        res.json({
          status: res.statusCode,
          res,
        });
      }
    });
  }

  addToCart(req, res) {
    const query = `INSERT INTO cart SET ?`;

    db.query(query, req.body, (err) => { 
      if (err) {
        console.error(err);
        res.json({
          status: res.statusCode,
          res,
        });
      }
    });
  }

  updateCart(req, res) {
    const query = `UPDATE cart SET ? WHERE orderID = ?
    `;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) {
        console.error(err);
        res.json({
          status: res.statusCode,
          res,
        });
      }
    });
  }

  clearCart(req, res) {
    const query = `DELETE FROM cart WHERE userID = ${req.params.id}`;

    db.query(query, (err) => {
      if (err) {
        console.error(err);
        res.json({
          status: res.statusCode,
          res,
        });
      }
    });
  }

  deleteCart(req, res) {
    const query = `DELETE FROM cart WHERE orderID = '${req.params.id}'`; 

    db.query(query, (err) => {
      if (err) {
        console.error(err);
        res.json({
          status: res.statusCode,
          res,
        });
      }
    });
  }
}

module.exports = cart;
