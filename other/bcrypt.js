const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync(10) // نمک 
console.log('Salt => ',salt);

const hashedPassword = bcrypt.hashSync('Milad',salt)
console.log(hashedPassword);

//------------------compare----------------------
const dbPassword = "$2b$10$TeOAbyNlSE5HYvRqJMwPb.NGHG8dQc44In73gpwR3ONH5ayi819ze"
const isValidPassword = bcrypt.compareSync('Milad',dbPassword)
console.log("check password result => ",isValidPassword);