const argv = require('yargs')
            .options({
                'b':{
                    alias:'base',
                    demandOption:true,
                    type:'number',
                    describe:'Esta es la base'
                },
                'l':{
                    alias:'lista',
                    type:'boolean',
                    describe:'Muestra lista',
                    default:false
                },
                'm':{
                    alias:'maximo',
                    type:'number',
                    describe:'Marca limite',
                    default:1
                }
            })
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw 'Ingrese un numero'
                }
                if(argv.b > argv.m){
                    throw 'ingrese un maximo mas'
                }
                return true
            }).argv

module.exports = argv;