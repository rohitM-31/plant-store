import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import plantRoutes from "./routes/plantRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/plants", plantRoutes);

app.get("/", (req, res) => {
  res.send(" Plant Catalog API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
