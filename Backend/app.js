const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();

// Used cors to allow cross-origin requests
app.use(cors());

const connectToDb = require("./db/db");
connectToDb();
const userRoutes = require("./routes/user.routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);

module.exports = app;
