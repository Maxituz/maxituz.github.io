// ============================================
// 🛡️ EXERCICI 4: SISTEMA DE DEFENSA DE LA CASA
// ============================================
// 🎯 OBJECTIU: Dominar condicionals (if/else) i operadors relacionals
//
// 📚 CONCEPTES:
// - Condicionals if/else per decidir accions
// - Operadors relacionals: >, <, >=, <=, ===
// - Operadors lògics: &&, ||, !
// - Actualització dinàmica del DOM
// - Càlcul de danys i defenses
//
// 🎮 CONTEXT:
// La casa d'en Dave està sent atacat per 4 onades d'enemics.
// Has de calcular el dany rebut, actualitzar la vida de la casa,
// i determinar el nivell d'alerta segons l'estat de la casa.
//
// ============================================

// ============================================
// ✅ TASCA 1: Establir stats de la casa
// ============================================

const vidaMaximaCasa = 2500;
let vidaActualCasa = 2500;
const defensaCasa = 1100;
let percentatgeVida = (vidaActualCasa / vidaMaximaCasa) * 100;

// ============================================
// ✅ TASCA 2: Actualitzar stats al DOM
// ============================================
// Variables per actualitzar la vida actual i la defensa al DOM.

const divVidaCasa = document.querySelector('#vida-casa-text');
const divDefensaCasa = document.querySelector('#defensa-casa');
const divBarraVida = document.querySelector('#barra-vida-casa');

divVidaCasa.textContent = `${vidaActualCasa}/${vidaMaximaCasa}`;
divDefensaCasa.textContent = defensaCasa;
divBarraVida.style.setProperty('width', `${percentatgeVida}%`);

// ============================================
// VARIABLES DE CONTROL
// ============================================
// Variables per portar el control dels atacs rebuts, els atacs bloquejats i el dany total rebut.

let totalAtacs = 0; // Incrementar cada cop que una onada ataca la casa
let atacsBloquejats = 0; // Incrementar cada cop que un atac és bloquejat
let danyTotalRebut = 0; // Acumular el dany de cada onada
const onadesHTML = document.querySelector('#onades-grid');

onadesHTML.innerHTML = '';

// ============================================
// ONADA 1 - Zombies Caracubo (Dany Baix)
// ============================================

const nomOnada1 = 'Zombies Caracubo';
const imgOnada1 = './img/1-zombi-caracubo.webp';
const danyBaseOnada1 = 100;
const quantitatOnada1 = 12;
const danyTotalOnada1 = danyBaseOnada1 * quantitatOnada1; // 100 * 12 = 1200

// ============================================
// ✅ TASCA 3: Calcular dany rebut amb if/else
// ============================================
let danyRealOnada1; // pot ser 0 o el danyReal calculat
let atacBloquejat1; // true o false

if (defensaCasa >= danyTotalOnada1) {
  danyRealOnada1 = 0;
  atacsBloquejats++;
} else {
  danyRealOnada1 = danyTotalOnada1 - defensaCasa;
  vidaActualCasa -= danyRealOnada1;
  danyTotalRebut += danyRealOnada1;
}
totalAtacs++;

// Si la defensa de la casa és més gran o igual al danyTotal de l'onada
//    - L'atac és bloquejat (true)
//    - danyRealOnada1 passa a ser 0
//    - Incrementar en 1 els atacsBloquejats
// Sinó
//    - L'atac no és bloquejat (false)
//    - El danyReal és igual al danyTotal menys la defensaCasa
//    - Restar el danyReal a la vidaActualCasa
//    - Incrementar el danyTotalRebut amb el danyReal

// Al final de cada onada has d'incrementar el totalAtacs en 1

// ============================================
// ✅ TASCA 4: Actualitzar la vida de la casa
// ============================================

// Actualitzar el DOM divVidaCasa i divDefensaCasa amb els valors actuals de vidaActualCasa i defensaCasa

// Actualitzar l'amplada de la barra visual de vida recalculant el percentatge de vida restant

percentatgeVida = (vidaActualCasa / vidaMaximaCasa) * 100;

