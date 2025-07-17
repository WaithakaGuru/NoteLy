import express, {Request, Response} from "express";
import CORS from 'cors';
import {configDotenv} from 'dotenv'
import userRouter from "./routes/userRouter.ts";
import entriesRouter from "./routes/entriesRouter.ts";
import entryRouter from "./routes/entryRouter.ts";
import authRouter from "./routes/authRouter.ts";

configDotenv()

const app = express();
const port = process.env.PORT

app.use(express.json());

app.get("/", (_req: Request, res: Response)=>{
    res.send("Welcome to the Notely Server")
})

app.use(CORS({
    origin: ["http://localhost:5173/",],
    credentials: true
}))

app.use("/api/auth", authRouter);
app.use("/api/entries", entriesRouter);
app.use("/api/entry", entryRouter);
app.use("/api/user", userRouter)

app.listen(5567, `Server listening on port ${port}`)
