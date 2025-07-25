// === Мультиязычность ===
document.addEventListener('DOMContentLoaded', function () {

	// Элементы
	const langDropdown = document.querySelector('.custom-language-dropdown');
	const selectedLang = document.getElementById('selected-lang');
	const langList = document.getElementById('lang-list');
	if (!langDropdown || !selectedLang || !langList) return;


	// Показать/скрыть список языков
	selectedLang.onclick = () => {
		langList.classList.toggle('show');
	};

	// Скрыть при клике вне
	document.addEventListener('click', (e) => {
		if (!langDropdown.contains(e.target)) {
			langList.classList.remove('show');
		}
	});

// конец DOMContentLoaded

// === Глобальная функция мультиязычности ===
window.applyLang = function(lang) {
	if (!lang) lang = localStorage.getItem('nadis_lang') || 'ru';
	console.log('[nadis] applyLang called, lang =', lang);
	if (window.__nadis_last_lang === lang) return;
	window.__nadis_last_lang = lang;
	const selectedLang = document.getElementById('selected-lang');
	const t = translations[lang] || translations['ru'];
	if (selectedLang) selectedLang.textContent = lang.toUpperCase();


  // Универсальный перевод .header_span по ключам header_span, header_span_2, ...
  // Универсальный перевод .number_text по ключам number_text, number_text_2, ... или из массива translations.number_text
  if (translations.number_text && translations.number_text[lang]) {
	document.querySelectorAll('.number_text').forEach((el, i) => {
	  if (translations.number_text[lang][i]) {
		el.textContent = translations.number_text[lang][i];
	  }
	});
  }
	   document.querySelectorAll('.header_span').forEach((el, i) => {
			   let key = 'header_span';
			   if (i > 0) key = 'header_span_' + (i + 1);
			   if (t[key]) {
					   el.innerHTML = t[key];
			   }
	   });

	   // Универсальный перевод .body_span по ключам body_span, body_span_2, ...
	   document.querySelectorAll('.body_span').forEach((el, i) => {
			   let key = 'body_span';
			   if (i > 0) key = 'body_span_' + (i + 1);
			   if (t[key]) {
					   el.innerHTML = t[key];
			   }
	   });

	   // Универсальный перевод .number_text по ключам number_text, number_text_2, ...
	   document.querySelectorAll('.number_text').forEach((el, i) => {
			   let key = 'number_text';
			   if (i > 0) key = 'number_text_' + (i + 1);
			   if (t[key]) {
					   el.innerHTML = t[key];
			   }
	   });


	// Универсальный data-translate для кастомных заголовков (например, association, association_nadis, association_goals)
	document.querySelectorAll('[data-translate]').forEach(function(el) {
		const key = el.getAttribute('data-translate');
		if (key && t[key]) {
			el.textContent = t[key];
		}
	});

	// Перевод всех .text_body по ключам text_body, text_body_2, text_body_3 и т.д. (если есть в translations)
	document.querySelectorAll('.text_body').forEach(function(el, idx) {
		let key = 'text_body';
		if (idx > 0) key += '_' + (idx + 1);
		if (t[key]) {
			el.innerHTML = t[key];
		}
	});

	// Меню (валидная структура: <ul><li><a>...</a></li></ul>)
	// Универсальный поиск первого ul внутри .nav
	const nav = document.querySelector('.nav');
	const navUl = nav ? nav.querySelector('ul') : null;
	if (navUl && translations[lang] && translations[lang].nav && Array.isArray(translations[lang].nav)) {
		navUl.innerHTML = '';
		translations[lang].nav.forEach(item => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = item.href;
			a.className = 'hover_title';
			a.textContent = item.text;
			// Highlight nav item if current page matches
			if (window.location.pathname.indexOf(item.href) !== -1) {
				a.classList.add('nav-active-yellow');
			}
			li.appendChild(a);
			navUl.appendChild(li);
			console.log('[nadis] menu item:', item.text, '->', item.href);
		});
	} else {
		console.warn('[nadis] Не найден navUl для меню или нет translations[lang].nav');
		if (nav) {
			console.error('[nadis] .nav структура:', nav.innerHTML);
		}
	}
	// Кнопка скачать (верхняя) внутри .nav (десктоп)
	const navDownloadBtn = document.querySelector('.nav .header-actions .btn-type2');
	if (navDownloadBtn) {
		navDownloadBtn.textContent =
			(translations.downloadAppBtn && translations.downloadAppBtn[lang]) ? translations.downloadAppBtn[lang]
			: (t.download ? t.download
			: (t.mainDownload ? t.mainDownload : 'Скачать приложение'));
	}
	// Мобильное меню (правый блок, валидная структура: <ul><li><a>...</a></li></ul>)
	const mobileNavUl = document.querySelector('.nav .mobile_main ul');
	if (mobileNavUl && t.nav && Array.isArray(t.nav)) {
		mobileNavUl.innerHTML = '';
		t.nav.forEach(item => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = item.href;
			a.textContent = item.text;
			li.appendChild(a);
			mobileNavUl.appendChild(li);
			console.log('[nadis] mobile menu item:', item.text, '->', item.href);
		});
	}
	// Кнопка скачать (мобильная версия, если есть)
	const mobileDownloadBtn = document.querySelector('.nav .mobile_main .btn-type2');
	if (mobileDownloadBtn) {
		mobileDownloadBtn.textContent =
			(translations.downloadAppBtn && translations.downloadAppBtn[lang]) ? translations.downloadAppBtn[lang]
			: (t.download ? t.download
			: (t.mainDownload ? t.mainDownload : 'Скачать приложение'));
	}
	// Кнопка скачать (верхняя вне nav, fallback)
	const btn = document.querySelector('.btn-type2');
	if (btn && (!btn.closest('.nav') || btn.closest('.nav .header-actions') === null)) {
		btn.textContent =
			(translations.downloadAppBtn && translations.downloadAppBtn[lang]) ? translations.downloadAppBtn[lang]
			: (t.download ? t.download
			: (t.mainDownload ? t.mainDownload : 'Скачать приложение'));
	}
	// Почему Nadis
	const why = document.querySelector('.whyNadis_wrapper h2');
	if (why) why.textContent = t.why;
	const whyDesc = document.querySelector('.why_description');
	if (whyDesc) whyDesc.textContent = t.whyDesc;
	// Для каждого
	const forEach = document.querySelector('.foreach_wrapper h2');
	if (forEach) forEach.textContent = t.forEach;
	const forEachDesc = document.querySelector('.foreach_description');
	if (forEachDesc) forEachDesc.textContent = t.forEachDesc;
	// FAQ
	const faq = document.querySelector('.faq .title');
	if (faq) faq.textContent = t.faq;
	// FAQ вопросы и ответы
	if (t.faqList) {
		document.querySelectorAll('.faq .informAccordion').forEach((acc, i) => {
			const q = acc.querySelector('.informName');
			const a = acc.querySelector('.disclosure span');
			if (q && t.faqList[i]) q.textContent = t.faqList[i].q;
			if (a && t.faqList[i]) a.textContent = t.faqList[i].a;
		});
	}
	// Главный экран
	const mainTitle = document.querySelector('.subtitle');
	if (mainTitle) mainTitle.textContent = t.mainTitle;
	const mainDesc = document.querySelector('.description');
	if (mainDesc) mainDesc.textContent = t.mainDesc;
	const mainDownload = document.querySelector('.download_btn');
	if (mainDownload) mainDownload.textContent = t.mainDownload;
	// Блок about
	const aboutTitle = document.querySelector('.about_wrapper h2');
	if (aboutTitle) aboutTitle.innerHTML = t.aboutTitle.replace(/\n/g, '<br>');
	const aboutDesc = document.querySelector('.about_description');
	if (aboutDesc) aboutDesc.textContent = t.aboutDesc;
	const aboutBtn = document.querySelector('.about_wrapper .btn-type2');
	if (aboutBtn) aboutBtn.textContent = t.aboutBtn;
	// Карточки преимуществ
	document.querySelectorAll('.card_title').forEach((el, i) => {
		if (t.cardTitles && t.cardTitles[i]) el.textContent = t.cardTitles[i];
	});
	document.querySelectorAll('.card_description').forEach((el, i) => {
		if (t.cardDescs && t.cardDescs[i]) el.textContent = t.cardDescs[i];
	});
	// Универсальный перевод .text_header по ключам text_header, text_header_2, text_header_3 и т.д.
	document.querySelectorAll('.text_header').forEach((el, i) => {
		let key = 'text_header';
		if (i > 0) key = 'text_header_' + (i + 1);
		if (t[key]) {
			el.textContent = t[key];
		} else if (t.forHeaders && t.forHeaders[i]) {
			el.textContent = t.forHeaders[i]; // fallback для старых блоков
		}
	});

	// Универсальный перевод .trg_card по ключам trg_card, trg_card_2, trg_card_3 и т.д.
	document.querySelectorAll('.trg_card').forEach((el, i) => {
		let key = 'trg_card';
		if (i > 0) key = 'trg_card_' + (i + 1);
		if (t[key]) {
			el.innerHTML = t[key];
		}
	});

	// Универсальный перевод .text_body по ключам text_body, text_body_2, text_body_3 и т.д.
	document.querySelectorAll('.text_body').forEach((el, i) => {
		let key = 'text_body';
		if (i > 0) key = 'text_body_' + (i + 1);
		if (t[key]) {
			el.innerHTML = t[key];
		} else if (t.forBodies && t.forBodies[i]) {
			el.innerHTML = t.forBodies[i]; // fallback для старых блоков
		}
	});
	// Кнопки "Подробнее"
	document.querySelectorAll('.fors .btn-type2').forEach(el => {
		el.textContent = t.more;
	});
	// Отзывы (если есть)
	const reviewTexts = document.querySelectorAll('.swiper_text');
	const reviewAuthors = document.querySelectorAll('.quote_autor');
	if (t.reviews && reviewTexts.length && reviewAuthors.length) {
		t.reviews.forEach((r, i) => {
			if (reviewTexts[i]) reviewTexts[i].textContent = r.text;
			if (reviewAuthors[i]) reviewAuthors[i].textContent = r.author;
		});
	}
	// Footer
	if (t.footer) {
		const ages = document.querySelectorAll('.footer .age');
		if (ages[0]) ages[0].textContent = t.footer.age;
		if (ages[1]) ages[1].textContent = t.footer.rights;
		const politic = document.querySelector('.footer .politic');
		if (politic) politic.textContent = t.footer.privacy;
		const del = document.querySelector('.footer .delete_acc');
		if (del) del.textContent = t.footer.delete;
		const footerLinks = document.querySelectorAll('.footer .center_block li');
		const footerMenuKeys = [
			t.footer.company,
			t.footer.users,
			t.footer.partners,
			t.footer.association
		];
		footerLinks.forEach((li, idx) => {
			if (li.childNodes.length === 1 && li.childNodes[0].nodeType === 3) {
				if (footerMenuKeys[idx]) li.textContent = footerMenuKeys[idx];
			} else {
				li.childNodes.forEach(node => {
					if (node.nodeType === 3 && footerMenuKeys[idx]) node.textContent = footerMenuKeys[idx];
				});
			}
		});
		const fDownload = document.querySelector('.footer .right_block');
		if (fDownload && fDownload.childNodes.length) {
			fDownload.childNodes.forEach(node => {
				if (node.nodeType === 3 && node.textContent.trim().length > 0) {
					node.textContent = t.footer.download;
				}
			});
		}
		const footer = document.querySelector('.footer');
		if (footer) {
			const textNodesWalker = document.createTreeWalker(footer, NodeFilter.SHOW_TEXT, null, false);
			let node;
			while ((node = textNodesWalker.nextNode())) {
				const parent = node.parentElement;
				if (!parent) continue;
				if (
					parent.classList.contains('age') ||
					parent.classList.contains('politic') ||
					parent.classList.contains('delete_acc') ||
					parent.closest('.center_block') ||
					parent.closest('.right_block')
				) {
					continue;
				}
				const cleanText = node.textContent.trim();
				for (const key in t.footer) {
					if (
						typeof t.footer[key] === 'string' &&
						cleanText &&
						cleanText === translations['ru'].footer[key]
					) {
						node.textContent = t.footer[key];
					}
				}
			}
		}
	}
	// Важная информация
	const bonusHeader = document.querySelector('.bonus_header');
	if (bonusHeader) {
		bonusHeader.textContent = t.importantInfo || 'Важная информация';
	}
	const bonusText = document.querySelector('.bonus_text');
	if (bonusText && t.bonusText) {
		bonusText.textContent = t.bonusText;
	}
};

