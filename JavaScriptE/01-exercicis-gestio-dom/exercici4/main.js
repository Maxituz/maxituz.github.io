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

// PUNT 2: Canviar el color de fons a daurat "gold"

// PUNT 3: Fer el personatge més gran "scale(1.2)"

// PUNT 4: Afegir una ombra daurada brillant "0 0 30px gold"

// PUNT 5: Canviar el color de nomPersonatge a blanc

// PUNT 6: Actualitzar el text de l'estat a "Mode: Poder"

// ============================================
// 💥 TASCA 2 - MODE DANY
// ============================================
// PUNT 1: Elimina els estils aplicats a la tasca anterior

// Ara aplica els estils del MODE DANY:

// PUNT 2: Afegir una vora vermella de "solid 5px red"

// PUNT 3: Modificar el color de fons per un vermell translúcid "rgba(255,0,0,0.3)"

// PUNT 4: Fer el personatge una mica més petit "scale(0.9)"

// PUNT 5: Canviar el color de nomPersonatge a gris fosc "darkgray"

// PUNT 6: Actualitzar el text de l'estat a "Mode: Dany"

// ============================================
// 👻 MODE INVISIBLE
// ============================================
// PUNT 1: Elimina els estils aplicats a la tasca anterior

// Ara aplica els estils del MODE INVISIBLE:

// PUNT 1: Reduir l'opacitat "opacity", "0.3"

// PUNT 2: Afegir una vora gris "solid 3px gray"

// PUNT 3: Canviar el color de nomPersonatge a gris "gray"

// PUNT 4: Actualitzar el text de l'estat a "Mode: Invisible"

// ============================================
// ❄️ MODE CONGELAT
// ============================================
// PUNT 1: Elimina els estils aplicats a la tasca anterior

// Ara aplica els estils del MODE CONGELAT:

// PUNT 1: Afegir una vora blava de 5px "solid 5px #3498db"

// PUNT 2 : Afegir un filtre de brillantor blau "filter", "brightness(1.2)"

// PUNT 3: Afegir una ombra blava brillant "0 0 30px cyan"

// PUNT 4: Canviar el color de nomPersonatge a blau "#3498db"

// PUNT 5: Actualitzar el text de l'estat a "Mode: Congelat"

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

// PUNT 2: Canviar el color de nomPersonatge a negre "black"

// PUNT 3: Actualitzar el text de l'estat a "Mode: Normal"
