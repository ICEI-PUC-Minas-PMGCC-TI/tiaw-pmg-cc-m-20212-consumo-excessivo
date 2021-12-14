/*show or hide da pagina principal(index)*/
var btn = document.querySelector('#show-or-hide-index');
var togleindex = document.querySelector('.togleindex');

btn.addEventListener('click', function () {
    if (togleindex.style.display === 'block') {
        togleindex.style.display = 'none';
    } else {
        togleindex.style.display = 'block';
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