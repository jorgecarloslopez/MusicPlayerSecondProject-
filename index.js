const tituloCancion = document.querySelector(".reproductor-musica h1");
const nombreArtista = document.querySelector(".reproductor-musica p");
const progreso = document.getElementById("progreso");
const cancion = document.getElementById("cancion");
const iconoControl = document.getElementById("iconoControl");
const botonReproducirPausar = document.querySelector(
  ".boton-reproducir-pausar"
);
const botonAtras = document.querySelector(".controles button.atras"); // Corregido: añadido .
const botonAdelante = document.querySelector(".controles button.adelante"); // Corregido: añadido .

const canciones = [
  {
    titulo: "moonlight on the river",
    nombre: "mac de marco",
    fuente: "Music/Moonlight_on_the_River_-_Mac_Demarco_Slowed.mp3",
  },
  {
    titulo: "now are free",
    nombre: "gladiator",
    fuente: "Music/Music/Now_We_Are_Free_-_Gladiator.mp3",
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

  // Cargar la canción y reproducir automáticamente
  cancion.addEventListener(
    "loadeddata",
    function () {
      cancion.play();
      iconoControl.classList.remove("bi-play-fill");
      iconoControl.classList.add("bi-pause-fill");
    },
    { once: true }
  );
}

function reproducirPausar() {
  if (cancion.paused) {
    reproducirCancion();
  } else {
    pausarCancion();
  }
}

function reproducirCancion() {
  cancion.play();
  iconoControl.classList.remove("bi-play-fill");
  iconoControl.classList.add("bi-pause-fill");
}

function pausarCancion() {
  cancion.pause();
  iconoControl.classList.remove("bi-pause-fill");
  iconoControl.classList.add("bi-play-fill");
}

// Event listeners
botonReproducirPausar.addEventListener("click", reproducirPausar);

cancion.addEventListener("timeupdate", function () {
  progreso.value = cancion.currentTime;
  progreso.max = cancion.duration || 0;
});

progreso.addEventListener("input", function () {
  cancion.currentTime = progreso.value;
});

botonAdelante.addEventListener("click", function () {
  indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
  actualizarInfoCancion();
});

botonAtras.addEventListener("click", function () {
  // Corrección para manejar índice negativo
  indiceCancionActual =
    (indiceCancionActual - 1 + canciones.length) % canciones.length;
  actualizarInfoCancion();
});

actualizarInfoCancion();
