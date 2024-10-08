// simplebar
document.querySelectorAll('.dropdown__simplebar').forEach(dropdown => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 25,
  });
});
// swiper
const slider1 = document.querySelector('.swiper1');
const slider = document.querySelector('.swiper');
const slider2 = document.querySelector('.swiper2');
const slider3 = document.querySelector('.swiper3');

let swiper1 = new Swiper(slider1, {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
});

let swiper = new Swiper(slider, {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

let swiper2 = new Swiper(slider2, {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 25,
  navigation: {
    nextEl: '.swiper-button-next2',
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
  },
});

let swiper3 = new Swiper(slider3, {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33,
    },
    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1700: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

// choices
const choices = new Choices('select', {
  searchEnabled: false,
  itemSelectText: "",
});

// accordion
new Accordion('.accordion', {
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,
  openOnInit: [0],
  collapse: false
});

document.querySelectorAll('.accordion__artist-name').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.artist').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('artist--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('artist--active')
  });
});

// tippy
tippy('[data-tippy-content]', {
  trigger: 'click',
  theme: 'purple',
});
// validator

// var selector = document.querySelector("input[type='tel']");
// var im = new Inputmask("+7(999) 999-99-99");
// im.mask(selector);

new JustValidate('#form', {
  rules: {
    name: {
      required: true
    },
    tel: {
      required: true,
      // function: (name, value) => {
      //     const phone = selector.inputmask.unmaskedvalue();
      //     return Number(phone) && phone.length ===  10;
      //   }
    },
  },
  messages: {
    name: {
      required: 'Недопустимый формат'
    },
    tel: {
      required: 'Недопустимый формат'
    },
  },
  colorWrong: '#D11616'
});

// yandex map
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map', {
    center: [55.751574, 37.573856],
    zoom: 9,
    controls: []
  });

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
    }
  });
  myMap.controls.add(zoomControl);
}
// dropdown-menu
const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown--active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})
// burger
let burger = document.querySelector('.burger')
let close__btn = document.querySelector('.nav__close')
let menu = document.querySelector('.nav')
let link = document.querySelector('.header-nav-list-item-link')

burger.addEventListener('click',
  function () {
    menu.classList.toggle('active');
    document.body.classList.add('stop-scroll');
  })

close__btn.addEventListener('click',
  function () {
    menu.classList.toggle('active');
    document.body.classList.remove('stop-scroll');
  });

document.addEventListener('click', function (e) {
  let target = e.target;
  if (!target.closest('.header__top')) {
    menu.classList.remove('active');
  }
});