import express from "express";
import cors from "cors";
import quoteRoutes from "./routes/quoteRoutes.js";


const app = express(); 
const port = 4000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",}));

app.use("/api/quotes", quoteRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Hello, World!"
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

