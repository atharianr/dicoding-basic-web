const buttonNext = document.querySelector(".next-container");
const buttonPrev = document.querySelector(".prev-container");

var slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("news-section");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";

    console.log(n);
    console.log(slideIndex);
}

buttonNext.addEventListener('click', function(event) {
    nextSlide(1)
});

buttonPrev.addEventListener('click', function(event) {
    nextSlide(-1)
});