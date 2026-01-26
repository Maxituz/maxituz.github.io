// ============================================
// EXERCICI 2: STATS DE POKÉMON
// ============================================
// OBJECTIU: Practicar textContent amb TEMPLATE LITERALS
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .textContent --> per modificar text
// - Template Literals --> `Text ${variable}` (amb cometes invertides  i ${})
//
// ============================================

// VARIABLES INICIALS (Ja venen predefinides per la tasca)
let nomPokemon = 'Pikachu';
let ps = 35;
let atac = 55;
let defensa = 40;
let velocitat = 75;

const Nom = document.querySelector('#nom');
const Vida = document.querySelector('#ps');
const ATK = document.querySelector('#atac');
const DEF = document.querySelector('#defensa');
const VEL = document.querySelector('#velocitat');

// ============================================
// TASCA 1: Actualitzar el NOM del Pokémon
// ============================================
Nom.textContent = nomPokemon;
// ============================================
// TASCA 2: Actualitzar els PS (Punts de Salut)
// ============================================
Vida.textContent = `❤️ PS: ${ps}`;
// ============================================
// TASCA 3: Actualitzar l'ATAC
// ============================================
ATK.textContent = `⚔️ Atac: ${atac}`;
// ============================================
// TASCA 4: Actualitzar la DEFENSA
// ============================================
DEF.textContent = `🛡️ Defensa: ${defensa}`;
// ============================================
// TASCA 5: Actualitzar la VELOCITAT
// ============================================
VEL.textContent = `⚡ Velocitat: ${velocitat}`;
// ============================================
// TASCA FINAL: Actualitza l'amplada de les barres visuals
// ============================================
// Utilitza style.setProperty per canviar l'estil 'width' de cada barra segons el valor de la variable corresponent.
// Exemple: barraPS.style.setProperty('width', `${ps}%`);
const barraPS = document.querySelector('.stat-value.ps');
const barraATK = document.querySelector('.stat-value.atac');
const barraDEF = document.querySelector('.stat-value.defensa');
const barraVEL = document.querySelector('.stat-value.velocitat');

barraPS.style.setProperty('width', `${ps}%`);
barraATK.style.setProperty('width', `${atac}%`);
barraDEF.style.setProperty('width', `${defensa}%`);
barraVEL.style.setProperty('width', `${velocitat}%`);
// ============================================
// TASCA OPCIONAL: Fes que el Pikachu evolucioni a Raichu
// ============================================
// - Canvia nomPokemon a "Raichu"
// - Canvia ps a 60
// - Canvia atac a 80
// - Canvia defensa a 70
// - Canvia velocitat a 90
// - Canvia la imatge del Pokémon (amb setAttribute canvia l'src i l'alt de l'element img)
nomPokemon = 'Raichu';
ps = 60;
atac = 80;
defensa = 70;
velocitat = 90;

Nom.textContent = nomPokemon;
Vida.textContent = `❤️ PS: ${ps}`;
ATK.textContent = `⚔️ Atac: ${atac}`;
DEF.textContent = `🛡️ Defensa: ${defensa}`;
VEL.textContent = `⚡ Velocitat: ${velocitat}`;

barraPS.style.setProperty('width', `${ps}%`);
barraATK.style.setProperty('width', `${atac}%`);
barraDEF.style.setProperty('width', `${defensa}%`);
barraVEL.style.setProperty('width', `${velocitat}%`);

const Imatge = document.querySelector('img');
Imatge.setAttribute('src', 'img/raichu.webp');
Imatge.setAttribute('alt', 'Raichu');
