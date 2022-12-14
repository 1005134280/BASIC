var articulos =[
{nombre: "bici",cosoto: 3000},
{nombre: "tv",cosoto: 2500},
{nombre: "celular",cosoto: 10000},
{nombre: "libro",cosoto: 320},
{nombre: "laptop",cosoto: 20000},
{nombre: "teclado",cosoto: 500},
];


// filtrar articulo
var articulosFiltrados = articulos.filter(function(articulo){

    return articulo.cosoto <=500;
    
    });

    articulosFiltrados;


    // regrese el mapa regrese el nombre 

    var nombreArticulos = articulos.map(function(articulo){

return articulo.nombre

    })

    nombreArticulos

// encontrar algo dentro del array true/ false

var encuentraArticulo= articulos.find(function(articulo){

return articulo.nombre ==="laptop"

})

//tre todos los articulos por nombre
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


// regre lo que cumpla la validacionn true false

var articulosBaratos = articulos.some(function(artulo){
    return artulo.costo <= 700;
})

