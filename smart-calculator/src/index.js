class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.res = [this.value];
  }

  add(number) {
    this.res.push('+');
    this.res.push(number);
  	return this;
  }

  subtract(number) {
    this.res.push('-');
    this.res.push(number);
  	return this;
  }

  multiply(number) {
    this.res.push('*');
    this.res.push(number);
  	return this;
  }

  devide(number) {
    this.res.push('/');
    this.res.push(number);
  	return this;
  }

  pow(number) {
    this.res.push(number+'pow');
  	return this;
  }

  convertToString(array) {
    let temp = null;
    for(let i = array.length-1; i >= 0; i--) {
      if (typeof array[i] !== 'number') {
        if (array[i].includes('pow')) {
          temp = Math.pow(parseInt(array[i-1]), parseInt(array[i]));
          if (typeof array[i-1] === 'number') {
            array[i-1] = temp;
            array[i] = null;
          } else {
            array[i-1] = temp + 'pow';
            array[i] = null;
          }
        }
      }
    }
    return array.join('');
  }

  valueOf() {
    let str = this.convertToString(this.res);
    return eval(str);
  }
}

module.exports = SmartCalculator;