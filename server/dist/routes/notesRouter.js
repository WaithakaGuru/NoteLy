import { Router } from "express";
import { verifyJWebToken } from "../middlewares/exports.middleware.ts";
import { createNote, getTrashNotes, getAllUserNotes, getAllNotes, } from "../controllers/exports.controller.ts";
const notesRouter = Router();
notesRouter.post("/", verifyJWebToken, createNote);
notesRouter.get("/all", verifyJWebToken, getAllNotes);
notesRouter.get("/", verifyJWebToken, getAllUserNotes);
notesRouter.get("/trash", verifyJWebToken, getTrashNotes);
export default notesRouter;
