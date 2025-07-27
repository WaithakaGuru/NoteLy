import { Router } from "express";
import {
  authenticateEmail,
  authenticateUsername,
  verifyCurrentPassword,
  verifyIdentifier,
  verifyJWebToken,
  verifyLoginPassword,
} from "../middlewares/exports.middleware.ts";
import {
  createJWebToken,
  logoutUser,
  registerNewUser,
  updatePassword,
} from "../controllers/exports.controller.ts";

const authRouter = Router();

authRouter.post(
  "/register",
  authenticateUsername,
  authenticateEmail,
  registerNewUser,
);
authRouter.post(
  "/login",
  verifyIdentifier,
  verifyLoginPassword,
  createJWebToken,
);
authRouter.post("/logout", verifyJWebToken, logoutUser);
authRouter.patch(
  "/password",
  verifyJWebToken,
  verifyCurrentPassword,
  updatePassword,
);

export default authRouter;
