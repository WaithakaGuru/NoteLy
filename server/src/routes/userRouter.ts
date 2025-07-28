import { Router } from "express";
import {
  verifyJWebToken,
  verifyUniqueEmail,
  verifyUniqueUsername,
} from "../middlewares/exports.middleware";
import {
  updateUserInfo,
  getUserInfo,
} from "../controllers/exports.controller";

const userRouter = Router();
userRouter.get("/", verifyJWebToken, getUserInfo);
userRouter.patch(
  "/",
  verifyJWebToken,
  verifyUniqueUsername,
  verifyUniqueEmail,
  updateUserInfo,
);

export default userRouter;
