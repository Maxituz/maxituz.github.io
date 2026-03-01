// ============================================
// 🏆 EXERCICI 6: CLASSIFICACIÓ DE LLIGA
// ============================================
// 🎯 OBJECTIU: Introduir bucles FOR i treballar amb vectors (arrays)
//
// 📚 CONCEPTES:
// - Arrays per emmagatzemar múltiples equips
// - Bucle FOR per recórrer vectors (arrays)
// - Accés a elements d'un vector (array) amb índex [i]
// - Propietat .length d'un vector (array)
// - Ordenació de vectors (manual amb bucles)
// - Condicionals dins de bucles
//
// 🎮 CONTEXT:
// Gestiona una lliga de 6 equips amb les seves puntuacions.
// Utilitza bucles FOR per calcular estadístiques, ordenar la classificació,
// i generar comparacions entre equips.
//
// ============================================

// ============================================
// PART 1: CREACIÓ DE L'ARRAY D'EQUIPS
// ============================================

// CONCEPTE: VECTORS (ARRAYS)
// Un vector (array) és una llista que pot contenir múltiples valors.
// Es defineix amb claudàtors [] i els elements se separen per comes.
//
// Exemple:
// const fruites = ['poma', 'plàtan', 'taronja'];
// const numeros = [10, 20, 30, 40];
//
// Per accedir a un element: fruites[0] → 'poma'
// Per saber la longitud: fruites.length → 3

// ============================================
// ✅ TASCA 1: Crear un vector (array) amb equips, escuts i puntuacions
// ============================================
// Crea un vector amb 6 equips. Cada equip és un objecte amb nom, icon i punts
const vectorEquips = [
  { nom: 'Porcinos FC', icon: './img/porcinos-fc.webp', punts: 78 },
  { nom: 'Los Troncos FC', icon: './img/los-troncos-fc.webp', punts: 65 },
  { nom: 'Ultimate Móstoles FC', icon: './img/mostoles-fc.webp', punts: 82 },
  { nom: 'xBuyer Team', icon: './img/xbuyer-team.webp', punts: 58 },
  { nom: 'Jijantes FC', icon: './img/jijantes-fc.webp', punts: 71 },
  { nom: 'El Barrio', icon: './img/el-barrio-fc.webp', punts: 45 },
];

// Mostra amb console.log diferents opcions
// Exemples d'accedir a la informació de cada equip
//    vectorEquips[0].nom ------- Això retornaria el nom --> Porcinos FC
//    vectorEquips[1].nom ------- Això retornaria el nom --> Los Troncos FC
//    vectorEquips[2].punts ----- Això retornaria els punts --> 82

// ============================================
// PART 2: BUCLE FOR - PRIMERS PASSOS
// ============================================

// CONCEPTE: BUCLE FOR
// El bucle FOR permet repetir codi múltiples vegades.
// És perfecte per recórrer vectors (executar un bloc de codi per cada element).
//
// Sintaxi:
// for (let i = 0; i < array.length; i++) {
//   // codi que es repeteix
//   // i és l'índex actual: 0, 1, 2, 3...
//   // array[i] accedeix a l'element actual
// }

// ============================================
// ✅ TASCA 2: Mostrar tots els equips amb bucle FOR
// ============================================
// Recorre el vector d'equips i mostra cada equip al DOM

const equipsGrid = document.querySelector('#equips-grid');
equipsGrid.innerHTML = '';

// Utilitza un bucle for per recórrer el vector d'equips
// Per cada equip, mostra la informació al DOM
//    vectorEquips[0].icon
//    vectorEquips[0].nom
//    vectorEquips[0].punts

// CODI QUE ES REPETEIX DINS EL BUCLE FOR
equipsGrid.innerHTML += `
  <div class="equip-card">
    <div class="equip-icon"><img src="./url-imatge-equip.webp"></div>
    <div class="equip-nom">Nom Equip</div>
    <div class="equip-punts">
      <span class="equip-punts-label">Punts:</span>
      XXXX
    </div>
  </div>
`;

