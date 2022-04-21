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

let black_screen = {
    cargado: false,
    url: "assets/black_screen.jpg"
}

black_screen.objeto = new Image();
black_screen.objeto.src = black_screen.url;
black_screen.objeto.addEventListener("load", cargarBlackScreen);

function cargarBlackScreen(){
    black_screen.cargado = true;
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

let nube_3 = {
    cargado: false,
    url: "assets/cloud_3.png"
}

nube_3.objeto = new Image();
nube_3.objeto.src = nube_3.url;
nube_3.objeto.addEventListener("load", cargarNube3);

function cargarNube3(){
    nube_3.cargado = true;
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
}

let morio_face = {
    cargado: false,
    url: "assets/morio_face.png"
}

morio_face.objeto = new Image();
morio_face.objeto.src = morio_face.url;
morio_face.objeto.addEventListener("load", cargarMorio_face);

function cargarMorio_face(){
    morio_face.cargado = true;
}

/* Morio Right Frames */
let morio_stand_right = {
    cargado: false,
    url: "assets/morio_stand.png"
}

morio_stand_right.objeto = new Image();
morio_stand_right.objeto.src = morio_stand_right.url;
morio_stand_right.objeto.addEventListener("load", cargarMorioRight_stand);

function cargarMorioRight_stand(){
    morio_stand_right.cargado = true;
}

let morio_frame1_right = {
    cargado: false,
    url: "assets/morio_frame1.png"
}

morio_frame1_right.objeto = new Image();
morio_frame1_right.objeto.src = morio_frame1_right.url;
morio_frame1_right.objeto.addEventListener("load", cargarMorioRight_frame1);

function cargarMorioRight_frame1(){
    morio_frame1_right.cargado = true;
}

let morio_frame2_right = {
    cargado: false,
    url: "assets/morio_frame2.png"
}

morio_frame2_right.objeto = new Image();
morio_frame2_right.objeto.src = morio_frame2_right.url;
morio_frame2_right.objeto.addEventListener("load", cargarMorioRight_frame2);

function cargarMorioRight_frame2(){
    morio_frame2_right.cargado = true;
}

let morio_frame3_right = {
    cargado: false,
    url: "assets/morio_frame3.png"
}

morio_frame3_right.objeto = new Image();
morio_frame3_right.objeto.src = morio_frame3_right.url;
morio_frame3_right.objeto.addEventListener("load", cargarMorioRight_frame3);

function cargarMorioRight_frame3(){
    morio_frame3_right.cargado = true;
    executeStart()
}
/* Morio Left Frames */
let morio_stand_left = {
    cargado: false,
    url: "assets/reversedmorio_stand.png"
}

morio_stand_left.objeto = new Image();
morio_stand_left.objeto.src = morio_stand_left.url;
morio_stand_left.objeto.addEventListener("load", cargarMorioLeft_stand);

function cargarMorioLeft_stand(){
    morio_stand_left.cargado = true;
}

let morio_frame1_left = {
    cargado: false,
    url: "assets/reversedmorio_frame1.png"
}

morio_frame1_left.objeto = new Image();
morio_frame1_left.objeto.src = morio_frame1_left.url;
morio_frame1_left.objeto.addEventListener("load", cargarMorioLeft_frame1);

function cargarMorioLeft_frame1(){
    morio_frame1_left.cargado = true;
}

let morio_frame2_left = {
    cargado: false,
    url: "assets/reversedmorio_frame2.png"
}

morio_frame2_left.objeto = new Image();
morio_frame2_left.objeto.src = morio_frame2_left.url;
morio_frame2_left.objeto.addEventListener("load", cargarMorioLeft_frame2);

function cargarMorioLeft_frame2(){
    morio_frame2_left.cargado = true;
}

let morio_frame3_left = {
    cargado: false,
    url: "assets/reversedmorio_frame3.png"
}

morio_frame3_left.objeto = new Image();
morio_frame3_left.objeto.src = morio_frame3_left.url;
morio_frame3_left.objeto.addEventListener("load", cargarMorioLeft_frame3);

function cargarMorioLeft_frame3(){
    morio_frame3_left.cargado = true;
    executeStart()
}

// Main Title
function esperar(miliseconds){
    return new Promise(resolve => {setTimeout(resolve, miliseconds)});
}

function executeStart(){
    const process = async () => {
        // Draw image
        let nube_1_x = 600;
        const nube_1_y = -30;
        let nube_2_x = 800;
        const nube_2_y = 100;
        let nube_3_x = 80;
        const nube_3_y = 190;
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
            if (nube_3.cargado){
                canvas_2d.drawImage(nube_3.objeto, nube_3_x, nube_3_y, 280, 140);
            }
            if (titulo.cargado){
                canvas_2d.drawImage(titulo.objeto, 300, 150, 566, 307);
            }
            if (suelo.cargado){
                canvas_2d.drawImage(suelo.objeto, 0, 750, 1200, 50);
            }
            if (coin.cargado){
                canvas_2d.drawImage(coin.objeto, 510, 45, 70, 70);
            }
            if (x_signal.cargado){
                /* Cross Coin */
                canvas_2d.drawImage(x_signal.objeto, 590, 70, 15, 15);
                /* Cross Morio */
                canvas_2d.drawImage(x_signal.objeto, 180, 73, 15, 15);
            }
            if (zero.cargado){
                canvas_2d.drawImage(zero.objeto, 620, 63, 30, 30);
                canvas_2d.drawImage(zero.objeto, 210, 65, 30, 30);
            }
            if (morio_face.cargado){
                canvas_2d.drawImage(morio_face.objeto, 100, 50, 65, 60);
            }
            if (morio_stand_right.cargado){
                canvas_2d.drawImage(morio_stand_right.objeto, 300, 610, 85, 140);
            }

            // Movement
            if (i === 59){i = 0}
            nube_1_x = nube_1_x - 0.5;
            nube_2_x = nube_2_x - 2;
            nube_3_x = nube_3_x - 1;
            if (nube_1_x === -450){
                nube_1_x = 1200
            }
            if (nube_2_x === -290){
                nube_2_x = 1200
            }
            if (nube_3_x === -290){
                nube_3_x = 1200
            }
            if (i < 30){
                canvas_2d.drawImage(press_start.objeto, 480, 500, 230, 27);
            }
            document.addEventListener("keydown", endStart);
            function endStart(event){
                if (event.keyCode === 13){
                    i = 60;
                }
            }
        }
    }
    process();
}

