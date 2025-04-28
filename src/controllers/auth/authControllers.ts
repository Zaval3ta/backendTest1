import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userServices";
import { Request, Response } from "express";
import { IUser, IUserRepository, IUserService } from "types/userTypes";
import jwt from "jsonwebtoken";

//inyeccion de dependencia
const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const registerUser = async (req: Request, res: Response) => {
  try {
    const {email}: IUser = req.body;
    const userExists = await userService.findUsersByEmail(email);
    if(userExists){
      res.status(400).json({message: "El correo/email ya existe."});
    } 
    const newUser = await userService.createUser(req.body);

    res.status(201).json(newUser);
  } catch (error) {
    console.log('error => ', error);
    res.status(500).json(error)
  }
};

export const loginUser =  async (req: Request, res: Response) => {
  try {
    const {email, password}:IUser = req.body;

    const user = await userService.findUsersByEmail(email);
    if(!user) {
      res.status(400).json({message: "Usuario o contraseña incorrecto."})
    }

    const comparePass = await user?.comparePassword(password)
    if(!comparePass) {
      res.status(400).json({message: "Usuario o contraseña incorrecto."})
    }
    //Token JWT
    const jwtSecret = process.env.JWT_SECRET as string;
    const token = jwt.sign({id: user?._id, email: user?.email, username: user?.username}, jwtSecret, {expiresIn: "1h"});

    res.json(token);
  } catch (error) {
    console.log('error => ', error);
    res.status(500).json(error);
  }
}; 