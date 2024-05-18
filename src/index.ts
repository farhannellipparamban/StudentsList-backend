import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/mongodb";
import router from "./routes/studentRoute";

dotenv.config();
dbConnect();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use("/", router);

app.listen(4000, () => {
  console.log("server running successfully in port 4000");
});
