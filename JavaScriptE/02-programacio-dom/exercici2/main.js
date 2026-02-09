// ============================================
// ⚔️ EXERCICI 2: CALCULADORA DE COMBAT
// ============================================
// 🎯 OBJECTIU: Treballar els operadors aritmètics, relacionals i lògics amb el DOM
//
// 📚 CONCEPTES:
// - Variables i constants
// - Operadors aritmètics: +, -, *, /
// - Operadors relacionals: >, <, >=, <=
// - Operadors lògics: &&, ||
// - Math.floor(), Math.ceil()
// - Math.min(), Math.max()
// - Manipulació del DOM
//
// ============================================

// ============================================
// PART 1: ESTADÍSTIQUES DELS COMBATENTS
// ============================================

// ============================================
// ✅ TASCA 1: Establir stats del jugador
// ============================================
// Mewtwo - Nivell 50

const nomJugador = 'Mewtwo';
const atacJugador = 130;
const defensaJugador = 70;
const velocitatJugador = 140;
const vidaMaximaJugador = 200;
let vidaActualJugador = 200;
let percentatgeVidaJugador = (vidaActualJugador / vidaMaximaJugador) * 100;

// ============================================
// ✅ TASCA 2: Establir stats de l'enemic
// ============================================
// Charizard - Nivell 50

const nomEnemic = 'Charizard';
const atacEnemic = 120;
const defensaEnemic = 65;
const velocitatEnemic = 95;
const vidaMaximaEnemic = 180;
let vidaActualEnemic = 180;
let percentatgeVidaEnemic = (vidaActualEnemic / vidaMaximaEnemic) * 100;

// ============================================
// ✅ TASCA 3: Actualitzar stats al DOM
// ============================================
// Selecciona tots els elements dels stats del Jugador i actualitza'ls amb textContent
// Selecciona tots els elements dels stats de l'Enemic i actualitza'ls amb textContent

const spanAtacJugador = document.querySelector('#atac-jugador');
const spanDefensaJugador = document.querySelector('#defensa-jugador');
const spanVelocitatJugador = document.querySelector('#velocitat-jugador');
const spanVidaJugador = document.querySelector('#vida-jugador-text');
const divBarraVidaJugador = document.querySelector('#barra-vida-jugador');

const spanAtacEnemic = document.querySelector('#atac-enemic');
const spanDefensaEnemic = document.querySelector('#defensa-enemic');
const spanVelocitatEnemic = document.querySelector('#velocitat-enemic');
const spanVidaEnemic = document.querySelector('#vida-enemic-text');
const divBarraVidaEnemic = document.querySelector('#barra-vida-enemic');

spanAtacJugador.textContent = atacJugador;
spanDefensaJugador.textContent = defensaJugador;
spanVelocitatJugador.textContent = velocitatJugador;
spanVidaJugador.textContent = `${vidaActualJugador}/${vidaMaximaJugador}`;
divBarraVidaJugador.style.setProperty('width', `${percentatgeVidaJugador}%`);

spanAtacEnemic.textContent = atacEnemic;
spanDefensaEnemic.textContent = defensaEnemic;
spanVelocitatEnemic.textContent = velocitatEnemic;
spanVidaEnemic.textContent = `${vidaActualEnemic}/${vidaMaximaEnemic}`;
divBarraVidaEnemic.style.setProperty('width', `${percentatgeVidaEnemic}%`);

// ============================================
// PART 2: CÀLCULS DE DANY (SIMULANT 1 TORN DE COMBAT)
// ============================================

// ============================================
// ✅ TASCA 4: Calcular dany normal del jugador
// ============================================
// Fórmula: Atac del jugador - Defensa de l'enemic
// Si el resultat és negatiu o 0, el dany ha de ser igual a 1

let danyJugadorNormal = atacJugador - defensaEnemic;
if (danyJugadorNormal <= 0) {
  danyJugadorNormal = 1;
}

// ============================================
// ✅ TASCA 5: Calcular el dany d'un atac crític del jugador (x2)
// ============================================
// Fórmula: Dany normal del jugador * 2

let danyJugadorCritic = danyJugadorNormal * 2;

// ============================================
// ✅ TASCA 6: Calcular dany normal de l'enemic
// ============================================
// Fórmula: Atac de l'enemic - Defensa del jugador
// Si el resultat és negatiu o 0, el dany ha de ser igual a 1

let danyEnemicNormal = atacEnemic - defensaJugador;
if (danyEnemicNormal <= 0) {
  danyEnemicNormal = 1;
}

// ============================================
// ✅ TASCA 7: Calcular el dany d'un atac crític de l'enemic (x2)
// ============================================
// Fórmula: Dany normal de l'enemic * 2

let danyEnemicCritic = danyEnemicNormal * 2;

