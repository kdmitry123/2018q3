module.exports = function makeExchange(currency) {
    let number = {};
    if (currency <= 0) {
      return {};
    }
    else if (currency>=10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }
    else {
      let h = Math.trunc(currency / 50);
      currency = currency - h * 50;
      if (h>0) {
        number.H = h;
      }
      let q = Math.trunc(currency / 25);
      currency = currency - q * 25;
      if (q>0) {
        number.Q = q;
      }
      let d = Math.trunc(currency / 10);
      currency = currency - d * 10;
      if (d>0) {
        number.D = d;
      }
      let n = Math.trunc(currency / 5);
      currency = currency - n * 5;
      if (n>0) {
        number.N = n;
      }
      let p = Math.trunc(currency / 1);
      if (p>0) {
         number.P = p;
      }
      return number;
  }
}
