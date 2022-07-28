/*burger menu*/

let burgerMenu = document.querySelector(".burger__menu");
let menuList = document.querySelector(".header__list-bg");
let body = document.querySelector("body");
burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  menuList.classList.toggle("active");
  body.classList.toggle("lock");
});

/* lang change*/
const selectLang = document.querySelectorAll("select");
const allLang = ["ru", "da"];
const langArr = {
  title: {
    ru: "Онлайн-школа иностранных языков «Говори Сейчас»",
    da: 'Onlineskole for fremmedsprog "Tal nu"',
  },
  logo_title: {
    ru: "студия изучения датского языка",
    da: "Online sprogskole",
  },
  main: {
    ru: "Главная",
    da: "Hjem",
  },
  about: {
    ru: "Обо мне",
    da: "Om mig",
  },
  services: {
    ru: "Услуги",
    da: "Kurser",
  },
  payment: {
    ru: "Участие и оплата",
    da: "Betaling og vilkår",
  },
  additional__services: {
    ru: "Дополнительные услуги",
    da: "Yderligere tjenester",
  },
  contacts: {
    ru: "Контакты",
    da: "Kontakt",
  },
  reviews: {
    ru: "Отзывы",
    da: "Anmeldelser",
  },
  header_title: {
    ru: "ХОТИТЕ ИЗУЧИТЬ ДАТСКИЙ ЯЗЫК?",
    da: "VIL DU LÆRE DANSK?",
  },
  header_subtitle: {
    ru: "ЗАПИСЫВАЙТЕСЬ В НАШУ СТУДИЮ!",
    da: "TILMELD DIG DANSK STUDIO!",
  },
  desc_first: {
    ru: "Датский язык с Dansk Studio <br> Для любого уровня от новичка до продвинутого",
    da: "Vi har undervisning og kurser for begyndere,<br> lidt øvede og meget øvede.",
  },
  contact_btn: {
    ru: "Получить консультацию!",
    da: "KONSULTATION",
  },
  name: {
    ru: "Имя",
    da: "Navn",
  },
  email: {
    ru: "E-mail",
    da: "E-mail",
  },
  phone_number: {
    ru: "Телефон",
    da: "Telefon",
  },
  form_btn: {
    ru: "Отправить",
    da: "Sende",
  },
  main_title: {
    ru: "ОБО МНЕ",
    da: "HVEM ER JEG",
  },
  author_about: {
    ru: 'Рада приветствовать всех небезразличных к иностранным языкам!Меня зовут Олеся, и я - квалифицированный преподаватель датского языка.<br><br> Я очень люблю изучать и преподавать иностранные языки. Датский язык я начала изучать в Дании уже будучи взрослой, а вообще, языки я изучаю сколько себя помню, а преподаю с 15 лет. Живу в Дании с 2007 и с 2010 начала работать в языковых школах и преподавать датский язык взрослым иностранцам из разных уголков мира.<br><br> Последние 2 года я развиваю свой авторский проект "Dansk studio", создала несколько авторских курсов (по произношению, грамматике) и планирую реализовать ещё несколько творческих идей, которые помогут многим изучающим датский язык.',
    da: "Hej. Jeg hedder Olesya.<br><br> Jeg er en engageret, uddannet dansk som andetsprog lærer og kursusudvikler med et kommunikativt og funktionelt sprogsyn, kreativitet i blodet, fokus på kursisternes sproglige behov og kurs mod resultater.<br><br>Som DSA- lærer har jeg en lang erfaring (mere end 10 år) med at undervise udlændinge fra hele verden på Dansk 1, 2, 3 og i Ungeskolen, samt traumahold. Jeg har været modultester og har haft eksamenshold på DU1,2,3. Ligeledes har jeg været engageret i mange faglige projekter.",
  },
  education_title: {
    ru: "о моём образовании",
    da: "OM MIN UDDANNELSE",
  },

  eduction__second: {
    ru: "<b>Sprogcenter Nordsjælland</b>, Hillerød.",
    da: "<b>Sprogcenter Nordsjælland</b>, Hillerød.",
  },
  eduction__third: {
    ru: "<b>University College Sjælland</b>. Holbæk. (nu-Roskilde). Linjefag- Dansk. Dansk som andetsprog. Учительская семинария: датский язык и датский язык как второй для детей-билингвов в общеобразовательных школах Дании.",
    da: "<b>University College Sjælland</b>.Holbæk. (nu- Roskilde). Linjefag- Dansk. Dansk som andetsprog",
  },
  eduction__fourth: {
    ru: " <b>Датский педагогический университет по специальности преподаватель датского языка взрослым иностранцам.</b><br> DPU, Århus Universitet, København. Uddannelsen til underviser i dansk som andet-og fremmedsprog til voksne og unge. Дипломную работу по теме произношение датского языка сдала на высший бал (12).",
    da: "<b>DPU, Århus Universitet, København.</b> Uddannelsen til underviser i dansk som andet-og fremmedsprog til voksne og unge.",
  },
  qualification__about: {
    ru: "О повышении квалификации и моей деятельности",
    da: "Min faglige baggrund",
  },
  author__text: {
    ru: "основатель школы",
    da: "grundlægger af skolen",
  },
  services__title: {
    ru: "Какие услуги предлагает студия",
    da: "HVAD TILBYDER DANSK STUDIO?",
  },
  card__first: {
    ru: "АВТОРСКИЕ КУРСЫ ПО ПРОИЗНОШЕНИЮ",
    da: "UDTALEKURSER",
  },
  card__second: {
    ru: "индивидуальные занятия:",
    da: "ENEUNDERVISNING:",
  },
  card__desc_second: {
    ru: "произношение, подготовка к экзаменам, датский для начинающих и ваши индивидуальные языковые потребности",
    da: "udtale, eksamensforberedelse, dansk for begyndere og dine individuelle sprogbehov",
  },
  card__third: {
    ru: "занятия в группах:",
    da: "GRUPPEUNDERVISNING:",
  },
  card__desc_third: {
    ru: "датский с нуля, разговорный клуб, постановка произношения",
    da: "Dansk for begyndere, samtaleklub, filmklub, udtaletræning.",
  },
  card__btn: {
    ru: "ПОДРОБнее",
    da: "LÆS MERE",
  },
  step__title: {
    ru: "Сделайте первый шаг к изучению датского языка",
    da: "TAG DET FØRSTE SKRIDT TIL AT LÆRE DANSK",
  },
  consult: {
    ru: "Консультация",
    da: "KONSULTATION",
  },
  level: {
    ru: "Определение уровня языка",
    da: "VISITATION - NIVEAUVURDERING",
  },
  programm: {
    ru: "Подбор подходящей программы",
    da: "HJÆLP TIL AT VÆLGE DET RIGTIGE KURSUS",
  },
  occupation: {
    ru: "ваше первое занятие",
    da: "DIN FØRSTE LEKTION",
  },
  step__btn: {
    ru: "анкета для определения уровня",
    da: "SPØRGESKEMAET",
  },
  timetable: {
    ru: "Узнать расписание",
    da: "TJEK TIDSPLANEN",
  },
  timetable__desc: {
    ru: "Перед оплатой курса узнайте, есть ли места в группе, не возникло ли переноса или отмены занятий",
    da: "Før du betaler, skal du tjekke, om der er plads på det kursus, du ønsker.",
  },
  timetable_name: {
    ru: "Ваше имя*",
    da: "Navn*",
  },
  timetable_phone: {
    ru: "Ваш телефон*",
    da: "Telefonnummer *",
  },
  timetable_email: {
    ru: "Ваш e-mail*",
    da: "E-mail*",
  },
  timetable_skype: {
    ru: "Ваш Skype",
    da: "Skype",
  },
  timetable_comment_first: {
    ru: "* Поля, отмеченные звездочкой, являются обязательными для заполнения",
    da: "* Felter med stjerne SKAL udfyldes",
  },
  timetable_comment_second: {
    ru: ' Нажимая кнопку, вы даете согласие на обработку своих <a href="privacy_policy.html" class="lng-timetable_link">персональных данных</a>',
    da: 'Når du trykker på knappen, accepterer du, at vi må behandle <a href="privacy_policy.html" class="lng-timetable_link">персональных данных</a>',
  },
  timetable_link: {
    ru: "персональных данных",
    da: "dine data",
  },
  timetable_btn: {
    ru: "отправить",
    da: "Send",
  },
  reviews_title: {
    ru: "Отзывы о dansk studio",
    da: "ANMELDELSER AF DANSK STUDIO",
  },
  modal_text: {
    ru: "Заполните нашу анкету на определение уровня владения языком и мы поможем подобрать вам обучающий курс",
    da: "Udfyld spørgeskemaet, så jeg kan fastlægge dit niveau og hjælpe dig med at vælge det rigtige kursus.",
  },
  modal_btn: {
    ru: "заполнить анкету",
    da: "Spørgeskemaet",
  },
  about_author: {
    ru: "О преподавателе",
    da: "Om underviser",
  },
  footer_payment: {
    ru: "Оплата",
    da: "Betaling",
  },
  policy: {
    ru: "Политика конфиденциальности",
    da: "Privatlivspolitik",
  },
  agreement: {
    ru: "Договор оферты",
    da: "Handelsbetingelser og rettigheder",
  },
  copyright: {
    ru: "Copyright © 2022 «Dansk Studio». Студия датского языка",
    da: "Copyright © 2022 «Dansk Studio». Online sprogskole",
  },
};

