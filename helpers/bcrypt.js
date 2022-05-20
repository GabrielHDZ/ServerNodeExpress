const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt=bcrypt.genSaltSync(saltRounds);
let createHash=(myPlaintextPassword)=>bcrypt.hashSync(myPlaintextPassword, salt);

let compareHash=(value,hash)=>{return bcrypt.compareSync(value,hash)}

/* createHash('ndune')
.then(r=>console.log(r))
 */
module.exports={createHash,compareHash}