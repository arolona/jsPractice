// console.log("Holiii")

function aleatorio (min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min -1)) + min;
    return resultado;
}
var z;

// for (var i=0; i<10; i++){
//     z = aleatorio(10, 50);
//     document.write(z+ ", ");
// }
var vp = document.getElementById("villaRoll");
var papel = vp.getContext("2d");
// var mapa = "images/tile.png";
var fondo = {
    url: "images/tile.png",
    cargaOK: false
};

fondo.obj = new Image();
fondo.obj.src = fondo.url;
fondo.obj.addEventListener("load", cargarFondo);

var vaca = {
    url: "images/vaca.webp",
    cargaOK: false
};
var cerdo = {
    url: "images/cerdo.png",
    cargaOK: false
};
var pollo = {
    url: "images/pollo.png",
    cargaOK: false
};


vaca.obj = new Image();
vaca.obj.src = vaca.url;
vaca.obj.addEventListener("load", cargarVacas);


cerdo.obj = new Image();
cerdo.obj.src = cerdo.url;
cerdo.obj.addEventListener("load", cargarCerdos);
pollo.obj = new Image();
pollo.obj.src = pollo.url;
pollo.obj.addEventListener("load", cargarPollos);


function cargarFondo() {
    fondo.cargaOK = true;
    dibujar()
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar()
}

function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar()
}

function cargarPollos() {
    pollo.cargaOK = true;
    dibujar()
}

function dibujar(){
    if (fondo.cargaOK){
        papel.drawImage(fondo.obj, 0, 0);
    }  
    if (vaca.cargaOK){
        for (var i=0;i<aleatorio(0,50);i++){            
            papel.drawImage(vaca.obj, aleatorio(0, 10)*40, aleatorio(0, 10)*40);
        }
    }    
    if (cerdo.cargaOK){
        papel.drawImage(cerdo.obj, aleatorio(0, 10)*40, aleatorio(0, 10)*40);
    }    
    if (pollo.cargaOK){
        papel.drawImage(pollo.obj, aleatorio(0, 10)*40, aleatorio(0, 10)*40);
    }    
}

// function dibujarVacas(){
//     papel.drawImage(vaca, 10, 10);
// }

// function dibujarCerdos(){
//     papel.drawImage(cerdo, 10, 300);
// }

// function dibujarPollos(){
//     papel.drawImage(pollo, 300, 150);
// }

