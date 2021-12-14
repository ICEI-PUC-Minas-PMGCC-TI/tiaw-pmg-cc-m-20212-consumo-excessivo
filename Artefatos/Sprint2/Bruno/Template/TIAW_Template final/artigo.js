//show or hide da pagina artigo

var btn = document.querySelector('#show-or-hide-artigo');
var togleartigo = document.querySelector('.togleartigo');

btn.addEventListener('click', function () {
    if (togleartigo.style.display === 'block') {
        togleartigo.style.display = 'none';
        togleartigo.style.display = 'none';
    } else {
        togleartigo.style.display = 'block';
    }

});

//show or hide 2 da pagina artigo

var btn = document.querySelector('#show-or-hide-artigo2');
var togleartigo2 = document.querySelector('.togleartigo2');

btn.addEventListener('click', function () {
    if (togleartigo2.style.display === 'block') {
        togleartigo2.style.display = 'none';
    } else {
        togleartigo2.style.display = 'block';
    }

});






$(document).ready(function() {
    $('a[href="#navbar-more-show"], .navbar-more-overlay').on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('navbar-more-show');
		if ($('body').hasClass('navbar-more-show'))	{
			$('a[href="#navbar-more-show"]').closest('li').addClass('active');
		}else{
			$('a[href="#navbar-more-show"]').closest('li').removeClass('active');
		}
		return false;
	});
});