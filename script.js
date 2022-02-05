let wrapper = document.querySelector('.wrapper');

const pageSlider = new Swiper('.page', {
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",
	direction: 'vertical',

	slidesPerView: 'auto',

	parallax: true,

	initialSlide: 0,


	// чувствительность свайпа
	touchRatio: 3,
	// включение/отключение
	// перетаскивание на пк
	simulateTouch: false,

	// управление клавиатурой
	keyboard: {
		// включить/выключить
		enabled: true,
		// включить/выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// включить/выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true
	},

	// управление колесом мыши
	mousewheel: {
		// чувствительность колеса мыши
		sensitivity: 3,
		// класс объекта на котором
		// будет срабатывать прокрутка мышью
		eventsTarget: ".wrapper"
	},

	// отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// скорость
	speed: 1000,

	// обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// обновить свайпер
	// при изменении родительских элементов 
	observeParents: true,

	// обновить свайпер
	// при изменении дочерних элементов 
	observeSlideChildren: true,
});
$('.link__header').click(function () {
	pageSlider.slideTo(0, 1000, true);
	$('.menu__btn').removeClass('menu__btn-active')
	$('.menu__nav').removeClass('menu__nav-active')
	return false;
})
$('.link__about').click(function () {
	pageSlider.slideTo(1, 1000, true);
	$('.menu__btn').removeClass('menu__btn-active')
	$('.menu__nav').removeClass('menu__nav-active')
	return false;
})
$('.header__btn').click(function () {
	pageSlider.slideTo(1, 1000, true);
	$('.menu__btn').removeClass('menu__btn-active')
	$('.menu__nav').removeClass('menu__nav-active')
	return false;
})
$('.link__services').click(function () {
	pageSlider.slideTo(2, 1000, true);
	$('.menu__btn').removeClass('menu__btn-active')
	$('.menu__nav').removeClass('menu__nav-active')
	return false;
})
$('.link__portfolio').click(function () {
	pageSlider.slideTo(3, 1000, true);
	$('.menu__btn').removeClass('menu__btn-active')
	$('.menu__nav').removeClass('menu__nav-active')
	return false;
})
$('.link__blog').click(function () {
	pageSlider.slideTo(4, 1000, true);
	$('.menu__btn').removeClass('menu__btn-active')
	$('.menu__nav').removeClass('menu__nav-active')
	return false;
})
$('.link__contact').click(function () {
	pageSlider.slideTo(5, 1000, true);
	$('.menu__btn').removeClass('menu__btn-active')
	$('.menu__nav').removeClass('menu__nav-active')
	return false;
})
$('.arrow__down').click(function () {
	pageSlider.slideTo(6, 1000, true);
	return false;
})




$('.menu__block').on('click', function (e) {
	e.preventDefault;
	$('.menu__btn').toggleClass('menu__btn-active')
	$('.menu__nav').toggleClass('menu__nav-active')
});

$('body').on('click', function (e) {
	e.preventDefault;
	$('.menu__btn').removeClass('menu__btn-active')
	$('.menu__nav').removeClass('menu__nav-active')
});

var triggerJs = document.querySelector('.menu');
triggerJs.addEventListener('click', function (e) {
	e.stopPropagation();
});


// if (document.documentElement.clientWidth < 1400) {
// 	const anchors = document.querySelectorAll('a[href*="#"]')

// 	for (let anchor of anchors) {
// 		anchor.addEventListener("click", function (event) {
// 			event.preventDefault();
// 			const blockID = anchor.getAttribute('href')
// 			document.querySelector('' + blockID).scrollIntoView({
// 				behavior: "smooth",
// 				block: "start"
// 			})
// 		})
// 	}
// }

let tab = function () {
	let tabNav = document.querySelectorAll('.services__tab__nav');
	let tabContent = document.querySelectorAll('.services__tab');
	let tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	})
	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('is-active')
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}

	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
		})
	}
};

tab();

const portfolioSlider = new Swiper('.portfolio__slider', {
	wrapperClass: "slider__wrapper",
	slideClass: "slide",

	slidesPerView: 1,

	// включение/отключение
	// перетаскивание на пк
	simulateTouch: false,

	// отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// скорость
	speed: 800,

	// отступ между слайдами
	spaceBetween: 50,

	// обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// обновить свайпер
	// при изменении родительских элементов 
	observeParents: true,

	// обновить свайпер
	// при изменении дочерних элементов 
	observeSlideChildren: true,

	// If we need pagination
	pagination: {
		el: '.slider__pagination',
		type: 'bullets',
		clickable: false,
		// dynamicBullets: true,
		bulletClass: "slider__pagination__bullet",
		bulletActiveClass: "slider__pagination__bullet__active"
	},

	//отключаем автоинициализацию
	init: false,

	//события
	on: {
		// события инициализации
		init: function () {
			menuSlider();
		},
		// событие смены слайда
		slidechange: function () {
			menuSliderRemove();
			sliderLinks[portfolioSlider.realIndex].classList.add('_active');
		},
	},


});

let sliderLinks = document.querySelectorAll('.slider__nav__item');

function menuSlider() {
	if (sliderLinks.length > 0) {
		sliderLinks[portfolioSlider.realIndex].classList.add('_active')
		for (let index = 0; index < sliderLinks.length; index++) {
			const sliderLink = sliderLinks[index];
			sliderLink.addEventListener("click", function (e) {
				menuSliderRemove()
				portfolioSlider.slideTo(index, 800);
				sliderLink.classList.add('_active')
				e.preventDefault();
			});
		}
	}
}

function menuSliderRemove() {
	let sliderLinkActive = document.querySelector('.slider__nav__item._active');
	if (sliderLinkActive) {
		sliderLinkActive.classList.remove('_active');
	}
}

portfolioSlider.init();

"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);


	}

	function formValidate(form) {
		let error = 0
		let formReq = document.querySelectorAll('._req')

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form-down');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);


	}

	function formValidate(form) {
		let error = 0
		let formReq = document.querySelectorAll('._req')

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});