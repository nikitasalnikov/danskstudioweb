/*modal window open */

let serviceBlock = document.querySelector('.main__services-info');
let modalWindow = document.querySelector('.modal__window');
let closeBtn = document.querySelector('.modal__close-btn');


window.addEventListener('scroll', animScroll);
function animScroll() {
    if (window.pageYOffset > 1690 && window.pageYOffset < 1800) {
        setTimeout(() => {
            modalWindow.classList.add('active')
        }, 1000);
    }
}


closeBtn.addEventListener('click', () => modalWindow.classList.remove('active'));