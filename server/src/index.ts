import express, { Request, Response } from "express";
import CORS from "cors";
import { configDotenv } from "dotenv";
import userRouter from "./routes/userRouter";
import notesRouter from "./routes/notesRouter";
import noteRouter from "./routes/noteRouter";
import authRouter from "./routes/authRouter";

configDotenv({ path: "./.env" });

const app = express();
const port = process.env.PORT_NUMBER;

app.get("/ping", (req: Request, res: Response) =>{
  const requestSecret = req.headers["secret"];
  const secret = process.env.Secret;
  if(requestSecret !== secret){
    res.status(403).send("Access is forbidden");;
    return;
  }
  res.status(200).send("Welcome to the Notely Server")
});

app.use(express.json());

app.use(
  CORS({
    origin: ["http://localhost:5173", "https://note-ly-xi.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);
app.use("/api/note", noteRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server running  on port ${port}`);
});
