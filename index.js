import "dotenv/config";
import bodyParser from 'body-parser';
import cors from 'cors';
import express from "express";

import { auth } from "./src/middlewares/auth.middleware.js";
import { notFoundMiddleware } from "./src/middlewares/notFound.middleware.js";
import productsRouter from "./src/routes/products.router.js";
import authRouter from "./src/routes/auth.router.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRouter);
app.use("/api/products", auth, productsRouter);
app.use(notFoundMiddleware);

app.get("/", (req, res) => {
  res.json({ message: "API Rest en Node.js" });
});

app.listen(port, () => console.log(`http://localhost:${port}`));