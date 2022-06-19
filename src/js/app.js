import * as flsFunctions from "./modules/functions.js";
import Swiper, {Pagination} from "swiper";
import $ from "jquery";
import "jquery";
import raterJs from "rater-js";
import "raty-js";

const blogSwiper = new Swiper (".swiper", {
    loop: true,
    modules: [Pagination],
    direction: 'horizontal',
    centeredSlides: "true",
    initialSlide:1,
    slidesPerView: 3,
    pagination:{
        el: '.swiper-pagination',
    },
})


$('.rate').raty({
    number : 5,
    starOn: "../img/icons/starOn.svg",
    starOff: "../img/icons/starOff.svg",
    readOnly: true,
    score: 4,
});

let questions =  document.querySelectorAll(".questions__item");
questions.forEach((element) => {
    const toggleText = element.querySelector(".question__text");
    const answer = element.querySelector(".question__answer");
    const icon = element.querySelector(".question__icon")
    toggleText.addEventListener("click", function(){
    (answer.classList.contains("question__answer--toggled"))? answer.classList.remove("question__answer--toggled") : answer.classList.add("question__answer--toggled");
    (icon.classList.contains("question__icon--toggled"))? icon.classList.remove("question__icon--toggled") : icon.classList.add("question__icon--toggled");

})
})

function initMap() {
    // The location of Uluru
    const uluru = { lat: 56.9972, lng:  40.9714 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

  const themeButton = document.querySelector(".user-nav__theme");
  themeButton.addEventListener("click", function(){
    (document.body.classList.contains("dark-theme")) ? document.body.classList.remove("dark-theme") : document.body.classList.add("dark-theme");
  })


flsFunctions.testWebP();