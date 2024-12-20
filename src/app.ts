import express from "express";
import userRoutes from "./routes/userRoutes";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = express();

app.use(express.json());
// app.use(authMiddleware);

app.use("/users", userRoutes);

export default app;
