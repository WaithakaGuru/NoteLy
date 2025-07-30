import { Router } from "express";
import {
  verifyJWebToken,
  verifyUniqueEmail,
  verifyUniqueUsername,
} from "../middlewares/exports.middleware";
import {
  updateUserInfo,
  getUserInfo,
  getUploadInfo,
  updateUserAvatar
} from "../controllers/exports.controller";

const userRouter = Router();
userRouter.get("/", verifyJWebToken, getUserInfo);
userRouter.get("/upload", verifyJWebToken, getUploadInfo);
userRouter.patch(
  "/avatar",
  verifyJWebToken,
  updateUserAvatar,
);
userRouter.patch(
  "/",
  verifyJWebToken,
  verifyUniqueUsername,
  verifyUniqueEmail,
  updateUserInfo,
);

export default userRouter;