for (let i = 0; i < selectLang.length; i++) {
  selectLang[i].addEventListener("change", changeUrlLang);

  function changeUrlLang() {
    let lang = selectLang[i].value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
  }

  function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
      location.href = window.location.pathname + "#ru";
      location.reload();
    }
    selectLang[i].value = hash;
    if (selectLang[i].value == "da") {
      document.querySelector(".header__list-bg").style = `
                max-width:980px;
                `;
      document.querySelector(".eductaion__first").style = `
            display:none;
            `;
    }

    for (let key in langArr) {
      var elem = document.querySelectorAll(".lng-" + key);
      for (let j = 0; j < elem.length; j++) {
        if (elem[j]) {
          elem[j].innerHTML = langArr[key][hash];
          document.querySelector(".lng-name").placeholder =
            langArr["name"][hash];
          document.querySelector(".lng-email").placeholder =
            langArr["email"][hash];
          document.querySelector(".lng-phone_number").placeholder =
            langArr["phone_number"][hash];
        }
      }
    }
  }

  changeLanguage();
}

/* */

const selectSingle = document.querySelector(".__select");
const selectSingle_title = document.querySelector(".__select__title");
const selectSingle_labels = document.querySelectorAll(".__select__label");

const price = document.querySelector(".price");
const lessonDuration = document.querySelector(".lessons__duration");
const modalForm = document.querySelector(".modal__window-form");
const selectInput = document.querySelector(".select__input");
const selectItem = document.querySelector(".__select__content");
const select = document.querySelector("#select_id");

