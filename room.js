const Room = function (length, width) {
  this.length = length;
  this.width = width;
}

Room.prototype.roomArea = function () {
  return this.length * this.width; 
}

module.exports = Room;
