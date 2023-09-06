

const Project = require("../Models/projectModel");

module.exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports.addProject = async (req, res) => {
  try {
    const { name } = req.body;
    const newProject = new Project({ name });
    await newProject.save();
    res.status(201).json({ message: 'Project created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports.updateProject = async (req, res) => {
    try {
      const { projectId } = req.params;
      const { name } = req.body;
  
      const updatedProject = await Project.findByIdAndUpdate(
        projectId,
        { name },
        { new: true }
      );
  
      if (!updatedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      res.json({ message: 'Project updated successfully', project: updatedProject });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
