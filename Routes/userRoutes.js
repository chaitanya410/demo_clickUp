const {Router} = require("express");    

const {getUsers,registerUsers,loginUsers,updateUsers} =require("../Controllers/userControllers")

const router = Router();
router.get("/getUsers",getUsers);
router.post("/registerUsers", registerUsers);
router.post("/loginUsers", loginUsers);
router.post("/updateUsers/:userId", updateUsers);

module.exports=router;