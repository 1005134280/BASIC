
//permite seleccionar las etiquetas o id con el que se va atrabajar 
// esto es si se quioere llamar una etiqueta 
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

// si se quiere seleccionar un clase en especifico
const parrafito= document.getElementsByClassName('parrafito');

// si se quiere seleccionar un id

//const pid = document.getElementById('pid');

const pid = document.getElementById('pid');

const input= document.querySelector('input');

// muestra el valor que contiene

console.log(input.value);

//tenerlos ntodos los elementos al misnmo tiempo

console.log(
{
    h1,
    p,
    parrafito,
    pid,
    input,}


);

// cambiar el titulo


h1.innerHTML='patito <br> Feo';

h1.innerText='patito <br> Feo';

// modificar atributo o acceder al a el como clase o otra cosa

console.log(h1.getAttribute('panatalla'));

h1.setAttribute('class','rojo');

// nodificar clases en especifico  
// en este caso agregarle

h1.classList.add('verde');
//o remover si es el caso

h1.classList.remove('verde');

//crear un elemento desde cero

const img= document.createElement('img');


img.setAttribute('src','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.edeq.com.co%2Fportals%2F0%2Fclientes-y-usuarios%2Fimagenes%2Ffactura-explicacion-1.jpg%3Fver%3D2019-11-20-104617-123&imgrefurl=https%3A%2F%2Fwww.edeq.com.co%2Fclientes-y-usuarios%2Ffactura-edeq%2Fconoce-tu-factura&tbnid=p1QmDUfhyBoPoM&vet=12ahUKEwiUwoeYlun7AhVnbDABHYOFACEQMygAegQIARA8..i&docid=SWVSWDxgPkYYGM&w=1200&h=927&q=mirar%20si%20mi%20factura%20de%20la%20edeq%20ya%20esta%20pagada&ved=2ahUKEwiUwoeYlun7AhVnbDABHYOFACEQMygAegQIARA8');

console.log(img);

pid.append(img);








