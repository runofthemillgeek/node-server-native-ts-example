import express from "express";

import { router } from "./router.ts";
import { configure } from "./configure.ts";

const PORT = Number(process.env.PORT);

const app = configure(express());

app.use(router);

app.listen(PORT, "::", () => {
  console.log(`Listening on ${PORT}`);
});
