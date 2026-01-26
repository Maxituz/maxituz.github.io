// ============================================
// EXERCICI 4: CANVI D'ASPECTE DE PERSONATGE
// ============================================
// OBJECTIU: Practicar style.setProperty() i style.removeProperty()
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .style.setProperty('propietat', 'valor') --> per AFEGIR estils CSS
// - .style.removeProperty('propietat') --> per ELIMINAR estils CSS
//
// ============================================

// Seleccionar el divPersonatge, estat i nomPersonatge (Ja predefinit per la tasca)
const divPersonatge = document.querySelector('#personatge');
const estat = document.querySelector('.estat');
const nomPersonatge = document.querySelector('.nom-personatge');

// ============================================
// ⭐ TASCA 1 - MODE PODER
// ============================================
// PUNT 1: Afegir una vora daurada "solid 5px goldenrod"
divPersonatge.style.setProperty('border', 'solid 5px goldenrod');
// PUNT 2: Canviar el color de fons a daurat "gold"
divPersonatge.style.setProperty('background-color', 'gold');
// PUNT 3: Fer el personatge més gran "scale(1.2)"
divPersonatge.style.setProperty('transform', 'scale(1.2)');
// PUNT 4: Afegir una ombra daurada brillant "0 0 30px gold"
divPersonatge.style.setProperty('filter', 'drop-shadow(0 0 30px gold)');
// PUNT 5: Canviar el color de nomPersonatge a blanc
nomPersonatge.style.setProperty('color', 'white');
// PUNT 6: Actualitzar el text de l'estat a "Mode: Poder"
estat.textContent = 'Mode: Poder';
// ============================================
// 💥 TASCA 2 - MODE DANY
// ============================================
// PUNT 1: Elimina els estils aplicats a la tasca anterior
divPersonatge.style.removeProperty('border');
divPersonatge.style.removeProperty('background-color');
divPersonatge.style.removeProperty('transform');
divPersonatge.style.removeProperty('filter');
nomPersonatge.style.removeProperty('color');
// Ara aplica els estils del MODE DANY:
// PUNT 2: Afegir una vora vermella de "solid 5px red"
divPersonatge.style.setProperty('border', 'solid 5px red');
// PUNT 3: Modificar el color de fons per un vermell translúcid "rgba(255,0,0,0.3)"
divPersonatge.style.setProperty('background-color', 'rgba(255,0,0,0.3)');
// PUNT 4: Fer el personatge una mica més petit "scale(0.9)"
divPersonatge.style.setProperty('transform', 'scale(0.9)');
// PUNT 5: Canviar el color de nomPersonatge a gris fosc "darkgray"
nomPersonatge.style.setProperty('color', 'darkgray');
// PUNT 6: Actualitzar el text de l'estat a "Mode: Dany"
estat.textContent = 'Mode: Dany';
// ============================================
// 👻 MODE INVISIBLE
// ============================================
// PUNT 1: Elimina els estils aplicats a la tasca anterior
divPersonatge.style.removeProperty('border');
divPersonatge.style.removeProperty('background-color');
divPersonatge.style.removeProperty('transform');
nomPersonatge.style.removeProperty('color');
// Ara aplica els estils del MODE INVISIBLE:
// PUNT 1: Reduir l'opacitat "opacity", "0.3"
divPersonatge.style.setProperty('opacity', '0.3');
// PUNT 2: Afegir una vora gris "solid 3px gray"
divPersonatge.style.setProperty('border', 'solid 3px gray');
// PUNT 3: Canviar el color de nomPersonatge a gris "gray"
nomPersonatge.style.setProperty('color', 'gray');
// PUNT 4: Actualitzar el text de l'estat a "Mode: Invisible"
estat.textContent = 'Mode: Invisible';
// ============================================
// ❄️ MODE CONGELAT
// ============================================
// PUNT 1: Elimina els estils aplicats a la tasca anterior
divPersonatge.style.removeProperty('opacity');
divPersonatge.style.removeProperty('border');
nomPersonatge.style.removeProperty('color');
// Ara aplica els estils del MODE CONGELAT:
// PUNT 1: Afegir una vora blava de 5px "solid 5px #3498db"
divPersonatge.style.setProperty('border', 'solid 5px #3498db');
// PUNT 2 : Afegir un filtre de brillantor blau "filter", "brightness(1.2)"
divPersonatge.style.setProperty('filter', 'brightness(1.2)');
// PUNT 3: Afegir una ombra blava brillant "0 0 30px cyan"
divPersonatge.style.setProperty('filter', 'box-shadow(0 0 30px cyan)');
// PUNT 4: Canviar el color de nomPersonatge a blau "#3498db"
nomPersonatge.style.setProperty('color', '#3498db');
// PUNT 5: Actualitzar el text de l'estat a "Mode: Congelat"
estat.textContent = 'Mode: Congelat';
// ============================================
// 🔄 MODE NORMAL (TORNAR A L'ESTAT INICIAL)
// ============================================
// PUNT 1: Elimina TOTS els estils aplicats
// - border
// - background-color
// - transform
// - box-shadow
// - opacity
// - filter
divPersonatge.style.removeProperty('border');
divPersonatge.style.removeProperty('background-color');
divPersonatge.style.removeProperty('transform');
divPersonatge.style.removeProperty('filter');
nomPersonatge.style.removeProperty('opacity');
divPersonatge.style.removeProperty('box-shadow');
// PUNT 2: Canviar el color de nomPersonatge a negre "black"
nomPersonatge.style.setProperty('color', 'black');
// PUNT 3: Actualitzar el text de l'estat a "Mode: Normal"
estat.textContent = 'Mode: Normal';
