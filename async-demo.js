var fs = require('fs')

function phonenumbers(err, data){
    console.log("data:", data);
}

fs.readdir('/home/rahul', phonenumbers);

console.log("this comes after");
