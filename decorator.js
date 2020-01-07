const Decorator = function (stock) {
  this.stock = stock;
}

Decorator.prototype.isEmpty = function () {
  if (this.stock === 0 ) {
    return true;
  }
  return false;
}

Decorator.prototype.addPaint = function (paint) {
  this.stock += paint;
}

Decorator.prototype.getLiters = function () {
  return this.stock * 3;
}

Decorator.prototype.enoughPaint = function(area, liters) {
  if (area <= liters) {
    return true;
  }
  return false;
}


module.exports = Decorator;