// Переводим только после полной загрузки всех ресурсов
window.onload = function() {
	const savedLang = localStorage.getItem('nadis_lang') || 'ru';
	window.applyLang(savedLang);
	// Дополнительный вызов через 500 мс для перебивания сторонних скриптов
	setTimeout(() => {
		window.applyLang(savedLang);
		// Если меню не найдено, логируем структуру DOM
		const navUl = document.querySelector('.nav .left_content ul');
		if (!navUl) {
			console.error('[nadis] navUl не найден! Структура .nav:', document.querySelector('.nav').innerHTML);
		}
	}, 500);
};
});
$(document).ready(function() {
	let isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

	$(document).on(isTouchDevice ? 'touchstart' : 'click', function(event) {
		let $target = $(event.target);

		// Закрываем .dropdown, если клик был вне области .active_lang и .dropdown
		if (!$target.closest('.active_lang').length && !$target.closest('.dropdown').length) {
			$('.dropdown').hide();
		}
	});

	$(document).ready(function() {
		let isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
	
		$(document).on(isTouchDevice ? 'touchstart' : 'click', function(event) {
			let $target = $(event.target);
			// Здесь можешь добавить условие для скрытия .mobile_main, если нужно
		});
	
		$(".informAccordion, .main-btn, .active_lang").on(isTouchDevice ? 'touchstart' : 'click', function(e) {
			e.stopPropagation(); // Предотвращаем дальнейшее всплытие события
	
			let $element = $(this);
	
			if ($element.hasClass("informAccordion")) {
				$element.find(".disclosure").toggle();
				// $element.find(".disclosure span").toggleClass('coloryellow');
				$element.find('svg').toggleClass('rotate'); 
				$element.find('.informName').toggleClass('coloryellow'); 
				$element.find('.informAtr svg path').toggleClass('whiteColor'); 
				$element.toggleClass('borderWhite'); 
			} else if ($element.hasClass("main-btn")) {
				let $mobileMain = $element.find('.mobile_main');
				let $openCloseBtn = $element.find('.open_close-btn');
	
				if ($openCloseBtn.is(e.target) || $openCloseBtn.find(e.target).length > 0) {
					$mobileMain.toggleClass('hide');
				}
			} else if ($element.hasClass("active_lang")) {
				$('.right_block').find(".dropdown").toggle();
			}
		});
	
		// Изменяем обработчик для ссылок внутри .mobile_main
		$('.mobile_main a').on('click', function(e) {
			let href = $(this).attr('href');
			if (href.charAt(0) === '#') {
				e.preventDefault(); // Предотвращаем дефолтное действие ссылки
				$('.mobile_main').addClass('hide');
				// Если нужно, добавьте дополнительные действия
				window.location.hash = href; // Устанавливаем якорь после скрытия .mobile_main
			}
		});
	});
});

