import { Router, type Request, type Response } from "express";
import { prisma } from "../lib/prisma";

export const planRouter = Router();

planRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      res.status(400).json({ error: "User Id Is required" });
    }

    const profile = await prisma.user_profiles.findUnique({
      where: { user_id: userId },
    });

    if (!profile) {
      return res
        .status(400)
        .json({ error: "User profile not found complete Onboarding first" });
    }
  } catch (error) {
    console.error("Error generating plans ", error);
    res.status(500).json({ error: "Failed to generate plan" });
  }
});
