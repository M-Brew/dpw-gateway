import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const { AUTH_BASE_URL } = process.env;
import { fetchData } from "../utils/fetchData";

const signUp = async (req: Request, res: Response) => {
  try {
    const payload = req.body ?? {};

    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/sign-up`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const payload = req.body ?? {};

    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/sign-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const adminSignIn = async (req: Request, res: Response) => {
  try {
    const payload = req.body ?? {};

    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/admin-sign-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const token = async (req: Request, res: Response) => {
  try {
    const payload = req.body ?? {};

    const response = await fetchData(`${AUTH_BASE_URL}/api/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const data = async (req: Request, res: Response) => {
  try {
    const response = await fetchData(`${AUTH_BASE_URL}/api/auth/data`, {
      headers: {
        Authorization: req.headers["authorization"],
      },
    });

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const signOut = async (req: Request, res: Response) => {
  try {
    const payload = req.body ?? {};

    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/sign-out`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const emailVerificationRequest = async (req: Request, res: Response) => {
  try {
    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/email-verification-request`,
      {
        method: "POST",
        headers: {
          Authorization: req.headers["authorization"],
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const verifyEmail = async (req: Request, res: Response) => {
  const payload = req.body ?? {};

  try {
    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/verify-email`,
      {
        method: "POST",
        headers: {
          Authorization: req.headers["authorization"],
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const getProfile = async (req: Request, res: Response) => {
  try {
    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/profile`,
      {
        headers: {
          Authorization: req.headers["authorization"],
        },
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const updateProfile = async (req: Request, res: Response) => {
  const payload = req.body ?? {};

  try {
    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/update-profile`,
      {
        method: "PATCH",
        headers: {
          Authorization: req.headers["authorization"],
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const addProfilePicture = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ error: "An error occurred. Please try again later." });
    }

    const { key, location } = req.file as any;

    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/add-profile-picture`,
      {
        method: "POST",
        headers: {
          Authorization: req.headers["authorization"],
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key, location }),
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const deleteProfilePicture = async (req: Request, res: Response) => {
  try {
    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/delete-profile-picture`,
      {
        method: "DELETE",
        headers: {
          Authorization: req.headers["authorization"],
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const passwordResetRequest = async (req: Request, res: Response) => {
  try {
    const payload = req.body ?? {};

    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/password-reset-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const resetPassword = async (req: Request, res: Response) => {
  try {
    const payload = req.body ?? {};

    const response = await fetchData(
      `${AUTH_BASE_URL}/api/auth/reset-password`,
      {
        method: "POST",
        headers: {
          Authorization: req.headers["authorization"],
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.data) {
      return res.sendStatus(response.status);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export default {
  signUp,
  signIn,
  adminSignIn,
  token,
  data,
  signOut,
  emailVerificationRequest,
  verifyEmail,
  getProfile,
  updateProfile,
  addProfilePicture,
  deleteProfilePicture,
  passwordResetRequest,
  resetPassword,
};
