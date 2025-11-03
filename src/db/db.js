const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const getChallengeById = async (id) => {
  console.log(`Query challenge by ID ${id}`);
  try {
    const challenge = await prisma.challenge.findUniqueOrThrow({
      where: { id },
    });
    console.log(`Found challange ${challenge.id}`);
    return challenge;
  } catch (error) {
    console.error("Error query challenge ", error);
    throw error;
  }
};

const getFirstChallenge = async () => {
  console.log("Query first challenge");
  try {
  } catch (error) {}
};

module.exports = { getChallengeById };
