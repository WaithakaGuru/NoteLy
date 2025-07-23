import { Router } from "express";
import { verifyJWebToken } from "../middlewares/exports.middleware.ts";
import {
  createNote,
  getTrashNotes,
  getUserNotes,
} from "../controllers/exports.controller.ts";

const notesRouter = Router();

notesRouter.post("/", verifyJWebToken, createNote);
notesRouter.get("/", verifyJWebToken, getUserNotes);
notesRouter.get("/trash", verifyJWebToken, getTrashNotes);

export default notesRouter;
