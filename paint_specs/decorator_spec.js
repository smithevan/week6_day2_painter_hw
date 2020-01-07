const assert = require('assert');
const Decorator = require('../decorator.js')
// const Decorator = require('../room.js')

describe('Decorator', function () {

  beforeEach(function() {
    decorator = new Decorator(8);
  })

  it('should check that decorator has stock', function() {
    const actual = decorator.stock;
    assert.strictEqual(actual, 8)
  })

})
