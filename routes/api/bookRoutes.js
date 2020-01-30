const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/book"
router.route("/")
  .get(bookController.findAllBooks);

// Matches with "/api/book/:id"
router.route("/:bookId")
  .get(bookController.findBookById);

// Matches with "/api/book/:title"
router.route("/:title")
    .get(bookController.findBookByTitle);

// Matches with "/api/book/:author"
router.route("/:author")
    .get(bookController.findBookByAuthor);

// Matches with "/api/book/:category"
router.route("/:author")
    .get(bookController.findBookByCategory);

module.exports = router;
