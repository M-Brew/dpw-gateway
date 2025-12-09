import { Router } from "express";

import authController from "../controllers/authController";
import { upload } from "../middlewares/uploadFile";
import { validateAuth } from "../validation/authValidation";

const router = Router();

router.post("/sign-up", authController.signUp);

router.post("/sign-in", authController.signIn);

router.post("/admin-sign-in", authController.adminSignIn);

router.post("/token", authController.token);

router.get("/data", authController.data);

router.post("/sign-out", authController.signOut);

router.post(
  "/email-verification-request",
  authController.emailVerificationRequest
);

router.post("/verify-email", authController.verifyEmail);

router.get("/profile", authController.getProfile);

router.patch("/update-profile", authController.updateProfile);

router.post("/add-profile-picture", validateAuth, upload.single("profilePicture"), authController.addProfilePicture);

router.delete("/delete-profile-picture", authController.deleteProfilePicture);

router.post("/password-reset-request", authController.passwordResetRequest);

router.post("/reset-password", authController.resetPassword);

export default router;
