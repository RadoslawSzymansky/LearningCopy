const http = require('http');
// http wbudowany modul node'a . Podajemy port i ip. Tutaj akurat localhost
// Gdy przyjdzie rzadamnie, wykona sie callback. Czyli nasz listener
// I Wtedu tworzony jest takze obiekt żadania (request) i odpowiedzi (response), które musza byc przekazane!
const server = http.createServer((req, res) => {
  // do odpowoiedzi tworzymy np nasz Header. Okreslamy ze to co bd bd html'em. Czyli okreslamy typ kontentu
  // A ajko pierwszya rgument ustalamy status odpowiedzi/
  res.writeHead(200, {'Content-Type': 'text/html'})
  // end zakańcza odpowiedz. A jeżeli damy argument to go przekazuje w ramach odpowedzi
  res.end('<h1>Witaj na stronie w node.js! Hello World</h1>')

  // I juz pieknie sie wyswietla na naszej stronie!
}).listen(3000, '127.0.0.1')



// 2 przyklad: SKOMENTOWAC JEDNO JAK CHCE PRZETSTOWAC!


const http = require('http');
const server = http.createServer();
// dodajemy nasluchiwanie na request , bd wywolalne za kazdym razem gdy przyjdzir request
server.addListener('request', (req, res) => {

})
// alternatywniw
// server.on('request', funckjaDzialajacaPo)
// function funckjaDzialajacaPo(){}

// server musi nasluchiwać, :
server.listen(3000, 'ip')