// ============================================
// ✅ TASCA 8: Actualitzar dany al DOM
// ============================================
// Selecciona els elements del dany normal i crític del jugador i l'enemic
// Actualitza els valors de dany normal i crític del jugador i l'enemic al DOM

const divDanyJugadorNormal = document.querySelector('#dany-jugador-normal');
const divDanyJugadorCritic = document.querySelector('#dany-jugador-critic');
const divDanyEnemicNormal = document.querySelector('#dany-enemic-normal');
const divDanyEnemicCritic = document.querySelector('#dany-enemic-critic');

divDanyJugadorNormal.textContent = danyJugadorNormal;
divDanyJugadorCritic.textContent = danyJugadorCritic;
divDanyEnemicNormal.textContent = danyEnemicNormal;
divDanyEnemicCritic.textContent = danyEnemicCritic;
// ============================================
// PART 3: PROBABILITATS
// ============================================

// ============================================
// ✅ TASCA 9: Calcular les probabilitats d'un atac crític (% de fer un atac crític)
// ============================================
// Fórmula Jugador: Velocitat Jugador / 5 (i com a màxim 30%)
// Fórmula Enemic: Velocitat Enemic / 5 (i com a màxim 30%)
// Selecciona els elements de probabilitat d'atac crític del jugador i l'enemic
// Actualitza el DOM amb el percentatge de probabilitat d'atac crític
let probCriticJugador = Math.ceil(velocitatJugador / 5);
let probCriticEnemic = Math.ceil(velocitatEnemic / 5);

if (probCriticJugador > 30) {
  probCriticJugador = 30;
}
if (probCriticEnemic > 30) {
  probCriticEnemic = 30;
}

const divProbCriticJugador = document.querySelector('#prob-critic-jugador');
const divProbCriticEnemic = document.querySelector('#prob-critic-enemic');

divProbCriticJugador.textContent = `${probCriticJugador}%`;
divProbCriticEnemic.textContent = `${probCriticEnemic}%`;

// ============================================
// ✅ TASCA 10: Calcular les probabilitats d'esquivar l'atac (% de poder esquivar un atac)
// ============================================
// Fórmula Jugador: Velocitat Jugador / 6 (i com a màxim un 20%)
// Fórmula Enemic: Velocitat Enemic / 6 (i com a màxim un 20%)
// Selecciona els elements de probabilitat d' esquivar del jugador i l'enemic
// Actualitza el DOM amb el percentatge de probabilitat d'esquivar l'atac

let probEsquivaJugador = Math.ceil(velocitatJugador / 6);
let probEsquivaEnemic = Math.ceil(velocitatEnemic / 6);

if (probEsquivaJugador > 20) {
  probEsquivaJugador = 20;
}
if (probEsquivaEnemic > 20) {
  probEsquivaEnemic = 20;
}

const divProbEsquivaJugador = document.querySelector('#prob-esquiva-jugador');
const divProbEsquivaEnemic = document.querySelector('#prob-esquiva-enemic');

divProbEsquivaJugador.textContent = `${probEsquivaJugador}%`;
divProbEsquivaEnemic.textContent = `${probEsquivaEnemic}%`;
// ============================================
// PART 4: PREDICCIONS
// ============================================

// ============================================
// ✅ TASCA 11: Determinar qui ataca primer
// ============================================
// El personatge amb més velocitat ataca primer
// Selecciona l'element del DOM que mostrarà qui ataca primer
// Actualitza el DOM amb el nom del personatge que ataca primer

let quiAtacaPrimer;

if (velocitatJugador > velocitatEnemic) {
  quiAtacaPrimer = 'Jugador - Mewtwo';
} else {
  quiAtacaPrimer = 'Enemic - Charizard';
}

const divQuiPrimer = document.querySelector('#qui-primer');

divQuiPrimer.textContent = quiAtacaPrimer;
// ============================================
// ✅ TASCA 12: Calcular els possibles torns necessaris per guanyar
// ============================================
// Divideix la vida de l'enemic pel dany normal del jugador
// Arrodoneix cap AMUNT (no pots fer mig torn!)
// Selecciona l'element del DOM que mostrarà els torns necessaris per guanyar
// Actualitza el DOM amb els torns necessaris per guanyar

let tornsNecessarisJugador = Math.ceil(vidaActualEnemic / danyJugadorNormal);

const divTornsGuanyar = document.querySelector('#torns-guanyar');

divTornsGuanyar.textContent = tornsNecessarisJugador;
// ============================================
// ✅ TASCA 13: Calcular vida restant del Jugador després del combat (sense crítics ni atacs esquivats)
// ============================================
// Calcula la quantitat de dany que rebràs després de fer tots els torns
// El dany total rebut serà: dany normal de l'enemic * torns necessaris del jugador
// La vida restant serà: vida màxima del jugador - dany total rebut
// Selecciona l'element del DOM que mostrarà la vida restant del jugador
// Actualitza el DOM amb la vida restant (si el valor és negatiu, has de mostrar 0)

