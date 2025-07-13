import type { NextFunction, Request, Response } from "express";

import express from "express";

const router = express.Router();

router.get(
  "/",
  (req: Request<unknown, unknown, unknown, { name?: string }>, res) => {
    res.json({ info: `Hello, ${req.query.name || "human"}!` });
  },
);

type PostCalcBody = { op: "add" | "sub"; a: number; b: number };

function validatePostCalcBody(
  body?: Partial<PostCalcBody>,
): body is PostCalcBody {
  if (!body) {
    return false;
  }

  return body.op != null && body.a != null && body.b != null;
}

router.post(
  "/calc",
  (req: Request<unknown, any, Partial<PostCalcBody>>, res) => {
    if (!validatePostCalcBody(req.body)) {
      res.status(400).json({ error: "Bad request input" });
      return;
    }

    if (req.body.op === "add") {
      res.send(req.body.a + req.body.b);
    } else if (req.body.op === "sub") {
      res.send(req.body.a - req.body.b);
    } else {
      res.status(400).json({ error: `Unsupported operation ${req.body.op}` });
    }
  },
);

// Global app error handler
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  res.status(500).json({
    error: "Internal Server Error",
  });
});

export { router };
