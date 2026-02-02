// ============================================
// EXERCICI 7: CLASH OF CLANS - CAMP DE BATALLA
// ============================================
// OBJECTIU: Aprendre a combinar createElement, classList i append
//
// CONCEPTES QUE NECESSITARÀS:
// - document.createElement('div') --> Crea un nou element HTML (un div en aquest cas)
// - .classList.add('classe') --> Afegeix una classe CSS
// - elementPare.append(elementFill) --> Afegeix l'element al DOM
// - element.remove() --> Elimina un element del DOM
// - .textContent --> Canvia el text d'un element
//
// ============================================
// SELECCIONAR ELEMENTS DEL DOM
// ============================================

// Zones del camp de batalla
const zonaAliada = document.querySelector('#zona-aliada');
const zonaEnemiga = document.querySelector('#zona-enemiga');

// Comptadors
const comptadorAliats = document.querySelector('#contador-aliats');
const comptadorEnemics = document.querySelector('#contador-enemics');
const comptadorTotal = document.querySelector('.stat-value.yellow');

// Variables per comptar tropes
let totalAliats = 0;
let totalEnemics = 0;

// ============================================
// ZONA ALIADA - DESPLEGAR LES TEVES TROPES
// ============================================

// ============================================
// TASCA 1 - TROPA ALIADA 1: BÀRBAR
// ============================================

// PUNT 1: Crear un nou element <div> per al Bàrbar
const barbar = document.createElement('div');
// PUNT 2: Afegir la classe 'tropa' i la classe 'barbarian' al Bàrbar
barbar.classList.add('tropa', 'barbarian');
// PUNT 3: Crea un nou element <img> per a la imatge del Bàrbar
const barbarimg = document.createElement('img');
// PUNT 4: Crear un nou element <p> per al nom del Bàrbar
const barbarnom = document.createElement('p');
// PUNT 5: Crear un nou element <p> per a les estadístiques del Bàrbar
const barbarstat = document.createElement('p');
// PUNT 6: Modifica l'atribut src de la imatge del Bàrbar i el seu alt text <img>
barbarimg.setAttribute('src', './img/barbarian.webp');
barbarimg.setAttribute('alt', 'Bàrbar');
// PUNT 7: Afegir el nom del Bàrbar a l'element nom <p
barbarnom.textContent = 'Bàrbar';
// PUNT 8: Afegir les estadístiques del Bàrbar al seu element <p>
barbarstat.textContent = '❤️ 78 • ⚔️ 16';
// PUNT 9: Afegir la imatge, el nom i les estadístiques al div del Bàrbar
barbar.append(barbarimg);
barbar.append(barbarnom);
barbar.append(barbarstat);
// PUNT 10: Afegir el Bàrbar a la zonaAliada
zonaAliada.append(barbar);
// PUNT 11: Actualitzar el comptador d'aliats "totalAliats"
totalAliats += 1;
// PUNT 12: Actualitzar el div de text del comptador d'aliats amb textContent
comptadorAliats.textContent = totalAliats;
// ============================================
// TASCA 2 - TROPA ALIADA 2: ARQUERA
// ============================================
// classes: 'tropa' i 'archer'
const arquera = document.createElement('div');
arquera.classList.add('tropa', 'archer');
const arqueraimg = document.createElement('img');
arqueraimg.setAttribute('src', './img/archer.webp');
arqueraimg.setAttribute('alt', 'Arquera');
arquera.append(arqueraimg);
const arqueranom = document.createElement('p');
arqueranom.textContent = 'Arquera';
arquera.append(arqueranom);
const arquerastat = document.createElement('p');
arquerastat.textContent = '❤️ 40 • ⚔️ 12';
arquera.append(arquerastat);
zonaAliada.append(arquera);
totalAliats += 1;
comptadorAliats.textContent = totalAliats;
// ============================================
// TASCA 3 - TROPA ALIADA 3: GEGANT
// ============================================
// classes: 'tropa' i 'giant'
const gegant = document.createElement('div');
gegant.classList.add('tropa', 'giant');
const gegantimg = document.createElement('img');
gegantimg.setAttribute('src', './img/giant.webp');
gegantimg.setAttribute('alt', 'Gegant');
gegant.append(gegantimg);
const gegantnom = document.createElement('p');
gegantnom.textContent = 'Gegant';
gegant.append(gegantnom);
const gegantstat = document.createElement('p');
gegantstat.textContent = '❤️ 380 • ⚔️ 25';
gegant.append(gegantstat);
zonaAliada.append(gegant);
totalAliats += 1;
comptadorAliats.textContent = totalAliats;
// ============================================
// ZONA ENEMIGA - GENERAR ENEMICS
// ============================================

