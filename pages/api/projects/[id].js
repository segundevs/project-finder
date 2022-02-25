import dbConnect from "../../../db/dbConnect";
import Project from "../../../models/project";

dbConnect();

const handler = async (req, res) => {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      try {
        const project = await Project.findById(id);
        if (!project) {
          res
            .status(400)
            .json({ success: false, message: "This project does not exist" });
        }
        res.status(200).json({ success: true, project });
      } catch (err) {
        res.status(400).json(err.message);
        console.log(err.message);
      }
      break;

    case "DELETE":
      try {
        const projectKey = req.body.key;
        const project = await Project.findById(id);

        if (projectKey === project.key) {
          await project.delete();
          res.status(200).json({ success: true, message: "project deleted" });
        } else {
          res.status(401).json({
            success: false,
            message:
              "You are not authorized to modify this project. Please provide a valid key",
          });
        }
      } catch (err) {
        res.status(400).json(err.message);
        console.log(err.message);
      }
      break;

    case "PATCH":
      try {
        const projectKey = req.body.key;
        const project = await Project.findById(id);

        if (projectKey === project.key) {
          const newProject = await Project.findByIdAndUpdate(
            project._id,
            { $set: req.body },
            { new: true }
          );
          res.status(200).json({ success: true, newProject });
        } else {
          res.status(401).json({
            success: false,
            message:
              "You are not authorized to modify this project. Please provide a valid key",
          });
        }
      } catch (err) {
        res.status(400).json(err.message);
        console.log(err.message);
      }
      break;

    default:
      break;
  }
};

export default handler;
