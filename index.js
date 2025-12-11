import "dotenv/config";
import bodyParser from 'body-parser';
import cors from 'cors';
import express from "express";

import { notFoundMiddleware } from "./src/middlewares/notFound.middleware.js";
import productsRouter from "./src/routes/products.router.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", productsRouter);
app.use(notFoundMiddleware);

app.get("/", (req, res) => {
  res.json({ message: "API Rest en Node.js" });
});

app.listen(port, () => console.log(`http://localhost:${port}`));