/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let i = 0;
  let count = 0;
  for(i = 0, len = preferences.length;i < len; i++){
    let first = preferences[i];
    let second = preferences[first-1]
    if(preferences[second-1]== i+1) count ++;
  }
  return Math.floor(count/3);
}
