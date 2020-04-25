$(document).ready(function() {

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
