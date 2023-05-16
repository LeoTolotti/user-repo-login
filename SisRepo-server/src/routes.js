import { Router } from "express";

import auth from "./middlewares/auth";

import SessionsController from "./controllers/SessionsController";
import UserController from "./controllers/UserController";
import RepositoriesController from "./controllers/RepositoriesController";

const routes = new Router();
//Controller publico
routes.post("/sessions", SessionsController.create);
//Middlewares
routes.use(auth);

//Controller privado
//RESTFull USER
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

//RESTFull Repositorios
routes.get("/users/:user_id/repositories", RepositoriesController.index);
routes.post("/users/:user_id/repositories", RepositoriesController.create);
routes.delete(
  "/users/:user_id/repositories/:id",
  RepositoriesController.destroy
);

export default routes;
