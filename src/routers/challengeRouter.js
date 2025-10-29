const { Router } = require("express");
const { getChallengeById } = require("../controllers/challengeController.js");

const challengeRouter = Router();

challengeRouter.get("/", getChallengeById);

module.exports = challengeRouter;
