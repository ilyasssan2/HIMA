import { IPost } from "../interface/IPost";

export const Posts: IPost[] = [
  {
    id: 1,
    images: [
      require("../../assets/images/posts/1.jpg"),
      require("../../assets/images/posts/2.jpg"),
    ],
    title: "Hello friends",
    user: {
      id: 1,
      username: "ilias boudeka",
      image: require("../../assets/images/users/2.jpg"),
    },
  },
  {
    id: 2,
    images: [require("../../assets/images/posts/2.jpg")],
    title: "Hello friends",
    user: {
      id: 1,
      username: "ilias boudeka",
      image: require("../../assets/images/users/1.jpg"),
    },
  },
  {
    id: 3,
    images: [require("../../assets/images/posts/1.jpg")],
    title: "Hello friends",
    user: {
      id: 2,
      username: "ahmed blabla",
      image: require("../../assets/images/users/2.jpg"),
    },
  },
];
