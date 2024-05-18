var swiper = new Swiper(".mySwiper-1", {
    loop:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
  pagination: {
        clickable: true,
        el:".swiper-pagination"
    },
    slidesPerView:1,
    spaceBetween: 30

});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    pagination: {
        clickable: true,
        el:".swiper-pagination"
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
    }

});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener("change", function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById("swiper" + id);
        thisSwiper.swiper.update();
    })

});



