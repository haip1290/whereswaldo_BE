require("dotenv").config();
const express = require("express");
const cors = require("cors");

const challengeRouter = require("./routers/challengeRouter.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "hello world!!!" }));

app.use("/challenge", challengeRouter);

app.use((error, req, res, next) => {
  console.error("Internal server error", error);
  const errorMessage = error?.message || "Internal server error";
  const statusCode = error.status || 500;
  return res.status(statusCode).json({ message: errorMessage });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
