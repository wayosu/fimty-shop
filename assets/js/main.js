// HOME SWIPER
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener('scroll', scrollHeader);

// SECTION PENDATANG BARU SWIPER
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
});