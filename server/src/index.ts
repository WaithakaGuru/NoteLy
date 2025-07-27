import express, { Request, Response } from "express";
import CORS from "cors";
import { configDotenv } from "dotenv";
import userRouter from "./routes/userRouter.ts";
import notesRouter from "./routes/notesRouter.ts";
import noteRouter from "./routes/noteRouter.ts";
import authRouter from "./routes/authRouter.ts";

configDotenv({ path: "./.env" });

const app = express();
const port = process.env.PORT_NUMBER;

app.get("/", (_req: Request, res: Response) =>
  res.send("Welcome to the Notely Server"),
);

app.use(express.json());

app.use(
  CORS({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);
app.use("/api/note", noteRouter);
app.use("/api/user", userRouter);

app.listen(5567, () => {
  console.log(`Server running  on port ${port}`);
});
