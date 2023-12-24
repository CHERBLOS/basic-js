const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position < this.chain.length && typeof position === 'number') {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map(item => `( ${item} )`).join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
