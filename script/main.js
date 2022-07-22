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
const selectItem = document.querySelector('.__select__content');
const select = document.querySelector('#select_id');



var priceArray = [2000, 600, 800, 1000, 1500, 3000, 500];

for (let i = 0; i < selectSingle_labels.length; i++) {
    
    
    selectSingle_labels[i].addEventListener('click', function () {

        if (selectSingle_labels[i].getAttribute('data-value') == 'Авторский курс по произношению “Основы произношения датского языка. Постановка основных звуков”') {
            price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`;
            selectInput.classList.remove('active');
        } 
        else if (selectSingle_labels[i].getAttribute('data-value') == 'Авторский курс по произношению “Нюансы произношения датского языка. Фокус на гласные”') {
            price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`;
            selectInput.classList.remove('active');
        } 
        else if (selectSingle_labels[i].getAttribute('data-value') == 'Авторский курс по произношению “Мелодия и интонация датского языка. Вишенка на торте.”') {
            price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`;
            selectInput.classList.remove('active');
        } 
        else if (selectSingle_labels[i].getAttribute('data-value') == 'ПОДГОТОВКА К ЭКЗАМЕНАМ' || selectSingle_labels[i].getAttribute('data-value') == 'ПОСТАНОВКА ПРОИЗНОШЕНИЯ' || selectSingle_labels[i].getAttribute('data-value') == 'ЯЗЫКОВОЙ КОУЧИНГ') {
            price.innerHTML = '';
            selectInput.classList.add('active');
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
            if (select) {
                select.addEventListener('change', function() {
                    if (select.value == 0) {
                        price.innerHTML = '';
                    }
                    else if(select.value == 1){
                        price.innerHTML = `Стоимость курса: ${priceArray[1]} крон`;
                    }
                   else if(select.value == 2 || select.value == 3){
                        price.innerHTML = `Стоимость курса: ${priceArray[2]} крон`;
                    }
                })
            }
        } 
        else if (selectSingle_labels[i].getAttribute('data-value') == 'ДАТСКИЙ С НУЛЯ' || selectSingle_labels[i].getAttribute('data-value') == 'Клуб интерактивного датского языка для продолжающих') {
            selectInput.classList.add('active');
            price.innerHTML = `Стоимость курса: ${priceArray[3]} крон/в месяц`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
            if (select) {
                select.addEventListener('change', function() {
                    if (select.value == 0) {
                        price.innerHTML = '';
                    }
                    else if(select.value == 1 || select.value == 2 || select.value == 3){
                        price.innerHTML = `Стоимость курса: ${priceArray[3]} крон/в месяц`;
                    }
                })
            }
           
        } 
        else if (selectSingle_labels[i].getAttribute('data-value') == 'Коучинговая группа по постановке произношения') {
            selectInput.classList.add('active');
            price.innerHTML = `Стоимость курса: ${priceArray[4]} крон`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
            if (select) {
                select.addEventListener('change', function() {
                    if (select.value == 0) {
                        price.innerHTML = '';
                    }
                    else if(select.value == 1 || select.value == 2 || select.value == 3){
                        price.innerHTML = `Стоимость курса: ${priceArray[4]} крон/в месяц`;
                    }
                })
            }

        } else if (selectSingle_labels[i].getAttribute('data-value') == 'КИНОКЛУБ') {
            selectInput.classList.add('active');
            price.innerHTML = `Стоимость курса: ${priceArray[5]} крон/в месяц`;
            selectItem.style = `
            max-width:780px;
            width:100%;
            `
            if (select) {
                select.addEventListener('change', function() {
                    if (select.value == 0) {
                        price.innerHTML = '';
                    }
                    else if(select.value == 1 || select.value == 2 || select.value == 3){
                        price.innerHTML = `Стоимость курса: ${priceArray[3]} крон/в месяц`;
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