$(document).ready(function() {
  // $( '#chesstable i' ).draggable();
  // $( '#chesstable td' ).droppable();
  makeChessBoard();
  window.dancers = [];
  window.dancersLinedUp = false;

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-type');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if (dancerMakerFunctionName !== 'BlinkyDancer' && dancerMakerFunctionName !== 'FlashDancer') {
      var dancer = new dancerMakerFunction(
        Math.floor(Math.random() * 16),
        Math.floor(Math.random() * 16)
        // 1000
      );
      window.dancers.push(dancer);
      dancer.chessMoves();
      setInterval(function() {
        if (window.dancersLinedUp) {
          return;
        }
        dancer.chessMoves();
      }, 3000);

      $('.chessboard').append(dancer.$inner);

    } else {
      var dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );

      window.dancers.push(dancer);
      dancer.step();

      $('body').append(dancer.$node);
      dancer.$node.append(dancer.$inner);
    }

  });

  $('.lineup').on('click', function(event) {
    lineUp(dancers);
  });

  $('.boardLineUp').on('click', function(event) {
    window.dancersLinedUp = !window.dancersLinedUp;
    chessLineup(dancers);
  });

  $('.pair').on('click', function(event) {
    var king = new KingDancer();
    king.$inner.addClass('kingdance');
    king.boardLineUp();
    king.centerDancer('.fa-chess-king', '.kingdance', KingDancer);
    var king1 = king.dancers[king.dancers.length - 1];
    var king2 = king.dancers[king.dancers.length - 2];

    king1.$inner.confettiButton({
      hoverOnly: true
    });

    king2.$inner.confettiButton({
      hoverOnly: true
    });

    var interval = setInterval(function() {
      king1.chessMoves();
      king2.chessMoves();
      king1.animate('rotate');
    }, 1500);


    $('.chessboard').on('click', function(event) {
      clearInterval(interval);
      king.repositionK('.fa-chess-king', KingDancer);
    });

  });

  $('.pair').on('click', function(event) {
    var queen = new QueenDancer();
    queen.$inner.addClass('queendance');
    queen.boardLineUp();
    queen.centerDancer('.fa-chess-queen', '.queendance', QueenDancer);
    var queen1 = queen.dancers[queen.dancers.length - 1];
    var queen2 = queen.dancers[queen.dancers.length - 2];

    queen1.$inner.confettiButton({
      hoverOnly: true
    });

    queen2.$inner.confettiButton({
      hoverOnly: true
    });



    var interval = setInterval(function() {
      queen1.chessMoves();
      queen2.chessMoves();
      queen2.animate('bounce');
    }, 1500);


    $('.chessboard').on('click', function(event) {
      clearInterval(interval);
      queen.repositionQ('.fa-chess-queen', QueenDancer);
    });

  });

  $('.pair').on('click', function(event) {
    var rook = new RookDancer();
    rook.$inner.addClass('rookdance');
    rook.boardLineUp();
    rook.centerDancer('.fa-chess-rook', '.rookdance', RookDancer);
    var rook1 = rook.dancers[rook.dancers.length - 1];
    var rook2 = rook.dancers[rook.dancers.length - 2];

    rook1.$inner.confettiButton({
      hoverOnly: true
    });

    rook2.$inner.confettiButton({
      hoverOnly: true
    });



    var interval = setInterval(function() {
      rook1.chessMoves();
      rook2.chessMoves();
      rook2.animate('bounce');
    }, 1500);


    $('.chessboard').on('click', function(event) {
      clearInterval(interval);
      rook.repositionR('.fa-chess-rook', RookDancer);
    });

  });

  $('.pair').on('click', function(event) {
    var knight = new RookDancer();
    knight.$inner.addClass('knightdance');
    knight.boardLineUp();
    knight.centerDancer('.fa-chess-knight', '.knightdance', KnightDancer);
    var knight1 = knight.dancers[knight.dancers.length - 1];
    var knight2 = knight.dancers[knight.dancers.length - 2];

    knight1.$inner.confettiButton({
      hoverOnly: true
    });

    knight2.$inner.confettiButton({
      hoverOnly: true
    });



    var interval = setInterval(function() {
      knight1.chessMoves();
      knight2.chessMoves();
      knight2.animate('bounce');
    }, 1500);


    $('.chessboard').on('click', function(event) {
      clearInterval(interval);
      knight.repositionKn('.fa-chess-knight', KnightDancer);
    });

  });

  $('.pair').on('click', function(event) {
    var bishop = new BishopDancer();
    bishop.$inner.addClass('bishopdance');
    bishop.boardLineUp();
    bishop.centerDancer('.fa-chess-bishop', '.bishopdance', BishopDancer);
    var bishop1 = bishop.dancers[bishop.dancers.length - 1];
    var bishop2 = bishop.dancers[bishop.dancers.length - 2];

    bishop1.$inner.confettiButton({
      hoverOnly: true
    });

    bishop2.$inner.confettiButton({
      hoverOnly: true
    });



    var interval = setInterval(function() {
      bishop1.chessMoves();
      bishop2.chessMoves();
      bishop2.animate('bounce');
    }, 1500);


    $('.chessboard').on('click', function(event) {
      clearInterval(interval);
      bishop.repositionB('.fa-chess-bishop', BishopDancer);
    });

  });


  $('.clear').on('click', function(event) {
    $('body').find('.fas').remove();
    $('body').find('.dancer').remove();
  });

  // Interactions of close dancers
  setInterval(() => {
    for (var k = 0; k < window.dancers.length; k++) {
      var dancer = window.dancers[k];
      dancer.$inner.removeClass('close');
    }
    for (var i = 0; i < window.dancers.length; i++) {
      for (var j = i + 1; j < window.dancers.length; j++) {
        var dancer1 = window.dancers[i];
        var dancer2 = window.dancers[j];
        if (dancer2 === dancer1) { continue; }
        var dx = Math.abs(dancer1.left - dancer2.left);
        var dy = Math.abs(dancer1.top - dancer2.top);
        if (dx <= 1 && dy <= 1) {
          dancer1.$inner.addClass('close');
          dancer2.$inner.addClass('close');
        }
      }
    }
  }, 300);

});

var makeChessBoard = function() {
  var table = document.createElement('table');
  for (var i = 0; i < 16; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 16; j++) {
      var td = document.createElement('td');
      if (i % 2 === j % 2) {
        td.className = 'white';
      } else {
        td.className = 'black';
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  $('.chessboard').append(table);
};
