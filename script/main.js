/*burger menu*/

let burgerMenu = document.querySelector(".burger__menu");
let menuList = document.querySelector(".header__list-bg");
let body = document.querySelector('body');
burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    menuList.classList.toggle("active");
    body.classList.toggle('lock');
});





const selectSingle = document.querySelector('.__select');
const selectSingle_title = document.querySelector('.__select__title');
const selectSingle_labels = document.querySelectorAll('.__select__label');


const price = document.querySelector('.price');
const lessonDuration = document.querySelector('.lessons__duration');
const modalForm = document.querySelector('.modal__window-form');
const selectInput = document.querySelector('.select__input');
const selectItem = document.querySelector('.__select__content')

var priceArray = [2000, 600, 800, 1000, 3000, 500];

for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', function () {
        if (selectSingle_labels[i].getAttribute('data-value') == 'Авторский курс по произношению “Основы произношения датского языка. Постановка основных звуков”' || selectSingle_labels[i].getAttribute('data-value') == 'Авторский курс по произношению “Нюансы произношения датского языка. Фокус на гласные”"' || selectSingle_labels[i].getAttribute('data-value') == 'Авторский курс по произношению “Мелодия и интонация датского языка. Вишенка на торте.”') {
            selectInput.classList.remove('active');
            lessonDuration.innerHTML = 'Продолжительность: 5 недель, 2 урока в неделю. '
            price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`
        } else if (selectSingle_labels[i].getAttribute('data-value') == 'ПОДГОТОВКА К ЭКЗАМЕНАМ') {
            selectInput.classList.add('active');
            lessonDuration.innerHTML = 'Продолжительность: индивидуальное количество, уроки 60-70мин'
            price.innerHTML = `Стоимость курса: ${priceArray[1]} крон за занятие`
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
        } else if (selectSingle_labels[i].getAttribute('data-value') == 'ПОСТАНОВКА ПРОИЗНОШЕНИЯ' || selectSingle_labels[i].getAttribute('data-value') == 'ЯЗЫКОВОЙ КОУЧИНГ') {
            selectInput.classList.add('active');
            lessonDuration.innerHTML = 'Продолжительность: индивидуальное количество, уроки 60-70мин'
            price.innerHTML = `Стоимость курса: ${priceArray[2]} крон за занятие`
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
        } else if (selectSingle_labels[i].getAttribute('data-value') == 'ДАТСКИЙ С НУЛЯ' || selectSingle_labels[i].getAttribute('data-value') == 'Клуб интерактивного датского языка для продолжающих') {
            selectInput.classList.add('active');
            lessonDuration.innerHTML = 'Продолжительность: индивидуальное количество, уроки 60-70мин';
            price.innerHTML = `Стоимость курса: ${priceArray[3]} крон/в месяц`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
        } else if (selectSingle_labels[i].getAttribute('data-value') == 'Коучинговая группа по постановке произношения') {
            selectInput.classList.add('active');
            lessonDuration.innerHTML = 'Продолжительность: индивидуальное количество, уроки 60-70мин';
            price.innerHTML = `Стоимость курса: ${priceArray[4]} крон`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
        } else if (selectSingle_labels[i].getAttribute('data-value') == 'КИНОКЛУБ') {
            selectInput.classList.add('active');
            lessonDuration.innerHTML = 'Продолжительность: индивидуальное количество, уроки 60-70мин';
            price.innerHTML = `Стоимость курса: ${priceArray[5]} крон/в месяц`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
        }
    })
}

// Toggle menu

selectSingle_title.addEventListener('click', function () {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}