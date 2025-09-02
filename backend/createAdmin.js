import mongoose from "mongoose";
import dotenv from "dotenv";
import EmployeesModel from "./src/models/employee.js";

dotenv.config();

async function createAdmin() {
  await mongoose.connect(process.env.DB_URI);
  const exists = await EmployeesModel.findOne({ email: process.env.ADMIN_EMAIL });
  if (!exists) {
    await EmployeesModel.create({
      name: "Administrador",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: "admin"
    });
    console.log("Usuario admin creado correctamente.");
  } else {
    console.log("El usuario admin ya existe.");
  }
  mongoose.disconnect();
}

createAdmin();
