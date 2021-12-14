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


let mensagem = document.querySelector(".mensagem");

// mostra a mensagem
function showMessage() {
	mensagem.style.display = "block";
}
// esconde a mensagem
function hideMessage() {
	mensagem.style.display = "none";
}


let m1 = document.querySelector(".m1");

// mostra a mensagem
function showMessage1() {
	m1.style.display = "block";
}
// esconde a mensagem
function hideMessage1() {
	m1.style.display = "none";
}

let m2 = document.querySelector(".m2");

// mostra a mensagem
function showMessage2() {
	m2.style.display = "block";
}
// esconde a mensagem
function hideMessage2() {
	m2.style.display = "none";
}


let m3 = document.querySelector(".m3");

// mostra a mensagem
function showMessage3() {
	m3.style.display = "block";
}
// esconde a mensagem
function hideMessage3() {
	m3.style.display = "none";
}

let m4 = document.querySelector(".m4");

// mostra a mensagem
function showMessage4() {
	m4.style.display = "block";
}
// esconde a mensagem
function hideMessage4() {
	m4.style.display = "none";
}

let m5 = document.querySelector(".m5");

// mostra a mensagem
function showMessage5() {
	m5.style.display = "block";
}
// esconde a mensagem
function hideMessage5() {
	m5.style.display = "none";
}