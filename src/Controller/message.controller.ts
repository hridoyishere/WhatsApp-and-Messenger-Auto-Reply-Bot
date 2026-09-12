import { Request, Response } from "express";
import { generateReply } from "../Service/reply.service";

export const handleMessage = (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: "Message is required",
      });
    }

    const reply = generateReply(message);

    return res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
