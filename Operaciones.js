function tablasMultiplicar(num){
 let base = num;
 let data = '';

 for (let i=0; i<=10; i++){
   data += `${ base } * ${ i } = ${ base * i} \n`
 }

 const fs = require('fs'); 

fs.writeFile(`Actividad/Tabla-${base}.txt`,data,(err)=>{
  if(err) throw err;

  console.log('El archivo se creo con exito')
})
}

exports.tablasMultiplicar = tablasMultiplicar;
