const db = require("../models");

module.exports = {
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneByEmail: function (req, res) {
    db.User
      .findOne({ email: req.params.email })
      .then((dbModel, err) => {
        if (err) {
          console.log("Error" + err);
        }
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  updateOne: function (req, res) {
    // console.log("id", req.body.id);
    db.User.findById({ _id: req.body.id }).populate("readingList.book")
        .then ((dbUser) => {
            console.log("User Controller updateOne " + dbUser.readingList);
        })
        .catch(err => res.status(422).json(err));
  }
};
