const assert = require('assert');
const Decorator = require('../decorator.js')
// const Decorator = require('../room.js')

describe('Decorator', function () {

  beforeEach(function() {
    decorator = new Decorator(0);
  })

  it('should check that decorator has stock', function() {
    const actual = decorator.stock;
    assert.strictEqual(actual, 0)
  })
  it('should start with empty paint stock', function() {
    const actual = decorator.isEmpty();
    assert.strictEqual(actual, true)
  })
  it('should be able to add paint to stock', function() {
    decorator.addPaint(4);
    const actual = decorator.stock;
    assert.strictEqual(actual, 4)
  })

})
