/*
document.addEventListener("keyup", sas);

const llamar = () => {
    return new Promise((resolve, reject) => { (true) 
        ? setTimeout(() => resolve(dibujarCanvas("red", 100, 40, 100, 600)), 3000)
        : reject(new Error ("Test Error"));
    })
}
const async_test = async() =>{
    const hello = await llamar();
}

async_test(); */


// Canvas

const canvas = document.getElementById("canvas");
const canvas_2d = canvas.getContext("2d");

let fondo_background = {
    cargado: false,
    url: "assets/pexels-francesco-ungaro-281260.jpg"
}

fondo_background.objeto = new Image();
fondo_background.objeto.src = fondo_background.url;
fondo_background.objeto.addEventListener("load", cargarFondoBack);

function cargarFondoBack(){
    fondo_background.cargado = true;
    ejecutarJuego()
}

let nube_1 = {
    cargado: false,
    url: "assets/nube_1.png"
}

nube_1.objeto = new Image();
nube_1.objeto.src = nube_1.url;
nube_1.objeto.addEventListener("load", cargarNube1);

function cargarNube1(){
    nube_1.cargado = true;
    ejecutarJuego();
}

let nube_2 = {
    cargado: false,
    url: "assets/nube_2.png"
}

nube_2.objeto = new Image();
nube_2.objeto.src = nube_2.url;
nube_2.objeto.addEventListener("load", cargarNube2);

function cargarNube2(){
    nube_2.cargado = true;
    ejecutarJuego();
}

let titulo = {
    cargado: false,
    url: "assets/titulo_principal.png"
}

titulo.objeto = new Image();
titulo.objeto.src = titulo.url;
titulo.objeto.addEventListener("load", cargarTitulo);

function cargarTitulo(){
    titulo.cargado = true;
    ejecutarJuego();
}


// Main

function esperar(miliseconds){
    return new Promise(resolve => {setTimeout(resolve, miliseconds)});
}

function ejecutarJuego(){
    if(fondo_background.cargado){
        canvas_2d.drawImage(fondo_background.objeto, 0, 0, 1200, 800);
    }
    if (nube_1.cargado){
        const process = async () => {
            let nube_1_x = 400;
            const nube_1_y = -30;
            let nube_2_x = 800
            const nube_2_y = 180;
            const titulo_x = 300;
            const titulo_y = 100;
            for (i = 0; i < 10; i++){
                await esperar(30)
                canvas_2d.drawImage(fondo_background.objeto, 0, 0, 1200, 800);
                canvas_2d.drawImage(nube_1.objeto, nube_1_x, nube_1_y, 500, 370);
                canvas_2d.drawImage(nube_2.objeto, nube_2_x, nube_2_y, 200, 160);
                canvas_2d.drawImage(titulo.objeto, titulo_x, titulo_y, 566, 307);
                nube_1_x = nube_1_x - 1;
                nube_2_x = nube_2_x - 2;
                if (nube_1_x === -450){
                    nube_1_x = 1200
                }
                if (nube_2_x === -290){
                    nube_2_x = 1200
                }
                if (i === 9){i = 0}
            }
        }
        process();
    }
}