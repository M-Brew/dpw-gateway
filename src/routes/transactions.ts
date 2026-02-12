import { Router } from "express";

import transactionController from "../controllers/transactionController";
import { validateAdmin, validateAuth } from "../validation/authValidation";

const router = Router();

router.post("/p2p-transfer", validateAuth, transactionController.p2pTransfer);

// router.post("/deposit", validateAuth, transactionController.deposit);

router.get("/my-transactions", validateAuth, transactionController.getMyTransactions);

router.get("/user/:userId", validateAdmin, transactionController.getUserTransactions);

router.get("/:transactionId", validateAuth, transactionController.getTransaction);

export default router;
