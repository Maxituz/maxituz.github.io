// ============================================
// EXERCICI 6: GALERIA DE PERSONATGES
// ============================================
// OBJECTIU: Practicar setAttribute() i removeAttribute()
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .setAttribute('atribut', 'valor') --> per AFEGIR/MODIFICAR atributs
// - .removeAttribute('atribut') --> per ELIMINAR atributs
//
// ATRIBUTS HTML PRINCIPALS:
// - src: ruta de la imatge
// - alt: text alternatiu (accessibilitat)
// - title: text que apareix al passar el ratolí
// - disabled: desactiva un botó/input
//
// ============================================

// ============================================
// TASCA 1: LINK (The Legend of Zelda)
// ============================================

// PUNT 1: Seleccionar la imatge de Link
const LinkIMG = document.querySelector('#link-img');
// PUNT 2: Canviar la imatge a la versió amb Master Sword
LinkIMG.setAttribute('src', './img/link-master-sword.webp');
// PUNT 3: Actualitzar l'atribut alt per 'Link amb Master Sword'
LinkIMG.setAttribute('alt', 'Link - Heroi amb Master Sword');
// PUNT 4: Actualitzar l'atribut title per 'Link - Heroi amb Master Sword'
LinkIMG.setAttribute('title', 'Link - Heroi amb Master Sword');
// PUNT 5: Canvia els noms del personatge (h3) amb textContent i afegeix (Powered Up!)
document.querySelector('#link-nom').textContent = 'Link (Powered Up!)';
// PUNT 6: Canvia el text de Mode: Normal a Mode: Master Sword
document.querySelector('#link-card p').textContent = 'Mode: Master Sword';
// PUNT 7: Activar el botó de transformació (seleccionar el botó i eliminar atribut disabled)
document.querySelector('#btn-link').removeAttribute('disabled');
// ============================================
// TASCA 2: MARIO (Super Mario Bros)
// ============================================

// PUNT 1: Seleccionar la imatge de Mario
const MarioIMG = document.querySelector('#mario-img');
// PUNT 2: Canviar la imatge a la versió Fire Mario
MarioIMG.setAttribute('src', './img/mario-power.webp');
// PUNT 3: Actualitzar l'atribut alt per 'Mario amb poder de foc'
MarioIMG.setAttribute('alt', 'Mario amb poder de foc');
// PUNT 4: Actualitzar l'atribut title per 'Mario - Fire Mario'
MarioIMG.setAttribute('title', 'Mario - Fire Mario');
// PUNT 5: Canvia el nom del personatge (h3) amb textContent i afegeix (Powered Up!)
document.querySelector('#mario-nom').textContent = 'Mario (Powered Up!)';
// PUNT 6: Canvia el text de Mode: Normal a Mode: Fire Mario
document.querySelector('#mario-card p').textContent = 'Mode: Fire Mario';
// PUNT 7: Activar el botó del Mario
document.querySelector('#btn-mario').removeAttribute('disabled');
// ============================================
// TASCA 3: SONIC (Sonic the Hedgehog)
// ============================================

// PUNT 1: Seleccionar la imatge del Sonic
const SonicIMG = document.querySelector('#sonic-img');
// PUNT 2: Canviar la imatge a la versió Super Sonic
SonicIMG.setAttribute('src', './img/sonic-super.webp');
// PUNT 3: Actualitzar l'atribut alt per 'Super Sonic daurat'
SonicIMG.setAttribute('alt', 'Super Sonic daurat');
// PUNT 4: Actualitzar l'atribut title per 'Sonic - Super Sonic (forma daurada)'
SonicIMG.setAttribute('title', 'Sonic - Super Sonic (forma daurada)');
// PUNT 5: Canvia el nom del personatge (h3) amb textContent i afegeix (Powered Up!)
document.querySelector('#sonic-nom').textContent = 'Sonic (Powered Up!)';
// PUNT 6: Canvia el text de Mode: Normal a Mode: Super Sonic
document.querySelector('#sonic-card p').textContent = 'Mode: Super Sonic';
// PUNT 7: Activar el botó de Sonic
document.querySelector('#btn-sonic').removeAttribute('disabled');
