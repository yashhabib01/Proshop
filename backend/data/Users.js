import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Yash",
    email: "yash@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Best",
    email: "best@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
