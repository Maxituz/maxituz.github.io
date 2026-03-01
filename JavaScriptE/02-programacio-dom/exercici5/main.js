// ============================================
// ⚔️ EXERCICI 5: SELECTOR DE PERSONATGE
// ============================================
// 🎯 OBJECTIU: Introduir switch/case i consolidar if/else amb comparacions
//
// 📚 CONCEPTES:
// - Variables i constants per stats de personatges
// - switch/case per seleccionar segons estil de joc
// - if/else per comparar stats entre personatges
// - Operadors relacionals: >, <, >=, <=, ===
// - Actualització dinàmica del DOM
//
// 🎮 CONTEXT:
// Analitza 4 classes de personatges (Guerrer, Mag, Arquer, Assassí).
// Cada classe té stats diferents: Atac, Defensa, Velocitat, Màgia.
// Determina quina classe és millor per a cada estil de joc.
//
// ============================================

// ============================================
// ✅ TASCA 1: Establir stats del GUERRER
// ============================================
// El Guerrer és fort en combat cos a cos, amb defensa alta però lent

const nomGuerrer = 'GUERRER';
const iconGuerrer = './img/guerrer-darius.webp';
let atacGuerrer = 85;
let defensaGuerrer = 90;
let velocitatGuerrer = 45;
let magiaGuerrer = 30;

// ============================================
// ✅ TASCA 2: Calcular total de stats del Guerrer
// ============================================
// Suma de tots els stats del Guerrer per obtenir un total general
let totalGuerrer = atacGuerrer + defensaGuerrer + velocitatGuerrer + magiaGuerrer; // 250

// ============================================
// ✅ TASCA 3: Actualitzar stats del Guerrer al DOM
// ============================================
// Seleccionar els elements del DOM i actualitzar el seu contingut
const divAtacGuerrer = document.querySelector('#atac-guerrer');
const divDefensaGuerrer = document.querySelector('#defensa-guerrer');
const divVelocitatGuerrer = document.querySelector('#velocitat-guerrer');
const divMagiaGuerrer = document.querySelector('#magia-guerrer');
const divTotalGuerrer = document.querySelector('#total-guerrer');

divAtacGuerrer.textContent = atacGuerrer;
divDefensaGuerrer.textContent = defensaGuerrer;
divVelocitatGuerrer.textContent = velocitatGuerrer;
divMagiaGuerrer.textContent = magiaGuerrer;
divTotalGuerrer.textContent = totalGuerrer;

// ============================================
// ✅ TASCA 4: Establir stats del MAG
// ============================================
// El Mag és mestre de la màgia, amb un alt atac màgic però amb una baixa defensa
const nomMag = 'MAG';
const iconMag = './img/mag-lux.webp';
let atacMag = 50;
let defensaMag = 35;
let velocitatMag = 60;
let magiaMag = 95;

// ============================================
// ✅ TASCA 5: Calcular total de stats del Mag
// ============================================
// Suma de tots els stats del Mag per obtenir un total general
let totalMag = atacMag + defensaMag + velocitatMag + magiaMag; // 240

// ============================================
// ✅ TASCA 6: Actualitzar stats del Mag al DOM
// ============================================
// Seleccionar els elements del DOM i actualitzar el seu contingut
const divAtacMag = document.querySelector('#atac-mag');
const divDefensaMag = document.querySelector('#defensa-mag');
const divVelocitatMag = document.querySelector('#velocitat-mag');
const divMagiaMag = document.querySelector('#magia-mag');
const divTotalMag = document.querySelector('#total-mag');

divAtacMag.textContent = atacMag;
divDefensaMag.textContent = defensaMag;
divVelocitatMag.textContent = velocitatMag;
divMagiaMag.textContent = magiaMag;
divTotalMag.textContent = totalMag;

