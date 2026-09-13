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

    const latestPlan = await prisma.training_plans.findFirst({
      where: { user_id: userId },
      orderBy: { created_at: "desc" },
      select: { version: true },
    });

    const nextVersion = latestPlan ? latestPlan.version + 1 : 1;

    let planJson;

    const planText = JSON.stringify(planJson, null, 2);
    const newPlan = await prisma.training_plans.creat({
      data: { user_id: userId },
      plan_json: planJson as any,
      plan_text: planText,
      version: nextVersion,
    });

    return res.json({
      id: newPlan.id,
      version: nextVersion,
      createdAt: newPlan.created_at,
    });
  } catch (error) {
    console.error("Error generating plans ", error);
    res.status(500).json({ error: "Failed to generate plan" });
  }
});
