module.exports = function longestConsecutiveLength(array) {
  const set = new Set(array);
  let result = 0;
  for (let i = 0, len = array.length; i < len; i++) {
    if (!set.has(array[i] - 1)) {
      let jarr = array[i];
      while (set.has(jarr)) {
        jarr++;
        if (result < jarr - array[i]) {
          result = jarr - array[i];
        }
      }
    }
  }
  return result;
}