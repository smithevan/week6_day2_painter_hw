const assert = require('assert');
const Room = require('../room.js')


describe('Room', function() {

// let room;

  beforeEach(function () {
    room = new Room(5, 7);
  });
  it('should have an length', function () {
    const actual = room.length;
    assert.strictEqual(actual, 5);
  });
  it('should have width', function () {
    const actual = room.width;
    assert.strictEqual(actual, 7);
  })
  it('should have area', function () {
    const actual = room.roomArea();
    assert.strictEqual(actual, 35)
  })
  it('room should begin not painted', function() {
    const actual = room.painted;
    assert.strictEqual(actual, false)
  })
  it('room can be painted', function() {
    room.paintRoom();
    const actual = room.painted;
    assert.strictEqual(actual, true);
  })

});
