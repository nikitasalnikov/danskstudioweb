/*burger menu*/

let burgerMenu = document.querySelector(".burger__menu");
let menuList = document.querySelector(".header__list-bg");
let body = document.querySelector('body');
burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    menuList.classList.toggle("active");
    body.classList.toggle('lock');
});

/* lang change*/
const selectLang = document.querySelectorAll('select');
const allLang = ['ru', 'da'];
const langArr = {
    "title": {
        'ru': 'Онлайн-школа иностранных языков «Говори Сейчас»',
        'da': 'Onlineskole for fremmedsprog "Tal nu"'
    },
    "main": {
        'ru': 'Главная',
        'da': 'Hjem'
    },
    "about": {
        'ru': 'Обо мне',
        'da': 'Om mig'
    },
    "services": {
        'ru': 'Услуги',
        'da': 'Tjenester'
    },
    "payment": {
        'ru': 'Участие и оплата',
        'da': 'Deltagelse og betaling'
    },
    "additional__services": {
        'ru': 'Дополнительные услуги',
        'da': 'Yderligere tjenester'
    },
    "contacts": {
        'ru': 'Контакты',
        'da': 'Kontaktpersoner'
    },
    "reviews": {
        'ru': 'Отзывы',
        'da': 'Anmeldelser'
    },
    "header_title": {
        'ru': 'ХОТИТЕ ИЗУЧИТЬ ДАТСКИЙ ЯЗЫК?',
        'da': 'VIL DU LÆRE DANSK?'
    },
    "header_subtitle": {
        'ru': 'ЗАПИСЫВАЙТЕСЬ В НАШУ СТУДИЮ!',
        'da': 'TILMELD DIG VORES STUDIO!'
    },
    "desc_first": {
        'ru': 'Датский язык с Dansk Studio',
        'da': 'Dansk med Dansk Studio'
    },
    "desc_second": {
        'ru': 'Для любого уровня от новичка до продвинутого',
        'da': 'For alle niveauer fra begynder til øvet'
    },
    "contact_btn": {
        'ru': 'Получить консультацию!',
        'da': 'For at få konsultationen!'
    },
    "name": {
        'ru': 'Имя',
        'da': 'Navn'
    },
    "email": {
        'ru': 'E-mail',
        'da': 'E-mail'
    },
    "phone_number": {
        'ru': 'Телефон',
        'da': 'Telefon'
    },
    "form_btn": {
        'ru': 'Отправить',
        'da': 'Sende'
    },
    'main_title': {
        'ru': 'ОБО МНЕ',
        'da': 'OM MIG'
    }

}


// if (selectLang) {
//     for (let i = 0; i < selectLang.length; i++) {
    
//             selectLang[i].addEventListener('change', changeUrlLang);

//             function changeUrlLang() {
//                 let lang = selectLang[i].value;
//                 location.href = window.location.pathname + '#' + lang;
//                 location.reload();
//             }

//             function changeLanguage() {
//                 let hash = window.location.hash;
//                 hash = hash.substring(1);
//                 if (!allLang.includes(hash)) {
//                     location.href = window.location.pathname + '#ru';
//                     location.reload();
//                 }
//                 selectLang[i].value = hash;
//                 if (selectLang[i].value == 'da') {
//                     document.querySelector('.header__list-bg').style = `
//                 max-width:980px;
//                 `
//                 }

//                 for (let key in langArr) {
//                     document.querySelectorAll('.lng-' + key).innerHTML = langArr[key][hash];
//                     // document.querySelector('.lng-name').placeholder = langArr['name'][hash];
//                     // document.querySelector('.lng-email').placeholder = langArr['email'][hash];
//                     // document.querySelector('.lng-phone_number').placeholder = langArr['phone_number'][hash];
//                 }

//             }

//             changeLanguage();
    
//     }

// }



/* */



const selectSingle = document.querySelector('.__select');
const selectSingle_title = document.querySelector('.__select__title');
const selectSingle_labels = document.querySelectorAll('.__select__label');


const price = document.querySelector('.price');
const lessonDuration = document.querySelector('.lessons__duration');
const modalForm = document.querySelector('.modal__window-form');
const selectInput = document.querySelector('.select__input');
const selectItem = document.querySelector('.__select__content');
const select = document.querySelector('#select_id');



var priceArray = [2000, 600, 800, 1000, 1500, 3000, 500];

