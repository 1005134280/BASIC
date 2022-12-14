var miAuto={
marca: "toyota",
modelo: "corola",
anmio: 2020,

detalleDelAuto: function(){
console.log(`auto ${this.modelo}${this.annio}`);

}
};

//llamar una propiedad
miAuto.marca;
miAuto.anmio;

//llamar funcion
miAuto.detalleDelAuto();



// funcion constructora



function auto(marca1,modelo1,annio1){
this.anmio = annio1;
this.modelo=modelo1;
this.marca=marca1;
}

// enerar nueva instancia del la funcion constructora


var miAutoNuevo = new auto("tesla","model 3",2020);
