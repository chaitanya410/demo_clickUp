const {Router} = require("express");    

const {getData,saveData,login,updateUser} =require("../userController/userController")

const router = Router();
router.get("/getUser",getData);
router.post("/registerUser", saveData);
router.post("/loginUser", login);
router.put("/updateUser/:userId", updateUser); // Add the update route


module.exports=router;