divVidaCasa.textContent = `${vidaActualCasa}/${vidaMaximaCasa}`;
divDefensaCasa.textContent = defensaCasa;
divBarraVida.style.setProperty('width', `${percentatgeVida}%`);
// Actualitza onadesHTML al DOM fent ús Bde innetHTML i el següent codi
/*
`
  <div class="onada-card baix">
    <div class="onada-header">
      <div class="onada-nom">${nomOnada1}</div>
      <div class="onada-icon"><img src="${imgOnada1}" alt="Imatge de l'onada 1"></div>
    </div>
    <div class="onada-info">
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Total:</span>
        <span class="onada-detail-value">${danyTotalOnada1}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Real:</span>
        <span class="onada-detail-value">${danyRealOnada1}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Estat:</span>
        <span class="onada-detail-value">${atacBloquejat1 ? '🛡️ Bloquejat' : '💔 Impacte'}</span>
      </div>
    </div>
  </div>
`
*/
onadesHTML.innerHTML += `
  <div class="onada-card baix">
    <div class="onada-header">
      <div class="onada-nom">${nomOnada1}</div>
      <div class="onada-icon"><img src="${imgOnada1}" alt="Imatge de l'onada 1"></div>
    </div>
    <div class="onada-info">
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Total:</span>
        <span class="onada-detail-value">${danyTotalOnada1}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Real:</span>
        <span class="onada-detail-value">${danyRealOnada1}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Estat:</span>
        <span class="onada-detail-value">${atacBloquejat1 ? '🛡️ Bloquejat' : '💔 Impacte'}</span>
      </div>
    </div>
  </div>
`;
// ============================================
// ✅ TASCA 5: Determinar nivell d'alerta
// ============================================
// Normal: percentatgeVida superior al 70%
// Alerta: percentatgeVida entre 30% i 70%
// Crític: percentatgeVida inferior al 30%

let nivellAlerta; // 'NORMAL', 'ALERTA' o 'CRÍTIC'
let iconAlerta; // '🟢', '🟡' o '🔴'
let missatgeAlerta; // 'La casa és segura', 'La casa està en perill!' o 'La casa està a punt de caure!'
let classeAlerta; // 'normal', 'alerta' o 'critic' (per classes CSS)

// Determina el nivell d'alerta amb if/else segons el percentratge de vida
if (percentatgeVida > 70) {
  nivellAlerta = 'NORMAL';
  iconAlerta = '🟢';
  missatgeAlerta = 'La casa és segura';
  classeAlerta = 'normal';
} else if (percentatgeVida >= 30 && percentatgeVida <= 70) {
  nivellAlerta = 'ALERTA';
  iconAlerta = '🟡';
  missatgeAlerta = 'La casa està en perill!';
  classeAlerta = 'alerta';
} else {
  nivellAlerta = 'CRÍTIC';
  iconAlerta = '🔴';
  missatgeAlerta = 'La casa està a punt de caure!';
  classeAlerta = 'critic';
}

// Actualitzar l'alerta al DOM (divAlertaContainer)
const divAlertaContainer = document.querySelector('#alerta-container');

// Elimina les classes d'alerta anteriors (CSS) - normal, alerta i crític
divAlertaContainer.classList.remove('normal', 'alerta', 'critic');

// Afegeix la nova classe d'alerta (CSS) - variable classeAlerta
divAlertaContainer.classList.add(`${classeAlerta}`);
// Actualitza l'alerta amb innerHTML amb el nou nivell, icona i missatge
/*
`
  <div class="alerta-icon">${iconAlerta}</div>
  <div class="alerta-info">
    <div class="alerta-nivel">${nivellAlerta}</div>
    <div class="alerta-missatge">${missatgeAlerta}</div>
  </div>
`
*/
divAlertaContainer.innerHTML = `
  <div class="alerta-icon">${iconAlerta}</div>
  <div class="alerta-info">
    <div class="alerta-nivel">${nivellAlerta}</div>
    <div class="alerta-missatge">${missatgeAlerta}</div>
  </div>
`;
// De divBarraVida elimina les classes anterior de la barra de vida (CSS) - normal, alerta i crític
divBarraVida.classList.remove('normal', 'alerta', 'critic');
// A divBarraVida afegeix la classe de la barra de vida (CSS) - variable classeAlerta
divBarraVida.classList.add(`${classeAlerta}`);
// ============================================
// ONADA 2 - Zombies Pirates (Dany Mitjà)
// ============================================

const nomOnada2 = 'Zombies Pirates';
const imgOnada2 = './img/2-zombie-pirata.webp';
const danyBaseOnada2 = 150;
const quantitatOnada2 = 10;
const danyTotalOnada2 = danyBaseOnada2 * quantitatOnada2; // 150 * 10 = 1500

// ============================================
// ✅ TASCA 6: Onada 2 - Repeteix les tasques 3,4 i 5 per a l'onada 2
// ============================================
let danyRealOnada2;
let atacBloquejat2;

if (defensaCasa >= danyTotalOnada2) {
  danyRealOnada2 = 0;
  atacsBloquejats++;
} else {
  danyRealOnada2 = danyTotalOnada2 - defensaCasa;
  vidaActualCasa -= danyRealOnada2;
  danyTotalRebut += danyRealOnada2;
}
totalAtacs++;

percentatgeVida = (vidaActualCasa / vidaMaximaCasa) * 100;

divVidaCasa.textContent = `${vidaActualCasa}/${vidaMaximaCasa}`;
divDefensaCasa.textContent = defensaCasa;
divBarraVida.style.setProperty('width', `${percentatgeVida}%`);

