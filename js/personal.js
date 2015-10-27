var info = {
  opt1: {
    text: "Esta universidad es una opción educativa de calidad, totalmente a distancia y gratuita. Ofrece servicios como becas y acceso a una enorme cantidad de recursos digitales, además de encontrarse disponible para la población mexicana en el extranjero.",
    link1: "http://www.unadmexico.mx/",
    link2: "http://www.unadmexico.mx/index.php?option=com_content&view=article&id=80&Itemid=498",
    link3: "http://www.unadmexico.mx/index.php?option=com_content&view=article&id=298"
  },
  opt2: {
    text: "<p>Sus modalidades a distancia y mixta para el nivel superior te permiten elegir las unidades de aprendizaje que requieres para cada periodo escolar, además de desarrollar habilidades de comunicación y autogestión.</p>",
    link1: "http://www.polivirtual.ipn.mx/Paginas/inicio.aspx",
    link2: "http://www.polivirtual.ipn.mx/OfertaEducativa/Paginas/Licenciatura.aspx",
    link3: "https://www.admision.ipn.mx/sd/convocatoria/"
  },
  opt3: {
    text: "<p>Aquí se maneja toda el área de educación abierta y a distancia de la UNAM, donde se imparten las licenciaturas en plataformas virtuales. Cuenta con más de 40 años de experiencia.</p>",
    link1: "http://suayed.unam.mx/index.php",
    link2: "http://suayed.unam.mx/oferta/index.php?frame=licenciatura.html&texto=dos",
    link3: "http://suayed.unam.mx/admision/index.php"
  },
  opt4: {
    text: "<p>Esta universidad cuenta con una de las comunidades académicas más distinguidas de México. Su propuesta virtual educativa se centra en tus necesidades para que completes tu carrera de forma satisfactoria.</p>",
    link1: "http://www.udgvirtual.udg.mx/ ",
    link2: "http://www.udgvirtual.udg.mx/licenciaturas ",
    link3: "http://www.udgvirtual.udg.mx/pasos/paso_inicio.html"
  },
  opt5: {
    text: "<p>Fue creada por el Gobierno Estatal de Guanajuato. Su modelo educativo promueve que la comunidad estudiantil identifique su mejor forma de aprendizaje para lograr construir su propio conocimiento.</p>",
    link1: "http://www.uveg.edu.mx/",
    link2: "http://www.uveg.edu.mx/index.php/estudia-en-la-uveg/carreras-profesionales",
    link3: "http://uveg.edu.mx/index.php/noticias/?id=168"
  }
}
$(document).ready(function() {
  listeners();
  nivelSuperior();
});
function nivelSuperior () {
  $("#sep").on('click', function  () {
    //$("#selectors div").removeClass('red-box').children().first().removeClass('red-dark');
    $("#selectors .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont").html(info.opt1.text);
    $("#im-one").attr("href", info.opt1.link1);
    $("#im-two").attr("href", info.opt1.link2);
    $("#im-three").attr("href", info.opt1.link3);
  });
  $("#ipn").on('click', function  () {
    $("#selectors .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont").html(info.opt2.text);
    $("#im-one").attr("href", info.opt2.link1);
    $("#im-two").attr("href", info.opt2.link2);
    $("#im-three").attr("href", info.opt2.link3);
  });
  $("#unam").on('click', function  () {
    $("#selectors .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont").html(info.opt3.text);
    $("#im-one").attr("href", info.opt3.link1);
    $("#im-two").attr("href", info.opt3.link2);
    $("#im-three").attr("href", info.opt3.link3);
  });
  $("#udg").on('click', function  () {
    $("#selectors .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont").html(info.opt2.text);
    $("#im-one").attr("href", info.opt4.link1);
    $("#im-two").attr("href", info.opt4.link2);
    $("#im-three").attr("href", info.opt4.link3);
  });
  $("#uveg").on('click', function  () {
    $("#selectors .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont").html(info.opt5.text);
    $("#im-one").attr("href", info.opt5.link1);
    $("#im-two").attr("href", info.opt5.link2);
    $("#im-three").attr("href", info.opt5.link3);
  });

}
function listeners () {
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
}
