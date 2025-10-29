const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const init = async () => {
  console.log("Inserting new challenge");
  const newChallenge = await prisma.challenge.create({
    data: {
      url: "https://i.pinimg.com/736x/86/b9/b1/86b9b1e83140b935031a7c7b0ebf0170.jpg",
      waldo_top: 740,
      waldo_left: 713,
      waldo_right: 760,
      waldo_bottom: 820,
    },
  });
  console.log(`Inserted new challange ${newChallenge.id}`);
};

init();
