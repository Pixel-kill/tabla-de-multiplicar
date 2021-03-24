const  argv  = require("./config/yargs");
const {crearArchivo} =require("./helper/multiplicar")


crearArchivo(argv.b,argv.l,argv.m)
    .then(respuesta => console.log(respuesta , 'creado con exito'))
    .catch(err => console.log(err))