// ============================================
// ✅ TASCA 7: Establir stats de l'ARQUER
// ============================================
// L'Arquer és ràpid i precís, amb bon atac a distància i velocitat
const nomArquer = 'ARQUER';
const iconArquer = './img/arquera-vayne.webp';
let atacArquer = 75;
let defensaArquer = 55;
let velocitatArquer = 85;
let magiaArquer = 40;

// ============================================
// ✅ TASCA 8: Calcular total de stats de l'Arquer
// ============================================
// Suma de tots els stats del Guerrer per obtenir un total general
let totalArquer = atacArquer + defensaArquer + velocitatArquer + magiaArquer; // 255

// ============================================
// ✅ TASCA 9: Actualitzar stats de l'Arquer al DOM
// ============================================
// Seleccionar els elements del DOM i actualitzar el seu contingut
const divAtacArquer = document.querySelector('#atac-arquer');
const divDefensaArquer = document.querySelector('#defensa-arquer');
const divVelocitatArquer = document.querySelector('#velocitat-arquer');
const divMagiaArquer = document.querySelector('#magia-arquer');
const divTotalArquer = document.querySelector('#total-arquer');

divAtacArquer.textContent = atacArquer;
divDefensaArquer.textContent = defensaArquer;
divVelocitatArquer.textContent = velocitatArquer;
divMagiaArquer.textContent = magiaArquer;
divTotalArquer.textContent = totalArquer;

// ============================================
// ✅ TASCA 10: Establir stats de l'ASSASSÍ
// ============================================
// L'Assassí és extremadament ràpid amb bon atac però defensa molt baixa
const nomAssassi = 'ASSASSÍ';
const iconAssassi = './img/assassi-talon.webp';
let atacAssassi = 80;
let defensaAssassi = 30;
let velocitatAssassi = 95;
let magiaAssassi = 25;

// ============================================
// ✅ TASCA 11: Calcular total de stats de l'Assassí
// ============================================
// Suma de tots els stats del Guerrer per obtenir un total general
let totalAssassi = atacAssassi + defensaAssassi + velocitatAssassi + magiaAssassi; // 230

// ============================================
// ✅ TASCA 12: Actualitzar stats de l'Assassí al DOM
// ============================================
// Seleccionar els elements del DOM i actualitzar el seu contingut
const divAtacAssassi = document.querySelector('#atac-assassi');
const divDefensaAssassi = document.querySelector('#defensa-assassi');
const divVelocitatAssassi = document.querySelector('#velocitat-assassi');
const divMagiaAssassi = document.querySelector('#magia-assassi');
const divTotalAssassi = document.querySelector('#total-assassi');

divAtacAssassi.textContent = atacAssassi;
divDefensaAssassi.textContent = defensaAssassi;
divVelocitatAssassi.textContent = velocitatAssassi;
divMagiaAssassi.textContent = magiaAssassi;
divTotalAssassi.textContent = totalAssassi;

// ============================================
// PART 2: ANÀLISI DELS MILLORS STATS
// ============================================

// ============================================
// ✅ TASCA 13: Determinar quina classe té MÉS ATAC
// ============================================
// Compara els 4 valors d'atac amb if/else
// Guarda el nom del personatge amb més atac i el seu valor

let millorAtacNom; // GUERRER, MAG, ARQUER, ASSASSÍ
let millorAtacValor; // atacGuerrer, atacMag, atacArquer, atacAssassi

//ESTRUCTURES IF-ELSE

// Actualitzar el DOM amb el millorAtacNom i millorAtacValor
const divMillorAtac = document.querySelector('#millor-atac');
const divValorAtac = document.querySelector('#valor-atac');

divMillorAtac.textContent = millorAtacNom;
divValorAtac.textContent = millorAtacValor;

// ============================================
// ✅ TASCA 14: Determinar quina classe té MÉS DEFENSA
// ============================================
// Compara els 4 valors de defensa amb if/else
// Guarda el nom del personatge amb més defensa i el seu valor

let millorDefensaNom; // GUERRER, MAG, ARQUER, ASSASSÍ
let millorDefensaValor; // defensaGuerrer, defensaMag, defensaArquer, defensaAssassi

