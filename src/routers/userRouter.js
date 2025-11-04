const { Router } = require("express");
const { createUser, updateUser } = require("../controllers/userController.js");
const userRouter = Router();

userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);

module.exports = userRouter;
