
import express from "express";
import { uploadMusic } from "../Controller/music.controller.js";

const musicRouter = express.Router();

musicRouter.post("/music", uploadMusic);

export default musicRouter;