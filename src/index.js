const fs = require('fs')
//const colors = require ("colors")

/* ---------------------------------------------------------------------- 
leerArchivoComoString
Recibe la ruta del archivo que se quiere leer, y devuelve un único string con todo el contenido
del mismo.
---------------------------------------------------------------------- */
function leerArchivoComoString(ruta) {
    try {
        //Leo el archivo
        let lectura = fs.readFileSync(ruta,'utf-8')
        let escritura = lectura
        console.log('La salida de lo leido es: \n\n',lectura)
    }
    catch(error) {
        console.log(`Hubo un error al intentar leer el archivo, detalle: ${error.message}`)        
    }
}

leerArchivoComoString('./data/prueba1.txt')

/* ---------------------------------------------------------------------- 
escribirTextoEnArchivo
Recibe una ruta, un texto, y un flag, y graba ese texto en un archivo en la ruta dada. Si el
directorio es válido pero el archivo no existe, decide que hacer según el flag:
● Con el flag en true, crea el archivo y lo escribe.
● Con el flag en false, lanza el error “el archivo no existe”
---------------------------------------------------------------------- */




