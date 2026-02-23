// ============================================
// 🎰 EXERCICI 3: MÀQUINA DE LOOTS AMB RARESES
// ============================================
// 🎯 OBJECTIU: Dominar Math.random(), condicionals (if/else) i switch
//
// 📚 CONCEPTES:
// - Math.random() per generar números aleatoris
// - Math.floor() per arrodonir cap avall
// - Condicionals if/else per determinar rareses
// - switch per diferents tipus de cofre
// - Operadors relacionals (>, <, >=, <=)
// - Manipulació del DOM
//
// 📦 SISTEMA DE RARESES (Cofre Bàsic):
// - Comú: 0-60 (60%)
// - Poc Comú: 61-94 (34%)
// - Rar: 95-99 (5%)
// - Èpic: 100 (1%)
//
// 🎁 SISTEMA DE RARESES (Cofre Plata):
// - Poc Comú: 0-50 (50%)
// - Rar: 51-85 (35%)
// - Èpic: 86-95 (10%)
// - Llegendari: 96-100 (5%)
//
// 💎 SISTEMA DE RARESES (Cofre d'Or):
// - Rar: 0-40 (40%)
// - Èpic: 41-80 (40%)
// - Llegendari: 81-100 (20%)
//
// ============================================

// ============================================
// ✅ TASCA 0: COMPTADORS
// ============================================
// Crea les variables per comptar el número total de cofres oberts, el total d'or guanyat i el número total de cofres oberts de cada raresa

let cofresOberts = 0;
let totalComuns = 0;
let totalPocComuns = 0;
let totalRars = 0;
let totalEpics = 0;
let totalLlegendaris = 0;
let orTotal = 0;

let millorRaresa = 0;
let majorOr = 0;

// ============================================
// ✅ TASCA 1: Generar número aleatori entre 0 i 100 (amb 2 decimals)
// ============================================
// Utilitza Math.random() per generar un número aleatori entre 0 i 100

let numeroAleatori1 = Math.floor(Math.random() * 101);

// ============================================
// ✅ TASCA 2: Determinar la raresa amb if/else
// ============================================
// Utilitza condicionals per determinar la raresa segons el número aleatori generat
// Fixa't en el sistema de rareses descrit a l'enunciat
// Exemple: Si el número es troba entre 0 i 60 la raresa és "Comú", entre 61 i 94 "Poc Comú", etc.
//          A un cofre "Comú" pots guanyar entre 50 i 100 d'or de manera aleatòria
//          Per generar l'or guanyat, pots utilitzar: Math.floor(Math.random() * (max - min + 1)) + min
//          S'ha d'incrementar el comptador corresponent segons la raresa que hagi sortit
//          S'ha d'assignar la icona corresponent segons la raresa que hagi sortit

let raresa1; //Comú / Poc Comú / Rar / Èpic / Llegendari
let iconRaresa1; //⚪ / 🟢 / 🔵 / 🟣 / 🟡
let orGuanyat1; // Random entre 50-100, 100-250, etc segons la raresa

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament
// console.log(`Cofre Fusta #1 - Número Aleatori: ${numeroAleatori1}`);
// console.log(`Cofre Fusta #1 - Raresa: ${raresa1}`);
// console.log(`Cofre Fusta #1 - Icon: ${iconRaresa1}`);
// console.log(`Cofre Fusta #1 - Or Guanyat: ${orGuanyat1}`);

if (numeroAleatori1 < 61) {
  raresa1 = 'Comú';
  iconRaresa1 = '⚪';
  orGuanyat1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  totalComuns++;
} else if (numeroAleatori1 >= 61 && numeroAleatori1 < 95) {
  raresa1 = 'Poc Comú';
  iconRaresa1 = '🟢';
  orGuanyat1 = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
  totalPocComuns++;
} else if (numeroAleatori1 >= 95 && numeroAleatori1 < 100) {
  raresa1 = 'Rar';
  iconRaresa1 = '🔵';
  orGuanyat1 = Math.floor(Math.random() * (500 - 250 + 1)) + 250;
  totalRars++;
} else {
  raresa1 = 'Èpic';
  iconRaresa1 = '🟣';
  orGuanyat1 = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  totalEpics++;
}
console.log(`Cofre Fusta #1 - Número Aleatori: ${numeroAleatori1}`);
console.log(`Cofre Fusta #1 - Raresa: ${raresa1}`);
console.log(`Cofre Fusta #1 - Icon: ${iconRaresa1}`);
console.log(`Cofre Fusta #1 - Or Guanyat: ${orGuanyat1}`);

