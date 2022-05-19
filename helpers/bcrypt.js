const bcrypt = require('bcrypt');
const saltRounds = 10;
let cc;
let createHash=(myPlaintextPassword)=>{
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return null
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            if(err) return null
            cc=hash;
        });
    });
}
createHash("hhas")
setTimeout(()=>{console.log(cc);},4000);

module.exports={createHash}