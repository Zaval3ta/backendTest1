import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userServices";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IUser, IUserRepository, IUserService } from "types/userTypes";

//inyeccion de dependencia
const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const jwtSecret = process.env.JWT_SECRET as string;
  const token = req.headers.authorization?.replace(/^Bearer\s+/, "") as string; //Regex para borrar Bearer y el espacio a la derecha

  try {
    const verify = jwt.verify(token, jwtSecret) as IUser;

    const getUSer = await userService.findUsersById(verify.id);

    if(!getUSer){
      return res.status(400); 
    }
    
    req.currentUser = getUSer;
    
    next();
  } catch (error: any) {
    console.log('error => ', error);
    res.status(401).send(error.message);
  }

};