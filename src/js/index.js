var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("x59");
  var dots = document.getElementsByClassName("x34");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("aktif");  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" aktif", "");
  }
  slides[slideIndex-1].classList.add("aktif");  
  dots[slideIndex-1].className += " aktif";
  setTimeout(showSlides, 3000);
}