angular.module('Grid', [])
.service('GridService', function() {
  this.grid = [];
  this.tiles = [];
  //Size of the board
  this.size = 4;

});

.factory('TileModel', function() {
  var Tile = function(pos, val) {
    this.x = pos.x;
    this.y = pos.y;
    this.value = val || 2;
  };
  return Tile;
});
