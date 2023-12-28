//Animação pré-loader pro site
function loading() {
    //Adicionei um atraso de 3000 milissegundos (3 segundos) antes de enconder o loader
    setTimeout(function(){
    document.getElementsByClassName('box-load')[0].style.display="none";
    document.getElementsByClassName('conteudo')[0].style.display="block";
  
  }, 2000);
}

//animação para o formulário
  document.addEventListener('DOMContentLoaded', function () {
    var inputFields = document.querySelectorAll('input, textarea');

    inputFields.forEach(function (input) {
        var label = input.nextElementSibling;

        input.addEventListener('input', function () {
            if (input.value !== '') {
                label.style.opacity = '0';
                label.style.visibility = 'hidden';
            } else {
                label.style.opacity = '1';
                label.style.visibility = 'visible';
            }
        });

        input.addEventListener('focus', function () {
            label.style.opacity = '0';
            label.style.visibility = 'hidden';
        });

        input.addEventListener('blur', function () {
            if (input.value === '') {
                label.style.opacity = '1';
                label.style.visibility = 'visible';
            }
        });
    });
});



//Botão de rolagem ao topo usando Jquery

$(document).ready(function() {
    //Adiciona um evento de clique ao botão
    $("#myBtn").on("click", function() {
        //Anima a rolagem para o topo da página
        $("html, body").animate({scrollTop: 0}, "slow");
    });
});

//Adiciona um evento de rolagem para mostrar ou ocultar o botão
$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
       $("#myBtn").fadeIn();
    } else {
        $("#myBtn").fadeOut();
    } 	

});


//animação menu quando rola a página em Jquery

$(document).ready(function() {
    var container = $(".container");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { //Aqui é só ajustar o valor conforme a necessidade
            container.addClass("fixed");
        } else {
            container.removeClass("fixed");
        }
    });
});
