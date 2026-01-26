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

// PUNT 2: Afegir la classe 'tropa' i la classe 'barbarian' al Bàrbar

// PUNT 3: Crea un nou element <img> per a la imatge del Bàrbar

// PUNT 4: Crear un nou element <p> per al nom del Bàrbar

// PUNT 5: Crear un nou element <p> per a les estadístiques del Bàrbar

// PUNT 6: Modifica l'atribut src de la imatge del Bàrbar i el seu alt text <img>

// PUNT 7: Afegir el nom del Bàrbar a l'element nom <p

// PUNT 8: Afegir les estadístiques del Bàrbar al seu element <p>

// PUNT 9: Afegir la imatge, el nom i les estadístiques al div del Bàrbar

// PUNT 10: Afegir el Bàrbar a la zonaAliada

// PUNT 11: Actualitzar el comptador d'aliats "totalAliats"

// PUNT 12: Actualitzar el div de text del comptador d'aliats amb textContent

// ============================================
// TASCA 2 - TROPA ALIADA 2: ARQUERA
// ============================================
// classes: 'tropa' i 'archer'

// ============================================
// TASCA 3 - TROPA ALIADA 3: GEGANT
// ============================================
// classes: 'tropa' i 'giant'

// ============================================
// ZONA ENEMIGA - GENERAR ENEMICS
// ============================================

// ============================================
// TASCA 4 - ENEMIC 1: GOBLIN
// ============================================
// classes: 'tropa' i 'goblin'

// ============================================
// TASCA 5 - ENEMIC 2: ESQUELET
// ============================================
// classes: 'tropa' i 'skeleton'

// ============================================
// TASCA 6 - ENEMIC 3: DRAC
// ============================================
// classes: 'tropa' i 'dragon'

// ============================================
// TASCA 7 - ENEMIC 4: P.E.K.K.A
// ============================================
// classes: 'tropa' i 'pekka'

// ============================================
// ACTUALITZAR COMPTADOR TOTAL
// ============================================

// TASCA 8: Actualitzar el comptador total de tropes
// Realitza la suma del número d'aliats + el número d'enemics
// Actualitza el comptador total amb textContent

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

// ============================================
// TASCA FINAL 2: Eliminar tropes del camp
// ============================================
// Simula que una tropa ha estat derrotada!
// Recorda actualitzar els comptadors després d'eliminar una tropa.
//
// Prova d'eliminar:
// - El primer Bàrbar (aliat derrotat)
// - El primer Goblin (enemic derrotat)

// ============================================
// TASCA FINAL 3: Eliminar els missatges "empty"
// ============================================
// Quan ja tens tropes al camp, els missatges "No tens tropes" i "Encara no hi ha enemics" s'han d'eliminar.
//
// Selecciona'ls i elimina'ls (.empty-message')
