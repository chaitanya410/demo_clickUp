
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./Routes/userRoute");
const projectRoutes = require("./Routes/projectRoute"); 

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://chaitanya_ubale:chaitanya123@cluster0.nmrdohr.mongodb.net/ClickUp?")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api/users", userRoutes); 
app.use("/api/projects", projectRoutes); 

app.listen(PORT, () => console.log(`Listening at ${PORT}`));

