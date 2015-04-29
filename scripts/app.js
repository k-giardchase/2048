angular.module('twentyfourtyeightApp', ['Game'])
  .controller('GameController', function(GameManager) {
    this.game = GameManger;
  });
