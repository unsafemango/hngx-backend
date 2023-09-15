// packages
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// landing page
router.get("/", (req, res, next) => {
  res.send("Landing Page");
});

// Crud operations
router.post("/api", userController.createUser);
router.get("/api/:user_id", userController.getUser);
router.put("/api/:user_id", userController.editUser);
router.delete("/api/:user_id", userController.deleteUser);

module.exports = router;
