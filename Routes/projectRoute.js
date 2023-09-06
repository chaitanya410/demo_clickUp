const { Router } = require("express");
const { getProjects, addProject,updateProject } = require("../Controllers/projectController");

const router = Router();

router.get("/getProjects", getProjects);
router.post("/addProject", addProject);
router.post("/updateProject/:projectId", updateProject);

module.exports = router;