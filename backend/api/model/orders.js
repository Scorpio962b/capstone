const db = require("../config/index.js");

class Orders {
  getOrders(req, res) {
    const query = `SELECT orderID, prodName, firstName, Amount FROM orders`; 

    db.query(query, (err, results) => {
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

  getCart(req, res) {
    const query = `SELECT orders.orderID, Products.prodName, orders.Amount, users.firstName
    FROM users
    INNER JOIN orders ON users.userID = users.userID 
    INNER JOIN Products ON Products.prodID = Products.prodID`; 

    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  }

  addToCart(req, res) {
    const query = `INSERT INTO orders SET ?`;

    db.query(query, req.body, (err) => { 
      if (err) {
        console.error(err);
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  }

  updateCart(req, res) {
    const query = `UPDATE orders SET ? WHERE orderID = ?
    `;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) {
        console.error(err);
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  }

  clearCart(req, res) {
    const query = `DELETE FROM orders WHERE userID = ${req.params.id}`;

    db.query(query, (err) => {
      if (err) {
        console.error(err);
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  }

  deleteCart(req, res) {
    const query = `DELETE FROM orders WHERE orderID = '${req.params.id}'`; 

    db.query(query, (err) => {
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
}

module.exports = Orders;
