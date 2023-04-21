$(document).ready(function() {
  var timeoutId;
  var isDoubleClick = false;
  
  $('.icon').on('mousedown', function() {
    var icon = $(this).find('img');
    var desc = $(this).find('.description');
    icon.hide();
    desc.show();
    
    timeoutId = setTimeout(function() {
      icon.show();
      desc.hide();
      $(document).off('mouseup');
      isDoubleClick = false;
    }, 1000);
   
  });
});