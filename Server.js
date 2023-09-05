const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./userRoutes/userRoute");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(express.json()); // Use express.json() as a function
app.use(cors());

mongoose
  .connect("mongodb+srv://chaitanya_ubale:chaitanya123@cluster0.nmrdohr.mongodb.net/ClickUp?")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
