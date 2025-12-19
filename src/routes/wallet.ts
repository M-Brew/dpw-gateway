import { Router } from "express";

import walletController from "../controllers/walletController";
import { validateAdmin, validateAuth } from "../validation/authValidation";

const router = Router();

router.post("/create", validateAuth, walletController.createWallet);

router.get("/my-wallet", validateAuth, walletController.getMyWallet);

router.get("/:walletId", validateAdmin, walletController.getWallet);

router.get("/user/:userId", validateAdmin, walletController.getUserWallet);

router.get("/wallet/:nameOrWalletCode", validateAuth, walletController.getWalletByNameOrWalletCode);

router.post("/update", validateAuth, walletController.updateWallet);

router.patch("/update-status", validateAdmin, walletController.updateWalletStatus);

router.patch("/add-contact", validateAuth, walletController.addContact);

router.patch("/remove-contact", validateAuth, walletController.removeContact);

export default router;
