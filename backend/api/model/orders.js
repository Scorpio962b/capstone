const db = require("../config/index.js");

class orders {
  getOrders(req, res) {
    
    const query = `SELECT orderID, prodName,firstName, Amount, quantity FROM orders;`;

    db.query(query, (err, results) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  getCart(req, res) {
    const query = `SELECT orderID, Products.prodName, 
    orders.quantity, orders.Amount, users.firstName
    FROM users
    INNER JOIN orders ON orders.orderID = orders.firstName
    INNER JOIN Products ON orders.prodName = Products.prodID`;

    db.query(query, (err, results) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  addToCart(req, res) {
    const query = `INSERT INTO orders SET ?`;

    db.query(query, [req.body], (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        Msg: "Product added!",
      });
    });
  }

  updateCart(req, res) {
    const query = `UPDATE orders SET ? WHERE orderID = ?;`;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        Msg: "order is updated!",
      });
    });
  }

  clearCart(req, res) {
    const query = `DELETE FROM orders WHERE userID = ${req.params.id};`;

    db.query(query, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        Msg: "Cart cleared!",
      });
    });
  }

  deleteCart(req, res) {
    const query = `DELETE FROM orders WHERE prodID = '${req.params.id}';`;

    db.query(query, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        Msg: "Item deleted cart!",
      });
    });
  }
}

module.exports = orders;