// ============================================
// TASCA 4 - ENEMIC 1: GOBLIN
// ============================================
// classes: 'tropa' i 'goblin'
const goblin = document.createElement('div');
goblin.classList.add('tropa', 'goblin');
const goblinimg = document.createElement('img');
goblinimg.setAttribute('src', './img/goblin.webp');
goblinimg.setAttribute('alt', 'Goblin');
goblin.append(goblinimg);
const goblinnom = document.createElement('p');
goblinnom.textContent = 'Goblin';
goblin.append(goblinnom);
const goblinstat = document.createElement('p');
goblinstat.textContent = '❤️ 32 • ⚔️ 19';
goblin.append(goblinstat);
zonaEnemiga.append(goblin);
totalEnemics += 1;
comptadorEnemics.textContent = totalEnemics;
// ============================================
// TASCA 5 - ENEMIC 2: ESQUELET
// ============================================
// classes: 'tropa' i 'skeleton'
const esquelet = document.createElement('div');
esquelet.classList.add('tropa', 'skeleton');
const esqueletimg = document.createElement('img');
esqueletimg.setAttribute('src', './img/skeleton.webp');
esqueletimg.setAttribute('alt', 'Esquelet');
esquelet.append(esqueletimg);
const esqueletnom = document.createElement('p');
esqueletnom.textContent = 'Esquelet';
esquelet.append(esqueletnom);
const esqueletstat = document.createElement('p');
esqueletstat.textContent = '❤️ 35 • ⚔️ 25';
esquelet.append(esqueletstat);
zonaEnemiga.append(esquelet);
totalEnemics += 1;
comptadorEnemics.textContent = totalEnemics;
// ============================================
// TASCA 6 - ENEMIC 3: DRAC
// ============================================
// classes: 'tropa' i 'dragon'
const drac = document.createElement('div');
drac.classList.add('tropa', 'dragon');
const dracimg = document.createElement('img');
dracimg.setAttribute('src', './img/dragon.webp');
dracimg.setAttribute('alt', 'Drac');
drac.append(dracimg);
const dracnom = document.createElement('p');
dracnom.textContent = 'Drac';
drac.append(dracnom);
const dracstat = document.createElement('p');
dracstat.textContent = '❤️ 1900 • ⚔️ 240';
drac.append(dracstat);
zonaEnemiga.append(drac);
totalEnemics += 1;
comptadorEnemics.textContent = totalEnemics;
// ============================================
// TASCA 7 - ENEMIC 4: P.E.K.K.A
// ============================================
// classes: 'tropa' i 'pekka'
const pekka = document.createElement('div');
pekka.classList.add('tropa', 'pekka');
const pekkaimg = document.createElement('img');
pekkaimg.setAttribute('src', './img/pekka.webp');
pekkaimg.setAttribute('alt', 'Pekka');
pekka.append(pekkaimg);
const pekkanom = document.createElement('p');
pekkanom.textContent = 'P.E.K.K.A';
pekka.append(pekkanom);
const pekkastat = document.createElement('p');
pekkastat.textContent = '❤️ 2900 • ⚔️ 510';
pekka.append(pekkastat);
zonaEnemiga.append(pekka);
totalEnemics += 1;
comptadorEnemics.textContent = totalEnemics;
// ============================================
// ACTUALITZAR COMPTADOR TOTAL
// ============================================