onadesHTML.innerHTML += `
  <div class="onada-card baix">
    <div class="onada-header">
      <div class="onada-nom">${nomOnada2}</div>
      <div class="onada-icon"><img src="${imgOnada2}" alt="Imatge de l'onada 1"></div>
    </div>
    <div class="onada-info">
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Total:</span>
        <span class="onada-detail-value">${danyTotalOnada2}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Real:</span>
        <span class="onada-detail-value">${danyRealOnada2}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Estat:</span>
        <span class="onada-detail-value">${atacBloquejat2 ? '🛡️ Bloquejat' : '💔 Impacte'}</span>
      </div>
    </div>
  </div>
`;

if (percentatgeVida > 70) {
  nivellAlerta = 'NORMAL';
  iconAlerta = '🟢';
  missatgeAlerta = 'La casa és segura';
  classeAlerta = 'normal';
} else if (percentatgeVida >= 30 && percentatgeVida <= 70) {
  nivellAlerta = 'ALERTA';
  iconAlerta = '🟡';
  missatgeAlerta = 'La casa està en perill!';
  classeAlerta = 'alerta';
} else {
  nivellAlerta = 'CRÍTIC';
  iconAlerta = '🔴';
  missatgeAlerta = 'La casa està a punt de caure!';
  classeAlerta = 'critic';
}

divAlertaContainer.classList.remove('normal', 'alerta', 'critic');

divAlertaContainer.classList.add(`${classeAlerta}`);

divAlertaContainer.innerHTML = `
  <div class="alerta-icon">${iconAlerta}</div>
  <div class="alerta-info">
    <div class="alerta-nivel">${nivellAlerta}</div>
    <div class="alerta-missatge">${missatgeAlerta}</div>
  </div>
`;

divBarraVida.classList.remove('normal', 'alerta', 'critic');

divBarraVida.classList.add(`${classeAlerta}`);

// ============================================
// ONADA 3 - Zombies Cowboys (Dany Elevat)
// ============================================

const nomOnada3 = 'Zombies Cowboys';
const imgOnada3 = './img/3-zombi-vaquero.webp';
const danyBaseOnada3 = 200;
const quantitatOnada3 = 8;
const danyTotalOnada3 = danyBaseOnada3 * quantitatOnada3; // 200 * 8 = 1600

// ============================================
// ✅ TASCA 7: Onada 3 - Repeteix les tasques 3,4 i 5 per a l'onada 3
// ============================================

let danyRealOnada3;
let atacBloquejat3;

if (defensaCasa >= danyTotalOnada3) {
  danyRealOnada3 = 0;
  atacsBloquejats++;
} else {
  danyRealOnada3 = danyTotalOnada3 - defensaCasa;
  vidaActualCasa -= danyRealOnada3;
  danyTotalRebut += danyRealOnada3;
}
totalAtacs++;

percentatgeVida = (vidaActualCasa / vidaMaximaCasa) * 100;

divVidaCasa.textContent = `${vidaActualCasa}/${vidaMaximaCasa}`;
divDefensaCasa.textContent = defensaCasa;
divBarraVida.style.setProperty('width', `${percentatgeVida}%`);

onadesHTML.innerHTML += `
  <div class="onada-card baix">
    <div class="onada-header">
      <div class="onada-nom">${nomOnada3}</div>
      <div class="onada-icon"><img src="${imgOnada3}" alt="Imatge de l'onada 1"></div>
    </div>
    <div class="onada-info">
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Total:</span>
        <span class="onada-detail-value">${danyTotalOnada3}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Real:</span>
        <span class="onada-detail-value">${danyRealOnada3}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Estat:</span>
        <span class="onada-detail-value">${atacBloquejat3 ? '🛡️ Bloquejat' : '💔 Impacte'}</span>
      </div>
    </div>
  </div>
`;

if (percentatgeVida > 70) {
  nivellAlerta = 'NORMAL';
  iconAlerta = '🟢';
  missatgeAlerta = 'La casa és segura';
  classeAlerta = 'normal';
} else if (percentatgeVida >= 30 && percentatgeVida <= 70) {
  nivellAlerta = 'ALERTA';
  iconAlerta = '🟡';
  missatgeAlerta = 'La casa està en perill!';
  classeAlerta = 'alerta';
} else {
  nivellAlerta = 'CRÍTIC';
  iconAlerta = '🔴';
  missatgeAlerta = 'La casa està a punt de caure!';
  classeAlerta = 'critic';
}

divAlertaContainer.classList.remove('normal', 'alerta', 'critic');

divAlertaContainer.classList.add(`${classeAlerta}`);

