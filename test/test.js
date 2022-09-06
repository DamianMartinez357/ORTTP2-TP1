const funciones = require('../src/index')

console.log('--- Ejecutando las pruebas: ---\n\n')

funciones.leerArchivoComoString('./data/prueba.txt')
funciones.escribirTextoEnArchivo('./data/prueba2.txt', 'texto de prueba', true)
funciones.transformarStringEnArrayDeNumeros('123|456|789|1bc|10','|')
funciones.transformarArrayDeNumerosAUnSoloString([123,456,789,10],',')
funciones.combinarDosArrays([1,5,10],[2,3,8,11])
funciones.combinarNArrays([[1,10], [2,3,15,16],[4],[6,7,13]])




