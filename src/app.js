import express from "express";
import authRouter from "./Routes/auth.routes.js";
import cookieParser from "cookie-parser";
import musicRouter from "./Routes/music.routes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/music",musicRouter);
app.use("/api/auth", authRouter);


export default app;