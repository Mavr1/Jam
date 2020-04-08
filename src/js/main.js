(function () {
// код функции 
// Модальное окно консалтинга

// открыть по кнопке
$('.js-consulting-button').click(function() { 
	$('.js-popup-overlay').fadeIn();
	$('js-popup-overlay').addClass('disabled');
});

// закрыть на крестик
$('.js-popup-close').click(function() { 
	$('.js-popup-overlay').fadeOut();
	});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var modal = $('.js-popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-popup-overlay').fadeOut();
	}
});

// Модальное окно футера

// открыть по кнопке
$('.js-footer-button').click(function() { 
	$('.js-popup-overlay').fadeIn();
	$('js-popup-overlay').addClass('disabled');
});

// закрыть на крестик
$('.js-popup-close').click(function() { 
	$('.js-popup-overlay').fadeOut();
	});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var modal = $('.js-popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-popup-overlay').fadeOut();
	}
});
 }());