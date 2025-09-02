// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import customersRoutes from "./src/routes/customers.js";
import employeeRoutes from "./src/routes/employees.js";
import branchesRoutes from "./src/routes/branches.js";
import reviewsRoutes from "./src/routes/reviews.js";
import registerEmployeesRoutes from "./src/routes/registerEmployees.js";
import loginRoutes from "./src/routes/login.js";
import cookieParser from "cookie-parser";
import logoutRoutes from "./src/routes/logout.js";
import registerClients from "./src/routes/registerClients.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";
import blogRoutes from "./src/routes/blog.js";
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";
import salesRoutes from "./src/routes/sales.js";

// Creo una constante que es igual a la libreria que importé
const app = express();

// Middleware para parsear JSON en el body
app.use(express.json());

// Middleware para parsear cookies
app.use(cookieParser());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/products", validateAuthToken(["admin"]), productsRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/reviews", reviewsRoutes);

app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);

app.use("/api/registerClients", registerClients);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);

app.use("/api/blog", blogRoutes);

app.use("/api/sales", salesRoutes);

// Exporto la constante para poder usar express en otros archivos
export default app;