const resultats = document.querySelector('#resultats');

resultats.innerHTML += `
<div class="loot-card ${raresa1.toLowerCase()}">
<div class="loot-icon">${iconRaresa1}</div>
<div class="loot-nom">Cofre Bàsic #1</div>
<div class="loot-raresa">${raresa1}</div>
<div class="loot-img"><img src="./img/cofre-fusta.webp" alt="Cofre Fusta"></div>
<div class="loot-or">💰 ${orGuanyat1} or</div>
</div>
`;

// ============================================
// ✅ TASCA 3: Incrementar comptadors
// ============================================
// Incrementa el comptador de cofres oberts i el total d'or guanyat
cofresOberts++;
orTotal += orGuanyat1;
// ============================================
// ✅ TASCA 4: Actualitzar DOM
// ============================================
// Selecciona els elements (cofres-oberts, comuns, poc-comuns, rars, epics i llegendaris) i actualitza'ls

const divCofresOberts = document.querySelector('#cofres-oberts');
const divCofresComuns = document.querySelector('#comuns');
const divCofresPocComuns = document.querySelector('#poc-comuns');
const divCofresRars = document.querySelector('#rars');
const divCofresEpics = document.querySelector('#epics');
const divCofresLlegendaris = document.querySelector('#llegendaris');

divCofresOberts.textContent = cofresOberts;
divCofresComuns.textContent = totalComuns;
divCofresPocComuns.textContent = totalPocComuns;
divCofresRars.textContent = totalRars;
divCofresEpics.textContent = totalEpics;
divCofresLlegendaris.textContent = totalLlegendaris;

// ============================================
// PART 3: OBRIR MÉS COFRES BÀSICS (DE FUSTA)
// ============================================
function ObrirCofre(tipus) {
  let aleatori = Math.floor(Math.random() * 101);
  let raresa, iconRaresa, orGuanyat;
  let comptadorBasic = 1;
  let comptadorPlata = 0;
  let comptadorOr = 0;
  let raresaTocada = 0;
  switch (tipus) {
    case 'basic':
      if (aleatori < 61) {
        raresa = 'Comú';
        iconRaresa = '⚪';
        orGuanyat = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        totalComuns++;
      } else if (aleatori >= 61 && aleatori < 95) {
        raresa = 'Poc Comú';
        iconRaresa = '🟢';
        orGuanyat = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
        totalPocComuns++;
        raresaTocada = 1;
      } else if (aleatori >= 95 && aleatori < 100) {
        raresa = 'Rar';
        iconRaresa = '🔵';
        orGuanyat = Math.floor(Math.random() * (500 - 250 + 1)) + 250;
        totalRars++;
        raresaTocada = 2;
      } else {
        raresa = 'Èpic';
        iconRaresa = '🟣';
        orGuanyat = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
        totalEpics++;
        raresaTocada = 3;
      }
      comptadorBasic++;
      resultats.innerHTML += `
<div class="loot-card ${raresa.toLowerCase()}">
<div class="loot-icon">${iconRaresa}</div>
<div class="loot-nom">Cofre Bàsic #${comptadorBasic}</div>
<div class="loot-raresa">${raresa}</div>
<div class="loot-img"><img src="./img/cofre-fusta.webp" alt="Cofre Fusta"></div>
<div class="loot-or">💰 ${orGuanyat} or</div>
</div>
`;
      break;
    case 'plata':
      if (aleatori < 51) {
        raresa = 'Poc Comú';
        iconRaresa = '🟢';
        orGuanyat = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
        totalPocComuns++;
        raresaTocada = 1;
      } else if (aleatori >= 51 && aleatori < 86) {
        raresa = 'Rar';
        iconRaresa = '🔵';
        orGuanyat = Math.floor(Math.random() * (500 - 250 + 1)) + 250;
        totalRars++;
        raresaTocada = 2;
      } else if (aleatori >= 86 && aleatori < 96) {
        raresa = 'Èpic';
        iconRaresa = '🟣';
        orGuanyat = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
        totalEpics++;
        raresaTocada = 3;
      } else {
        raresa = 'Llegendari';
        iconRaresa = '🟡';
        orGuanyat = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        totalLlegendaris++;
        raresaTocada = 4;
      }
      comptadorPlata++;
      resultats.innerHTML += `
<div class="loot-card ${raresa.toLowerCase()}">
<div class="loot-icon">${iconRaresa}</div>
<div class="loot-nom">Cofre Plata #${comptadorPlata}</div>
<div class="loot-raresa">${raresa}</div>
<div class="loot-img"><img src="./img/cofre-plata.webp" alt="Cofre Plata"></div>
<div class="loot-or">💰 ${orGuanyat} or</div>
</div>
`;
      break;
    case 'or':
      if (aleatori < 41) {
        raresa = 'Rar';
        iconRaresa = '🔵';
        orGuanyat = Math.floor(Math.random() * (500 - 250 + 1)) + 250;
        totalRars++;
        raresaTocada = 2;
      } else if (aleatori >= 41 && aleatori < 81) {
        raresa = 'Èpic';
        iconRaresa = '🟣';
        orGuanyat = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
        totalEpics++;
        raresaTocada = 3;
      } else {
        raresa = 'Llegendari';
        iconRaresa = '🟡';
        orGuanyat = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        totalLlegendaris++;
        raresaTocada = 4;
      }
      comptadorOr++;
      resultats.innerHTML += `
<div class="loot-card ${raresa.toLowerCase()}">
<div class="loot-icon">${iconRaresa}</div>
<div class="loot-nom">Cofre Or #${comptadorOr}</div>
<div class="loot-raresa">${raresa}</div>
<div class="loot-img"><img src="./img/cofre-or.webp" alt="Cofre Or"></div>
<div class="loot-or">💰 ${orGuanyat} or</div>
</div>
`;
      break;
  }
  if (raresaTocada > millorRaresa) {
    millorRaresa = raresaTocada;
  }
  if (orGuanyat > majorOr) {
    majorOr = orGuanyat;
  }
  cofresOberts++;
  return [aleatori, raresa, iconRaresa, orGuanyat];
}
// ============================================
// ✅ TASCA 5: Obrir cofre bàsic #2
// ============================================

// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que el cofre #1

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament

let Llista = [];

Llista = ObrirCofre('basic');

console.log(`Cofre Fusta #2 - Número Aleatori: ${Llista[0]}`);
console.log(`Cofre Fusta #2 - Raresa: ${Llista[1]}`);
console.log(`Cofre Fusta #2 - Icon: ${Llista[2]}`);
console.log(`Cofre Fusta #2 - Or Guanyat: ${Llista[3]}`);

orTotal += Llista[3];

divCofresOberts.textContent = cofresOberts;
divCofresComuns.textContent = totalComuns;
divCofresPocComuns.textContent = totalPocComuns;
divCofresRars.textContent = totalRars;
divCofresEpics.textContent = totalEpics;
divCofresLlegendaris.textContent = totalLlegendaris;

// ============================================
// ✅ TASCA 6: Obrir cofre bàsic #3
// ============================================

// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que els cofres anteriors

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament
Llista = ObrirCofre('basic');

console.log(`Cofre Fusta #3 - Número Aleatori: ${Llista[0]}`);
console.log(`Cofre Fusta #3 - Raresa: ${Llista[1]}`);
console.log(`Cofre Fusta #3 - Icon: ${Llista[2]}`);
console.log(`Cofre Fusta #3 - Or Guanyat: ${Llista[3]}`);

orTotal += Llista[3];

divCofresOberts.textContent = cofresOberts;
divCofresComuns.textContent = totalComuns;
divCofresPocComuns.textContent = totalPocComuns;
divCofresRars.textContent = totalRars;
divCofresEpics.textContent = totalEpics;
divCofresLlegendaris.textContent = totalLlegendaris;
// ============================================
// ✅ TASCA 7: Cofre de Plata #1
// ============================================
// Cofre de Plata: 0-50 = Poc Comú, 51-85 = Rar, 86-100 = Èpic

// Tingues en compte les noves probabilitats (cofres de plata)
// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que els cofres anteriors

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament
Llista = ObrirCofre('plata');

console.log(`Cofre Plata #1 - Número Aleatori: ${Llista[0]}`);
console.log(`Cofre Plata #1 - Raresa: ${Llista[1]}`);
console.log(`Cofre Plata #1 - Icon: ${Llista[2]}`);
console.log(`Cofre Plata #1 - Or Guanyat: ${Llista[3]}`);