// ============================================
// PART 3: CÀLCULS AMB BUCLE FOR
// ============================================

// ============================================
// ✅ TASCA 3: Calcular TOTAL de punts amb bucle FOR
// ============================================

let totalPunts = 0;
// Utilitza un bucle for per sumar els punts de tots els equips
// totalPunts és un acumulador de punts
totalPunts = 0;

// Actualitzar el DOM amb els punts totals dels equips
document.querySelector('#total-punts').textContent = totalPunts;

// ============================================
// ✅ TASCA 4: Calcular MITJANA de punts
// ============================================

let mitjanaPunts = 0;

// Divideix el totalPunts entre el número total d'equips
// El número total d'equips no el pots posar manualment (has d'utilitzar la longitud del vector)

// Actualitzar DOM
document.querySelector('#mitjana-punts').textContent = mitjanaPunts;

// ============================================
// ✅ TASCA 5: Trobar PUNTS MÀXIMS amb bucle FOR
// ============================================

let puntsMaxims;

// Utilitza un bucle for per trobar el valor màxim
// Començem suposant que el primer equip té els punts màxims
// Has de comparar cada equip amb aquest valor (puntsMaxims):
//    Si els punts de l'equip [i] és més gran que puntsMaxims
//    puntsMaxims = punts de l'equip [i]

puntsMaxims = vectorEquips[0].punts;

// Actualitzar el DOM
document.querySelector('#punts-maxims').textContent = puntsMaxims;

// ============================================
// ✅ TASCA 6: Trobar PUNTS MÍNIMS amb bucle FOR
// ============================================

let puntsMinims;

// El mateix procés que abans, però ara amb el valor mínim
//    Si els punts de l'equip [i] és més petit que puntsMinims
//    puntsMinims = punts de l'equip [i]

puntsMinims = vectorEquips[0].punts;

// Actualitzar DOM
document.querySelector('#punts-minims').textContent = puntsMinims;

// ============================================
// PART 4: ORDENACIÓ AMB BUCLES
// ============================================

// ============================================
// ✅ TASCA 7: Ordenar equips per puntuació (de major a menor)
// ============================================
// Utilitza dos bucles FOR imbricats per ordenar el vector

// ORDENACIÓ AMB L'ALGORISME BUBBLE SORT (EXPLITACIÓ GRÀFICA A L'AULA DEL FUNCIONAMENT)

// Recorre el vector múltiples vegades comparant elements adjacents
// D'aquesta manera els elements poden pujar/baixar en la llista de posicions
for (let i = 0; i < vectorEquips.length - 1; i++) {
  for (let j = 0; j < vectorEquips.length - 1 - i; j++) {
    let equipTemporal;
    // Si l'equip actual té menys punts que el següent, intercanvia'ls
    //    1. Guardar l'equip [j] actual a la variable temporal
    //    2. Sobreescriure l'equip [j] i posar l'equip [j+1]
    //    3. Sobrrescriure l'equip [j+1] i posar l'equip guardat a la variable temporal
  }
}
console.log(vectorEquips);

// ============================================
// PART 5: GENERAR TAULA DE CLASSIFICACIÓ
// ============================================

// ============================================
// ✅ TASCA 8: Generar files de la taula amb bucle FOR
// ============================================

const taulaBody = document.querySelector('#taula-body');
taulaBody.innerHTML = '';

// Utilitza un bucle for per recórrer el vector i generant cada fila de la taula

// CODI QUE ES REPETEIX DINS EL BUCLE FOR
// Afegir una nova fila a la taula
taulaBody.innerHTML += `
  <tr>
    <td class="pos-col">
      <span class="posicio-numero">XX</span>
    </td>
    <td>
      <span class="equip-escut"><img src="./img/escrut-equip.webp"></span>
    </td>
    <td class="equip-col">
      <span class="equip-nom-taula">Nom Equip</span>
    </td>
    <td class="punts-col">
      <span class="punts-valor">Punts Equip</span>
    </td>
  </tr>
`;
