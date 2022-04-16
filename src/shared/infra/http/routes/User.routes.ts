import { Router } from "express";

import { adaptRoute } from "../adapterRoutes";
import { makeCreateUserController } from "../factories";

export default (router: Router): void => {
  router.post("/users", adaptRoute(makeCreateUserController()));
};
