/**
 * Returns Jaro–Winkler distance
 * @param {string} s1
 * @param {string} s2
 * @param {boolean} caseSensetive
 * @returns {number}
 * @customfunction
 */
function DISTANCE_JW(s1, s2, caseSensetive) {
  return distance(s1, s2, { caseSensitive: !!caseSensetive });
}