let danyTotalRebut = danyEnemicNormal * tornsNecessarisJugador;
let vidaRestant = vidaMaximaJugador - danyTotalRebut;

if (vidaRestant <= 0) {
  vidaRestant = 0;
}

const divVidaRestant = document.querySelector('#vida-restant');

divVidaRestant.textContent = vidaRestant;
// ============================================
// TASCA 14: Calcular probabilitat de victòria després de la predicció anterior de vida restant
// ============================================
// Basant-te en la vida restant a partir de la predicció anterior:
// - Si vidaRestant >= 75% → 100%
// - Sinó, Si vidaRestant >= 50% → 75%
// - Sinó, Si vidaRestant >= 25% → 55%
// - Sinó  → 10%
// Selecciona l'element del DOM que mostrarà la probabilitat de victòria
// Actualitza el DOM amb la probabilitat de victòria

let probVictoria = 0;
let percentatgeVidaRestant = Math.ceil((vidaRestant / vidaMaximaJugador) * 100);

if (vidaRestant >= 75) {
  probVictoria = 100;
} else if (vidaRestant >= 50) {
  probVictoria = 75;
} else if (vidaRestant >= 20) {
  probVictoria = 55;
} else {
  probVictoria = 10;
}

const divProbVictoria = document.querySelector('#prob-victoria');

divProbVictoria.textContent = `${probVictoria}%`;

// ============================================
// PART 5: SIMULACIÓ D'UN TORN
// ============================================

// TASCA GRUPAL: SIMULAR UN TORN DE COMBAT
// ============================================
// Simula un torn de combat on ataqui el personatge que toca segons la velocitat
// Has de tenir en compte les probabilitats d'atac crític i d'esquivar l'atac
// Actualitza la vida dels personatges després de cada atac
// Mostra al log del combat cada acció que es realitza (qui ataca, si és crític o normal, si s'esquiva, vida restant, etc.)

const Simulacio = document.querySelector('#log-combat');
let EnemicEsquiva = false;
let JugadorCritic = false;
// Reset de vida

vidaActualJugador = vidaMaximaJugador;
vidaActualEnemic = vidaMaximaEnemic;

//Funció aleatorietat

function prob(percentatge) {
  let prob = Math.random();
  if (prob < percentatge / 100) {
    return 1;
  } else {
    return 0;
  }
}

// Atac a enemic
if (prob(probEsquivaEnemic)) {
  EnemicEsquiva = true;
} else {
  if (prob(probCriticJugador)) {
    JugadorCritic = true;
    vidaActualEnemic -= danyJugadorCritic;
  } else {
    vidaActualEnemic -= danyJugadorNormal;
  }
}

Simulacio.innerHTML = '<h3>Torn Mewtwo:</h3>';

if (EnemicEsquiva) {
  Simulacio.innerHTML += `
<p>Mewtwo ha intentat atacar a Charizard, però ha fallat</p>
`;
} else if (JugadorCritic) {
  Simulacio.innerHTML += `
<p>Mewtwo ha fet un atac crític a Charizard fent un total de ${danyJugadorCritic}</p>
<p>Vida Charizard: ${vidaActualEnemic}</p>
`;
} else {
  Simulacio.innerHTML += `
<p>Mewtwo ha fet un atac a Charizard fent un total de ${danyJugadorNormal}</p>
<p>Vida Charizard: ${vidaActualEnemic}</p>
`;
}

// Atac a jugador

Simulacio.innerHTML += '<h3>Torn Charizard:</h3>';

let JugadorEsquiva = false;
let EnemicCritic = false;

if (prob(probEsquivaJugador)) {
  JugadorEsquiva = true;
} else {
  if (prob(probCriticEnemic)) {
    EnemicCritic = true;
    vidaActualJugador -= danyEnemicCritic;
  } else {
    vidaActualJugador -= danyEnemicNormal;
  }
}

if (JugadorEsquiva) {
  Simulacio.innerHTML += `
<p>Charizard ha intentat atacar a Mewtwo, però ha fallat</p>
`;
} else if (EnemicCritic) {
  Simulacio.innerHTML += `
<p>Charizard ha fet un atac crític a Mewtwo fent un total de ${danyEnemicCritic}</p>
<p>Vida Mewtwo: ${vidaActualJugador}</p>
`;
} else {
  Simulacio.innerHTML += `
<p>Charizard ha fet un atac a Mewtwo fent un total de ${danyEnemicNormal}</p>
<p>Vida Mewtwo: ${vidaActualJugador}</p>
`;
}
