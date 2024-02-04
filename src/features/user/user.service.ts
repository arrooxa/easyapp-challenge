import Users from "./user.model";

async function getUserById(id: string) {
  const user = await Users.findById(id, "-password");

  return user;
}

export { getUserById };
