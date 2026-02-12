import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { fetchData } from "../utils/fetchData";

const { TRANSACTION_PROCESSING_BASE_URL } = process.env;

const p2pTransfer = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const response = await fetchData(
      `${TRANSACTION_PROCESSING_BASE_URL}/api/transactions/p2p-transfer`,
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

const deposit = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const response = await fetchData(
      `${TRANSACTION_PROCESSING_BASE_URL}/api/transactions/deposit`,
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

const getTransaction = async (req: Request, res: Response) => {
  try {
    const { transactionId } = req.params;

    const response = await fetchData(
      `${TRANSACTION_PROCESSING_BASE_URL}/api/transactions/${transactionId}`
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const getMyTransactions = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;

    const response = await fetchData(
      `${TRANSACTION_PROCESSING_BASE_URL}/api/transactions/user/${userId}`
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const getUserTransactions = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const response = await fetchData(
      `${TRANSACTION_PROCESSING_BASE_URL}/api/transactions/user/${userId}`
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export default {
  p2pTransfer,
  deposit,
  getTransaction,
  getMyTransactions,
  getUserTransactions
}