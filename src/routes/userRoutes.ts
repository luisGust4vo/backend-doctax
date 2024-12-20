import express, { Router, Application, Request, Response } from "express";
import { UserController } from "../controllers/userController";

const router = Router();
const app: Application = express();
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  UserController.create(req, res);
});

export default router;
