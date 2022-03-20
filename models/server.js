const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.port = process.env.PORT || 8080;
        this.app = express();
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`server running at port ${this.port}`)
        });
    }

}

module.exports = Server;