import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userServices";
import { Request, Response } from "express";
import { IUserRepository, IUserService, IUser } from "types/userTypes";

//inyeccion de dependencia
const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);
//GET
export const findUsers = async (req: Request, res: Response) => {
  try {
  const users = await userService.findUsers();
  if(users.length === 0){
    res.status(404).json({ message: "No hay usuarios." })
  }
  res.json(users);

  } catch (error) {
    console.log("error => ", error);
    res.status(500).json(error);
  }
};
//GET POR ID
export const findUsersById = async (req: Request, res: Response) => {
  try {
    const users = await userService.findUsersById(req.params.id);
    if (!users){
      res.status(404).json({ message: "Usuario no encontrado." })
    } 
    res.json(users);

  } catch (error) {
    console.log("error => ", error);
    res.status(500).json(error);
  }
};
//CREATE
export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser: IUser = req.body;
    const result = await userService.createUser(newUser);
    res.status(201).json(result);

  } catch (error) {
    console.log("error => ", error);
    res.status(400).json(error);
  }
};
//UPDATE
export const updateUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.updateUser(req.params.id, req.body);
    if (!users) {
    res.status(404).json({ message: "Usuario no encontrado." });
    }
    res.json(users);

  } catch (error) {
    console.log("error => ", error);
    res.status(500).json(error);
  }
};
//DELETE
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.deleteUser(req.params.id);
    if (!users) {
    res.status(404).json({ message: "Usuario no encontrado." });
    }
    res.json(users);

  } catch (error) {
    console.log("error => ", error);
    res.status(500).json(error);
  }
};