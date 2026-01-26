// ============================================
// EXERCICI 5: BARRA DE VIDA DINÀMICA
// ============================================
// OBJECTIU 1: Combinar classList i style.setProperty()
// OBJECTIU 2: Crear estructures condicionals (if/else)
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .classList.remove() --> per eliminar classes CSS
// - .classList.add() --> per afegir classes CSS
// - .style.setProperty() --> per modificar estils CSS
// - .textContent --> per modificar text
// - Template Literals --> `Text ${variable}`
//
// CLASSES CSS DISPONIBLES:
// - .vida-alta (51-100 HP) → Verd
// - .vida-mitjana (31-50 HP) → Groc
// - .vida-baixa (11-30 HP) → Taronja
// - .vida-critica (0-10 HP) → Vermell (amb animació!)
//
// ============================================

// VARIABLE DE VIDA (Canvia aquest valor per fer proves)
// Prova amb: 100, 75, 50, 30, 10, 5, 0
let hp = 10;

// 📦 Seleccionar els elements necessaris
const puntsVida = document.querySelector('#punts-vida');
const barraVida = document.querySelector('.vida');
const percentatge = document.querySelector('#percentatge');

// ============================================
// TASCA 1: Eliminar TOTES les classes possibles CSS de la barraVida
// ============================================
// 'vida-alta', 'vida-mitjana', 'vida-baixa', 'vida-critica'
barraVida.classList.remove('vida-alta', 'vida-mitjana', 'vida-baixa', 'vida-critica');
// ============================================
// TASCA 2: Afegir la classe CSS correcta segons el valor de la vida
// ============================================
// Si hp està entre 51-100 → afegeix 'vida-alta'
// Si hp està entre 31-50 → afegeix 'vida-mitjana'
// Si hp està entre 11-30 → afegeix 'vida-baixa'
// Si hp està entre 0-10 → afegeix 'vida-critica'
if ((hp > 50) & (hp <= 100)) {
  barraVida.classList.add('vida-alta');
} else if ((hp > 30) & (hp <= 50)) {
  barraVida.classList.add('vida-mitjana');
} else if ((hp > 10) & (hp <= 30)) {
  barraVida.classList.add('vida-baixa');
} else {
  barraVida.classList.add('vida-critica');
}
// ============================================
// TASCA 3: Actualitzar l'amplada de la barra
// ============================================
// La barra ha de tenir una amplada (width) igual al % de vida.
barraVida.style.setProperty('width', `${hp}%`);
// ============================================
// TASCA 4: Actualitzar el text dels punts de vida
// ============================================
// El text ha de mostrar: "Punts de Vida - XX HP"
puntsVida.textContent = `Punts de Vida - ${hp} HP`;
// ============================================
// TASCA 5: Actualitzar el percentatge visual
// ============================================
// El percentatge ha de mostrar: "XX%"
percentatge.textContent = `${hp}%`;
// ============================================
// TASCA FINAL: Experimenta!
// ============================================
// 1. Canvia el valor de hp a diferents valors:
//    - 100 (vida plena) → Verd
//    - 75 (vida alta) → Verd
//    - 45 (vida mitjana) → Groc
//    - 25 (vida baixa) → Taronja
//    - 8 (vida crítica) → Vermell amb animació!
//    - 0 (mort) → Vermell amb barra buida
//
