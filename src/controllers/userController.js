const userRepo = require("../db/userRepo.js");

const createUser = async (req, res) => {
  console.log("Create new user");
  try {
    const user = await userRepo.createUser();
    console.log("Created user successfully ", user.id);
    return res.json({ message: "Created user successfully", data: { user } });
  } catch (error) {
    console.error("Error creating user ", error);
    return res
      .status(500)
      .json({ message: "Internal server error creating user" });
  }
};

const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  const { name, endTime } = req.body;
  console.log("Updating user ");
  try {
    const updatedUser = await userRepo.updateUser({ id, name, endTime });
    if (!updatedUser) {
      return res
        .status(500)
        .json({ message: "Internal server error updating user" });
    }
    console.log("Updated user successfully ", updatedUser.id);
    return res.json({
      message: "Updated user successfully ",
      data: { user: updatedUser },
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: `User with ID ${id} not found` });
    }
    if (error.code === "P2002") {
      return res
        .status(409)
        .json({ message: `User with name ${name} already taken` });
    }
    console.error("Error creating user ", error);
    return res
      .status(500)
      .json({ message: "Internal server error updating user" });
  }
};

module.exports = { createUser, updateUser };
