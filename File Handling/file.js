const fs = require("fs");
//Sync
// fs.writeFileSync("./test.txt", "Hello World");

//Async

// fs.writeFile("./test.txt", "Hello world Async", (err) => {});

//to read file Sync

// const read = fs.readFileSync("./contact.txt", "utf-8");
// console.log(read);

//to read file Sync : Sync do not return anything and also expect a callback

fs.readFile("./contact.txt", "utf-8", (err, read) => {
    if(err){
        console.log("Error", err);
    } else {
        console.log(read);
    }
})