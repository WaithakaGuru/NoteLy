import { Router } from "express";
import {verifyJWebToken, verifyUniqueEmail, verifyUniqueUsername} from "../middlewares/exports.middleware.ts";
import {updateUserInfo} from "../controllers/exports.controller.ts";

const userRouter = Router();
userRouter.patch("/", verifyJWebToken, verifyUniqueUsername, verifyUniqueEmail, updateUserInfo )

export default userRouter;