orTotal += Llista[3];

divCofresOberts.textContent = cofresOberts;
divCofresComuns.textContent = totalComuns;
divCofresPocComuns.textContent = totalPocComuns;
divCofresRars.textContent = totalRars;
divCofresEpics.textContent = totalEpics;
divCofresLlegendaris.textContent = totalLlegendaris;
// ============================================
// ✅ TASCA 8: Cofre de Plata #2
// ============================================

// Tingues en compte les noves probabilitats (cofres de plata)
// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que els cofres anteriors

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament
Llista = ObrirCofre('plata');

console.log(`Cofre Plata #2 - Número Aleatori: ${Llista[0]}`);
console.log(`Cofre Plata #2 - Raresa: ${Llista[1]}`);
console.log(`Cofre Plata #2 - Icon: ${Llista[2]}`);
console.log(`Cofre Plata #2 - Or Guanyat: ${Llista[3]}`);

orTotal += Llista[3];

divCofresOberts.textContent = cofresOberts;
divCofresComuns.textContent = totalComuns;
divCofresPocComuns.textContent = totalPocComuns;
divCofresRars.textContent = totalRars;
divCofresEpics.textContent = totalEpics;
divCofresLlegendaris.textContent = totalLlegendaris;
// ============================================
// ✅ TASCA 9: Cofre d'Or #1
// ============================================
// Cofre d'Or: 0-40 = Rar, 41-80 = Èpic, 81-100 = Llegendari

// Tingues en compte les noves probabilitats (cofres d'or)
// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que els cofres anteriors

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament
Llista = ObrirCofre('or');

console.log(`Cofre Or #1 - Número Aleatori: ${Llista[0]}`);
console.log(`Cofre Or #1 - Raresa: ${Llista[1]}`);
console.log(`Cofre Or #1 - Icon: ${Llista[2]}`);
console.log(`Cofre Or #1 - Or Guanyat: ${Llista[3]}`);

orTotal += Llista[3];

divCofresOberts.textContent = cofresOberts;
divCofresComuns.textContent = totalComuns;
divCofresPocComuns.textContent = totalPocComuns;
divCofresRars.textContent = totalRars;
divCofresEpics.textContent = totalEpics;
divCofresLlegendaris.textContent = totalLlegendaris;
// ============================================
// ✅ TASCA 10: Crear les cartes de loot al DOM
// ============================================
// Afegeix visualment els loots obtinguts al contenidor "#resultats"

// Afegeix totes les recompenses (exemple amb el primer cofre bàsic - cofre de fusta)
//
// <div class="loot-card ${raresa1.toLowerCase()}">
//  <div class="loot-icon">${iconRaresa1}</div>
//  <div class="loot-nom">Cofre Bàsic #1</div>
//  <div class="loot-raresa">${raresa1}</div>
//  <div class="loot-img"><img src="./img/cofre-fusta.webp" alt="Cofre Fusta"></div>
//  <div class="loot-or">💰 ${orGuanyat1} or</div>
// </div>

// ============================================
// ESTADÍSTIQUES FINALS
// ============================================
// Calcula i Actualitza les estadístiques finals al DOM

const divOrTotal = document.querySelector('#or-total');
const divMillorRaresa = document.querySelector('#millor-raresa');
const divMaximOr = document.querySelector('#maxim-or');

// ============================================
// ✅ TASCA 11: Actualitza el DOM amb el total d'or guanyat
// ============================================
divOrTotal.textContent = orTotal;
// ============================================
// ✅ TASCA 12: Actualitza el DOM amb la millor raresa obtinguda
// ============================================
switch (millorRaresa) {
  case 0:
    divMillorRaresa.textContent = 'Comú';
    break;
  case 1:
    divMillorRaresa.textContent = 'Poc Comú';
    break;
  case 2:
    divMillorRaresa.textContent = 'Rar';
    break;
  case 3:
    divMillorRaresa.textContent = 'Èpic';
    break;
  case 4:
    divMillorRaresa.textContent = 'Llegendari';
    break;
}
// ============================================
// ✅ TASCA 13: Actualitza el DOM amb el cofre que ha donat més or
// ============================================
divMaximOr.textContent = majorOr;
