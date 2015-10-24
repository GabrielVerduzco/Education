$(document).ready(function() {
  $("#little_five").click(function() {
    $('html,body').animate({scrollTop: $("#Cursos").offset().top-90}, 1000);
    var x = $("#Cursos").offset().top ;
    console.log(x);
    console.log(x+90);
  });
  $("#little_f").click(function() {
    $('html,body').animate({scrollTop: $("#NivelSuperior").offset().top-90}, 1000);
  });
});
