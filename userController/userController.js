const Model = require("../userModel/userModel");
const jwt = require("jsonwebtoken");
const secretkey = "secretkey";
const bcrypt = require("bcrypt");

module.exports.getData = async (req, res) => {
  // const tasks = await Model.find()
  // res.send(tasks)
  user={
    name:"Chaitanya Avinash Ubale",
    age:21,  
  }
  res.send(user);
 
};

module.exports.saveData = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, designation, password, address } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the hashed password
    const newUser = new Model({
      fullName,
      email,
      mobileNumber,
      designation,
      password: hashedPassword,
      address,
    });

    // Save the new user to the database
    await newUser.save();

    return res.status(200).json({
      status: 'success',
      message: 'User registered successfully',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while registering the user',
      error: error.message,
    });
  }
};




module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user with the given email exists
    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(401).json({ status: "error", message: "Invalid credentials" });
    }

    // Compare hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ status: "error", message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, secretkey, { expiresIn: "1h" });

    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Something went wrong!" });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.userId; // Get the user ID from the request URL
    const updates = req.body; // Get the updates from the request body

    // Update the user information using the Mongoose model
    const updatedUser = await Model.findByIdAndUpdate(userId, updates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while updating the user',
      error: error.message,
    });
  }
};


