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
}

let suelo = {
    cargado: false,
    url: "assets/suelo.png"
}

suelo.objeto = new Image();
suelo.objeto.src = suelo.url;
suelo.objeto.addEventListener("load", cargarSuelo);

function cargarSuelo(){
    suelo.cargado = true;
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
    executeStart()
}

// Main

function esperar(miliseconds){
    return new Promise(resolve => {setTimeout(resolve, miliseconds)});
}

function executeStart(){
    if (fondo_background.cargado &&
        nube_1.cargado &&
        nube_2.cargado &&
        titulo.cargado &&
        suelo.cargado){
        const process = async () => {
            let nube_1_x = 400;
            const nube_1_y = -30;
            let nube_2_x = 800
            const nube_2_y = 180;
            const titulo_x = 300;
            const titulo_y = 100;
            const suelo_x = 0;
            const suelo_y = 750; // 763
            const press_start_x = 480;
            const press_start_y = 500;
            for (i = 0; i < 60; i++){
                // Draw image
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
}
