import "dotenv/config";
import express from "express";
import productsRouter from "./src/routes/products.router.js";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", productsRouter);

app.get("/", (req, res) => {
  res.json({ message: "API Rest en Node.js" });
});

app.listen(port, () => console.log(`http://localhost:${port}`));