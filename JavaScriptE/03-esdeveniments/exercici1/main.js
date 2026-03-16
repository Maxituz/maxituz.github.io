// ============================================
// 🎓 TUTORIAL: ESDEVENIMENTS INTERACTIUS
// ============================================
// 🎯 OBJECTIU: Aprendre a utilitzar ESDEVENIMENTS per fer jocs interactius
//
// 📚 QUÈ APRENDRÀS:
// - Com afegir esdeveniments de click als botons
// - Com crear funcions que responen a accions de l'usuari
// - Com actualitzar el DOM dinàmicament segons l'usuari interactua
// - Com fer un sistema de combat complet i interactiu
//
// ============================================

// ============================================
// PART 1: QUÈ SÓN ELS ESDEVENIMENTS?
// ============================================

// CONCEPTE CLAU: ESDEVENIMENTS
//
// Fins ara, tot el teu codi s'executava automàticament quan carregaves la pàgina.
// Però els JOCS necessiten INTERACCIÓ DE L'USUARI perquè aquest evolucioni.
//
// Els ESDEVENIMENTS permeten que el teu codi "escolti" accions de l'usuari:
// - Click del ratolí
// - Tecles premudes
// - Text escrit en un input
// - I moltes coses més!
//
// SINTAXI BÀSICA:
// element.addEventListener('click', funcio);
//
// - element: l'element HTML que volem "escoltar"
// - 'click': el tipus d'esdeveniment
// - funcio: el codi que s'executa quan passa l'esdeveniment

// ============================================
// PART 1: VARIABLES DEL JOC
// ============================================

// Stats del jugador
let vidaJugador = 100;
const vidaMaximaJugador = 100;
const atacJugador = 25;
let pocionsJugador = 3;

// Stats de l'enemic
let vidaEnemic = 120;
let vidaMaximaEnemic = 120;
let atacEnemic = 20;
let pocionsEnemic = 3;

// Estadístiques de la batalla
let tornsTotals = 0;
let danyCausat = 0;
let danyRebut = 0;
let pocionsUtilitzades = 0;

// ============================================
// PART 2: FUNCIONS PER ACTUALITZAR INFORMACIÓ DEL COMBAT
// ============================================

// Funció per actualitzar les barres de vida del Jugador i l'Enemic
function actualitzarBarresVida() {
  if (vidaJugador < 0) {
    vidaJugador = 0;
  }
  if (vidaEnemic < 0) {
    vidaEnemic = 0;
  }
  const percentatgeJugador = (vidaJugador / vidaMaximaJugador) * 100;
  const percentatgeEnemic = (vidaEnemic / vidaMaximaEnemic) * 100;

  document.querySelector('#vida-jugador').textContent = vidaJugador;
  document
    .querySelector('#vida-jugador-barra')
    .style.setProperty('width', `${percentatgeJugador}%`);

  document.querySelector('#vida-enemic').textContent = vidaEnemic;
  document.querySelector('#vida-enemic-barra').style.setProperty('width', `${percentatgeEnemic}%`);
  if (vidaEnemic <= 0 || vidaJugador <= 0) {
    btnAtacar.removeEventListener('click', Atac);
    btnPocio.removeEventListener('click', Curar);
    btnAtacar.disabled = true;
    btnPocio.disabled = true;
  }
}

// Funció per actualitzar stats (SECCIÓ ESTADÍSTIQUES DE BATALLA)
function actualitzarStats() {
  document.querySelector('#pocions-jugador').textContent = pocionsJugador;
  document.querySelector('#torns-total').textContent = tornsTotals;
  document.querySelector('#dany-causat').textContent = danyCausat;
  document.querySelector('#dany-rebut').textContent = danyRebut;
  document.querySelector('#pocions-utilitzades').textContent = pocionsUtilitzades;
  document.querySelector('#pocions-enemic').textContent = pocionsEnemic;
}

// Funció per generar dany aleatori
function generarDany(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ============================================
// PART 3: ESDEVENIMENTS ALS BOTONS
// ============================================

// AQUÍ COMENÇA LA MÀGIA DELS ESDEVENIMENTS!
//
// El codi de les funcions EventListener NOMÉS s'executarà quan l'usuari faci click al botó corresponent.

// ============================================
// ESDEVENIMENT 1: BOTÓ ATACAR
// ============================================

// PAS 1: Seleccionar el botó d'atacar
const btnAtacar = document.querySelector('#btn-atacar');

// PAS 2: Afegir l'esdeveniment
// Quan l'usuari faci click en aquest botó, s'executarà aquesta funció
btnAtacar.addEventListener('click', () => {
  console.log('⚔️ Botó ATACAR premut!');
  tornJugador();
  tornEnemic();
  tornsTotals++;
});
function Atac() {
  console.log('⚔️ Botó ATACAR premut!');
  tornJugador();
  tornEnemic();
  tornsTotals++;
}
function Curar() {
  console.log('🧪 Botó POCIÓ premut!');
  if (pocionsJugador > 0) {
    vidaJugador += curar;
    if (vidaJugador > vidaMaximaJugador) {
      vidaJugador = vidaMaximaJugador;
    }
    pocionsUtilitzades++;
    pocionsJugador--;
    actualitzarBarresVida();
    actualitzarStats();
    tornEnemic();
    tornsTotals++;
  }
}
// ============================================
// ESDEVENIMENT 2: BOTÓ POCIÓ
// ============================================

const btnPocio = document.querySelector('#btn-pocio');
const curar = 40;

btnPocio.addEventListener('click', Curar);
btnAtacar.addEventListener('click', Atac);

// EXTRA 1: Transforma el torn d'atac del jugador en una funcio tornJugador()
function tornJugador() {
  let danyJugador = generarDany(25, 30);
  vidaEnemic -= danyJugador;
  danyCausat += danyJugador;
  actualitzarBarresVida();
  actualitzarStats();
}
// EXTRA 2: Transforma el torn d'atac de l'enemic en una funció tornEnemic()
function tornEnemic() {
  if (vidaEnemic < 30 && pocionsEnemic > 0) {
    vidaEnemic += curar;
    if (vidaEnemic > vidaMaximaEnemic) {
      vidaEnemic = vidaMaximaEnemic;
    }
    pocionsEnemic--;
    actualitzarBarresVida();
    actualitzarStats();
  } else {
    let danyEnemic = generarDany(20, 25);
    vidaJugador -= danyEnemic;
    danyRebut += danyEnemic;
    setTimeout(() => {
      actualitzarBarresVida();
      actualitzarStats();
    }, 500);
  }
}
