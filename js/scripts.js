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
    
    $(document).on('mouseup', function() {
      clearTimeout(timeoutId);
      if (!isDoubleClick) {
        icon.show();
        desc.hide();
        $(document).off('mouseup');
      }
    });
  });
  
  $('.icon').on('dblclick', function() {
    var icon = $(this).find('img');
    var desc = $(this).find('.description');
    icon.hide();
    desc.show();
    isDoubleClick = true;
    
    $(document).on('mouseup', function() {
      clearTimeout(timeoutId);
      isDoubleClick = false;
    });
  });
});

$(document).ready(function() {
  $('.thumbnail').each(function() {
    var projectName = $(this).find('.project-name').text();
    $(this).find('.overlay').append('<div class="project-name">' + "" + '</div>');
  });
});