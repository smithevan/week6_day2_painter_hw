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


module.exports = Decorator;
