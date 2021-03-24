const fs = require('fs');


const crearArchivo= async(base=1,lista=false,maximo=1)=>{

   try {
   
    let salida=''
    
    
    while (base <= maximo) {
        for (let i = 1; i <= 10; i++){
        salida +=`${base} x ${i} = ${base*i}\n`;
        }
        base++;
    } 
   

    if(lista){
        console.log('====================================');
        console.log(`===========TABLA: ${base}===========`);
        console.log('====================================');
        console.log(salida);
    }


    fs.writeFileSync(`./archivos/text-${base}.txt`, salida)

    return `creado con exito tabla-${base}`

   } catch (error) {
       throw error
   }
    
}


module.exports={
    crearArchivo
}