import mongoose from "mongoose";

const StudentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    enrollNo: {
      type: String,
      // required:true,
    },
    doAdmission: {
      type: String,
      // required:true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("students", StudentsSchema);
