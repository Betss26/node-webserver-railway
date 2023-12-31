
const http = require('http');

http.createServer( (request, response) => {


    //response.writeHead(200, {'Constent-Type': 'application/json'});
    //response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
   // response.writeHead(200, {'Content-Type': 'application/csv'});
    
    response.write('Hola Mundo');
    response.end();

    console.log(response);

})
.listen( 8081 );

console.log('Escuchando el puerto 8081');