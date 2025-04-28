import { Router } from "express";
import { createUser, deleteUser, findUsers, findUsersById, updateUser } from "@controllers/usersControllers";
import { loginUser, registerUser } from "@controllers/auth/authControllers";
import { verifyToken } from "middlewares/auth";
import { createTrucks, deleteTrucks, findTrucks, findTrucksById, updateTrucks } from "@controllers/trucksControllers";

const router = Router();

export default () => {
  // Auth Routes
  router.post("/auth/register", registerUser)
  router.post("/auth/login", loginUser)
  // Users Routes
  router.get("/users",verifyToken, findUsers);
  router.get("/users/:id",verifyToken findUsersById);
  router.post("/users",verifyToken, createUser);
  router.put("/users/:id",verifyToken, updateUser);
  router.delete("/users/:id",verifyToken, deleteUser);
  //Trucks Routes
  router.get("/trucks", findTrucks);
  router.get("/trucks/:id", findTrucksById);
  router.post("/trucks",verifyToken, createTrucks);
  router.put("/trucks/:id",verifyToken, updateTrucks);
  router.delete("/trucks/:id",verifyToken, deleteTrucks);

  return router;
};