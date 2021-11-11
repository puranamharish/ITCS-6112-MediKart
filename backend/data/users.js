import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Mahender',
    email: 'mahi@gmail.com',
    password: bcrypt.hashSync('test123', 10),
    isVendor: false
  },
  {
    name: 'Harish',
    email: 'hari@gmail.com',
    password: bcrypt.hashSync('test123', 10),
    isVendor: true
  },
  // {
  //   name: 'Admin User',
  //   email: 'admin@example.com',
  //   password: bcrypt.hashSync('123456', 10),
  //   isAdmin: true,
  // },
  // {
  //   name: 'John Doe',
  //   email: 'john@example.com',
  //   password: bcrypt.hashSync('123456', 10),
  // },
  // {
  //   name: 'Jane Doe',
  //   email: 'jane@example.com',
  //   password: bcrypt.hashSync('123456', 10),
  // },
]

export default users
