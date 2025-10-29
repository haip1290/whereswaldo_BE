const { Router } = require("express");
const { getChallengeById } = require("../controllers/challengeController.js");

const challengeRouter = Router();

challengeRouter.get("/:id", getChallengeById);

module.exports = challengeRouter;
