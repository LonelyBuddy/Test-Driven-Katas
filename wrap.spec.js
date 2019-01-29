const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Return an empty string if the second param is less than 1', () => {
    expect(wrap("sfasad sdafa", 0)).to.equal("");
  })
  it('Return an empty string if the second param is not a number', () => {
    expect(wrap("asdf safd", false)).to.equal("");
  })
  it('Return an empty string if the first param is not a string', () => {
    expect(wrap(123, 10)).to.equal("");
  })
});