divAlertaContainer.innerHTML = `
  <div class="alerta-icon">${iconAlerta}</div>
  <div class="alerta-info">
    <div class="alerta-nivel">${nivellAlerta}</div>
    <div class="alerta-missatge">${missatgeAlerta}</div>
  </div>
`;

divBarraVida.classList.remove('normal', 'alerta', 'critic');

divBarraVida.classList.add(`${classeAlerta}`);
// ============================================
// PART 6: ONADA 4 - Dr. Zombie Boss (Dany Extrem)
// ============================================

const nomOnada4 = 'Dr. Zombi Boss';
const imgOnada4 = './img/4-dr-zombie-boss.webp';
const danyBaseOnada4 = 1200;
const quantitatOnada4 = 2;
const danyTotalOnada4 = danyBaseOnada4 * quantitatOnada4; // 1200 * 2 = 2400

// ============================================
// ✅ TASCA 8: Processar onada 4 (BOSS FINAL)
// ============================================

let danyRealOnada4;
let atacBloquejat4;

if (defensaCasa >= danyTotalOnada4) {
  danyRealOnada4 = 0;
  atacsBloquejats++;
} else {
  danyRealOnada4 = danyTotalOnada4 - defensaCasa;
  vidaActualCasa -= danyRealOnada4;
  danyTotalRebut += danyRealOnada4;
}
totalAtacs++;

percentatgeVida = (vidaActualCasa / vidaMaximaCasa) * 100;

divVidaCasa.textContent = `${vidaActualCasa}/${vidaMaximaCasa}`;
divDefensaCasa.textContent = defensaCasa;
divBarraVida.style.setProperty('width', `${percentatgeVida}%`);

onadesHTML.innerHTML += `
  <div class="onada-card baix">
    <div class="onada-header">
      <div class="onada-nom">${nomOnada4}</div>
      <div class="onada-icon"><img src="${imgOnada4}" alt="Imatge de l'onada 1"></div>
    </div>
    <div class="onada-info">
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Total:</span>
        <span class="onada-detail-value">${danyTotalOnada4}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Dany Real:</span>
        <span class="onada-detail-value">${danyRealOnada4}</span>
      </div>
      <div class="onada-detail">
        <span class="onada-detail-label">Estat:</span>
        <span class="onada-detail-value">${atacBloquejat4 ? '🛡️ Bloquejat' : '💔 Impacte'}</span>
      </div>
    </div>
  </div>
`;

if (percentatgeVida > 70) {
  nivellAlerta = 'NORMAL';
  iconAlerta = '🟢';
  missatgeAlerta = 'La casa és segura';
  classeAlerta = 'normal';
} else if (percentatgeVida >= 30 && percentatgeVida <= 70) {
  nivellAlerta = 'ALERTA';
  iconAlerta = '🟡';
  missatgeAlerta = 'La casa està en perill!';
  classeAlerta = 'alerta';
} else {
  nivellAlerta = 'CRÍTIC';
  iconAlerta = '🔴';
  missatgeAlerta = 'La casa està a punt de caure!';
  classeAlerta = 'critic';
}

divAlertaContainer.classList.remove('normal', 'alerta', 'critic');

divAlertaContainer.classList.add(`${classeAlerta}`);

divAlertaContainer.innerHTML = `
  <div class="alerta-icon">${iconAlerta}</div>
  <div class="alerta-info">
    <div class="alerta-nivel">${nivellAlerta}</div>
    <div class="alerta-missatge">${missatgeAlerta}</div>
  </div>
`;

divBarraVida.classList.remove('normal', 'alerta', 'critic');

divBarraVida.classList.add(`${classeAlerta}`);
// ============================================
// ✅ TASCA 9: Determinar estat final
// ============================================

let estatFinal;

// Si la vida actual és mes gran que el 70% de la vida maxima
//    - estatFinal = '🏆 VICTÒRIA'
// Sinó si la vida actual és mes gran que 0
//    - estatFinal = '⚠️ SUPERVIVÈNCIA'
// Sinó
//    - estatFinal = '💀 DERROTA'
if (percentatgeVida > 70) {
  estatFinal = '🏆 VICTÒRIA';
} else if (percentatgeVida > 0) {
  estatFinal = '⚠️ SUPERVIVÈNCIA';
} else {
  estatFinal = '💀 DERROTA';
}
// Actualitzar el resum de la defensa al DOM amb el total d'atacs, atacs bloquejats, dany total rebut i l'estat final de la casa
const divTotalAtacs = document.querySelector('#total-atacs');
const divAtacsBloquejats = document.querySelector('#atacs-bloquejats');
const divDanyTotal = document.querySelector('#dany-total');
const divEstatFinal = document.querySelector('#estat-final');

divTotalAtacs.textContent = totalAtacs;
divAtacsBloquejats.textContent = atacsBloquejats;
divDanyTotal.textContent = danyTotalRebut;
divEstatFinal.textContent = estatFinal;
