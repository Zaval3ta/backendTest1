import {IUser} from "../../src/types/userTypes";

declare global{
  namespace Express {
    interface Request {
      currentUser: IUser;
    }
  }
}