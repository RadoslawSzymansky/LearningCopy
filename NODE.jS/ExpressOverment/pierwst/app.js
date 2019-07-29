const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const appMail = require('./mailers/appMailer');

const routes = require('./routes/index');
const contactsRouter = require('./routes/contacts');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// wskazanie folderu public jako folderu w krym beda pliki do wyslania
/// stad wlasnie bedzie pobierac to co bedzie w pliku html np do pobranie czyli css
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: 'dog hero',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}));

app.use(flash());

// wszystkie scidzki zaczyna sie na / ebeda odpalane w tym routes
app.use('/', routes);
app.get('/email', (req, res)=>{
  console.log("to powinno bycnna post na formulzarze i wsylac dane z email")
  appMail.applicationNotify({
    mail: 'zdzis@gmail.com',
    data: 'app',
    message: 'Heizen , tu owiadomosc',
    to: 'zdzis@gmai;.com'
  })
  res.send('wyslano')
})
app.use('/contacts', contactsRouter);

module.exports = app;