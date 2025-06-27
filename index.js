const tituloCancion = document.querySelector("reproductor-musica h1");

const nombreArtista = document.querySelector("reproductor-musica p ");

const progreso = document.getElementById("progreso");
const cancion = document.getElementById("cancion");

const iconoControl = document.getElementById("iconoControl");
const reproducirReproducirPausar = document.querySelector(
  "boton-reproducir-pausar"
);

const botonAtras = document.querySelector("controles button.atras");
const botonAdelante = document.querySelector("controles button.adelante");

const canciones = [
  {
    titulo: "",
    Cancion: "",
    fuente: "Music/agony_-_yung_lean_instrumental_slowed.mp3",
  },
  {
    titulo: "",
    Cancion: "",
    fuente: "Music/Moonlight_on_the_River_-_Mac_Demarco_Slowed.mp3",
  },
  {
    titulo: "",
    Cancion: "",
    fuente: "Music/Now_We_Are_Free_-_Gladiator.mp3",
  },
  {
    titulo: "",
    Cancion: "",
    fuente: "Music/Soleeman_-_Into_The_Deep.mp3",
  },
  {
    titulo: "",
    Cancion: "",
    fuente: "Music/Trance_-_009_Sound_System_Dreamscape.mp3",
  },
];
