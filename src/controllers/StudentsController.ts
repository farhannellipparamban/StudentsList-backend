import express from "express";
import { Request, Response } from "express";
import studentsModel from "../model/studentsModel";

class StudentController {
  getAllStudents = async (req: Request, res: Response) => {
    try {
      const students = await studentsModel.find();
      return res.status(200).json({ data: students });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

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
      return res.status(201).json({ message: "Student Added", data: student });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

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
        return res
          .status(200)
          .json({ message: "Student Updated", data: student });
      } else {
        return res.status(404).json({ message: "Student not found" });
      }
    } catch (error) {
      return res.status(400).json({ message: "Error updating student", error });
    }
  };

  deleteStudent = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await studentsModel.findByIdAndDelete({ _id: id });
      return res.status(200).json({ message: "Student Deleted" });
    } catch (error) {
      return res.sendStatus(400);
    }
  };
}

export default new StudentController();
