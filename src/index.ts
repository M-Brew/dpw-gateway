import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth";
import walletRoutes from "./routes/wallet";

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/wallet", walletRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
