const express = require('express');
const app = express();
const port = 3000;
const contact = require('./routes/contact');


// to jest middleware. Jest pare rodzaji
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
  // dzieki tej funckji bedziemy mogli odwowlac sie do requestimew innych
}
app.use(requestTime)
// midleware uzywamy za pomoca use mozna tez na sciezce konkrtej/
// trzeba go zakonczyc lub dac next 
app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
//

app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
  res.send('special')
})

//

app.get('/', (req, res) => {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
});

// ustawianie glownego folderu , pierw w pblic szuka pozniej w files

app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use('/static', express.static(path.join(__dirname, 'files')))

// i teraz jak bedzie plik w tym   to np : 
// http://localhost:3000/images/kitten.jpg


// teraz ten router zajmie sie oblsuga wszystkie co na /contacts
app.use('/contacts', contact);


var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
// Every time the app receives a request, it prints the message “LOGGED” to the terminal.
// ale musi byc w dobrym miejscu, bo jak cos innego dopasuje to juz nie wyczta Mylogger


app.use(myLogger)


var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

// aby uruchomic wiecej niz jeden callback balzy wyowlac next
/// MOzna tez zrobic wyywlalnie za pomoca tablicy ktora ma callacbacki
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})
///

// // metody na response:
// res.download()	Prompt a file to be downloaded.
// res.end()	End the response process.
// res.json()	Send a JSON response.
// res.jsonp()	Send a JSON response with JSONP support.
// res.redirect()	Redirect a request.
// res.render()	Render a view template.
// res.send()	Send a response of various types.
// res.sendFile()	Send a file as an octet stream.
// res.sendStatus()	Set the response status code and send its string representation as the response body.

// na koncu do obslugi wszystkich ktorych nie ma
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

