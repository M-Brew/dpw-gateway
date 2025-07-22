import { Router, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { validateAuth } from "../validation/authValidation";

const { WALLET_MANAGEMENT_BASE_URL } = process.env;

const router = Router();

router.post("/create", validateAuth, async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const response = await fetch(
      `${WALLET_MANAGEMENT_BASE_URL}/api/wallets/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: req.user.id, ...payload }),
      }
    );
    const jsonResponse = await response.json();

    return res.status(response.status).json(jsonResponse);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const response = await fetch(
      `${WALLET_MANAGEMENT_BASE_URL}/api/wallets/${userId}`
    );
    const jsonResponse = await response.json();

    return res.status(response.status).json(jsonResponse);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.post("/update", validateAuth, async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const response = await fetch(
      `${WALLET_MANAGEMENT_BASE_URL}/api/wallets/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: req.user.id, ...payload }),
      }
    );
    const jsonResponse = await response.json();

    return res.status(response.status).json(jsonResponse);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

export default router;
