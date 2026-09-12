import { Router } from "express";
import { handleMessage } from "../Controller/message.controller";

const router = Router();

router.post("/", handleMessage);

export default router;