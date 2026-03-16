// ============================================================
// 🥷 NINJA FRUIT — Esdeveniments de ratolí
// ============================================================
//
// 📚 QUÈ APRENDRÀS en aquest exercici:
//   1. Crear elements HTML des de JavaScript
//   2. Moure elements amb setInterval (animació)
//   4. Detectar clicks sobre elements (addEventListener)
//   5. Gestionar un array d'objectes al joc
//
// ============================================================

// ============================================================
// PART 1 - GENERAR UNA FRUITA
// ============================================================
// Element "pantalla" del joc o es veuran les fruites.
const zonaJoc = document.querySelector('#zona-joc');

// Vector on guardarem les fruites generades (per controlar-les)
let fruites = [];

// Vector amb els diferents emojis de les fruites disponibles
const EMOJIS_FRUITA = ['🍉', '🍊', '🍋', '🍇', '🍓', '🍑', '🍍', '🥭'];

// Funció per generar número aleatori (ja donada)
function generarAleatori(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TASCA: Generar 1 fruita i fer-la aparèixer a la pantalla de forma aleatoria.

// 1. Creem el div de la fruita amb document.createElement('div')
let divFruita;

// 2. Afegim la classe "fruita" per donar estils CSS

// 3. Generem un número a l'atzar entre (0 i 7) per escollir un emoji aleatori
let numero;

// 4. Al contingut de divFruita li afegim del llistat EMOJIS_FRUITA el corresponent

// 5. Generar una Posició X aleatoria per que aparegui la fruita
// El valor ha d'estar entre 0 i windows.innerWidth (l'amplada de la pantalla)
let posX;
let posY = 0;
// Posicionar l'element a la pantalla amb setProperty(left) i setProperty(top)

// 6. Establim un número aleatori per la velocitat de moviment de la fruita
// La velocitat hauria d'estar entre 1 i 4.
let velocitat;

// 7. Guardem la fruita a l'array amb la seva posició X i Y i seva velocitat
fruites.push({ divFruita: divFruita, posX: posX, posY: posY, velocitat: velocitat });

// 8. L'afegim a la zona de joc
zonaJoc.append(divFruita);

// ============================================================
// PART 2 - FUNCIÓ GENERAR FRUITA
// ============================================================

// TASCA: Transforma el codi anterior en una funció per generar una fruita.
// Cada cop que executem aquesta funció és generarà una nova frutia.
// Així ens estalviem haver de fer milers de línies de codi repetides.

// 1. Fes-ho sobre el codi anterior. Transforma el codi a la funció generarFruita()

// 2. Això ho pots fer aquí. Crida a la funció generarFruita() 1 vegada.

// 3. Genera 10 fruites fent servir un bucle FOR.
// Cada fruita ha de trigar 1000 milisegons a generar-se respecte la fruita anterior (setTimeout).

// 4. Modifica el codi anterior perquè sigui una funció i es digui generarLesFruites()

// ============================================================
// PART 3 - INICIAR PARTIDA
// ============================================================
// TASCA: Afegeix un addEventListener de 'click' al botó "btnIniciar"

// Quan es fa clic al botó:
// Afegir la classe "amagat" a l'element missatgeInici
// Canvia la variable de jocIniciat a true
// Crida a la funció de generarLesFruites()
const btnIniciar = document.querySelector('#btn-iniciar');
const missatgeInici = document.querySelector('#missatge-inici');
let jocIniciat = false;

// ============================================================
// PART 4 - BUCLE DEL JOC (MOURE LES FRUITES)
// ============================================================
// Per moure les fruites farem servir un bucle de joc o bucle de temps (setInterval)

// BUCLE DEL JOC
// TASCA: Fes un bucle de temps i dintre un bucle for o foreach i que per cada fruita actualitzi la seva posY (moviment vertical)

// 1. Crear el bucle setInterval amb un interval de 16 --> equival a 60fps
// 2. Fes un bucle for o foreach per recorrer el vector de fruites
// 3. Per cada fruita: Sumar a la seva posY la velocitat (per fer-la caure)
// 4. Modificar la propietat "top" i actualitzar la nova posició Y de la fruita.
// 5. Si la fruita supera l'alçada de la pantalla (window.innerHeight), posY pasa a ser 0.
setInterval(() => {
  //console.log(punts);
}, 16); // 60 fps

// ============================================================
// PART 5 - ESDEVENIMENT CLICK PER LES FRUITES I ELIMINAR-LES
// ============================================================

// Crea aquest codi dins la PART 1 - funció generarFruita().

// TASCA: Afegeix un esdeveniment de clic per cada fruita.

// 1. Afegeix un eventListener de click a l'element DIV (divFruita)
// 2. La funció eventListener rep un paràmetre "event" i has d'eliminar l'element HTML fent ús de "event.target.remove()"
// 3. Crea un comptador de punts, per cada fruita que es faci clic s'ha de sumar 10 punts al comptador i mostrar el total per consola.
let punts = 0;
const divPunts = document.querySelector('#punts');

// ============================================================
// PART 5 - FES EL JOC MÉS INTERESSANT
// ============================================================

// EXTRA 1: AFEGEIX NIVELLS (per cada nivell apareixen més fruites i puja la velocitat)
// - Estableix un màxim de 10 nivells on apareixen 10 fruites noves a cada nivell.
// - Estableix un màxim de punts per cada nivell (100,200,300,400, etc.)
// EXTRA 2: AFEGEIX VIDES (crea una variable i mostra al DOM si es perden vides)
// - Si el número de vides arriba a 0 fes una funció de Game Over que mostri el següent missatge
/*
const missatgeFi = document.createElement('div');
  missatgeFi.classList.add('missatge-fi');
  missatgeFi.innerHTML = `
    <div class="missatge-icon">💀</div>
    <h1>GAME OVER</h1>
    <p>Se t'han escapat massa fruites!</p>
    <p class="punts-finals">${punts} PUNTS</p>
    <button id="btn-reiniciar">TORNAR A JUGAR</button>
  `;
  zonaJoc.appendChild(missatgeFi);
*/
