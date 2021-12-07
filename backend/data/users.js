import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Mahender',
    email: 'mahi@gmail.com',
    password: bcrypt.hashSync('test123', 10),
    isVendor: true
  },
  {
    name: 'Harish',
    email: 'hari@gmail.com',
    password: bcrypt.hashSync('test123', 10),
    isVendor: false
  }
]

export default users
