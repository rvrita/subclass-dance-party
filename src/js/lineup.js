var lineUp = function(dancers) {
  var topValue = '50%';
  var leftIncrement = 30;
  var leftValue = 0;

  if ( window.dancersLinedUp ) {
    /* dancers.forEach(function(dancer, index) {
      dancer.setPosition(0, 0);
      var css = {'display': 'none;'};
    }); */
    window.dancersLinedUp = false;

  } else {
    dancers.forEach(function(dancer) {
      dancer.setPosition(topValue, leftValue);
      leftValue += leftIncrement;
    });
    window.dancersLinedUp = true;
  }
};

var chessLineup = function() {
  $('i').remove();
  var pixPerMove = 30;
  window.dancers = [];
  var createDancer = function(top, left, dancerClass) {
    var dancer = new dancerClass (top, left);
    window.dancers.push(dancer);
    $('.chessboard').append(dancer.$inner);
    dancer.setPosition(top * pixPerMove, left * pixPerMove);
    setInterval(function() {
      if (window.dancersLinedUp) {
        return;
      }
      dancer.chessMoves();
    }, 2000);
  };

  var top = 4;
  var left = 1;
  for (var i = 0; i < 8; i++) {
    createDancer(top + i, left, PawnDancer);
  }

  var left = 14;
  for (var i = 0; i < 8; i++) {
    createDancer(top + i, left, PawnDancer);
  }

  createDancer(4, 0, RookDancer);
  createDancer(5, 0, KnightDancer);
  createDancer(6, 0, BishopDancer);
  createDancer(7, 0, QueenDancer);
  createDancer(8, 0, KingDancer);
  createDancer(9, 0, BishopDancer);
  createDancer(10, 0, KnightDancer);
  createDancer(11, 0, RookDancer);

  createDancer(4, 15, RookDancer);
  createDancer(5, 15, KnightDancer);
  createDancer(6, 15, BishopDancer);
  createDancer(7, 15, KingDancer);
  createDancer(8, 15, QueenDancer);
  createDancer(9, 15, BishopDancer);
  createDancer(10, 15, KnightDancer);
  createDancer(11, 15, RookDancer);

};