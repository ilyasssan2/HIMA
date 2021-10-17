import { IUser } from "./IUser";

export interface IMessage {
  id: number;
  message: string;
  createdAt: Date;
  user: IUser;
}
