const bcrypt = require("bcryptjs");
const ObjectId = require("mongodb").ObjectId;

// users data- pass hashed with bcrypt
const users = [
  {
    name: "Admin",
    lastName: "User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin@admin.com", 10),
    isAdmin: true,
  },
  {
    name: "Steve",
    lastName: "Jobs",
    email: "steve@example.com",
    password: bcrypt.hashSync("steve@example.com", 10),
    role: "user",
  },
  {
    name: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("jane@example.com", 10),
    role: "user",
  },
  {
    _id: ObjectId("625add3d78fb449f9d9fe2ee"),
    name: "Axel",
    lastName: "Rose",
    email: "axel@example.com",
    password: bcrypt.hashSync("axel@example.com", 10),
    role: "user",
  },
  {
    name: "Bruce",
    lastName: "Lee",
    email: "bruce@example.com",
    password: bcrypt.hashSync("bruce@example.com", 10),
    role: "user",
  },
  {
    name: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin@admin.com", 10),
    isAdmin: true,
  },
];

module.exports = users;
