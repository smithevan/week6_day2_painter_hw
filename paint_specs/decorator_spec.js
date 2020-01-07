const assert = require('assert');
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function () {

  beforeEach(function() {
    decorator = new Decorator(0);
    // paint = new Paint(35);
    room = new Room(5, 7);
    room2 = new Room (2, 2);
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
  it('should change room to painted if sufficient paint', function () {
    decorator.addPaint(3);
    const liters = decorator.getLiters();
    const area = room2.roomArea()
    const paintedRoom = decorator.enoughPaint(area, liters, room2)
    const actual = room2.painted
    assert.strictEqual(actual, true)
  });
  it('should be able to decrease stock when painting room', function () {
    decorator.addPaint(3);
    const liters = decorator.getLiters();
    const area = room2.roomArea()
    decorator.enoughPaint(area, liters, room2)
    decorator.decreaseStock(area, liters);
    actual = decorator.stock;
    assert.strictEqual(actual, 2)
  })

})
