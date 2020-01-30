const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bookRoutes = require(". bookRoutes");

// Book routes
router.use("/book", bookRoutes);
router.use("/user", userRoutes);


module.exports = router;