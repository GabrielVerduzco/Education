$(document).ready(function() {
   $('[data-toggle="tooltip"]').tooltip();

  $("#little_five").click(function() {
    $('html,body').animate({scrollTop: $("#Cursos").offset().top-90}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });   
  $("#little_five").click(function() {
    $('html,body').animate({scrollTop: $("#Cursos").offset().top-90}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $("#little_f").click(function() {
    $('html,body').animate({scrollTop: $("#NivelSuperior").offset().top-90}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $("#little_six").click(function() {
    $('html,body').animate({scrollTop: $("#Recuerda").offset().top-90}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  $("#cinco").click(function() {
    $('html,body').animate({scrollTop: $("#Cursos").offset().top-150}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $("#cuatro").click(function() {
    $('html,body').animate({scrollTop: $("#NivelSuperior").offset().top-150}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $("#seis").click(function() {
    $('html,body').animate({scrollTop: $("#Recuerda").offset().top-150}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
});
