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
var infoDos = {
  opt1: {
    text: "Es un proyecto público, flexible y completamente gratuito que se imparte en todo México. Puedes acceder a su plataforma de estudio las 24 horas del día, lo cual te permite elegir el horario más adecuado para ti.",
    link1: "http://www.prepaenlinea.sep.gob.mx/",
   
    link3: "http://www.prepaenlinea.sep.gob.mx/registro-aspirantes"
  },
  opt2: {
    text: "<p>Además de recibir tu certificado de bachillerato, en el BTBD puedes obtener un título técnico en alguna de las especialidades que se ofrecen. Sus programas son de la misma calidad y reconocimiento que los presenciales.</p>",
    link1: "http://www.polivirtual.ipn.mx/Paginas/inicio.aspx",
   
    link3: "https://www.admision.ipn.mx/sd/convocatoria/"
  },
  opt3: {
    text: "<p>Si vives fuera de México, esta plataforma es ideal para ti. Con ella puedes cursar y terminar tus estudios con un programa completo y actualizado, aprovechando al máximo la modalidad en línea.</p>",
    link1: "http://www.bunam.unam.mx/extranjero/",  
    link3: "#"
  },
  opt4: {
    text: "<p>Este modelo abarca distintas especializaciones y cuenta con un enfoque formativo basado en competencias, enriquecido por las tecnologías de la información y la comunicación. Además, te permite gestionar el reconocimiento de certificados en Estados Unidos.</p>",
    link1: "http://www.udgvirtual.udg.mx/ ",
    link3: "http://www.udgvirtual.udg.mx/pasos/paso_inicio.html"
  },
  opt5: {
    text: "<p>Este bachillerato te ofrece un modelo educativo flexible y en línea a bajo costo. Cuenta con una preparación científico-humanista que brinda capacidades para seguir aprendiendo y mejorar tus condiciones de trabajo.</p>",
    link1: "http://www.uveg.edu.mx/index.php/estudia-en-la-uveg/bachinicio",
    link3: "http://www.uveg.edu.mx/index.php/como-bach/registro-bach"
  }
}


$(document).ready(function() {
  listeners();
  nivelSuperior();
  nivelBachi();
});
function nivelBachi () {
  $("#sep2").on('click', function  () {
    //$("#selectors div").removeClass('red-box').children().first().removeClass('red-dark');
    $("#selectors2 .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont2").html(infoDos.opt1.text);
    $("#im-three").removeAttr("data-toggle", "modal");
    $("#im-three").removeAttr("data-target", "#myModal");
    $("#im-one").attr("href", infoDos.opt1.link1);
    $("#im-three").attr("href", infoDos.opt1.link3);
  });

   $("#ipn2").on('click', function  () {
    //$("#selectors div").removeClass('red-box').children().first().removeClass('red-dark');
    $("#selectors2 .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont2").html(infoDos.opt2.text);
    $("#im-three").removeAttr("data-toggle", "modal");
    $("#im-three").removeAttr("data-target", "#myModal");
    $("#im-one").attr("href", infoDos.opt1.link1);
    $("#im-three").attr("href", infoDos.opt1.link3);
  });

   $("#unam2").on('click', function  () {
    //$("#selectors div").removeClass('red-box').children().first().removeClass('red-dark');
    $("#selectors2 .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont2").html(infoDos.opt3.text);
    $("#im-one").attr("href", infoDos.opt3.link1);
    $("#im-three").attr("data-toggle", "modal");
    $("#im-three").attr("data-target", "#myModal");
  });


   $("#udg2").on('click', function  () {
    //$("#selectors div").removeClass('red-box').children().first().removeClass('red-dark');
    $("#selectors2 .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont2").html(infoDos.opt4.text);
    $("#im-three").removeAttr("data-toggle", "modal");
    $("#im-three").removeAttr("data-target", "#myModal");
    $("#im-one").attr("href", infoDos.opt4.link1);
    $("#im-three").attr("href", infoDos.opt4.link3);
  });

  $("#uveg2").on('click', function  () {
    //$("#selectors div").removeClass('red-box').children().first().removeClass('red-dark');
    $("#selectors2 .red-box").removeClass('red-box').addClass('blue-box').children().first().removeClass('red-dark').addClass('blue-dark');
    $(this).removeClass('blue-box').addClass('red-box').children().first().removeClass("blue-dark").addClass("red-dark");
    $("#info-cont2").html(infoDos.opt5.text);
    $("#im-three").removeAttr("data-toggle", "modal");
    $("#im-three").removeAttr("data-target", "#myModal");
    $("#im-one").attr("href", infoDos.opt5.link1);
    $("#im-three").attr("href", infoDos.opt5.link3);
  });

}

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
  $('.stuff_menu').tooltip({ container: 'body' }) 

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
    $("#little_one").click(function() {
    $('html,body').animate({scrollTop: $("#fondo").offset().top-90}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $("#little_two").click(function() {
    $('html,body').animate({scrollTop: $("#estudiarLinea").offset().top-90}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $("#little_th").click(function() {
    $('html,body').animate({scrollTop: $("#bachillerato").offset().top-90}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  $("#uno").click(function() {
    $('html,body').animate({scrollTop: $("#fondo").offset().top-150}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $("#dos").click(function() {
    $('html,body').animate({scrollTop: $("#estudiarLinea").offset().top-150}, 1000);
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $("#tres").click(function() {
    $('html,body').animate({scrollTop: $("#bachillerato").offset().top-150}, 1000);
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
