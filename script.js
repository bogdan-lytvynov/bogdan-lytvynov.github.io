let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  // plusSlides(1)
}, 7000)

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const proEls = document.querySelectorAll(".nappy_pants_pro")

proEls.forEach((el, i) => {
  const angle = (2 * Math.PI) * (i / proEls.length * 360 - 180) / 360;
  const left = Math.round(Math.cos(angle) * 100)
  const top = Math.round(Math.sin(angle) * 100)

  el.style.left = left + '%';
  el.style.top = top + '%';
})

