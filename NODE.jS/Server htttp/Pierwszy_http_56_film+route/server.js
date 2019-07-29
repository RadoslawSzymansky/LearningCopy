const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req, res)=> {
  // res.write();
  if (req.url === '/') {
    //domena glowna

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Strona główna</h1>');
  } else if (req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Strona użytkownikow</h1)>')
    res.end();
  } else {
    res.end('<h1>Brak strony o podanym adresie</h1>')
  }
  res.end();
}).listen(3000, '127.0.0.1', () => {
  console.log('Server started at port: ' , port)
})
