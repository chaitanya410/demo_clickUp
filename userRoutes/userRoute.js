const {Router} = require("express");    

const {getUsers,registerUsers,loginUsers,updateUsers} =require("../userController/userController")

const router = Router();
router.get("/getUsers",getUsers);
router.post("/registerUsers", registerUsers);
router.post("/loginUsers", loginUsers);
router.post("/updateUsers/:userId", updateUsers); // Add the update route


module.exports=router;