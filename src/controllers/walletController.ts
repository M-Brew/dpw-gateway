import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { fetchData } from "../utils/fetchData";

const { WALLET_MANAGEMENT_BASE_URL, AUTH_BASE_URL } = process.env;

const createWallet = async (req: Request, res: Response) => {
  try {
    const authResponse = await fetchData(
      `${AUTH_BASE_URL}/api/auth/profile`,
      {
        headers: {
          Authorization: req.headers["authorization"],
        },
      }
    );

    if (!authResponse.data) {
      return res.sendStatus(authResponse.status);
    }

    const response = await fetchData(
      `${WALLET_MANAGEMENT_BASE_URL}/api/wallets/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: authResponse.data.id,
          userName: `${authResponse.data.firstName} ${authResponse.data.lastName}`,
          userImage: authResponse.data.profilePicture
        }),
      }
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const getMyWallet = async (req: Request, res: Response) => {
  try {
    const response = await fetchData(
      `${WALLET_MANAGEMENT_BASE_URL}/api/wallets/user/${req.user.id}`
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const getWallet = async (req: Request, res: Response) => {
  try {
    const { walletId } = req.params;

    const response = await fetchData(
      `${WALLET_MANAGEMENT_BASE_URL}/api/wallets/${walletId}`
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const getUserWallet = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const response = await fetchData(
      `${WALLET_MANAGEMENT_BASE_URL}/api/wallets/user/${userId}`
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const updateWallet = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const response = await fetchData(
      `${WALLET_MANAGEMENT_BASE_URL}/api/wallets/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: req.user.id, ...payload }),
      }
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const updateWalletStatus = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const response = await fetchData(
      `${WALLET_MANAGEMENT_BASE_URL}/api/wallets/updateStatus`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export default {
  createWallet,
  getMyWallet,
  getWallet,
  getUserWallet,
  updateWallet,
  updateWalletStatus,
}