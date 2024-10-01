// menu-icon
function opennav() {
    document.querySelector(".menulist").classList.toggle("start-0");
    document.querySelector(".menuicon").classList.toggle("cross");
    document.body.classList.toggle("overflow-hidden");
}
// scroll top btn 
const topBtn = document.querySelector(".topBtn")

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show")
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})

// slider 1
$('.slider-list').slick({
    dots: false,
    infinite: true,
    speed: 600,
    // autoplay: true,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    nextArrow: ".btn-next",
    prevArrow: ".btn-prev",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// slider2
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 22,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
