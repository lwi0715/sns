import { client } from "./sanity";

type LoggedInUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({
  id,
  email,
  name,
  username,
  image,
}: LoggedInUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    email,
    name,
    username,
    image,
    following: [],
    follower: [],
    bookmarked: [],
  });
}
