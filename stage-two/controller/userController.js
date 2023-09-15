// packages
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Crud operations
exports.createUser = [
  body("name", "field should not be empty")
    .trim()
    .isLength({ min: 1 })
    .isString(),
  asyncHandler(async (req, res, next) => {
    try {
      const errors = validationResult(req);
      const newUser = new User({
        name: req.body.name,
      });
      if (!errors.isEmpty()) {
        res.status(403).send({ error: errors.array() });
        return;
      } else {
        const user = await User.findOne({ name: req.body.name });
        if (user) {
          res.status(403).send("A user with this name already exists");
          return;
        } else {
          await newUser.save();
          res.status(200).json(newUser);
        }
      }
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    }

    // var name = req.body.name;
    // res.json(name);
  }),
];

exports.getUser = [
  asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ _id: req.params.user_id });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(403).send("No user with this name exists");
    }
  }),
];

exports.editUser = [
  body("name", "field should not be empty")
    .trim()
    .isLength({ min: 1 })
    .isString(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(403).send({ error: errors.array() });
      return;
    } else {
      const user = User.findOne({ _id: req.params.user_id });
      if (user) {
        const editedUser = await User.findByIdAndUpdate(
          { _id: req.params.user_id },
          { name: req.body.name },
          { new: true }
        );
        res.status(200).json(editedUser);
      } else {
        res.status(401).send("No user with this name exists");
        return;
      }
    }
  }),
];

exports.deleteUser = [
  asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ _id: req.params.user_id });
    if (user) {
      await User.findByIdAndRemove(req.params.user_id);
      res.status(200).send("User deleted successfully");
    } else {
      res.status(401).send("No user with this name exists");
    }
  }),
];
