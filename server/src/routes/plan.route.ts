import { Router, type Request, type Response } from "express";

export const planRouter = Router();

planRouter.post("/", async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error("Error generating plans ", error);
    res.status(500).json({ error: "Failed to generate plan" });
  }
});
