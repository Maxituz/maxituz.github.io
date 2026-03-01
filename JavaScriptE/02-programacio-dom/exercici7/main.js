// ============================================
// ⚔️ EXERCICI 7: HISTORIAL DE BATALLES
// ============================================
// 🎯 OBJECTIU: Introduir bucles WHILE i FOREACH per processar batalles
//
// 📚 CONCEPTES:
// - Bucle WHILE per processar mentre una condició és certa
// - Mètode FOREACH per recórrer arrays de forma elegant
// - Arrays d'objectes (batalles amb propietats)
// - Mètodes d'arrays: .push(), .find(), .filter()
// - Càlcul de progressió de nivells amb XP
//
// 🎮 CONTEXT:
// Ets un guerrer que ha completat 10 batalles contra diversos enemics.
// Cada batalla et dóna XP (experiència) si guanyes, o res si perds.
// Processa l'historial per calcular el teu nivell actual i estadístiques.
//
// ============================================

// ============================================
// ✅ TASCA 1: Establir nom i stats inicials
// ============================================

const nomJugador = 'Tarnished Elden Ring';
let nivellActual = 1;
let xpActual = 0;
const xpPerNivell = 100; // XP necessària per pujar de nivell

// Actualitzar DOM
document.querySelector('#nom-jugador').textContent = nomJugador;
document.querySelector('#nivell-jugador').textContent = nivellActual;
document.querySelector('#xp-actual').textContent = xpActual;
document.querySelector('#xp-necessaria').textContent = xpPerNivell;

// ============================================
// ✅ TASCA 2: Crear un vector amb 10 batalles
// ============================================
// Cada batalla és un objecte amb: enemic (nom + icon), resultat (victoria/derrota), xpGuanyada
// Mostra per consola els següents valors:
//  - El el nom del primer enemic
//  - La xpGuanyada del primer enemic
//  - El nom del segon enemic
//  - El resultat del segon enemic

const batalles = [
  {
    enemic: { nom: 'Highwayman', icon: './img/1-highway-man.webp' },
    resultat: 'victoria',
    xpGuanyada: 100,
  },
  { enemic: { nom: 'Knight', icon: './img/2-knight.webp' }, resultat: 'victoria', xpGuanyada: 150 },
  {
    enemic: { nom: 'Leyndell Knight', icon: './img/3-leyndell-knight.webp' },
    resultat: 'derrota',
    xpGuanyada: 0,
  },
  {
    enemic: { nom: 'Omenkiller', icon: './img/4-omenkiller.webp' },
    resultat: 'victoria',
    xpGuanyada: 300,
  },
  {
    enemic: { nom: 'Tree Sentinel', icon: './img/5-tree-sentinel.webp' },
    resultat: 'derrota',
    xpGuanyada: 0,
  },
  {
    enemic: { nom: 'Alberich', icon: './img/6-alberich.webp' },
    resultat: 'victoria',
    xpGuanyada: 250,
  },
  {
    enemic: { nom: 'Raging Wolf', icon: './img/7-raging-wolf.webp' },
    resultat: 'victoria',
    xpGuanyada: 120,
  },
  {
    enemic: { nom: 'Highwayman', icon: './img/1-highway-man.webp' },
    resultat: 'victoria',
    xpGuanyada: 100,
  },
  { enemic: { nom: 'Knight', icon: './img/2-knight.webp' }, resultat: 'derrota', xpGuanyada: 0 },
  {
    enemic: { nom: 'Raging Wolf', icon: './img/7-raging-wolf.webp' },
    resultat: 'victoria',
    xpGuanyada: 175,
  },
];

// CONCEPTE: BUCLE WHILE
// El bucle WHILE repeteix codi mentre una condició sigui certa.
// És útil quan no saps quantes vegades has de repetir.
//
// Sintaxi:
// while (condició) {
//   // codi que es repeteix
//   // IMPORTANT: assegura't que la condició canviï per evitar bucles infinits
// }
//
// Exemple:
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++; // Incrementa i per no quedar en bucle infinit
// }

// ============================================
// ✅ TASCA 3: Processar batalles amb WHILE i acumular XP
// ============================================
// Utilitza un bucle WHILE per recórrer les batalles
// Condició a avaluar (mentre l'indexBatalla sigui menor que la longitud del vector)
// acumula XP (suma la XP guanyada al total) i incrementar en 1 el comptador (indexBatalla) a cada iteració

let indexBatalla = 0;
let xpTotalGuanyada = 0;

// Utilitza un bucle while per processar cada batalla

// ============================================
// ✅ TASCA 4: Calcular nivell segons XP amb WHILE
// ============================================
// Utilitza un bucle while per calcular quants nivells has assolit a partir de:
//    - Condició a avaluar (xpRestant és més gran o igual xpPerNivell)
//    - A cada iteració (xpRestant es resta xpPerNivell)
//    - El nivellActual (s'incrementa en 1)

xpActual = xpTotalGuanyada;
nivellActual = 1;
let xpRestant = xpActual;

// ============================================
// ✅ TASCA 5: Actualitzar barra de progressió XP
// ============================================

const percentatgeXP = (xpRestant / xpPerNivell) * 100;

// Actualitzar DOM
document.querySelector('#nivell-jugador').textContent = nivellActual;
document.querySelector('#xp-actual').textContent = xpRestant;
document.querySelector('#xp-necessaria').textContent = xpPerNivell;
document.querySelector('#xp-barra').style.width = `${percentatgeXP}%`;

