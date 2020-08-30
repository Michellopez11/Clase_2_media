resultado = sumar (10,1,0)
console.log(resultado);

function sumar(hasta,contador,resultado) {
    if(contador <= hasta){
        resultado= resultado +contador;
        contador++;
        return sumar(hasta,contador,resultado);
    }
    else {
        return resultado;
    }
}

