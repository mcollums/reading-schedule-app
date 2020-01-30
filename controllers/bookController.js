const db = require("../models");

module.exports = {
  findAllBooks: function (req, res) {
    db.Book
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBookById: function (req, res) {
    db.Book
      .findById(req.params.BookId)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};