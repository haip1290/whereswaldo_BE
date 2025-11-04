const challengeRepo = require("../db/challengeRepo.js");

const getChallengeById = async (req, res) => {
  const id = Number(req.params.id);
  console.log("Getting challange by id ", id);
  try {
    const challenge = await challengeRepo.getChallengeById(id);
    if (!challenge) {
      return res
        .status(404)
        .json({ message: `Challenge with ID ${id} not found` });
    }
    console.log(`Found challenge ${challenge.id}`);
    return res.json({ message: "Found challenge", data: challenge });
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ message: `Challenge with ID ${id} not found` });
    }
    console.error("Error fetching challenge by id ", error);
    return res
      .status(500)
      .json({ message: "Internal server error fetching challenge by ID" });
  }
};

const getFirstChallenge = async (req, res) => {
  console.log("Getting first challenges");
  try {
    const challenge = await challengeRepo.getFirstChallenge();
    if (!challenge) {
      return res
        .status(404)
        .json({ message: "There is no challenge available" });
    }
    console.log(`Found challenge ${challenge.id}`);
    return res.json({ message: "Found challenge", data: challenge });
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ message: "There is no challenge available" });
    }
    console.error("Error fetching first challenge", error);
    return res
      .status(500)
      .json({ message: "Internal server error fetching first challenge" });
  }
};

module.exports = { getChallengeById, getFirstChallenge };