var priceArray = [2000, 600, 800, 1000, 1500, 3000, 500];

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", function () {
    if (
      selectSingle_labels[i].getAttribute("data-value") ==
      "Авторский курс по произношению “Основы произношения датского языка. Постановка основных звуков”"
    ) {
      price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`;
      lessonDuration.innerHTML =
        "Продолжительность: 5 недель, 2 урока в неделю.";
      selectInput.classList.remove("active");
    } else if (
      selectSingle_labels[i].getAttribute("data-value") ==
      "Авторский курс по произношению “Нюансы произношения датского языка. Фокус на гласные”"
    ) {
      price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`;
      lessonDuration.innerHTML =
        "Продолжительность: 5 недель, 2 урока в неделю.";
      selectInput.classList.remove("active");
    } else if (
      selectSingle_labels[i].getAttribute("data-value") ==
      "Авторский курс по произношению “Мелодия и интонация датского языка. Вишенка на торте.”"
    ) {
      price.innerHTML = `Стоимость курса: ${priceArray[0]} крон`;
      lessonDuration.innerHTML =
        "Продолжительность: 5 недель, 2 урока в неделю.";
      selectInput.classList.remove("active");
    } else if (
      selectSingle_labels[i].getAttribute("data-value") ==
        "ПОДГОТОВКА К ЭКЗАМЕНАМ" ||
      selectSingle_labels[i].getAttribute("data-value") ==
        "ПОСТАНОВКА ПРОИЗНОШЕНИЯ" ||
      selectSingle_labels[i].getAttribute("data-value") == "ЯЗЫКОВОЙ КОУЧИНГ"
    ) {
      price.innerHTML = "";
      lessonDuration.innerHTML = "Продолжительность: 60-70 мин";
      selectInput.classList.add("active");
      selectItem.style = `
            max-width:780px;
            width:100%;
            `;
      modalForm.style = `
            max-width:780px;
            width:100%;
            `;

      if (select) {
        select.addEventListener("change", function () {
          if (select.value == 0) {
            price.innerHTML = "";
          } else if (select.value == 1) {
            price.innerHTML = `Стоимость 1 занятия: ${priceArray[1]} крон`;
          } else if (select.value == 2 || select.value == 3) {
            price.innerHTML = `Стоимость 1 занятия: ${priceArray[2]} крон`;
          }
        });
      }
    } else if (
      selectSingle_labels[i].getAttribute("data-value") == "ДАТСКИЙ С НУЛЯ"
    ) {
      selectInput.classList.add("active");
      lessonDuration.innerHTML =
        "Продолжительность: 6 месяцев, 1 урок(60-70 мин) в неделю.";
      price.innerHTML = `Стоимость курса: ${priceArray[3]} крон в месяц`;
      selectItem.style = `
            max-width:780px;
            width:100%;
            `;
      if (select) {
        select.addEventListener("change", function () {
          if (select.value == 0) {
            price.innerHTML = "";
          } else if (
            select.value == 1 ||
            select.value == 2 ||
            select.value == 3
          ) {
            price.innerHTML = `Стоимость курса: ${priceArray[3]} крон в месяц`;
          }
        });
      }
    } else if (
      selectSingle_labels[i].getAttribute("data-value") ==
      "Клуб интерактивного датского языка для продолжающих"
    ) {
      selectInput.classList.add("active");
      lessonDuration.innerHTML =
        "Продолжительность: 6 месяцев, 1 урок(90 мин) в неделю.";
      price.innerHTML = `Стоимость курса: ${priceArray[4]} крон/в месяц`;
      selectItem.style = `
            max-width:780px;
            width:100%;
            `;
      if (select) {
        select.addEventListener("change", function () {
          if (select.value == 0) {
            price.innerHTML = "";
          } else if (
            select.value == 1 ||
            select.value == 2 ||
            select.value == 3
          ) {
            price.innerHTML = `Стоимость курса: ${priceArray[4]} крон в месяц`;
          }
        });
      }
    } else if (
      selectSingle_labels[i].getAttribute("data-value") ==
      "Коучинговая группа по постановке произношения"
    ) {
      selectInput.classList.add("active");
      lessonDuration.innerHTML =
        "Продолжительность: 10 занятий, по 90 мин. 1 раз в неделю.";
      price.innerHTML = `Стоимость курса: ${priceArray[5]} крон`;
      selectItem.style = `
            max-width:780px;
            width:100%;
            `;
      if (select) {
        select.addEventListener("change", function () {
          if (select.value == 0) {
            price.innerHTML = "";
          } else if (
            select.value == 1 ||
            select.value == 2 ||
            select.value == 3
          ) {
            price.innerHTML = `Стоимость курса: ${priceArray[5]} крон в месяц`;
          }
        });
      }
    } else if (
      selectSingle_labels[i].getAttribute("data-value") == "КИНОКЛУБ"
    ) {
      selectInput.classList.add("active");
      lessonDuration.innerHTML =
        "Продолжительность: каждую вторую неделю, по 90 мин";
      price.innerHTML = `Стоимость курса: ${priceArray[6]} крон/в месяц + (месячный абонемент, оплачивается отдельно на платформе для просмотра фильмов)`;
      selectItem.style = `
            max-width:780px;
            width:100%;
            `;
      if (select) {
        select.addEventListener("change", function () {
          if (select.value == 0) {
            price.innerHTML = "";
          } else if (
            select.value == 1 ||
            select.value == 2 ||
            select.value == 3
          ) {
            price.innerHTML = `Стоимость курса: ${priceArray[6]} крон/в месяц + (месячный абонемент, оплачивается отдельно на платформе для просмотра фильмов)`;
          }
        });
      }
    }
  });
}

// Toggle menu

if (selectSingle_title) {
  selectSingle_title.addEventListener("click", function () {
    if ("active" === selectSingle.getAttribute("data-state")) {
      selectSingle.setAttribute("data-state", "");
    } else {
      selectSingle.setAttribute("data-state", "active");
    }
  });
}

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}

/*contact modal */

const contactModal = document.querySelector(".contact__form");
const contactBtn = document.querySelectorAll(".contact-btn");

if (contactBtn) {
  for (let i = 0; i < contactBtn.length; i++) {
    contactBtn[i].addEventListener("click", function (e) {
      e.preventDefault();
      contactModal.classList.add("active");
    });
  }
  if (contactModal) {
    contactModal.addEventListener("click", () =>
      contactModal.classList.remove("active")
    );
  }
}
