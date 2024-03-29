const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const sesion = require('express-session');
const body = require('body-parser');
const PORT = 3000;
//creamos instancia de express
const app = express();

//settings
app.set('port', process.env.PORT || PORT);
//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

//static files
const options = {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['php', 'html', 'htm'],
    fallthrough: true,
    inmutable: false,
    index: 'index.html',
    lastModified: true,
    maxAge: '1d',
    redirect: true,
    setHeaders: (res, path, stat) => res.set('x-timestamp', Date.now())
}

//rutas
app.use('/', express.static(path.join(__dirname, 'public'), options))
app.use('/home', require('./routes/home.js'));
app.use('/users', require('./routes/routeUsers.js'));
app.use('/logout', require('./routes/logout.js'));
app.use('/puppe', require('./routes/routePuppe.js'));
app.use('/administrador', require('./routes/routeAdministrador.js'));

//Rutas indefinidas
app.use((req, res, next) => {
    res.status(404).send('Direccion no existente en este enrutador')
})
//server listen
app.listen(app.get('port'), () => {
    console.log('execute in port 3000')
})