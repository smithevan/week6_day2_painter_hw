const Room = function (length, width) {
  this.length = length;
  this.width = width;
  this.painted = false;
}

Room.prototype.roomArea = function () {
  return this.length * this.width;
}

Room.prototype.paintRoom = function () {
  return this.painted = true; 
}

module.exports = Room;
