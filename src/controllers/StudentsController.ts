import express from "express";
import { Request, Response } from "express";
import studentsModel from "../model/studentsModel";

class StudentController {
  // Controller for fetching all students
  getAllStudents = async (req: Request, res: Response) => {
    try {
      const students = await studentsModel.find();
      return res.status(200).json({ data: students });
    } catch (error) {
      console.error("An error occurred while updating student details:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

  // Controller for adding a new student
  addStudents = async (req: Request, res: Response) => {
    try {
      const { name, email, mobile, enrollNo, doAdmission } = req.body;
      const student = new studentsModel({
        name,
        email,
        mobile,
        enrollNo,
        doAdmission,
      });
      await student.save();
      return res
        .status(201)
        .json({ message: "Student added successfully", data: student });
    } catch (error) {
      console.error("An error occurred while adding student :", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

  // Controller for updating an existing student
  updateStudent = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, email, mobile, enrollNo, doAdmission } = req.body;
      const student = await studentsModel.findById(id);
      if (student) {
        student.name = name;
        student.email = email;
        student.mobile = mobile;
        student.enrollNo = enrollNo;
        student.doAdmission = doAdmission;
        await student.save();
        return res.status(200).json({
          message: "Student details successfully updated",
          data: student,
        });
      } else {
        return res
          .status(404)
          .json({ message: "Student not found. Unable to update details." });
      }
    } catch (error) {
      console.error("An error occurred while updating student details:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

  // Controller for deleting an existing student
  deleteStudent = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await studentsModel.findByIdAndDelete({ _id: id });
      return res.status(200).json({ message: "Student successfully deleted" });
    } catch (error) {
      console.error("An error occurred while deleting student :", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
}

export default new StudentController();
