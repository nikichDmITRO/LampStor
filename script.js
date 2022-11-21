// Выбираем кнопку
const btn = document.querySelector(".switch-inp");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  console.log("TEST");
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle("dark-theme");
});

const modal = document.querySelector(".myModal");
const modalFdb = document.querySelector(".myModalFedb");
const btnModal = document.querySelectorAll(".btnModal");
const btnModalFdb = document.querySelector(".btnModalFdb");
console.log(btnModal);
const span = document.querySelector(".close_modal_window");
const span1 = document.querySelector(".myModalFedb .close_modal_window");
btnModalFdb.onclick = function () {
  modalFdb.style.display = "block"
  console.log("Test")
};

btnModal[0].onclick = function () {
  modal.style.display = "block";
};

btnModal[1].onclick = function () {
  modal.style.display = "block";
};
btnModal[2].onclick = function () {
  modal.style.display = "block";
};
btnModal[3].onclick = function () {
  modal.style.display = "block";
};
btnModal[4].onclick = function () {
  modal.style.display = "block";
};
btnModal[5].onclick = function () {
  modal.style.display = "block";
};
btnModal[6].onclick = function () {
  modal.style.display = "block";
};
btnModal[7].onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
span1.onclick = function () {
  modalFdb.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalFdb) {
    modalFdb.style.display = "none";
  }
 
};

if (window.screen.availWidth < 610) {
  var slideIndex = 1;
  var slideIndex1 = 1;
  var slideIndex2 = 1;
  showSlides(slideIndex);
  showSlides1(slideIndex1);
  showSlides2(slideIndex1);
  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
    
    
  }
  function plusSlides1(n) {
    showSlides1((slideIndex1 += n));
    
    
  }
  function plusSlides2(n) {
    showSlides2((slideIndex2 += n));
    
    
  }
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
   
  }
  function currentSlide1(n) {
    showSlides1((slideIndex1 = n));
   
  }
  function currentSlide2(n) {
    showSlides2((slideIndex2 = n));
   
  }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
}
function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");

  var dots = document.getElementsByClassName("dot");
  if (n > slides1.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[slideIndex1 - 1].style.display = "block";

}
function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");

  var dots = document.getElementsByClassName("dot");
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";

}



let a = 0;
let min = (document.querySelector(".min").onclick = minFunk);
document.querySelector(".znach").innerHTML = a;

let pl = (document.querySelector(".pl").onclick = plFunk);
function plFunk() {
  a++;
  document.querySelector(".znach").innerHTML = a;
}
function minFunk() {
  if (a > 0) {
    a--;
  }

  document.querySelector(".znach").innerHTML = a;
}




