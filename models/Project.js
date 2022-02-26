const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title of your project"],
    },
    username: {
      type: String,
      required: [true, "Please enter your github username"],
    },
    language: {
      type: String,
      required: true,
    },
    framework: {
      type: String,
    },
    link: {
      type: String,
      required: [true, "Please enter the github link to your project"],
    },
    description: {
      type: String,
      required: [true, "Please provide a short description of your project"],
      minlength: 5,
      maxlength: 100,
    },
    key: {
      type: String,
      required: [
        true,
        "Please enter a secret key to enable you edit or delete this project",
      ],
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
