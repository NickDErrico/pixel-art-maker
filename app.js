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
  pixelGrid(60)


  $('button').on('click', function() {
    let colorChoice = $(this).text()
    $('.grid').on('click', function() {
      $(this).css('background-color', colorChoice);
    })
  })




  let onOff = false;
  $('#clearGrid').click(function() {
  onOff ? $('.grid').css('outline', '1px solid gray') : $('.grid').css('outline', '0px')
  onOff = !onOff
  })

})
