//CARROSSEL USANDO SLICK.JS RESPONSIVE

$('.regular').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/*
AO CLICAR EM UM DOS 3 BOTOES ESCONDE AS DIVS QUE NAO RELACIONEI COM OS OUTROS DOIS BOTOES E MOSTRA A
QUE POSSUI RELAÇAO
*/

$(document).ready(function(){
    
  $('#nova').hide();
  $('#oslo').hide();
  $("#escolha-nova").click(function(){
      $("#oslo").hide();
      $('#recife').hide();
      $('#nova').show();
  });
  $("#escolha-recife").click(function(){
      $("#recife").show();
      $('#nova').hide();
      $('#oslo').hide();
  });
  $("#escolha-oslo").click(function(){
      $("#recife").hide();
      $('#oslo').show();
      $('#nova').hide();
  });

  /*
MUDANDO AS CLASSES DOS BOTÕES CONSTANTEMENTE AO CLICAR EM QUALQUER UM DELES
  */

  $("#escolha-nova").click(function(){
    $("#escolha-nova").removeClass("btn-equipe")
    $("#escolha-nova").addClass("ativo");
    $("#escolha-recife").removeClass("ativo");
    $("#escolha-oslo").removeClass("ativo");
    $("#escolha-recife").addClass("btn-equipe");
    $("#escolha-oslo").addClass("btn-equipe");

  });
  
  $("#escolha-oslo").click(function(){
    $("#escolha-oslo").removeClass("btn-equipe")
    $("#escolha-oslo").addClass("ativo");
    $("#escolha-nova").removeClass("ativo");
    $("#escolha-recife").removeClass("ativo");
    $("#escolha-recife").addClass("btn-equipe");
    $("#escolha-nova").addClass("btn-equipe");

  })
  ;$("#escolha-recife").click(function(){
    $("#escolha-recife").removeClass("btn-equipe")
    $("#escolha-recife").addClass("ativo");
    $("#escolha-oslo").removeClass("ativo");
    $("#escolha-nova").removeClass("ativo");
    $("#escolha-nova").addClass("btn-equipe");
    $("#escolha-oslo").addClass("btn-equipe");

  });
});
