const http =  require('http');
const fs = require('file-system');



http.createServer(function(req,res){
//  res.write(req['url']);
 try {
   let file = fs.readFileSync('.'+req['url']+'.txt','utf8');
   res.write(file);
 } catch (e) {
     if(e)
     res.write("File Not Found");
 } finally {

 }

  res.end();
}).listen(3000);