// Main Game
document.addEventListener("keydown", startMainGame);
let enable_main_game = true;
function startMainGame(event){
    if (event.keyCode === 13 && enable_main_game){
        mainGame();
        enable_main_game = false
    }
}

const keys = {
    LEFT: 37,
    RIGHT: 39
};

function mainGame(){
    const gameProcess = async () => {
        await esperar(30)
        if (black_screen.cargado){
            canvas_2d.drawImage(black_screen.objeto, 0, 0, 1200, 800);
        }
        if (x_signal.cargado){
            canvas_2d.drawImage(x_signal.objeto, 580, 375, 15, 15);
        }
        if (morio_face.cargado){
            canvas_2d.drawImage(morio_face.objeto, 500, 350, 65, 60);
        }
        if (zero.cargado){
            canvas_2d.drawImage(zero.objeto, 610, 367, 30, 30);
        }
        await esperar(3000)
        // Cloud Variables
        let nube_1_x = 300;
        const nube_1_y = -30;
        let nube_2_x = 900;
        const nube_2_y = 100;
        let nube_3_x = 170;
        const nube_3_y = 190;
        // Morio Variables
        let mario_avaliable_walk = true;
        let morio_x = 300;
        let run_mario_stand_right = true;
        let run_mario_stand_left = false;
        let run_frame_1_right = false;
        let run_frame_2_right = false;
        let run_frame_3_right = false;
        let run_frame_1_left = false;
        let run_frame_2_left = false;
        let run_frame_3_left = false;
        let move_right = true;
        let move_left = true;
        for (i = 0; i < 10000; i++){
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
            if (nube_3.cargado){
                canvas_2d.drawImage(nube_3.objeto, nube_3_x, nube_3_y, 280, 140);
            }
            if (suelo.cargado){
                canvas_2d.drawImage(suelo.objeto, 0, 750, 1200, 50);
            }
            if (coin.cargado){
                canvas_2d.drawImage(coin.objeto, 510, 45, 70, 70);
            }
            if (x_signal.cargado){
                canvas_2d.drawImage(x_signal.objeto, 590, 70, 15, 15); /* Cross Coin */
                canvas_2d.drawImage(x_signal.objeto, 180, 73, 15, 15); /* Cross Morio */
            }
            if (zero.cargado){
                canvas_2d.drawImage(zero.objeto, 210, 65, 30, 30); /* Zero Morio */
                canvas_2d.drawImage(zero.objeto, 620, 63, 30, 30); /* Zero Coin */
            }
            if (morio_face.cargado){
                canvas_2d.drawImage(morio_face.objeto, 100, 50, 65, 60);
            }
            // General Movement
            if (i === 9999){i = 0}
            nube_1_x = nube_1_x - 0.5;
            nube_2_x = nube_2_x - 2;
            nube_3_x = nube_3_x - 1;
            if (nube_1_x === -450){
                nube_1_x = 1200
            }
            if (nube_2_x === -290){
                nube_2_x = 1200
            }
            if (nube_3_x === -290){
                nube_3_x = 1200
            }
            // Morio Movement
            if (i === 0){
                document.addEventListener("keydown", moveMorioRight);
                document.addEventListener("keydown", moveMorioLeft);
            }
            if (morio_stand_right.cargado){
                if (run_mario_stand_right){
                    canvas_2d.drawImage(morio_stand_right.objeto, morio_x, 610, 88, 140);
                }
            }
            if (morio_stand_left.cargado){
                if (run_mario_stand_left){
                    canvas_2d.drawImage(morio_stand_left.objeto, morio_x, 610, 88, 140);
                }
            }
            if (morio_frame1_right.cargado){
                if (run_frame_1_right){
                    canvas_2d.drawImage(morio_frame1_right.objeto, morio_x, 610, 110, 140);
                }
            }
            if (morio_frame2_right.cargado){
                if (run_frame_2_right){
                    canvas_2d.drawImage(morio_frame2_right.objeto, morio_x, 610, 88, 140);
                }
            }
            if (morio_frame3_right.cargado){
                if (run_frame_3_right){
                    canvas_2d.drawImage(morio_frame3_right.objeto, morio_x, 610, 117, 140);
                }
            }
            if (morio_frame1_left.cargado){
                if (run_frame_1_left){
                    canvas_2d.drawImage(morio_frame1_left.objeto, morio_x, 610, 110, 140);
                }
            }
            if (morio_frame2_left.cargado){
                if (run_frame_2_left){
                    canvas_2d.drawImage(morio_frame2_left.objeto, morio_x, 610, 88, 140);
                }
            }
            if (morio_frame3_left.cargado){
                if (run_frame_3_left){
                    canvas_2d.drawImage(morio_frame3_left.objeto, morio_x, 610, 117, 140);
                }
            }
            async function moveMorioRight(event){
                if (mario_avaliable_walk && event.keyCode == keys.RIGHT){
                    mario_avaliable_walk = false;
                    switch (event.keyCode){
                        case keys.RIGHT:
                            move_right = false;
                            run_mario_stand_right = false;
                            run_mario_stand_left = false;
                            run_frame_2_right = true;
                            await esperar(100)
                            morio_x = morio_x + 4;
                            run_frame_2_right = false
                            console.log(morio_x + " +4")
                            run_frame_1_right = true;
                            await esperar(100)
                            morio_x = morio_x + 35;
                            run_frame_1_right = false;
                            console.log(morio_x + " +35")
                            run_frame_2_right = true;
                            await esperar(100)
                            morio_x = morio_x - 10;
                            run_frame_2_right = false
                            console.log(morio_x + " -10")
                            run_frame_3_right = true;
                            await esperar(100)
                            morio_x = morio_x + 40;
                            run_frame_3_right = false;
                            console.log(morio_x + " +40")
                            move_right = true;
                        break;
                    }
                    run_mario_stand_right = true;
                    mario_avaliable_walk = true;
                }
            }
            async function moveMorioLeft(event){
                if (mario_avaliable_walk && event.keyCode == keys.LEFT){
                    mario_avaliable_walk = false;
                    switch (event.keyCode){
                        case keys.LEFT:
                            move_left = false;
                            run_mario_stand_right = false;
                            run_mario_stand_left = false;
                            run_frame_2_left = true;
                            await esperar(100)
                            morio_x = morio_x - 4;
                            run_frame_2_left = false;
                            console.log(morio_x + " -4")
                            run_frame_1_left = true;
                            await esperar(100)
                            morio_x = morio_x - 35;
                            run_frame_1_left = false;
                            console.log(morio_x + " -30")
                            run_frame_2_left = true;
                            await esperar(100)
                            morio_x = morio_x - 15;
                            run_frame_2_left = false;
                            console.log(morio_x + " -15")
                            run_frame_3_left = true;
                            await esperar(100)
                            morio_x = morio_x - 20;
                            run_frame_3_left = false;
                            console.log(morio_x + " -20")
                            move_left = true;
                        break;
                    }
                    run_mario_stand_left = true;
                    mario_avaliable_walk = true;
                }
            }
        }
    }
    gameProcess();
}