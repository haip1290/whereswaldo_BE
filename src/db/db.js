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
    const challenge = await prisma.challenge.findFirst();
    console.log(`Found first challenge ${challenge.id}`);
    return challenge;
  } catch (error) {
    console.error("Error query first challenge ", error);
    throw error;
  }
};

const createUser = async (data) => {
  console.log("Inserting new user ");
  try {
    const user = await prisma.user.create({ data });
    console.log(`Inserted user ${user.id}`);
    return user;
  } catch (error) {
    console.error("Error inserting new user ", error);
    throw error;
  }
};

const updateUsernameById = async ({ id, name }) => {
  console.log("Updating username by ID ", id);
  try {
    const updatedUser = await prisma.user.update({
      data: { name },
      where: { id },
    });
    console.log("Updated username by id ", updatedUser.id);
    return updatedUser;
  } catch (error) {
    // check for prisma error code
    if (error.code === "P2002") {
      console.error(`Error: The username "${name}" is already taken.`);
      throw new Error(`Username ${name} is already taken.`);
    }

    if (error.code === "P2025") {
      console.error(`Error: User with ID ${id} not found.`);
      throw new Error(`User not found.`);
    }
    console.error("Error updating username by id ", error);
    throw error;
  }
};

module.exports = {
  getChallengeById,
  getFirstChallenge,
  createUser,
  updateUsernameById,
};
