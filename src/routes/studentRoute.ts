import express from "express";
import StudentsController from "../controllers/StudentsController";

const router = express.Router();

router.get("/allStudents", StudentsController.getAllStudents);
router.post("/addStudent", StudentsController.addStudents);
router.put("/editStudent/:id", StudentsController.updateStudent);
router.delete("/deleteStudent/:id", StudentsController.deleteStudent);

export default router;
