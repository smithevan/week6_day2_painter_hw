const Paint = function (liters) {
  this.liters = liters;
}

Paint.prototype.empty = function () {
  return this.liters = 0; 
}

Paint.prototype.isEmpty = function () {
  if (this.liters === 0 ) {
    return true;
  }
  return false;
}

module.exports = Paint;
