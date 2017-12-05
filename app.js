
$(function() {

  function pixelGrid(num) {
    for (rows = 0; rows < num; rows++) {
      for (columns = 0; columns < num; columns++) {
        $('#container').append('<div class= grid /div>');
      }
      $('.grid').width(800/num);
      $('.grid').height(800/num);
    }
  }
  pixelGrid(80)

  function colorChanged(value) {
      document.getElementById("colorValue").innerHTML = value;
      document.getElementById("colorCanvas").style.backgroundColor = value;
    }

    $('input[type="color"]').on('change', function() {
      colorChanged($(this).val())
    });

    $('.grid').click(function() {
      $(this).css('background-color', document.getElementById('colorWell').value)
    });




  let onOff = false;
  $('#clearGrid').click(function() {
  onOff ? $('.grid').css('outline', '1px solid gray') : $('.grid').css('outline', '0px')
  onOff = !onOff
  })

})
