const tituloCancion = document.querySelector(".reproductor-musica h1");

const nombreArtista = document.querySelector(".reproductor-musica p ");

const progreso = document.getElementById("progreso");
const cancion = document.getElementById("cancion");

const iconoControl = document.getElementById("iconoControl");
const botonReproducirPausar = document.querySelector(
  ".boton-reproducir-pausar"
);

const botonAtras = document.querySelector("controles button.atras");
const botonAdelante = document.querySelector("controles button.adelante");

const canciones = [
  {
    titulo: "agony",
    nombre: "young lean",
    fuente: "Music/agony_-_yung_lean_instrumental_slowed.mp3",
  },
  {
    titulo: "moonlinght",
    nombre: "macDeMarco",
    fuente: "Music/Moonlight_on_the_River_-_Mac_Demarco_Slowed.mp3",
  },
  {
    titulo: "now are free",
    nombre: "gladiator",
    fuente: "Music/Now_We_Are_Free_-_Gladiator.mp3",
  },
  {
    titulo: "into the deep",
    nombre: "soleeman",
    fuente: "Music/Soleeman_-_Into_The_Deep.mp3",
  },
  {
    titulo: "dreamscape",
    nombre: "009",
    fuente: "Music/Trance_-_009_Sound_System_Dreamscape.mp3",
  },
];

let indiceCancionActual = 0;
function actualizarInfoCancion() {
  tituloCancion.textContent = canciones[indiceCancionActual].titulo;
  nombreArtista.textContent = canciones[indiceCancionActual].nombre;
  cancion.src = canciones[indiceCancionActual].fuente;
  cancion.addEventListener("loadeddata", function () {});
}
botonReproducirPausar.addEventListener("click", reproducirPausar);

function reproducirPausar() {
  if (cancion.paused) {
    reproducirCancion();
    iconoControl.classList.add("bi-pause-fill");
    iconoControl.classList.remove("bi-pause-fill");
  } else {
    pausarCancion();
    iconoControl.classList.remove("bi-pause-fill");
    iconoControl.classList.add("bi-pause-fill");
  }
}

function reproducirCancion() {
  cancion.play();
}

function pausarCancion() {
  cancion.pause();
}

actualizarInfoCancion();
