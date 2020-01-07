const assert = require('assert');
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function () {

  beforeEach(function() {
    decorator = new Decorator(0);
    // paint = new Paint(35);
    room = new Room(5, 7);
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
  it('should be able to get liters from paint stock', function() {
    decorator.addPaint(3);
    const actual = decorator.getLiters();
    assert.strictEqual(actual, 9)
  })
  it('should be able to calculate whether there is enough paint for room', function () {
    decorator.addPaint(3);
    const liters = decorator.getLiters();
    const area = room.roomArea()
    const actual = decorator.enoughPaint(area, liters)
    assert.strictEqual(actual, false)
  })

})
