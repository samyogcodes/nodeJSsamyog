const fs = require('fs');

// fs.writeFileSync('./test.txt',"Hello");


// fs.writeFile('./test.txt',"Hello samyog", (err) => {})
// const result = 
// fs.readFile('./contact.txt', 'utf-8', (err,result) =>{
//     if(err){
//         console.log("Error",err)
//     } else {
//         console.log(result);
//     }
// })

// console.log(result)


// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", `${Date.now()}HEY SAMYOG\n`);