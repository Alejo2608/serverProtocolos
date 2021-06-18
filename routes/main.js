//Requerimos express y los otros modulos
const express=require("express")
const morgan=require("morgan")
//Ejecutamos el modulo express
const server=express()
//Middleware que utilizaremos
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({
     extended: false 
}));
//Rutas
server.use('/api/structures', require('./routes/protruts.js'));
//Configuramos el puerto
const port=8080
server.listen(8080, () =>{
 console.log('Server on port',port)
});
