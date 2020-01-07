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

Decorator.prototype.enoughPaint = function(area, liters, room) {
  if (area <= liters) {
    room.paintRoom();
    return true;
  }
  return false;
}

Decorator.prototype.decreaseStock = function(area, liters) {
  const leftoverLiters = liters - area;
  const leftoverStock = leftoverLiters % 3;
  this.stock = leftoverStock;
}


module.exports = Decorator;