$("body").on('click', '[href*="#"]', function(e){
	var fixed_offset = 100;
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	e.preventDefault();
  });





	var $spiro = $('.nadis_circle'),
	$body = $('body'),
	bodyHeight = $body.height();

	function getScrollTop() {
		if (typeof pageYOffset != 'undefined') {
			//most browsers except IE before #9
			return pageYOffset;
		} else {
			var B = document.body; //IE 'quirks'
			var D = document.documentElement; //IE with doctype
			D = (D.clientHeight) ? D : B;
			return D.scrollTop;
		}
	}

	// $(window).scroll(function () {
	// 	var scroll = getScrollTop();
	// 	$('.nadis_circle').css({
	// 		'transform': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)',
	// 		'-moz-transform': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)',
	// 		'-ms-transform': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)',
	// 		'-o-transform:rotate': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)'
	// 	});
	// });

const sun = document.querySelector(".nadis_circle");
if (sun) {
  window.addEventListener("scroll", () => {
	const scroll = window.scrollY;
	sun.style.transform = `rotate(${scroll / 10}deg)`;
  });
}




	

	// let viewHeight = window.innerHeight;
	// let viewWidth = window.innerWidth;

	// let textContainers = document.querySelectorAll('.text-container');

	// textContainers.forEach((element, index) => {
	// let top = element.getBoundingClientRect().top;
	// let start = 0;

	// let firstText = element.querySelector('.parallax-text:first-child');
	// let secondText = element.querySelector('.parallax-text:last-child');

	// gsap.to(firstText, {
	// 	scrollTrigger: {
	// 	trigger: element,
	// 	scrub: true,
	// 	start: start + "px bottom",
	// 	end: "bottom top"
	// 	},
	// 	x: '-20vw',
	// 	transformOrigin: "left center", 
	// 	ease: "none"
	// });
	// gsap.to(secondText, {
	// 	scrollTrigger: {
	// 	trigger: element,
	// 	scrub: true,
	// 	start: start + "px bottom",
	// 	end: "bottom top"
	// 	},
	// 	x: '40vw',
	// 	transformOrigin: "left center", 
	// 	ease: "none"
	// });
	// });

	// // for presentation
	// let tl = gsap.timeline({
	//   repeat: -1
	// });

	// tl.set({}, {}, 0.6);
	// tl.to(window, {
	//   duration: 4,
	//   scrollTo: {
	//     y:"max"
	//   },
	//   ease: Power2.easeInOut
	// });
	// tl.to(window, {
	//   delay: 0.6,
	//   duration: 4,
	//   scrollTo: 0,
	//   ease: Power2.easeInOut
	// });

	// window.onmousemove = function(e) {
	// 	w = document.documentElement.clientWidth;
	// 	h = document.documentElement.clientHeight;
	// 	let offsetX = 0.5 - e.pageX / w;
	// 	let offsetY = 0.5 - e.pageY / h;
		
	// 	let div = document.querySelectorAll("div");
	// 	console.log(div.toString());
		
	// 	for(let i = 0; i < div.length; i++) {
	// 		let data = div[i].getAttribute("data-offset");
	// 		data = parseInt(data);
	// 		let trans = "translate3d("+Math.round(offsetX*data)+"%,"+Math.round(offsetY*data)+"%, 0)";
	// 		div[i].style.transform = trans;
	// 	}
	// }



	function translateToKazakh() {
		const content = document.getElementById('content').innerText;

		// Замени 'YOUR_API_KEY' на свой API ключ Google Translate
		const apiKey = 'AIzaSyCxfhwYRn5AiRhsSXbrA8E7ROSl9dxZLEE';
		const targetLanguage = 'kk'; // Код казахского языка

		const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
		const data = {
			q: content,
			target: targetLanguage,
		};

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(response => response.json())
		.then(result => {
			const translatedText = result.data.translations[0].translatedText;
			document.getElementById('content').innerText = translatedText;
		})
		.catch(error => console.error('Ошибка:', error));
	}



	$(document).ready(function () {
		var $phone = $('#phone .phone');
		var $phoneBg = $('#phone .phone-bg');
		var $phoneWrap = $('#phone');
		var width = $phone.width();
		var height = $phone.height();
		var mouseX = 0;
		var mouseY = 0;
		var mouseLeaveDelay;

		function handleMouseMove(e) {
			var offset = $phoneWrap.offset();
			if (offset) {
				mouseX = e.pageX - offset.left - width / 2;
				mouseY = e.pageY - offset.top - height / 2;
				var mousePX = mouseX / width;
				var mousePY = mouseY / height;
				var rX = mousePX * 20;
				var rY = mousePY * -20;
				$phone.css('transform', 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)');
			}
		}

		function handleMouseEnter() {
			clearTimeout(mouseLeaveDelay);
		}

		function handleMouseLeave() {
			mouseLeaveDelay = setTimeout(function () {
				mouseX = 0;
				mouseY = 0;
				$phone.css('transform', 'rotateY(0deg) rotateX(0deg)');
			}, 2000);
		}

		// Event Listeners
		$('#phone')
			.mousemove(handleMouseMove)
			.mouseenter(handleMouseEnter)
			.mouseleave(handleMouseLeave);

		// Set initial background image
		var dataImage = 'path_to_your_image.jpg'; // replace with your image path
		$phoneBg.css('background-image', 'url(' + dataImage + ')');
	});

	document.addEventListener('DOMContentLoaded', function() {
		// Функция для удаления элемента #logo
		function removeLogo() {
			const logo = document.getElementById('logo');
			if (logo) {
				logo.parentNode.removeChild(logo);
				console.log('Логотип удален:', logo);
			} else {
				console.log('Элемент #logo не найден');
			}
		}
	
		// Наблюдатель для отслеживания изменений в DOM
		const observer = new MutationObserver((mutationsList) => {
			for (const mutation of mutationsList) {
				for (const addedNode of mutation.addedNodes) {
					if (addedNode.nodeType === Node.ELEMENT_NODE && addedNode.id === 'logo') {
						removeLogo();
					}
					if (addedNode.nodeType === Node.ELEMENT_NODE && addedNode.querySelector('#logo')) {
						removeLogo();
					}
				}
			}
		});
	
		// Начало наблюдения за документом
		observer.observe(document.body, { childList: true, subtree: true });
	
		// Попытка удаления логотипа сразу после загрузки страницы
		removeLogo();
	
		// Периодическая проверка наличия логотипа
		setInterval(removeLogo, 2000);
	});

	
	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll('.trf').forEach(function (trfBlock) {
		const arrow = trfBlock.querySelector('.trf_header');
		const tarifInfo = trfBlock.querySelector('.tarif_info');

		arrow.addEventListener('click', function () {
			tarifInfo.classList.toggle('hidden');       // скрыть/показать блок
			arrow.classList.toggle('rotated');          // повернуть стрелку
		});
		});
	});

	// === Автоматический перевод меню при изменениях .nav и при смене языка ===
