import { Router } from "express";
import { verifyJWebToken } from "../middlewares/exports.middleware";
import {
  deleteNote,
  getSpecificNote,
  restoreDeletedNote,
  updateNote,
  pinNote,
} from "../controllers/exports.controller";

const noteRouter = Router();
noteRouter.get("/:id", verifyJWebToken, getSpecificNote);
noteRouter.patch("/:id", verifyJWebToken, updateNote);
noteRouter.patch("/restore/:id", verifyJWebToken, restoreDeletedNote);
noteRouter.patch("/pin/:id", verifyJWebToken, pinNote);
noteRouter.delete("/:id", verifyJWebToken, deleteNote);
export default noteRouter;
