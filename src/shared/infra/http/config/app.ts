import cors from "cors";
import express from "express";

import { setupRoutes } from "./routes";

export const app = express();

setupRoutes(app);
app.use(cors());
