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
    const query = `SELECT orderID, prodName, 
    quantity,Amount, firstName, 
      FROM users INNER JOIN orders ON Users.orderID = orders.firstName INNER JOIN Products ON orders.prodName = `;

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
        Msg: "Product added to cart!",
      });
    });
  }

  updateCart(req, res) {
    const query = `UPDATE orders SET ? WHERE orderID = ?;`;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        Msg: "order updated!",
      });
    });
  }

  clearCart(req, res) {
    const query = `DELETE FROM orders WHERE userID = ${req.params.id};`;

    db.query(query, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        Msg: "Cart is cleared!",
      });
    });
  }

  deleteCart(req, res) {
    const query = `DELETE FROM orders WHERE prodID = '${req.params.id}';`;

    db.query(query, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        Msg: "Item is removed from cart!",
      });
    });
  }
}

module.exports = orders;