//ESTRUCTURES IF-ELSE

// Actualitzar DOM el millorDefensaNom i millorDefensaValor
const divMillorDefensa = document.querySelector('#millor-defensa');
const divValorDefensa = document.querySelector('#valor-defensa');

divMillorDefensa.textContent = millorDefensaNom;
divValorDefensa.textContent = millorDefensaValor;

// ============================================
// ✅ TASCA 15: Determinar quina classe té MÉS VELOCITAT
// ============================================
// Compara els 4 valors de velocitat amb if/else
// Guarda el nom del personatge amb més velocitat i el seu valor

let millorVelocitatNom; // GUERRER, MAG, ARQUER, ASSASSÍ
let millorVelocitatValor; // velocitatGuerrer, velocitatMag, velocitatArquer, velocitatAssassi

//ESTRUCTURES IF-ELSE

// Actualitzar DOM amb el millorVelocitatNom i millorVelocitatValor
const divMillorVelocitat = document.querySelector('#millor-velocitat');
const divValorVelocitat = document.querySelector('#valor-velocitat');

divMillorVelocitat.textContent = millorVelocitatNom;
divValorVelocitat.textContent = millorVelocitatValor;

// ============================================
// ✅ TASCA 16: Determinar quina classe té MÉS MÀGIA
// ============================================
// Compara els 4 valors de màgia amb if/else
// Guarda el nom del personatge amb més màgia i el seu valor

let millorMagiaNom; // GUERRER, MAG, ARQUER, ASSASSÍ
let millorMagiaValor; // magiaGuerrer, magiaMag, magiaArquer, magiaAssassi

//ESTRUCTURES IF-ELSE

// Actualitzar DOM el millorMagiaNom i millorMagiaValor
const divMillorMagia = document.querySelector('#millor-magia');
const divValorMagia = document.querySelector('#valor-magia');

divMillorMagia.textContent = millorMagiaNom;
divValorMagia.textContent = millorMagiaValor;

// ============================================
// PART 3: RECOMANACIONS AMB SWITCH/CASE
// ============================================

// CONCEPTE: switch/case
// El switch/case és una alternativa a l'ús de múltiples if/else
// És ideal quan vols comparar una variable amb diversos valors possibles
//
// Sintaxi:
// switch (variable) {
//   case 'valor1':
//     // codi si variable === 'valor1'
//     break;
//   case 'valor2':
//     // codi si variable === 'valor2'
//     break;
//   default:
//     // codi si cap cas coincideix
// }

const recomanacionsGrid = document.querySelector('#recomanacions-grid');
recomanacionsGrid.innerHTML = '';

// ============================================
// ✅ TASCA 17: Recomanar classe per estil "tanc"
// ============================================
// Un "tanc" necessita la DEFENSA més alta per aguantar els danys
// Utilitza switch/case per determinar quina classe recomanar
// Si la defensa és >= 80, raoTanc és EXCEL·LENT
// Si la defensa és >= 40, raoTanc és ACCEPTABLE
// Si la defensa és < 40, raoTanc és NO RECOMANAT

let classeTanc; // (GUERRER, MAG, ARQUER, ASSASSÍ)
let raoTanc; // (EXCEL·LENT, ACCEPTABLE, NO RECOMANAT)

// ESTRUCTURA SWITCH-CASE
//switch (millorDefensaNom)
//classeTanc = "NOMPERSONATGE"
//raoTanc = "..."

// Afegir al DOM la classeTanc i la raoTanc
recomanacionsGrid.innerHTML += `
  <div class="recomanacio-card tanc">
    <div class="recomanacio-estil">🛡️ Estil: TANC</div>
    <div class="recomanacio-classe">${classeTanc === 'GUERRER' ? '⚔️' : classeTanc === 'MAG' ? '🔮' : classeTanc === 'ARQUER' ? '🏹' : '🗡️'}</div>
    <div class="recomanacio-nom">${classeTanc}</div>
    <div class="recomanacio-rao">${raoTanc}</div>
  </div>
`;

