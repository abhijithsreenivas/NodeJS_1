const http = require('http');
const fs = require('file-system');
try {
  //  fs.rename('./textfile2.txt','./renamed.txt');   // logic for rename the file.
  fs.unlink('./test.txt');
} catch (e) {
   console.log(e);
} finally {

}
