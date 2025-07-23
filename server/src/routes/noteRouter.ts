import { Router } from "express";
import { verifyJWebToken } from "../middlewares/exports.middleware.ts";
import {
  deleteNote,
  getSpecificNote,
  restoreDeletedNote,
  updateNote,
} from "../controllers/exports.controller.ts";

const noteRouter = Router();
noteRouter.get("/:id", verifyJWebToken, getSpecificNote);
noteRouter.patch("/:id", verifyJWebToken, updateNote);
noteRouter.patch("/restore/:id", verifyJWebToken, restoreDeletedNote);
noteRouter.delete("/:id", verifyJWebToken, deleteNote);
export default noteRouter;
