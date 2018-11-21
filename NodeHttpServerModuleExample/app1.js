const http = require('http');
const fs = require('file-system');

let testFile = fs.readFileSync('./textfile.txt',"utf8");

fs.writeFileSync("./textfile2.txt",testFile+". Again readed and modified by Node JS","utf8");