for (let i = 0; i < selectSingle_labels.length; i++) {


    selectSingle_labels[i].addEventListener('click', function () {

        if (selectSingle_labels[i].getAttribute('data-value') == 'Авторский курс по произношению “Основы произношения датского языка. Постановка основных звуков”') {
            price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`;
            lessonDuration.innerHTML = 'Продолжительность: 5 недель, 2 урока в неделю.';
            selectInput.classList.remove('active');
        } else if (selectSingle_labels[i].getAttribute('data-value') == 'Авторский курс по произношению “Нюансы произношения датского языка. Фокус на гласные”') {
            price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`;
            lessonDuration.innerHTML = 'Продолжительность: 5 недель, 2 урока в неделю.';
            selectInput.classList.remove('active');
        } else if (selectSingle_labels[i].getAttribute('data-value') == 'Авторский курс по произношению “Мелодия и интонация датского языка. Вишенка на торте.”') {
            price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`;
            lessonDuration.innerHTML = 'Продолжительность: 5 недель, 2 урока в неделю.';
            selectInput.classList.remove('active');
        } else if (selectSingle_labels[i].getAttribute('data-value') == 'ПОДГОТОВКА К ЭКЗАМЕНАМ' || selectSingle_labels[i].getAttribute('data-value') == 'ПОСТАНОВКА ПРОИЗНОШЕНИЯ' || selectSingle_labels[i].getAttribute('data-value') == 'ЯЗЫКОВОЙ КОУЧИНГ') {
            price.innerHTML = '';
            lessonDuration.innerHTML = 'Продолжительность: 60-70 мин'
            selectInput.classList.add('active');
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
            modalForm.style = `
            max-width:780px;
            width:100%;
            `
          
            if (select) {
                select.addEventListener('change', function () {
                    if (select.value == 0) {
                        price.innerHTML = '';
                    } else if (select.value == 1) {
                        price.innerHTML = `Стоимость 1 занятия: ${priceArray[1]} крон`;
                    } else if (select.value == 2 || select.value == 3) {
                        price.innerHTML = `Стоимость 1 занятия: ${priceArray[2]} крон`;
                    }
                })
            }
        } else if (selectSingle_labels[i].getAttribute('data-value') == 'ДАТСКИЙ С НУЛЯ' ) {
            selectInput.classList.add('active');
            lessonDuration.innerHTML = 'Продолжительность: 6 месяцев, 1 урок(60-70 мин) в неделю.';
            price.innerHTML = `Стоимость курса: ${priceArray[3]} крон в месяц`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
            if (select) {
                select.addEventListener('change', function () {
                    if (select.value == 0) {
                        price.innerHTML = '';
                    } else if (select.value == 1 || select.value == 2 || select.value == 3) {
                        price.innerHTML = `Стоимость курса: ${priceArray[3]} крон в месяц`;
                    }
                })
            }

        } 
        else if ( selectSingle_labels[i].getAttribute('data-value') == 'Клуб интерактивного датского языка для продолжающих') {
            selectInput.classList.add('active');
            lessonDuration.innerHTML = 'Продолжительность: 6 месяцев, 1 урок(90 мин) в неделю.';
            price.innerHTML = `Стоимость курса: ${priceArray[4]} крон/в месяц`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
            if (select) {
                select.addEventListener('change', function () {
                    if (select.value == 0) {
                        price.innerHTML = '';
                    } else if (select.value == 1 || select.value == 2 || select.value == 3) {
                        price.innerHTML = `Стоимость курса: ${priceArray[4]} крон в месяц`;
                    }
                })
            }

        } 
        else if (selectSingle_labels[i].getAttribute('data-value') == 'Коучинговая группа по постановке произношения') {
            selectInput.classList.add('active');
            lessonDuration.innerHTML = 'Продолжительность: 10 занятий, по 90 мин. 1 раз в неделю.';
            price.innerHTML = `Стоимость курса: ${priceArray[5]} крон`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
            if (select) {
                select.addEventListener('change', function () {
                    if (select.value == 0) {
                        price.innerHTML = '';
                    } else if (select.value == 1 || select.value == 2 || select.value == 3) {
                        price.innerHTML = `Стоимость курса: ${priceArray[5]} крон в месяц`;
                    }
                })
            }

        } else if (selectSingle_labels[i].getAttribute('data-value') == 'КИНОКЛУБ') {
            selectInput.classList.add('active');
            lessonDuration.innerHTML = 'Продолжительность: каждую вторую неделю, по 90 мин';
            price.innerHTML = `Стоимость курса: ${priceArray[6]} крон/в месяц + (месячный абонемент, оплачивается отдельно на платформе для просмотра фильмов)`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
            if (select) {
                select.addEventListener('change', function () {
                    if (select.value == 0) {
                        price.innerHTML = '';
                    } else if (select.value == 1 || select.value == 2 || select.value == 3) {
                        price.innerHTML = `Стоимость курса: ${priceArray[6]} крон/в месяц + (месячный абонемент, оплачивается отдельно на платформе для просмотра фильмов)`;
                    }
                })
            }

        }
    })
}

// Toggle menu

if (selectSingle_title) {
    selectSingle_title.addEventListener('click', function () {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });
}

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

/*contact modal */

const contactModal = document.querySelector('.contact__form');
const contactBtn = document.querySelectorAll('.contact-btn');

if (contactBtn) {

    for (let i = 0; i < contactBtn.length; i++) {
        contactBtn[i].addEventListener('click', function (e) {
            e.preventDefault();
            contactModal.classList.add('active');
        })
    }

    contactModal.addEventListener('click', () => contactModal.classList.remove('active'))

}