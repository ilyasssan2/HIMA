import { IMessage } from "../interface/IMessage";

export const Messages: IMessage[] = [
  {
    id: 1,
    message: "Hello friends",
    createdAt: new Date(),
    user: {
      id: 1,
      username: "ilias boudeka",
      image: require("../../assets/images/users/2.jpg"),
    },
  },
  {
    id: 2,
    message: "Hello friends",
    createdAt: new Date(),

    user: {
      id: 1,
      username: "ilias boudeka",
      image: require("../../assets/images/users/1.jpg"),
    },
  },
  {
    id: 3,
    message: "Hello friends",
    createdAt: new Date(),
    user: {
      id: 2,
      username: "ahmed blabla",
      image: require("../../assets/images/users/2.jpg"),
    },
  },
];
