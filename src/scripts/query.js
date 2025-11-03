const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const deleteChallengeById = async (id) => {
  console.log(`Deleting challenge by ID ${id}`);
  try {
    const deletedChallenge = await prisma.challenge.delete({ where: { id } });
    console.log("Deleted challenge successfully ", deletedChallenge);
    return deletedChallenge;
  } catch (error) {
    console.error("Error delete challenge by ID ", error);
  }
};

const init = async () => {
  console.log("Inserting new challenge");
  const width = 1108;
  const height = 820;
  try {
    const newChallenge = await prisma.challenge.create({
      data: {
        url: "https://i.pinimg.com/736x/86/b9/b1/86b9b1e83140b935031a7c7b0ebf0170.jpg",
        waldo_top: (740 * 1000) / height,
        waldo_left: (712 * 1000) / width,
        waldo_right: (760 * 1000) / width,
        waldo_bottom: (820 * 1000) / height,
      },
    });
    console.log(`Inserted new challange ${newChallenge.id}`);
  } catch (error) {
    console.error("Error initialize first challenge ", error);
  }
};
deleteChallengeById(4);
init();
