/* Bloquear envio de formulario se algum campo está em branco */

//password
function login() {
	if (document.getElementById('join').value.length == 0 || document.getElementById('psw').value.length == 0) {
	  alert('Preencha todos os campos do formulario para efetuar o Login');
	  window.close();
	}
	else if (document.getElementById('psw').value != 'SENHA') {
	  alert('Aceso negado, para entrar digite "SENHA"');
	  window.close();
	}
	else {
	  document.getElementById('user').style.visibility = "visible";
	  alert('Aceso garantido! Click em "Entrar nas opções de usuario", para continuar');
	}
  }
  
  
  /*header*/
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