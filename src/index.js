const fs = require('fs')
/* const { type } = require('os')
 */
/* ---------------------------------------------------------------------- 
leerArchivoComoString
Recibe la ruta del archivo que se quiere leer, y devuelve un único string con todo el contenido
del mismo.
---------------------------------------------------------------------- */
const leerArchivoComoString = (ruta) => {
    console.log('--------------------------------------------')
    console.log('\n------Funcion leerArchivoComoString ----- \n\n')


    try {
        let lectura = fs.readFileSync(ruta, 'utf-8')
        console.log('La salida de lo leido es: \n\n', lectura)
    }
    catch (error) {
        console.log(`Hubo un error al intentar leer el archivo, detalle: ${error.message}`)
    }
}

leerArchivoComoString('./data/prueba.txt')

/* ---------------------------------------------------------------------- 
escribirTextoEnArchivo
Recibe una ruta, un texto, y un flag, y graba ese texto en un archivo en la ruta dada. Si el
directorio es válido pero el archivo no existe, decide que hacer según el flag:
● Con el flag en true, crea el archivo y lo escribe.
● Con el flag en false, lanza el error “el archivo no existe”
---------------------------------------------------------------------- */

function escribirTextoEnArchivo(ruta, contenido, flag) {
    console.log('--------------------------------------------')
    console.log('\n------Funcion escribirTextoEnArchivo ----- \n\n')

    try {

        if (!fs.existsSync(ruta) && !flag) {
            console.log('El archivo no existe')
        } else {
            fs.writeFileSync(ruta, contenido)
            console.log(`Se agrego al archivo: \n\n ${ruta} el texto: \n\n ${contenido}`)
        }
    } catch (error) {
        console.log(error)
    }
}

escribirTextoEnArchivo('./data/prueba2.txt', 'texto de prueba', true)

/* ---------------------------------------------------------------------- 
Recibe un texto y una secuencia de caracteres que usará como separador. Devuelve un array
con todos los números producto de partir el texto cada vez que aparezca la secuencia
separadora. En el caso de que alguna de las partes no sea numérica, no se incluirá en el
resultado, pero no debe lanzar ningún error.
Ejemplo
Input: texto = ‘123 | 456 | 789 | 1bc | 10’ , separador = ‘ | ’
Output: [123, 456, 789, 10]
---------------------------------------------------------------------- */

function transformarStringEnArrayDeNumeros(texto, separador) {

    console.log('--------------------------------------------')
    console.log('\n------Funcion transformarStringEnArrayDeNumeros ----- \n\n')

    let textoTemp = String(texto)
    let largoCadena = textoTemp.length
    let subCadena = ''
    let arrayNumeros = []
    let posSeparador = 0
    console.log(`Recibo este texto: ${texto}`)

    while (textoTemp != '') {
        posSeparador = textoTemp.indexOf(separador, textoTemp)
        if (posSeparador >= 0) {
            subCadena = textoTemp.substring(0, posSeparador)
            textoTemp = textoTemp.substring(posSeparador + 1, largoCadena)
        } else {
            subCadena = textoTemp
            textoTemp = ''
        }
        if (subCadena != '' && !isNaN(subCadena)) {
            arrayNumeros.push(subCadena)
        }
    }

    console.log(`Devuelvo array de números: ${arrayNumeros}`)
    return arrayNumeros

}

transformarStringEnArrayDeNumeros('b23-2-/a23/juancarlos-3', '-')

/* ---------------------------------------------------------------------- 
transformarArrayDeNumerosAUnSoloString
Recibe un array con strings, y una secuencia de caracteres para usar como separador.
Devuelve un único string que es la unión de todos los strings del array, intercalando la
secuencia separadora entre cada uno.
Ejemplo
Input: array = [123, 456, 789, 10] , separador = ‘,’
Output: ‘123,456,789,10’
---------------------------------------------------------------------- */

function transformarArrayDeNumerosAUnSoloString(strings,separador) {
    console.log('--------------------------------------------')
    console.log('\n------Funcion transformarArrayDeNumerosAUnSoloString ----- \n\n')

    let array = []
    let cadenaADevolver = ''
    array = strings
    console.log('Recibo este array: ')
    console.log(array)
   
    for (i = 0; i <= array.length-1; i++) {
        
        if (i<array.length-1){
            cadenaADevolver=cadenaADevolver+array[i]+separador
        }
        else{
            cadenaADevolver=cadenaADevolver+array[i]
        }
    }
    console.log(`Devuelvo este String: ${cadenaADevolver}`)
    return cadenaADevolver
}

let arrayStrings = [3,7,2236,5,4,3,2,1,0]
transformarArrayDeNumerosAUnSoloString(arrayStrings,',')

/* ---------------------------------------------------------------------- 
combinarDosArrays
Recibe dos arrays, ambos con datos de tipo numérico, ambos ordenados en forma ascendente,
y sin repetidos dentro de cada archivo (puede haber repetidos entre un archivo y otro).
Devuelve un nuevo array, que contenga todos los datos de ambos arrays, también ordenados
en forma ascendente, y también sin repetidos.
Ejemplo
Input: array1 = [1, 5, 10] , array2 = [2, 3, 8, 11]
Output: [1, 2, 3, 5, 8, 10, 11]
---------------------------------------------------------------------- */

function combinarDosArrays(arrayA,arrayB) {
    console.log('--------------------------------------------')
    console.log('\n------Funcion combinarDosArrays ----- \n\n')

    let array1 = arrayA
    let array2 = arrayB
    let arrayADevolver = []

    console.log('Recibo estos arrays: ')
    console.log(array1,array2)
    
    arrayADevolver = array1.concat(array2)
    arrayADevolver.sort((a,b) => a - b)
    arrayADevolver = eliminarDuplicados(arrayADevolver)

    console.log(`Combino y devuelvo este Array: ${arrayADevolver}`)
    return arrayADevolver
}

let arrayA = [1,2,3,4,5,28]
let arrayB = [1,2,3,10,3,5,7]

combinarDosArrays(arrayA,arrayB)

/* ---------------------------------------------------------------------- 
combinarNArrays
Igual que la función anterior, solo que ésta recibe un array de arrays de números ordenados en
forma ascendente y sin repetidos, y devuelve un nuevo array, con la combinación de todos los
números de todos los arrays recibidos, también ordenados en forma ascendente, y también sin
repetidos.
Ejemplo
Input: arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]
Output: [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]
---------------------------------------------------------------------- */

function combinarNArrays(arrays) {
    console.log('--------------------------------------------')
    console.log('\n------Funcion combinarNArrays ----- \n\n')
    console.log('Recibo estos arrays: ')
    console.log(arrays)
    
    let arrayADevolver = [].concat.apply([], arrays)
    arrayADevolver.sort((a,b) => a - b)
    arrayADevolver = eliminarDuplicados(arrayADevolver)
    console.log(`Combino y devuelvo este Array: ${arrayADevolver}`)
    return arrayADevolver
}

let arrayDeArrays = [[1,2,4,10,180], [2,3,15,16],[4,5],[5,6,7,13]]
combinarNArrays(arrayDeArrays)

function eliminarDuplicados(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index)
}

 
module.exports = {leerArchivoComoString,escribirTextoEnArchivo,transformarStringEnArrayDeNumeros,transformarArrayDeNumerosAUnSoloString, combinarDosArrays,combinarNArrays}
