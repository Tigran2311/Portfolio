const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close'),
        lists = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

lists.forEach(link => {
    link.addEventListener('click', () => {   //vor meyuin sexmes menyun paki gna et ej
        menu.classList.remove('active'); 
    });
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});





// Получаем все изображения в панели
const sidePanelImages = document.querySelectorAll(".sidepanel img");
const promoSection = document.querySelector(".promo");

const sidePanelDivider = document.querySelector(".sidepanel__divider");
const sidePanelText = document.querySelector(".sidepanel__text span");

// Пути для стандартных и белых изображений
const imagePaths = {
  default: [
    "img/social/blu_Facebook.svg",    
    "img/social/blu_Instagram.svg",   
    "img/social/blu_Github.svg"       
  ],
  white: [
    "img/social/facebook.svg",    
    "img/social/instagram.svg",   
    "img/social/github.svg"       
  ]
};

// Изначально изображения должны быть белыми
sidePanelImages.forEach((img, index) => {
  img.src = imagePaths.default[index];
});

sidePanelDivider.style.backgroundColor = "white";   // Белый фон для divider
sidePanelText.style.color = "white"; 

// Функция для проверки позиции скролла
window.addEventListener("scroll", () => {
  const promoSectionTop = promoSection.getBoundingClientRect().top;
  const promoSectionBottom = promoSection.getBoundingClientRect().bottom;

  // Проверяем, если секция promo находится в пределах окна
  if (promoSectionBottom > 0 && promoSectionTop < window.innerHeight) {
    // Меняем все изображения на белые
    sidePanelImages.forEach((img, index) => {
      img.src = imagePaths.default[index];
    });

    sidePanelDivider.style.backgroundColor = "white";   // Белый фон для divider
    sidePanelText.style.color = "white"; 

  } else {
    // Меняем все изображения на черные
    sidePanelImages.forEach((img, index) => {
      img.src = imagePaths.white[index];
    });

    sidePanelDivider.style.backgroundColor = "black";   // Черный фон для divider
    sidePanelText.style.color = "black"; 

  }
});









