// ============================================
// 🏪 EXERCICI 1: BOTIGA DE POKÉMON
// ============================================
// 🎯 OBJECTIU: Practicar variables, operadors aritmètics i manipulació del DOM
//
// 📚 CONCEPTES:
// - Variables (let) per dades que canvien
// - Constants (const) per preus fixos
// - Operadors aritmètics: +, -, *, /
// - Operadors relacionals: >=, <=
// - querySelector() per seleccionar elements
// - textContent per modificar text
// - innerHTML per crear contingut HTML
//
// ============================================

// ============================================
// CONFIGURACIÓ INICIAL
// ============================================

// Preus dels productes (constants perquè no canvien)
const PREU_POKE_BALL = 200;
const PREU_SUPER_BALL = 600;
const PREU_ULTRA_BALL = 1200;
const PREU_POCIO = 300;
const PREU_SUPERPOCIO = 700;
const PREU_HIPERPOCIO = 1200;
const PREU_MASTER_BALL = 1000000;
const PREU_REVIU = 2000;

console.log('🏪 === BOTIGA POKÉMON === 🏪\n');
console.log('PREUS DEL CATÀLEG:');
console.log(`Poké Ball: ${PREU_POKE_BALL}₽`);
console.log(`Super Ball: ${PREU_SUPER_BALL}₽`);
console.log(`Ultra Ball: ${PREU_ULTRA_BALL}₽`);
console.log(`Poció: ${PREU_POCIO}₽`);
console.log(`Superpoció: ${PREU_SUPERPOCIO}₽`);
console.log(`Reviu: ${PREU_REVIU}₽\n`);

// ============================================
// ✅ TASCA 1: Establir les monedes inicials del jugador
// ============================================
// El jugador ha de començar amb 15000 monedes

let monedesJugador = 15000;

// ============================================
// ✅ TASCA 2: Actualitzar el número de monedes al DOM
// ============================================
// Selecciona l'element i actualitza el seu text
document.querySelector('#monedes-jugador').textContent = monedesJugador;
// ============================================
// ✅ TASCA 3: Comprar 3 Poké Balls
// ============================================
// Calcula quant costen 3 Poké Balls

let quantitatPokeBalls = 3;
let costPokeBalls = PREU_POKE_BALL * quantitatPokeBalls;

// ============================================
// ✅ TASCA 4: Restar el cost de les monedes del jugador
// ============================================
// Calcula quantes monedes li quedaran al jugador després de la compra de 3 pokéballs
monedesJugador -= costPokeBalls;
// ============================================
// ✅ TASCA 5: Actualitzar les monedes al DOM
// ============================================
// Actualitza el número total de monedes
document.querySelector('#monedes-jugador').textContent = monedesJugador;

// ============================================
// ✅ TASCA 6: Afegir les Poké Balls a l'inventari (DOM)
// ============================================
// Selecciona l'inventari i afegeix els items amb innerHTML

// Afegeix el següent HTML a l'inventari:
// <div class="item-inventari">
//   <div class="item-inventari-icon"><img src="pokeball.png" alt="Poké Ball"></div>
//   <div class="item-inventari-nom">Poké Ball</div>
//   <div class="item-inventari-quantitat">x${quantitatPokeBalls}</div>
// </div>
const Inventari = document.querySelector('#inventari');
Inventari.innerHTML = `<div class="item-inventari">   <div class="item-inventari-icon"><img src="./img/pokeball.png" alt="Poké Ball"></div>  <div class="item-inventari-nom">Poké Ball</div>  <div class="item-inventari-quantitat"> x${quantitatPokeBalls}</div> </div>`;
// ============================================
// ✅ TASCA 7: Comprar 4 Superpocions
// ============================================
// Calcula el cost i resta-ho a les monedes actuals del jugador

let quantitatSuperPocions = 4;
let costSuperPocions = PREU_SUPERPOCIO * quantitatSuperPocions;

// ============================================
// ✅ TASCA 8: Actualitzar monedes
// ============================================
// Actualitzar el número restant de monedes al DOM
monedesJugador -= costSuperPocions;
document.querySelector('#monedes-jugador').textContent = monedesJugador;
// ============================================
// ✅ TASCA 9: Afegir Superpocions a l'inventari
// ============================================
// Afegeix les superpocions SENSE esborrar les Poké Balls
// Utilitza += per afegir l'innerHTML existent
Inventari.innerHTML += `<div class="item-inventari">   <div class="item-inventari-icon"><img src="./img/superpocio.png" alt="Superpoció"></div>  <div class="item-inventari-nom">Superpocions</div>  <div class="item-inventari-quantitat"> x${quantitatSuperPocions}</div> </div>`;
// ============================================
// ✅ TASCA 10: Comprar 2 Ultra Ball
// ============================================
// Calcula el cost i resta-ho a les monedes actuals del jugador

