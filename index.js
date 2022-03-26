// Canvas
const canvas = document.getElementById("canvas");
const canvas_2d = canvas.getContext("2d");

// Assets
let fondo_background = {
    cargado: false,
    url: "assets/pexels-francesco-ungaro-281260.jpg"
}

fondo_background.objeto = new Image();
fondo_background.objeto.src = fondo_background.url;
fondo_background.objeto.addEventListener("load", cargarFondoBack);

function cargarFondoBack(){
    fondo_background.cargado = true;
}

let suelo = {
    cargado: false,
    url: "assets/ground.png"
}

suelo.objeto = new Image();
suelo.objeto.src = suelo.url;
suelo.objeto.addEventListener("load", cargarSuelo);

function cargarSuelo(){
    suelo.cargado = true;
}

let nube_1 = {
    cargado: false,
    url: "assets/cloud_1.png"
}

nube_1.objeto = new Image();
nube_1.objeto.src = nube_1.url;
nube_1.objeto.addEventListener("load", cargarNube1);

function cargarNube1(){
    nube_1.cargado = true;
}

let nube_2 = {
    cargado: false,
    url: "assets/cloud_2.png"
}

nube_2.objeto = new Image();
nube_2.objeto.src = nube_2.url;
nube_2.objeto.addEventListener("load", cargarNube2);

function cargarNube2(){
    nube_2.cargado = true;
}

let titulo = {
    cargado: false,
    url: "assets/main_title.png"
}

titulo.objeto = new Image();
titulo.objeto.src = titulo.url;
titulo.objeto.addEventListener("load", cargarTitulo);

function cargarTitulo(){
    titulo.cargado = true;
}

let press_start = {
    cargado: false,
    url: "assets/press_start.png"
}

press_start.objeto = new Image();
press_start.objeto.src = press_start.url;
press_start.objeto.addEventListener("load", cargarPress);

function cargarPress(){
    press_start.cargado = true;
}

let coin = {
    cargado: false,
    url: "assets/coin.png"
}

coin.objeto = new Image();
coin.objeto.src = coin.url;
coin.objeto.addEventListener("load", cargarCoin);

function cargarCoin(){
    coin.cargado = true;
}

let x_signal = {
    cargado: false,
    url: "assets/X.png"
}

x_signal.objeto = new Image();
x_signal.objeto.src = x_signal.url;
x_signal.objeto.addEventListener("load", cargarX);

function cargarX(){
    x_signal.cargado = true;
}

let zero = {
    cargado: false,
    url: "assets/0.png"
}

zero.objeto = new Image();
zero.objeto.src = zero.url;
zero.objeto.addEventListener("load", cargar0);

function cargar0(){
    zero.cargado = true;
    executeStart()
}

// Main

function esperar(miliseconds){
    return new Promise(resolve => {setTimeout(resolve, miliseconds)});
}

function executeStart(){
    const process = async () => {
        let nube_1_x = 400;
        const nube_1_y = -30;
        let nube_2_x = 800
        const nube_2_y = 180;
        const titulo_x = 300;
        const titulo_y = 150;
        const suelo_x = 0;
        const suelo_y = 750;
        const press_start_x = 480;
        const press_start_y = 500;
        const coin_x = 490;
        const coin_y = 45;
        const coin_signal_x = 570;
        const coin_signal_y = 70;
        const zero_x = 600;
        const zero_y = 63;
        // Draw image
        for (i = 0; i < 60; i++){
            await esperar(30)
            if (fondo_background.cargado){
                canvas_2d.drawImage(fondo_background.objeto, 0, 0, 1200, 800);
            }
            if (nube_1.cargado){
                canvas_2d.drawImage(nube_1.objeto, nube_1_x, nube_1_y, 500, 370);
            }
            if (nube_2.cargado){
                canvas_2d.drawImage(nube_2.objeto, nube_2_x, nube_2_y, 200, 160);
            }
            if (titulo.cargado){
                canvas_2d.drawImage(titulo.objeto, titulo_x, titulo_y, 566, 307);
            }
            if (suelo.cargado){
                canvas_2d.drawImage(suelo.objeto, suelo_x, suelo_y, 1200, 50);
            }
            if (coin.cargado){
                canvas_2d.drawImage(coin.objeto, coin_x, coin_y, 70, 70);
            }
            if (x_signal.cargado){
                canvas_2d.drawImage(x_signal.objeto, coin_signal_x, coin_signal_y, 15, 15);
            }
            if (zero.cargado){
                canvas_2d.drawImage(zero.objeto, zero_x, zero_y, 30, 30);
            }
    
            // Movement
            if (i === 59){i = 0}
            nube_1_x = nube_1_x - 1;
            nube_2_x = nube_2_x - 2;
            if (nube_1_x === -450){
                nube_1_x = 1200
            }
            if (nube_2_x === -290){
                nube_2_x = 1200
            }
            if (i < 30){
                canvas_2d.drawImage(press_start.objeto, press_start_x, press_start_y, 230, 27);
            }
        }
    }
    process();
    document.addEventListener("keyup", firstStart);
    function firstStart(event){
    if (event.keyCode === 13){
        console.log("SOS")
        }
    }
}
