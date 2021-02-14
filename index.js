const { log } = require("console");
const fs= require("fs");
/* Synchronous */
//fs.writeFileSync("data.txt","Hii this is my first program in node js")
//fs.appendFileSync("data.txt", "  This is append by fs module")
//const d=fs.readFileSync("data.txt");
//console.log(d.toString());
//fs.renameSync("data.txt","Text.txt")
//fs.unlinkSync("Text.txt");


 Asynchronous 
/*fs.writeFile('text.txt',"Happy christmas::::;", (err)=>{
    console.log("file created");
    console.log(err);
})  */
/*fs.appendFile('text.txt' ,"Hiii this is from append" ,(err)=>{
  console.log("appended");
  console.log(err);
})  */
/*fs.readFile("text.txt" , "utf-8",(err,data)=>{
console.log(data);

}); */

