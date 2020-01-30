const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user/:email"
router.route("/user/:email")
  .get(userController.findOneByEmail)

// Matches with "/api/user/:id"
router.route("/user/:id")
  .get(userController.findById)

// Matches with "/api/user/:id/:isbn"
router.route("/user/:id/:isbn")
  .post(userController.updateFavorite)


module.exports = router;