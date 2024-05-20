import express, { json } from "express";
import cors from "cors";
import { errorHandler } from "./middleware/error-handler";
import { notFound } from "./middleware/not-found";
import { router } from "./routes";
import { configEnv } from "./config";

configEnv();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(json());
app.use("/api/v1", router);
app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`App is running: http://localhost:${PORT}`);
});
