const http = require('http');
const port = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');
const users = [{ania: "aaaa"}, {robe: "aaa"}]
http.createServer((req, res) => {
  // PAMIETAC O ASYCNCHRONICZNOSCI  !!! READ FILE JEST ASYNCHRONICZNE UWAZAC ZEBY PRZED NIM NIE WYKONAL SIE INNY RES.END()
  switch(req.url) {
    case '/': 
      fs.readFile(path.join(__dirname, 'index.html'), (err, page) => {
        if (err) res.end('<h1>Nie udalo sie</h1>')
        else res.end(page)
      })
      // res.end("Strona glowna") to nie moz byc bo wykonalo by sie przed reaffile i bynie dosszlo readfile
      break;
    case '/users':
      fs.readFile(path.join(__dirname, 'users.html'), (err, page) => {
        if (err) res.end('<h1>Nie udalo sie</h1>')
        else res.end(page)
      })
    case '/api/users':
      fs.readFile(path.join(__dirname, 'users.html'), (err, page) => {
        const userJSON = JSON.stringify(users)
        res.end(userJSON)
      })
      break;
    case '/code.js':
    // on sie odpala na starcie bo z pliku html jest w script src ond przekirowuje na strona/code.js
    // czyliz z users niebd bo w tym hrmlu nie ma tego src
      fs.readFile(path.join(__dirname, 'code.js'), (err, jsFile) => {
        res.end(jsFile)
      });
      break;
    case '/script.js':
      res.writeHead(200, {'Content-type' : 'application/javascript'});
      res.end('console.log("helloWorld");');
      break;
    default: 
      res.end('Strona nie stnieje!')
  }
  
}).listen(3000, '127.0.0.1', () => {
  console.log('Server started at port: ', port)
})