// ============================================
// ✅ TASCA 6: Comptar victòries amb bucle FOR
// ============================================
// Utilitza un bucle for per comptar les victòries
//  - Si el resultat === 'victoria' incrementar en 1 el totalVictories

let totalVictories = 0;

// Utilitza un bucle for per calcular el total de victòries

//Actualitzar el DOM
document.querySelector('#total-victories').textContent = totalVictories;

// ============================================
// ✅ TASCA 7: Comptar derrotes amb bucle FOR
// ============================================
// Utilitza un bucle for per comptar les derrotes
//   - Si el resultat === 'derrota' incrementar en 1 el totalDerrotes

let totalDerrotes = 0;

// Utilitza un bucle for per calcular el total de derrotes

// Actualitzar el DOM
document.querySelector('#total-derrotes').textContent = totalDerrotes;

// ============================================
// ✅ TASCA 8: Mostrar total XP al DOM
// ============================================
//Actualitzar el DOM amb el total XP guanyada

document.querySelector('#xp-total-guanyada').textContent = xpTotalGuanyada;

// ============================================
// ✅ TASCA 9: Calcular percentatge de victòries
// ============================================
// Calcula el percentatge de victòries sobre el total de batalles

let percentatgeVictories;

// TASCA 9: Percentatge de victòries
percentatgeVictories = (totalVictories / batalles.length) * 100;

// Actualitzar DOM
document.querySelector('#ratio-victories').textContent = `${percentatgeVictories}%`;

// CONCEPTE: FOREACH
// El mètode .forEach() és una forma elegant de recórrer arrays.
// Executa una funció per cada element de l'array.
//
// Sintaxi:
// array.forEach((element, index) => {
//   // codi per cada element
//   // element: l'element actual
//   // index: la posició (opcional)
// });
//
// Exemple:
// const fruites = ['poma', 'plàtan', 'taronja'];
// fruites.forEach((fruita, i) => {
//   console.log(`${i + 1}. ${fruita}`);
// });

// ============================================
// ✅ TASCA 10: Mostrar totes les batalles amb FOREACH
// ============================================
// Utilitza el FOREACH per recórrer el vector de batalles i s'han d'anar afegint al DOM.

const batallesGrid = document.querySelector('#batalles-grid');
batallesGrid.innerHTML = '';

// Actualitzar total de batalles al DOM
document.querySelector('#total-batalles').textContent = batalles.length;

// Utilitza forEach(batalla,index) per recórrer l'array de batalles i omplir el batallesGrid

/*
batallesGrid.innerHTML = `
  <div class="batalla-card ${batalla.resultat}">
    <div class="batalla-header">
      <span class="batalla-numero">Batalla #${index + 1}</span>
      <span class="batalla-resultat ${batalla.resultat}">
        ${batalla.resultat === 'victoria' ? 'VICTÒRIA' : 'DERROTA'}
      </span>
    </div>
    <div class="batalla-enemic"><img src="${batalla.enemic.icon}"></div>
    <div class="batalla-nom">${batalla.enemic.nom}</div>
    <div class="batalla-xp">
      ✨ +${batalla.xpGuanyada} XP
    </div>
  </div>
`;
*/

// ============================================
// ✅ TASCA 11: Trobar la batalla amb més XP
// ============================================
// Utilitza un bucle for per trobar la batalla amb més XP guanyada

let batallaMesXP = batalles[0];

// Bucle for per recórrer el vector de batalles i comparar xpGuanyada de cada batalla
//  - Si la xpGuanyada actual és mes gran que la batallaMesXP.xpGuanyada canvia la batallaMesXP

// Actualitzar DOM
document.querySelector('#millor-xp').innerHTML = `
  <div class="millors-batalles"><img src="${batallaMesXP.enemic.icon}"></div>
  <div><strong>${batallaMesXP.enemic.nom}</strong></div>
  <div class="millors-batalles-xp">+${batallaMesXP.xpGuanyada} XP</div>
`;

// ============================================
// ✅ TASCA 12: Trobar la primera victòria
// ============================================
// Utilitza un bucle (while o for) per trobar la primera batalla amb resultat 'victoria'
// Quan es trobi la primera victòria, s'ha de mostrar al DOM i sortir del bucle
let primeraVictoria;

// Utilitza un bucle (while o for)

if (primeraVictoria) {
  // Actualitzar DOM
  document.querySelector('#primera-victoria').innerHTML = `
    <div class="millors-batalles"><img src="${primeraVictoria.enemic.icon}"></div>
    <div><strong>${primeraVictoria.enemic.nom}</strong></div>
    <div class="millors-batalles-victoria">✅ Primera Victoria!</div>
  `;
}

// ============================================
// ✅ TASCA 13: Trobar la primera derrota
// ============================================
// Utilitza un bucle (while o for) per trobar la primera batalla amb resultat 'derrota'
// Quan es trobi la primera derrota, s'ha de mostrar al DOM i sortir del bucle
let primeraDerrota;

// Utilitza un bucle (while o for)

if (primeraDerrota) {
  // Actualitzar DOM
  document.querySelector('#primera-derrota').innerHTML = `
    <div class="millors-batalles"><img src="${primeraDerrota.enemic.icon}"></div>
    <div><strong>${primeraDerrota.enemic.nom}</strong></div>
    <div class="millors-batalles-derrota">❌ Primera derrota</div>
  `;
}
