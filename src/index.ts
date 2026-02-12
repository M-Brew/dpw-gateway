import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth";
import walletRoutes from "./routes/wallet";
import transactionRoutes from "./routes/transactions";

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/wallets", walletRoutes);
app.use("/api/transactions", transactionRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
