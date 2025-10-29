const db = require("../db/db");

const getChallengeById = async (req, res) => {
  const id = Number(req.params.id);
  console.log("Getting challange by id ", id);
  const challenge = await db.getChallengeById(id);
  console.log(`Found challenge ${challenge.id}`);
  return res.json({ message: "Found challenge", data: challenge });
};

module.exports = { getChallengeById };