// ============================================
// ✅ TASCA 18: Recomanar classe per estil "dps"
// ============================================
// "DPS" (Damage Per Second) necessita tenir la combinació més alta d'ATAC, DEFENSA i VELOCITAT pots fer servir la fòrmula:
// (atac + defensa) * velocitat
let guerrerDps = (atacGuerrer + defensaGuerrer) * velocitatGuerrer;
let magDps = (atacMag + defensaMag) * velocitatMag;
let arquerDps = (atacArquer + defensaArquer) * velocitatArquer;
let assassiDps = (atacAssassi + defensaAssassi) * velocitatAssassi;

let classeDps; // (GUERRER, MAG, ARQUER, ASSASSÍ)
let raoDps; // (EXCEL·LENT, ACCEPTABLE, NO RECOMANAT)

// Utilitza if/else per verificar quina és la millor classeDPS.

// Utilitza switch per determinar la raoDPS segons la classeDPS
// GUERRER --> ACCEPTABLE
// ARQUER --> EXCEL·LENT
// ASSASSÍ --> EXCEL·LENT
// MAG --> NO RECOMANAT

// Afegir al DOM la classeDps i raoDps
recomanacionsGrid.innerHTML += `
  <div class="recomanacio-card dps">
    <div class="recomanacio-estil">💥 Estil: DPS</div>
    <div class="recomanacio-classe">${classeDps === 'GUERRER' ? '⚔️' : classeDps === 'MAG' ? '🔮' : classeDps === 'ARQUER' ? '🏹' : '🗡️'}</div>
    <div class="recomanacio-nom">${classeDps}</div>
    <div class="recomanacio-rao">${raoDps}</div>
  </div>
`;

// ============================================
// ✅ TASCA 19: Recomanar classe per estil "velocitat"
// ============================================
// Estil ràpid necessita ALTA VELOCITAT per atacar primer

let classeVelocitat; // (GUERRER, MAG, ARQUER, ASSASSÍ)
let raoVelocitat; // (EXCEL·LENT, ACCEPTABLE, NO RECOMANAT)

// Utilitza switch per determinar la millor classe per a velocitat

// Afegir al DOM la classeVelocitat i la raoVelocitat
recomanacionsGrid.innerHTML += `
  <div class="recomanacio-card velocitat">
    <div class="recomanacio-estil">⚡ Estil: SPEED</div>
    <div class="recomanacio-classe">${classeVelocitat === 'GUERRER' ? '⚔️' : classeVelocitat === 'MAG' ? '🔮' : classeVelocitat === 'ARQUER' ? '🏹' : '🗡️'}</div>
    <div class="recomanacio-nom">${classeVelocitat}</div>
    <div class="recomanacio-rao">${raoVelocitat}</div>
  </div>
`;

// ============================================
// ✅ TASCA 20: Recomanar classe per estil "màgic"
// ============================================
// Estil màgic necessita ALTA MÀGIA per encanteris poderosos

let classeMagic; // (GUERRER, MAG, ARQUER, ASSASSÍ)
let raoMagic; // (EXCEL·LENT, ACCEPTABLE, NO RECOMANAT)

// Utilitza switch per determinar la millor classe per a màgia

// Afegir al DOM la classeMagic i raoMagic
recomanacionsGrid.innerHTML += `
  <div class="recomanacio-card magic">
    <div class="recomanacio-estil">✨ Estil: MÀGIC</div>
    <div class="recomanacio-classe">${classeMagic === 'GUERRER' ? '⚔️' : classeMagic === 'MAG' ? '🔮' : classeMagic === 'ARQUER' ? '🏹' : '🗡️'}</div>
    <div class="recomanacio-nom">${classeMagic}</div>
    <div class="recomanacio-rao">${raoMagic}</div>
  </div>
`;
