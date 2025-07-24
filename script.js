// === Мультиязычность ===
document.addEventListener('DOMContentLoaded', function () {
	// Языковые словари
const translations = {
  // Переводы для блока header_card
  headerCard: {
	ru: {
	  title: 'Добро пожаловать в Nadis!',
	  subtitle: 'Экономьте на покупках и получайте кэшбэк с каждой рекомендации.',
	  button: 'Начать экономить'
	},
	en: {
	  title: 'Welcome to Nadis!',
	  subtitle: 'Save on purchases and get cashback with every recommendation.',
	  button: 'Start saving'
	},
	kz: {
	  title: 'Nadis-ке қош келдіңіз!',
	  subtitle: 'Сатып алуда үнемдеңіз және әр ұсыныстан кэшбэк алыңыз.',
	  button: 'Үнемдеуді бастау'
	}
  },
  // Все предложения для мультиязычности (пример, добавьте остальные по аналогии)
  // Переводы для number_text (универсальные подписи с числами)
  number_text: {
	ru: [
	  '1. Экономьте с Nadis',
	  '2. Получайте кэшбэк',
	  '3. Рекомендуйте друзьям',
	  '4. Развивайте бизнес с нами'
	],
	en: [
	  '1. Save with Nadis',
	  '2. Get cashback',
	  '3. Recommend to friends',
	  '4. Grow your business with us'
	],
	kz: [
	  '1. Nadis-пен үнемдеңіз',
	  '2. Кэшбэк алыңыз',
	  '3. Достарыңызға ұсыныңыз',
	  '4. Бизнесті бізбен бірге дамытыңыз'
	]
  },
  allSentences: {
	ru: [
	  'Выгоднее, чем когда-либо!',
	  'Маркетплейс и скидочный сервис объединяющий сотни организаций по всему Казахстану, позволяющий экономить на привычных покупках.',
	  'Почему NADIS?',
	  '«Nadis» предоставляет исключительно казахстанским компаниям инструменты для продаж, давая альтернативу вместо иностранных маркетплейсов, чья деятельность приводит к оттоку капитала из Казахстана. Мы проанализировали рынок и потребности клиентов, учли все ошибки и недочеты конкурентов и создали собственный продукт, который мы уверены завоюет популярность среди бизнеса и потребителей!',
	  'ВЫГОДНОЕ РЕШЕНИЕ ДЛЯ Каждого',
	  'Покупатели получают доступ к широкому ассортименту товаров и услуг с возможностью возврата части средств через кэшбек-программы и скидки, а продавцы - эффективные инструменты продвижения, гарантированную работу с реальной аудиторией и детализированной аналитикой. Платформа обеспечивает прозрачную и эффективную бизнес-среду для всех!',
	  'Часто задаваемые вопросы',
	  'О компании',
	  'Пользователям',
	  'Партнерам',
	  'Ассоциация предпринимателей',
	  'Контакты',
	  'Скачать приложение',
	  'Подробнее',
	  'Ваш идеальный\nмаркетплейс и\nскидочный сервис!',
	  'Nadis — это современный подход к покупкам, платформа, объединяющая удобство онлайн-шопинга и социальных сетей с широким ассортиментом товаров, услуг и, конечно же, скидок!',
	  'Подробнее о нас',
	  // ...добавьте остальные предложения по аналогии...
	],
	en: [
	  'More profitable than ever!',
	  'A marketplace and discount service uniting hundreds of organizations across Kazakhstan, helping you save on everyday purchases.',
	  'Why NADIS?',
	  'Nadis provides exclusively Kazakhstani companies with sales tools, offering an alternative to foreign marketplaces whose activities lead to capital outflow from Kazakhstan. We analyzed the market and customer needs, took into account all the mistakes and shortcomings of competitors, and created our own product, which we are sure will gain popularity among businesses and consumers!',
	  'A PROFITABLE SOLUTION FOR Everyone',
	  'Buyers get access to a wide range of goods and services with the possibility of cashback and discounts, and sellers get effective promotion tools, guaranteed work with a real audience, and detailed analytics. The platform provides a transparent and efficient business environment for everyone!',
	  'Frequently Asked Questions',
	  'About',
	  'For Users',
	  'For Partners',
	  'Entrepreneurs Association',
	  'Contacts',
	  'Download App',
	  'More',
	  'Your perfect\nmarketplace and\ndiscount service!',
	  'Nadis is a modern approach to shopping, a platform that combines the convenience of online shopping and social networks with a wide range of products, services, and of course discounts!',
	  'More about us',
	  // ...add the rest of the sentences similarly...
	],
	kz: [
	  'Ешқашан болмағандай тиімді!',
	  'Қазақстан бойынша жүздеген ұйымдарды біріктіретін маркетплейс және жеңілдік сервисі, күнделікті сатып алуларда үнемдеуге мүмкіндік береді.',
	  'Неге NADIS?',
	  'Nadis тек қазақстандық компанияларға сату құралдарын ұсынады, шетелдік маркетплейстердің орнына балама береді, олардың қызметі Қазақстаннан капиталдың кетуіне әкеледі. Біз нарықты және клиенттердің қажеттіліктерін талдадық, барлық қателіктер мен кемшіліктерді ескердік және өз өнімімізді жасадық, ол бизнесте және тұтынушылар арасында танымал болады деп сенеміз!',
	  'Әркім үшін тиімді шешім',
	  'Сатып алушылар тауарлар мен қызметтердің кең ассортиментіне қол жеткізеді, кэшбэк пен жеңілдіктер алу мүмкіндігі бар, ал сатушылар - тиімді ілгерілету құралдары, нақты аудиториямен жұмыс істеу кепілдігі және егжей-тегжейлі аналитика. Платформа барлығына ашық және тиімді бизнес-орта ұсынады!',
	  'Жиі қойылатын сұрақтар',
	  'Компания туралы',
	  'Пайдаланушыларға',
	  'Серіктестерге',
	  'Кәсіпкерлер қауымдастығы',
	  'Байланыс',
	  'Қосымшаны жүктеу',
	  'Толығырақ',
	  'Сіздің мінсіз\nмаркетплейс және\nжеңілдік сервисіңіз!',
	  'Nadis — бұл заманауи сауда тәсілі, онлайн-шопинг пен әлеуметтік желілердің ыңғайлылығын, тауарлар мен қызметтердің кең ассортиментін және, әрине, жеңілдіктерді біріктіретін платформа!',
	  'Біз туралы толығырақ',
	  // ...қалған сөйлемдерді осылайша қосыңыз...
	]
  },
	// Ключ для кнопки "Скачать приложение" в header-actions (универсальный)
	downloadAppBtn: {
		ru: 'Скачать приложение',
		en: 'Download App',
		kz: 'Қосымшаны жүктеу'
	},
	ru: {
		// ...existing code...
		importantInfo: 'Важная информация',
		bonusText: 'Просим быть внимательными и осторожными. В связи с участившимися случаями мошеннических действий уведомляем Вас, что сотрудники ЧК "Nadis Group Limited" не высылают текстовые сообщения и письма на электронную почту, не обзванивают пользователей и партнеров Nadis с просьбой предоставить какие-либо данные, в том числе данные о сумме баланса в Nadis, историях заказов и/или покупок, паспортные данные и данные банковских счетов. Все необходимые данные заполняются/редактируются пользователями только в мобильном приложении Nadis самостоятельно.',
		// FAQ
		faq: 'Часто задаваемые вопросы',
		faqList: [
			{
				q: 'Из чего состоит основной контент Nadis?',
				a: 'Публикации, сторис, товары, услуги, вакансии, страницы магазинов, горячие предложения, скидки и баннеры.'
			},
			{
				q: 'Где можно скачать мобильное приложение Nadis?',
				a: 'Приложение доступно в App Store и Play Market.'
			},
			{
				q: 'Чем отличается Nadis от других приложений?',
				a: 'Nadis является привычным маркетплейсом, однако мы добавили ленту новостей и сторис, предлагаем партнёрам выгодные условия, а пользователям — кэшбэк за рекомендации.'
			},
			{
				q: 'NADIS только в Казахстане?',
				a: 'Да, но мы планируем расширение после укрепления позиций на внутреннем рынке.'
			},
			{
				q: 'Могу ли я стать частью команды Nadis?',
				a: 'Если ты уверенный, харизматичный и продвинутый в профессиональном плане человек, то конечно - Да! Отправляй резюме на наш электронный адрес или оставляй отклик на доступные вакансии.'
			},
			{
				q: 'Имеется ли официальная регистрация в Казахстане?',
				a: 'Да. Nadis зарегистрирован в юрисдикции МЦФА как Частная компания «Nadis Group Limited».'
			},
			{
				q: 'Могу ли я предложить свои идеи для развития?',
				a: 'Конечно! Мы открыты к предложениям — напишите нам.'
			},
			{
				q: 'Есть ли версия для компьютера?',
				a: 'Нет. Nadis работает только на мобильных устройствах.'
			}
		],
		// Footer
		footer: {
			company: 'О компании',
			users: 'Пользователям',
			partners: 'Партнерам',
			association: 'Ассоциация предпринимателей',
			age: 'ЧК «Nadis Group Limited»',
			rights: '© Все права защищинеы',
			privacy: 'Политика конфиденциальности',
			delete: 'Удалить аккаунт',
			download: 'Скачать приложение:'
		},
		nav: [
			{ text: 'О компании', href: 'about.html' },
			{ text: 'Пользователям', href: 'foruser.html' },
			{ text: 'Партнерам', href: 'forcompany.html' },
			{ text: 'Ассоциация предпринимателей', href: 'association.html' },
			{ text: 'Контакты', href: '#' }
		],
		mainTitle: 'Выгоднее, чем когда-либо!',
		mainDesc: 'Маркетплейс и скидочный сервис объединяющий сотни организаций по всему Казахстану, позволяющий экономить на привычных покупках.',
		mainDownload: 'Скачать приложение:',
		why: 'Почему NADIS?',
		whyDesc: '«Nadis» предоставляет исключительно казахстанским компаниям инструменты для продаж, давая альтернативу вместо иностранных маркетплейсов, чья деятельность приводит к оттоку капитала из Казахстана. Мы проанализировали рынок и потребности клиентов, учли все ошибки и недочеты конкурентов и создали собственный продукт, который мы уверены завоюет популярность среди бизнеса и потребителей!',
		forEach: 'ВЫГОДНОЕ РЕШЕНИЕ ДЛЯ Каждого',
		forEachDesc: 'Покупатели получают доступ к широкому ассортименту товаров и услуг с возможностью возврата части средств через кэшбек-программы и скидки, а продавцы - эффективные инструменты продвижения, гарантированную работу с реальной аудиторией и детализированной аналитикой. Платформа обеспечивает прозрачную и эффективную бизнес-среду для всех!',
		more: 'Подробнее',
		aboutTitle: 'Ваш идеальный\nмаркетплейс и\nскидочный сервис!',
		aboutDesc: 'Nadis — это современный подход к покупкам, платформа, объединяющая удобство онлайн-шопинга и социальных сетей с широким ассортиментом товаров, услуг и, конечно же, скидок!',
		aboutBtn: 'Подробнее о нас',
		cardTitles: [
			'Удобство использования:',
			'Целевая аудитория:',
			'Безопасность платежей:',
			'Бизнес и реклама:'
		],
		cardDescs: [
			'Nadis обладает удобным и интуитивно понятным интерфейсом, который позволяет быстро и легко находить нужные товары и совершать покупки.',
			'Nadis соединяет вас с реальной аудиторией. Никаких ботов, никакого обмана — только реальные люди и честное взаимодействие.',
			'Nadis использует безопасные методы оплаты для защиты данных покупателей и сохранности их средств.',
			'Пользователи могут участвовать в продвижении Nadis и получать за это кэшбэк! Мы поощряем тех, кто помогает нам расти!'
		],
		forHeaders: ['Пользователям', 'Партнерам', 'Ассоциация предпринимателей'],
		forBodies: [
			'«Всё сэкономленное — всё заработанное!»<br><br>Каждый день мы совершаем множество покупок, и, конечно, всегда хотим, чтобы они были максимально выгодными. Наш сервис позволяет совершать покупки по лучшей цене, объединяя сотни организаций и предлагая эксклюзивные предложения, акции и скидки. Экономьте на повседневных покупках и получайте выгоду на каждом шагу!',
			'Nadis предлагает вашему бизнесу современный инструмент для эффективного взаимодействия с клиентами. Это надёжное решение в коммуникациях и продвижении, позволяющее быстро информировать клиентов о специальных предложениях, новинках и услугах. Сервис обеспечивает удобный доступ к контактной информации и упрощает коммуникацию, повышая лояльность и вовлечённость аудитории.',
			'Каждый предприниматель задумывается о развитии и защите своего бизнеса. В условиях конкуренции важны новые знания, поддержка и бизнес-сообщество. Иногда нужен совет опытных специалистов или общение с предпринимателями, которые понимают ваши задачи. Наш сервис помогает находить необходимые ресурсы, идеи и решения, а также расширять сеть профессиональных контактов для успешного развития бизнеса.'
		],
		reviews: [
			{text: 'Сервис просто отличный! Находить выгодные предложения стало гораздо проще. Постоянно пользуюсь для экономии на покупках.', author: 'Ерлан Бакиров'},
			{text: 'Очень удобный сервис! Теперь все скидки и акции в одном месте. Экономлю время и деньги.', author: 'Алина Мусина'},
			{text: 'Отличная платформа для бизнеса и покупателей. Всё прозрачно и честно!', author: 'Ерлан Бакиров'}
		]
	},
	en: {
		company: 'About',
		users: 'For Users',
		partners: 'For Partners',
		association: 'Entrepreneurs Association',
		download: 'Download App',
		importantInfo: 'Important Information',
		bonusText: 'Please be careful and vigilant. Due to the increased number of fraudulent activities, we inform you that employees of PC "Nadis Group Limited" do not send text messages or emails, do not call Nadis users and partners asking for any data, including Nadis balance information, order and/or purchase history, passport data, or bank account details. All necessary data is filled in/edited by users only in the Nadis mobile app independently.',
		footer: {
			company: 'About',
			users: 'For Users',
			partners: 'For Partners',
			association: 'Entrepreneurs Association',
			age: 'PC "Nadis Group Limited"',
			rights: '© All rights reserved',
			privacy: 'Privacy Policy',
			delete: 'Delete account',
			download: 'Download App:'
		},
		faq: 'Frequently Asked Questions',
		faqList: [
			{
				q: 'What is the main content of Nadis?',
				a: 'Posts, stories, products, services, vacancies, store pages, hot offers, discounts, and banners.'
			},
			{
				q: 'Where can I download the Nadis mobile app?',
				a: 'The app is available on the App Store and Play Market.'
			},
			{
				q: 'How is Nadis different from other apps?',
				a: 'Nadis is a familiar marketplace, but we have added a news feed and stories, offer partners favorable conditions, and users — cashback for recommendations.'
			},
			{
				q: 'Is NADIS only in Kazakhstan?',
				a: 'Yes, but we plan to expand after strengthening our position in the domestic market.'
			},
			{
				q: 'Can I become part of the Nadis team?',
				a: 'If you are confident, charismatic, and advanced professionally, then of course — Yes! Send your resume to our email or respond to available vacancies.'
			},
			{
				q: 'Is there official registration in Kazakhstan?',
				a: 'Yes. Nadis is registered in the AIFC jurisdiction as a Private Company "Nadis Group Limited".'
			},
			{
				q: 'Can I suggest my ideas for development?',
				a: 'Of course! We are open to suggestions — write to us.'
			},
			{
				q: 'Is there a desktop version?',
				a: 'No. Nadis works only on mobile devices.'
			}
		],
		mainTitle: 'More profitable than ever!',
		mainDesc: 'A marketplace and discount service uniting hundreds of organizations across Kazakhstan, helping you save on everyday purchases.',
		mainDownload: 'Download the app:',
		aboutTitle: 'Your perfect\nmarketplace and\ndiscount service!',
		aboutDesc: 'Nadis is a modern approach to shopping, a platform that combines the convenience of online shopping and social networks with a wide range of products, services, and of course discounts!',
		aboutBtn: 'More about us',
		cardTitles: [
			'Ease of use:',
			'Target audience:',
			'Payment security:',
			'Business & Advertising:'
		],
		cardDescs: [
			'Nadis has a user-friendly and intuitive interface that allows you to quickly and easily find the right products and make purchases.',
			'Nadis connects you with a real audience. No bots, no cheating — only real people and honest interaction.',
			'Nadis uses secure payment methods to ensure the protection of buyers\' data and the safety of their funds.',
			'Users can participate in promoting Nadis and receive cashback for it! We reward those who help us grow!'
		],
		forHeaders: ['For Users', 'For Partners', 'Entrepreneurs Association'],
		forBodies: [
			'“Everything saved is everything earned!”<br><br>Every day we make many purchases, and of course, we always want them to be as profitable as possible. Our service allows you to make purchases at the best price by uniting hundreds of organizations and offering exclusive deals, promotions, and discounts. Save on everyday purchases and enjoy the benefits at every step!',
			'Nadis offers your business a modern tool for effective customer interaction. It\'s a reliable solution in communications and promotion, allowing you to quickly inform customers about special offers, new products, and services. The service provides easy access to contact information and simplifies communication, increasing audience loyalty and engagement.',
			'Every business owner thinks about developing and protecting their business. In a competitive environment, new knowledge, support, and a business community are important. Sometimes you need advice from experienced professionals or communication with entrepreneurs who understand your challenges. Our service helps you find the necessary resources, ideas, and solutions, as well as expand your network of professional contacts for successful business development.'
		],
		more: 'More',
		reviews: [
			{text: 'The service is just great! Finding good deals has become much easier. I constantly use it to save on purchases.', author: 'Yerlan Bakirov'},
			{text: 'Very convenient service! Now all discounts and promotions are in one place. I save time and money.', author: 'Alina Musina'},
			{text: 'An excellent platform for business and buyers. Everything is transparent and honest!', author: 'Yerlan Bakirov'}
		],
		nav: [
			{ text: 'About', href: 'about.html' },
			{ text: 'For Users', href: 'foruser.html' },
			{ text: 'For Partners', href: 'forcompany.html' },
			{ text: 'Entrepreneurs Association', href: 'association.html' },
			{ text: 'Contacts', href: '#' }
		]
	},
	kz: {
		company: 'Компания туралы',
		users: 'Пайдаланушыларға',
		partners: 'Серіктестерге',
		association: 'Кәсіпкерлер қауымдастығы',
		download: 'Қосымшаны жүктеу',
		importantInfo: 'Маңызды ақпарат',
		bonusText: 'Сақ болуды және мұқият болуды сұраймыз. Алаяқтық әрекеттердің жиілеп кетуіне байланысты, ЧК "Nadis Group Limited" қызметкерлері мәтіндік хабарламалар мен электрондық хаттар жібермейтінін, Nadis пайдаланушылары мен серіктестеріне қандай да бір деректерді, соның ішінде Nadis-тегі баланс сомасы, тапсырыстар мен/немесе сатып алулар тарихы, төлқұжат деректері және банк шоттарының деректері туралы сұраныстармен қоңырау шалмайтынын хабарлаймыз. Барлық қажетті деректерді пайдаланушылар тек Nadis мобильді қосымшасында өз бетінше толтырады/өзгертеді.',
		footer: {
			company: 'Компания туралы',
			users: 'Пайдаланушыларға',
			partners: 'Серіктестерге',
			association: 'Кәсіпкерлер қауымдастығы',
			age: 'ЖШС "Nadis Group Limited"',
			rights: '© Барлық құқықтар қорғалған',
			privacy: 'Құпиялылық саясаты',
			delete: 'Аккаунтты жою',
			download: 'Қосымшаны жүктеу:'
		},
		faq: 'Жиі қойылатын сұрақтар',
		faqList: [
			{
				q: 'Nadis-тің негізгі контенті неден тұрады?',
				a: 'Посттар, стористер, тауарлар, қызметтер, бос жұмыс орындары, дүкен беттері, ыстық ұсыныстар, жеңілдіктер және баннерлер.'
			},
			{
				q: 'Nadis мобильді қосымшасын қайдан жүктеуге болады?',
				a: 'Қосымша App Store және Play Market-те қолжетімді.'
			},
			{
				q: 'Nadis басқа қосымшалардан несімен ерекшеленеді?',
				a: 'Nadis — бұл таныс маркетплейс, бірақ біз жаңалықтар таспасын және стористерді қостық, серіктестерге тиімді шарттар ұсынамыз, ал пайдаланушыларға — ұсыныстар үшін кэшбэк.'
			},
			{
				q: 'NADIS тек Қазақстанда ма?',
				a: 'Иә, бірақ біз ішкі нарықта позициямызды нығайтқаннан кейін кеңеюді жоспарлап отырмыз.'
			},
			{
				q: 'Мен Nadis командасының мүшесі бола аламын ба?',
				a: 'Егер сіз өзіне сенімді, харизматикалық және кәсіби тұрғыда дамыған адам болсаңыз, әрине — Иә! Резюмеңізді біздің электрондық поштамызға жіберіңіз немесе қолжетімді бос орындарға жауап беріңіз.'
			},
			{
				q: 'Қазақстанда ресми тіркеу бар ма?',
				a: 'Иә. Nadis AIFC юрисдикциясында "Nadis Group Limited" ЖШС ретінде тіркелген.'
			},
			{
				q: 'Мен даму үшін өз идеяларымды ұсына аламын ба?',
				a: 'Әрине! Біз ұсыныстарға ашықпыз — бізге жазыңыз.'
			},
			{
				q: 'Компьютерге арналған нұсқасы бар ма?',
				a: 'Жоқ. Nadis тек мобильді құрылғыларда жұмыс істейді.'
			}
		],
		mainTitle: 'Ешқашан болмағандай тиімді!',
		mainDesc: 'Қазақстан бойынша жүздеген ұйымдарды біріктіретін маркетплейс және жеңілдік сервисі, күнделікті сатып алуларда үнемдеуге мүмкіндік береді.',
		mainDownload: 'Қосымшаны жүктеу:',
		aboutTitle: 'Сіздің мінсіз\nмаркетплейс және\nжеңілдік сервисіңіз!',
		aboutDesc: 'Nadis — бұл заманауи сауда тәсілі, онлайн-шопинг пен әлеуметтік желілердің ыңғайлылығын, тауарлар мен қызметтердің кең ассортиментін және, әрине, жеңілдіктерді біріктіретін платформа!',
		aboutBtn: 'Біз туралы толығырақ',
		cardTitles: [
			'Пайдаланудың ыңғайлылығы:',
			'Мақсатты аудитория:',
			'Төлем қауіпсіздігі:',
			'Бизнес және жарнама:'
		],
		cardDescs: [
			'Nadis ыңғайлы және түсінікті интерфейске ие, ол қажетті тауарларды тез әрі оңай табуға және сатып алуға мүмкіндік береді.',
			'Nadis сізді тірі аудиториямен байланыстырады. Ешқандай боттар, ешқандай алдау — тек нақты адамдар және адал өзара әрекеттестік.',
			'Nadis қауіпсіз төлем әдістерін қолданады, бұл сатып алушылардың деректерін қорғауды және олардың қаражатының сақталуын қамтамасыз етеді.',
			'Пайдаланушылар Nadis-ті ілгерілетуге қатысып, осы үшін кэшбэк ала алады! Біз бізге көмектесетіндерді ынталандырамыз!'
		],
		forHeaders: ['Пайдаланушыларға', 'Серіктестерге', 'Кәсіпкерлер қауымдастығы'],
		forBodies: [
			'«Жинақталғанның бәрі – табыс!»<br><br>Күн сайын біз көптеген сатып алулар жасаймыз және, әрине, олардың барынша тиімді болғанын қалаймыз. Біздің сервис жүздеген ұйымдарды біріктіріп, эксклюзивті ұсыныстар, акциялар мен жеңілдіктерді ұсына отырып, ең тиімді бағамен сатып алуға мүмкіндік береді. Күнделікті сатып алуларда үнемдеңіз және әр қадамда тиімділікті сезініңіз!',
			'Nadis сіздің бизнесіңізге клиенттермен тиімді өзара әрекеттесу үшін заманауи құрал ұсынады. Бұл коммуникация және ілгерілету саласындағы сенімді шешім, сатып алушыларды арнайы ұсыныстар, жаңа тауарлар мен қызметтер туралы жедел хабардар етуге мүмкіндік береді. Сервис байланыс ақпаратына ыңғайлы қол жеткізуді және қарым-қатынас процесін жеңілдетуді қамтамасыз етеді, аудиторияның адалдығы мен тартылуын арттырады.',
			'Әрбір кәсіп иесі өз ісін дамыту және қорғау туралы ойлайды. Бәсекелестік жағдайда жаңа білім, қолдау және іскерлік орта маңызды. Кейде тәжірибелі мамандардан кеңес немесе сіздің қиындықтарыңызды түсінетін кәсіпкерлермен қарым-қатынас қажет. Біздің сервис қажетті ресурстарды, идеялар мен шешімдерді табуға, сондай-ақ бизнесті табысты дамыту үшін кәсіби байланыстар желісін кеңейтуге көмектеседі.'
		],
		more: 'Толығырақ',
		reviews: [
			{text: 'Қызмет өте ыңғайлы! Енді барлық жеңілдіктер мен акциялар бір жерде. Уақыт пен ақшаны үнемдеймін.', author: 'Алина Мусина'},
			{text: 'Тамаша платформа! Барлығы ашық және адал!', author: 'Ерлан Бакиров'},
			{text: 'Сервис өте жақсы! Енді тиімді ұсыныстарды табу әлдеқайда оңай. Сатып алуларда үнемі қолданамын.', author: 'Ерлан Бакиров'}
		],
		nav: [
			{ text: 'Компания туралы', href: 'about.html' },
			{ text: 'Пайдаланушыларға', href: 'foruser.html' },
			{ text: 'Серіктестерге', href: 'forcompany.html' },
			{ text: 'Кәсіпкерлер қауымдастығы', href: 'association.html' },
			{ text: 'Байланыс', href: '#' }
		]
	}
	};

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

// Смена языка
langList.querySelectorAll('li').forEach(li => {
	li.onclick = () => {
		const lang = li.getAttribute('data-value');
		localStorage.setItem('nadis_lang', lang);
		window.applyLang(lang);
		langList.classList.remove('show');
	};
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

	// Универсальный перевод .number_text по ключам number_text, number_text_2, ... или из массива translations.number_text
	if (translations.number_text && translations.number_text[lang]) {
		document.querySelectorAll('.number_text').forEach((el, i) => {
			if (translations.number_text[lang][i]) {
				el.textContent = translations.number_text[lang][i];
			}
		});
	}

	// Универсальный перевод .header_span по ключам header_span, header_span_2, ... или из массива translations.header_span
	if (translations.header_span && translations.header_span[lang]) {
		document.querySelectorAll('.header_span').forEach((el, i) => {
			if (translations.header_span[lang][i]) {
				el.innerHTML = translations.header_span[lang][i];
			}
		});
	} else {
		document.querySelectorAll('.header_span').forEach((el, i) => {
			let key = 'header_span';
			if (i > 0) key = 'header_span_' + (i + 1);
			if (t[key]) {
				el.innerHTML = t[key];
			}
		});
	}

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
					$openCloseBtn.toggleClass('filter_invert');
					$('.left_content').toggleClass('filter_invert');
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