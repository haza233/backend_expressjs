import express from "express";
import db from "./config/database.js";
import dotenv from "dotenv";
import router from "./router/index.js";
dotenv.config();
const app = express();
try {
  await db.authenticate();
  console.log("Database Conneted..");
} catch (error) {
  console.log(error);
}
app.use(express.json());
app.use(router);
app.listen(5000, () => console.log("server running at port 5000"));
