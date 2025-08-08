const anchoVentana = window.innerWidth;
const altoVentana = window.innerHeight;

document.getElementById("jugador-1").style.left = Math.random() * (anchoVentana - 100) + "px";
document.getElementById("jugador-1").style.top = Math.random() * (altoVentana - 100) + "px";

document.getElementById("jugador-2").style.left = Math.random() * (anchoVentana - 100) + "px";
document.getElementById("jugador-2").style.top = Math.random() * (altoVentana - 100) + "px";

let vidaJugador1 = 100;
let vidaJugador2 = 100;
let turnoJugador = 1;


function atacar() {
    if (turnoJugador === 1) {
        vidaJugador2 -= Math.floor(Math.random() * 20) + 1;
    } else {
        vidaJugador1 -= Math.floor(Math.random() * 20) + 1;
    }
    console.log("Vida Jugador 1: " + vidaJugador1);
    console.log("Vida Jugador 2: " + vidaJugador2);

    actualizarBarraDeVida();
    verificarGanador();
    cambiarTurno();
}

function cambiarTurno() {
    if (turnoJugador === 1) {
        turnoJugador = 2;
    } else {
        turnoJugador = 1;
    }
    document.getElementById("turno-jugador").innerText = "Turno del Jugador: " + turnoJugador;
}

function verificarGanador() {
    if (vidaJugador1 <= 0) {
        vidaJugador1 = 0;
        actualizarBarraDeVida();
        Swal.fire({
            title: '¡Jugador 2 gana!',
            icon: 'success',
            confirmButtonText: 'Reiniciar'
        }).then(() => {
            location.reload();
        });
    } else if (vidaJugador2 <= 0) {
        vidaJugador2 = 0;
        actualizarBarraDeVida();
        Swal.fire({
            title: '¡Jugador 1 gana!',
            icon: 'success',
            confirmButtonText: 'Reiniciar'
        }).then(() => {
            location.reload();
        });
    }
}

function actualizarBarraDeVida() {
    const barra1 = document.getElementById("vida-1");
    const barra2 = document.getElementById("vida-2");

    barra1.style.width = vidaJugador1 + "%";
    barra2.style.width = vidaJugador2 + "%";

    // Jugador 1
    if (vidaJugador1 <= 30) {
        barra1.style.backgroundColor = "red";
    } else if (vidaJugador1 <= 50) {
        barra1.style.backgroundColor = "orange";
    } else {
        barra1.style.backgroundColor = "#28a745";
    }

    // Jugador 2
    if (vidaJugador2 <= 30) {
        barra2.style.backgroundColor = "red";
    } else if (vidaJugador2 <= 50) {
        barra2.style.backgroundColor = "orange";
    } else {
        barra2.style.backgroundColor = "#28a745";
    }

    document.getElementById("vida-texto-1").innerText = vidaJugador1 + " / 100";
    document.getElementById("vida-texto-2").innerText = vidaJugador2 + " / 100";
}