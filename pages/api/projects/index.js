import dbConnect from "../../../db/dbConnect";
import Project from "../../../models/project";

dbConnect();

const handler = async (req, res) => {
  const query = req.query;

  switch (req.method) {
    case "GET":
      try {
        if (query) {
          const projects = await Project.find(query).sort({
            updatedAt: 1,
          });
          res.status(200).json({ success: true, projects });
        } else {
          const projects = await Project.find({}).sort({
            updatedAt: 1,
          });
          res.status(200).json({ success: true, projects });
        }
      } catch (err) {
        res.status(400).json(err.message);
      }
      break;
    case "POST":
      try {
        const project = await Project.create(req.body);
        res.status(201).json({ success: true, project });
      } catch (err) {
        res.status(400).json(err.message);
      }
      break;

    default:
      break;
  }
};

export default handler;
