//show or hide da pagina artigo

var btn = document.querySelector('#show-or-hide-artigo');
var togleartigo = document.querySelector('.togleartigo');

changeArticleSetting.addEventListener('click', function () {
    if (document.getElementById("articleTitle").innerHTML == "Artigos Recomendados")
        document.getElementById("articleTitle").innerHTML = "Artigos";
    else
        document.getElementById("articleTitle").innerHTML = "Artigos Recomendados";
});

//show or hide 2 da pagina artigo

changeArticleSetting.addEventListener('click', function () {
    if (togleartigo.style.display === 'block') {
        togleartigo.style.display = 'none';
        togleartigo.style.display = 'none';
    } else {
        togleartigo.style.display = 'block';
    }

});

//show or hide 2 da pagina artigo







$(document).ready(function () {
    $('a[href="#navbar-more-show"], .navbar-more-overlay').on('click', function (event) {
        event.preventDefault();
        $('body').toggleClass('navbar-more-show');
        if ($('body').hasClass('navbar-more-show')) {
            $('a[href="#navbar-more-show"]').closest('li').addClass('active');
        } else {
            $('a[href="#navbar-more-show"]').closest('li').removeClass('active');
        }
        return false;
    });
});

$(document).ready(function () {
    $(".product a").mouseover(function () {
        $(".product a img").css("display", "none"); // hide all product images
        $(this).find("img").css("display", "inline-block"); // show current hover image
    })
    $(".product a").mouseout(function () {
        $(".product a img").css("display", "none"); // hide all product images
    })
});