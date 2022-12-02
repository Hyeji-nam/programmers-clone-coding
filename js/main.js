
new Swiper('.article-first-wrapper .swiper-container', {
    autoplay: true,
    clickable: true,
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false
    },
    navigation: {
        prevEl: '.btn-box .btn-left',
        nextEl: '.btn-box .btn-right'
    },
    pagination: {
        el: ".btn-box .pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass) {
            return '<span class="' + currentClass + '"></span>'
        }
      }
})

new Swiper ('.recommend-lecture__items .swiper-container', {
    spaceBetween: 20,
    slidesPerView: 2,
    navigation: {
        prevEl: '.recommend-lecture__items .nav-left',
        nextEl: '.recommend-lecture__items .nav-right'
   },
   on: {
    activeIndexChange: function () {
        if (this.realIndex == 0) {
            this.allowSlidePrev = false
        } else if (this.realIndex == -1) {
            this.allowSlideNext = false
        } else {
            this.allowSlidePrev = true
            this.allowSlideNext = true
        }
    }
   }
})

// mobile ver
new Swiper ('.m-recommend-lecture__items .swiper-container', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: '.m-recommend-lecture__items .nav-left',
        nextEl: '.m-recommend-lecture__items .nav-right'
   }
})

new Swiper ('.m-recruit-right__items .swiper-container', {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        prevEl: '.m-recruit-right__items .nav-left',
        nextEl: '.m-recruit-right__items .nav-right'
   },
   on: {
    activeIndexChange: function () {
        if (this.realIndex == 0) {
            this.allowSlidePrev = false
        } else if (this.realIndex == -1) {
            this.allowSlideNext = false
        } else {
            this.allowSlidePrev = true
            this.allowSlideNext = true
        }
    }
   }
})

new Swiper ('.other-position__items .swiper-container', {
    spaceBetween: 32,
    slidesPerView: 3,
    navigation: {
        prevEl: '.other-position__items .nav-left',
        nextEl: '.other-position__items .nav-right'
    },
    on: {
        activeIndexChange: function () {
            if (this.realIndex == 0) {
                this.allowSlidePrev = false
            } else if (this.realIndex == -1) {
                this.allowSlideNext = false
            } else {
                this.allowSlidePrev = true
                this.allowSlideNext = true
            }
        }
       }
})

// mobile ver
new Swiper ('.m-other-position__items .swiper-container', {
    spaceBetween: 32,
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: '.m-other-position__items .nav-left',
        nextEl: '.m-other-position__items .nav-right'
    }
})

const familySiteEl = document.querySelector('.family-site')
const familySiteItems = document.querySelector('.family-site__items')

familySiteEl.addEventListener('click', function () {
    familySiteItems.classList.toggle('hide')
    this.classList.toggle('clicked')
})
