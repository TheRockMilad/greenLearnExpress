const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync(10) // نمک 
console.log('Salt => ',salt);

const hashedPassword = bcrypt.hashSync('Milad',salt)
console.log(hashedPassword);