// TASCA 8: Actualitzar el comptador total de tropes
// Realitza la suma del número d'aliats + el número d'enemics
// Actualitza el comptador total amb textContent
comptadorTotal.textContent = totalAliats + totalEnemics;
// ============================================
// TASCA FINAL 1: Crear més tropes!
// ============================================
// Prova de crear més tropes per fer la batalla més gran:
//
// ALIATS:
// - Un segon Bàrbar
// - Un Rei Bàrbar (classes: 'tropa' i 'king-barbarian')
// - Un segon Gegant
//
// ENEMICS:
// - Un segon Goblin
// - Un segon Drac
// - Un segon Esquelet
//
// Recorda actualitzar els comptadors cada vegada!
function CrearTropa(aliatoenemic, tipus, nom, vida, atac) {
  const tropa = document.createElement('div');
  if (aliatoenemic) {
    tropa.classList.add('tropa', tipus);
    zonaAliada.append(tropa);
    totalAliats += 1;
    comptadorAliats.textContent = totalAliats;
  } else {
    tropa.classList.add('tropa', tipus);
    zonaEnemiga.append(tropa);
    totalEnemics += 1;
    comptadorEnemics.textContent = totalEnemics;
  }
  const tropaimg = document.createElement('img');
  tropaimg.setAttribute('src', `./img/${tipus}.webp`);
  tropaimg.setAttribute('alt', `${tipus}`);
  tropa.append(tropaimg);
  const tropanom = document.createElement('p');
  const tropastat = document.createElement('p');
  tropanom.textContent = nom;
  tropastat.textContent = `❤️ ${vida} • ⚔️ ${atac}`;
  tropa.append(tropanom);
  tropa.append(tropastat);
  comptadorTotal.textContent = totalAliats + totalEnemics;
}
// ALIATS:
// - Un segon Bàrbar
CrearTropa(true, 'barbarian', 'Bàrbar', 78, 16);
// - Un Rei Bàrbar (classes: 'tropa' i 'king-barbarian')
CrearTropa(true, 'king-barbarian', 'Rei Bàrbar', 2500, 480);
// - Un segon Gegant
CrearTropa(true, 'giant', 'Gegant', 380, 25);
//
// ENEMICS:
// - Un segon Goblin
CrearTropa(false, 'goblin', 'Goblin', 32, 19);
// - Un segon Drac
CrearTropa(false, 'dragon', 'Drac', 1900, 240);
// - Un segon Esquelet
CrearTropa(false, 'skeleton', 'Esquelet', 35, 25);
// ============================================
// TASCA FINAL 2: Eliminar tropes del camp
// ============================================
// Simula que una tropa ha estat derrotada!
// Recorda actualitzar els comptadors després d'eliminar una tropa.
//
// Prova d'eliminar:
// - El primer Bàrbar (aliat derrotat)
document.querySelector('#zona-aliada .barbarian').remove();
totalAliats -= 1;
comptadorAliats.textContent = totalAliats;
comptadorTotal.textContent = totalAliats + totalEnemics;
// - El primer Goblin (enemic derrotat)
document.querySelector('#zona-enemiga .goblin').remove();
totalEnemics -= 1;
comptadorEnemics.textContent = totalEnemics;
comptadorTotal.textContent = totalAliats + totalEnemics;
// ============================================
// TASCA FINAL 3: Eliminar els missatges "empty"
// ============================================
// Quan ja tens tropes al camp, els missatges "No tens tropes" i "Encara no hi ha enemics" s'han d'eliminar.
//
// Selecciona'ls i elimina'ls (.empty-message')
document.querySelector('#zona-aliada .empty-message').remove();
document.querySelector('#zona-enemiga .empty-message').remove();
