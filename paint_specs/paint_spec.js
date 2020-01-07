const assert = require('assert');
const Paint = require('../paint.js')

describe('Paint', function() {

  beforeEach(function () {
    paint = new Paint(50);
  })

  it('should have liters of paint', function () {
    const actual = paint.liters;
    assert.strictEqual(actual, 50)
  })
  it('should empty paint', function () {
    const actual = paint.empty();
    assert.strictEqual(actual, 0)
  })
  it('should check if paint is empty', function () {
    paint.empty(); 
    const actual = paint.isEmpty();
    assert.strictEqual(actual, true);
  })

});
