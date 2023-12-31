require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');

// Handlebars
app.set('view engine', 'hbs');
//__dirname el doble guion bajo se usa para saber todo el path donde esta desplegada la aplicaciòn
hbs.registerPartials(__dirname + '/views/partials', function (err) {});



//Servir contenido estatico
app.use( express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
  })

app.get('*',  (req, res) => {
    res.sendFile(__dirname + 'public/404.html')
  });

app.listen( port, () => {
    console.log(`Example app listenning at http://localhost:${port}`)
})

//se instala el paquete npm i dotenv que sirve para establecer las variables de mi entorno en mi aplicación

