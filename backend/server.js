import express from "express";
import cors from "cors";
import maps from "./api/db.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/maps", maps);
app.use("*", (req, res) => res.status(404).json({ error: "Page not found" }));

export default app