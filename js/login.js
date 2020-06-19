var loginLink = document.querySelector(".write-us");
var loginPopup = document.querySelector(".feedback-modal");
var loginClose = loginPopup.querySelector(".feedback-modal-close");
var loginForm = loginPopup.querySelector(".feedback-modal-form");
var loginLogin = loginPopup.querySelector(".input-name");
var loginPassword = loginPopup.querySelector(".email-name");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  
  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".map-modal");
var mapClose = mapPopup.querySelector(".map-modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".main-product-slide");
    var dots = document.querySelectorAll(".slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }
    slides[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " current";
}

/* Индекс слайда по умолчанию */
var serviceIndex = 1;
showServices(serviceIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusService() {
  showServices(serviceIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusService() {
  showServices(serviceIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentService(n) {
  showServices(serviceIndex = n);
}


/* Основная функция слайдера */
function showServices(n) {
    var i;
    var services = document.querySelectorAll(".service-list li");
    var serviceButtons = document.querySelectorAll(".services-list-buttons li");
 
    if (n > services.length) {
      serviceIndex = 1
    }
    if (n < 1) {
        serviceIndex = service.length
    }
    for (i = 0; i < services.length; i++) {
        services[i].style.display = "none";
    }
    for (i = 0; i < serviceButtons.length; i++) {
        serviceButtons[i].className = serviceButtons[i].className.replace(" current", "");
    }
    services[serviceIndex - 1].style.display = "grid";
    serviceButtons[serviceIndex - 1].className += " service-current";
}