(function() {
	function safeApplyLang() {
		try {
			const lang = localStorage.getItem('nadis_lang') || 'ru';
			if (typeof window.applyLang === 'function') {
				window.applyLang(lang);
				console.log('[nadis] applyLang вызван через MutationObserver или смену языка');
			}
		} catch (e) {
			console.error('[nadis] Ошибка при вызове applyLang:', e);
		}
	}
	// MutationObserver для .nav
	const nav = document.querySelector('.nav');
	if (nav) {
		let lastNavHtml = nav.innerHTML;
		const observer = new MutationObserver(() => {
			if (nav.innerHTML !== lastNavHtml) {
				lastNavHtml = nav.innerHTML;
				safeApplyLang();
			}
		});
		observer.observe(nav, { childList: true, subtree: true });
	}
	// Перехват кликов по языковому списку
	const langList = document.getElementById('lang-list');
	if (langList) {
		langList.addEventListener('click', function(e) {
			const li = e.target.closest('li[data-value]');
			if (li) {
				localStorage.setItem('nadis_lang', li.dataset.value);
				safeApplyLang();
			}
		});
	}
	// Гарантированный вызов при загрузке
	document.addEventListener('DOMContentLoaded', safeApplyLang);
	window.addEventListener('load', safeApplyLang);
	setTimeout(safeApplyLang, 500);
})();


// Скрипт для показа/скрытия market_btn при клике на .mrkt
document.addEventListener('DOMContentLoaded', function() {
	const mrktBtn = document.querySelector('.mrkt');
	const marketBtn = document.querySelector('.market_btn');
	const mrktBtnsContainer = document.querySelector('.mrkt_btns');
	if (mrktBtn && marketBtn && mrktBtnsContainer) {
		mrktBtn.addEventListener('click', function(e) {
			e.stopPropagation();
			marketBtn.style.display = (marketBtn.style.display === 'none' || marketBtn.style.display === '') ? 'flex' : 'none';
		});
		// Изначально скрываем market_btn
		marketBtn.style.display = 'none';

		// Клик вне .mrkt_btns закрывает market_btn
		document.addEventListener('click', function(e) {
			if (!mrktBtnsContainer.contains(e.target)) {
				marketBtn.style.display = 'none';
			}
		});
	}
});