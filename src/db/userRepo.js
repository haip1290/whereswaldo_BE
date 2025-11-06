const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

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

const updateUser = async ({ id, data }) => {
  console.log("Update user by id ", id);
  try {
    const updatedUser = await prisma.user.update({
      data,
      where: { id },
    });
    console.log("successfully updated user with id ", updatedUser.id);
    return updatedUser;
  } catch (error) {
    // check for prisma error code
    if (error.code === "P2002") {
      console.error(`Error: The username "${data.name}" is already taken.`);
      throw new Error(`Username ${data.name} is already taken.`);
    }
    if (error.code === "P2025") {
      console.error(`Error: User with ID ${id} not found.`);
      throw new Error(`User not found.`);
    }
    console.error("Error updating user");
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
  createUser,
  updateUser,
  updateUsernameById,
};
