/*tabs*/

let servicesTab = document.querySelectorAll('.services__tab');
let mainTab = document.querySelectorAll('.main__tab');
let tabBtn = document.querySelectorAll('.tab_btn');
let closeBtn = document.querySelector('.close_btn');
let modalWindow = document.querySelector('.modal__window-open');

for (let i = 0; i < servicesTab.length; i++) {
    servicesTab[i].addEventListener('click', function () {
        for (let j = 0; j < servicesTab.length; j++) {
            servicesTab[j].classList.remove('active');
            mainTab[j].classList.remove('active');
        }
        servicesTab[i].classList.add('active');
        mainTab[i].classList.add('active');
    })

}

for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function (e) {
        e.preventDefault();
        modalWindow.classList.add('active');
    })
}
closeBtn.addEventListener('click', () => modalWindow.classList.remove('active'));