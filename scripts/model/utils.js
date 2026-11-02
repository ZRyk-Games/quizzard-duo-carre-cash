/**
 * Mélange un tableau d'objet
 * @param {any[]} arr
 * @returns {any[]}
 */
export function shuffle(arr) {
  return Object.assign(arr).sort(() => Math.random() - 0.5);
}
