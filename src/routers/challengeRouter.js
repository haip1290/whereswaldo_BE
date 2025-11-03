const { Router } = require("express");
const {
  getChallengeById,
  getFirstChallenge,
} = require("../controllers/challengeController.js");

const challengeRouter = Router();

challengeRouter.get("/first", getFirstChallenge);
challengeRouter.get("/:id", getChallengeById);

module.exports = challengeRouter;
