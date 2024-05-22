import express from "express";
import StudentsController from "../controllers/StudentsController";

const router = express.Router();

// Route to fetch all students
router.get("/allStudents", StudentsController.getAllStudents);

// Route to add a new student
router.post("/addStudent", StudentsController.addStudents);

// Route to update an existing student
router.put("/editStudent/:id", StudentsController.updateStudent);

// Route to delete an existing student
router.delete("/deleteStudent/:id", StudentsController.deleteStudent);

export default router;
