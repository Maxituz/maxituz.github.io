// ============================================
// EXERCICI 3: TAULA DE CLASSIFICACIÓ
// ============================================
// OBJECTIU: Practicar innerHTML per crear llistes HTML
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .innerHTML --> per inserir codi HTML dins un element
//
// ============================================

// TASCA 1: Seleccionar el div #ranking
// ------------------------------------------------
const Ranking = document.querySelector('#ranking');
// TASCA 2: Crear la llista de jugadors amb innerHTML
// ------------------------------------------------
// EXEMPLE d'un element (li):
//   <li>
//     <span class="posicio">...</span>
//     <span class="jugador-nom">...</span>
//     <span class="punts">...</span>
//   </li>
//
// TASCA 3: Afegir un 4t jugador amb el TEU nom
Ranking.innerHTML = `
<ul>
<li>
<span class="posicio">1</span>
<span class="jugador-nom">Miquel</span>
<span class="punts">999</span>
</li>
<li>
<span class="posicio">2</span>
<span class="jugador-nom">Jaume</span>
<span class="punts">980</span>
</li>
<li>
<span class="posicio">3</span>
<span class="jugador-nom">Victor</span>
<span class="punts">970</span>
</li>
<li>
<span class="posicio">4</span>
<span class="jugador-nom">Max</span>
<span class="punts">969</span>
</li>
</ul>
`;
