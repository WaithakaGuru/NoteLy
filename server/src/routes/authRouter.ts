import { Router } from "express";
import {authenticateEmail, authenticateUsername} from "../middlewares/exports.middleware.ts";
import{ registerNewUser} from "../controllers/exports.controller.ts";

const authRouter = Router()

authRouter.post("/register", authenticateUsername, authenticateEmail, registerNewUser)

export default authRouter;