
//permite seleccionar las etiquetas o id con el que se va atrabajar 
// esto es si se quioere llamar una etiqueta 
const h1 = document.querySelector('h1');

const input1= document.querySelector('#calculo1');

const input2= document.querySelector('#calculo2');

const btnCalcular= document.querySelector('#btnCalcular');


const resultado=document.querySelector('#resultado');




// esto es para llamarlo en html



function btnOnClick (){

    resultado.innerText = Number(input1.value) + Number(input2.value) ;

}

