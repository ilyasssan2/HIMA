import { IUser } from "./IUser";

export interface IPost {
  id: number;
  title: string;
  images: string[];
  user: IUser;
}
