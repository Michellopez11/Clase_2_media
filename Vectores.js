function vector(){

const estudiantes = ["Juan","Daniela","Hillary","Lucas","Eva"];
const notasPeriodo1 = [3.5,4.2,3.9,4.0,5.0];
const notasPeriodo2 = [5.0,4.0,4.9,5.0,4.0];
const notaDefinitiva = [];
let notas='';

//Promediar e insertar datos al vertor notaDefinitiva

for (let i=0; i<notasPeriodo1.length;i++){
notaDefinitiva.push((notasPeriodo1[i] + notasPeriodo2[i])/2)
}

//Leer datos de Notas Definitiva
for (let i=0; i<notasPeriodo1.length;i++){
 console.log(`${estudiantes[i]} - ${notaDefinitiva[i]}`) 
 notas += `${estudiantes[i]} - ${notaDefinitiva[i]} \n`;
}

//Crear archivo txt
const fs = require('fs'); 

fs.writeFile(`Notas.txt`,notas,(err)=>{
  if(err) throw err;

  console.log('El archivo  de notas se creo con exito')
})

}

exports.vector = vector