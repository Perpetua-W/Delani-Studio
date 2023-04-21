$(document).ready(function() {
    $('.icon').click(function() {
      var desc = $(this).find('.description');
      $('.description').not(desc).hide();
      desc.toggle();
    });
  });