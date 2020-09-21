const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('should return 2 for 1,2,3', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it('should return [] for [1,2]', () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it('should return 3 for 1,3,5', () => {
    assert.deepEqual(middle([1,3,5]), [3]);
  });
})