let quantitatUltraBalls = 2;
let costUltraBalls = PREU_ULTRA_BALL * quantitatUltraBalls;

// ============================================
// ✅ TASCA 11: Actualitzar monedes
// ============================================
// Actualitzar el número restant de monedes al DOM
monedesJugador -= costUltraBalls;
document.querySelector('#monedes-jugador').textContent = monedesJugador;

// ============================================
// ✅ TASCA 12: Afegir les Ultra Balls a l'inventari
// ============================================
// Afegeix les Ultra Balls SENSE esborrar les Poké Balls i les Superpocions
// Utilitza += per afegir l'innerHTML existent
Inventari.innerHTML += `<div class="item-inventari">   <div class="item-inventari-icon"><img src="./img/ultraball.png" alt="Ultraball"></div>  <div class="item-inventari-nom">Ultraballs</div>  <div class="item-inventari-quantitat"> x${quantitatUltraBalls}</div> </div>`;
// ============================================
// ✅ TASCA 13: RESUM DE LES COMPRES: Calcular el total gastat
// ============================================
// Calcula el cost total dels productes comprats

let totalGastat = costUltraBalls + costPokeBalls + costSuperPocions;

// ============================================
// ✅ TASCA 14: Mostrar resum al DOM
// ============================================
// Selecciona l'element del resum de compres i afegeix tot el contingut
// Utilitza innerHTML per afegir les línies següents per cada objecte comprat:

//<div class="resum-linia">
//    <span>${quantitatPokeBalls}x Poké Ball</span>
//    <span>${costPokeBalls}₽</span>
//</div>

// Finalment afegeix una línia per al total gastat:

//<div class="resum-linia">
//    <span>TOTAL GASTAT</span>
//    <span>${totalGastat}₽</span>
//</div>
const Resum = document.querySelector('#resum-compres');
Resum.innerHTML = `
<div class="resum-linia">
<span>${quantitatPokeBalls}x Poké Ball</span>
<span>${costPokeBalls}₽</span>
</div>
<div class="resum-linia">
<span>${quantitatSuperPocions}x Superpocions</span>
<span>${costSuperPocions}₽</span>
</div>
<div class="resum-linia">
<span>${quantitatUltraBalls}x Ultraballs</span>
<span>${costUltraBalls}₽</span>
</div>
<div class="resum-linia">
<span>TOTAL GASTAT</span>
<span>${totalGastat}₽</span>
</div>
`;
// ============================================
// ✅ TASCA 15: Comprar 1 Master Ball
// ============================================
// Calcula només el cost no restis encara les monedes del jugador

let quantitatMasterBalls = 1;
let costMasterBalls = quantitatMasterBalls * PREU_MASTER_BALL;

// ============================================
// ✅ TASCA 16: Comprovar si tens suficients monedes per comprar una Master Ball
// ============================================
// Intenta comprar una Master Ball però abans
// Utilitza un operador relacional per comprovar si tens prou monedes
// potComprar serà true o false (has de comprovar si monedesJugador és mes gran o igual que costMasterBalls)

let potComprar = monedesJugador >= costMasterBalls;
console.log(`\nIntentant comprar 1 Master Ball per ${PREU_MASTER_BALL}₽...`);
console.log(`Monedes actuals: ${monedesJugador}₽`);
if (potComprar) {
  // Resta les monedes
  monedesJugador -= costMasterBalls;
  // Actualitzar el DOM amb les monedes restants
  document.querySelector('#monedes-jugador').textContent = monedesJugador;
  // Afegir a l'inventari la Master Ball
  Inventari.innerHTML += `<div class="item-inventari">   <div class="item-inventari-icon"><img src="./img/masterball.png" alt="Masterball"></div>  <div class="item-inventari-nom">Masterballs</div>  <div class="item-inventari-quantitat"> x${quantitatMasterBalls}</div> </div>`;
  console.log('✅ Has comprat una Master Ball!\n');
} else {
  console.log('❌ No tens prou monedes per comprar una Master Ball :(\n');
}
