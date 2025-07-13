import type { Application } from "express";

import bodyParser from "body-parser";
import cors from "cors";

export function configure(app: Application) {
  app.use(cors());
  app.use(bodyParser.json());

  return app;
}
