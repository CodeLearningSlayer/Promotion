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


  if (localStorage.getItem('style') === 'dark') {
    document.body.classList.toggle('dark-theme');
  }
  document.querySelector('.user-nav__theme').onclick = function (){
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      console.log("jija");
      localStorage.setItem('style', 'dark');
    } 
    else {
      localStorage.setItem('style', '');
    }
  }

let navList = document.querySelector(".user-nav__list");
let navBar = document.querySelector(".user-nav");
let isRelocated = false;
relocateNav();
window.onresize = relocateNav;
function relocateNav(){
  const neededWidth = 875;
  console.log(document.documentElement.scrollWidth);
  if (document.documentElement.scrollWidth <= neededWidth && document.documentElement.scrollWidth > 755 && isRelocated == false){
    document.querySelector(".header").appendChild(navList);
    isRelocated = true;
    navList.classList.toggle("user-nav__list--relocated");
  }
  if(document.documentElement.scrollWidth > neededWidth && isRelocated == true){
    document.querySelector(".header__nav").prepend(navList);
    navList.classList.toggle("user-nav__list--relocated");
    isRelocated = false;
  }
  if (document.documentElement.scrollWidth <= 755) {
    document.querySelector(".header__nav").prepend(navList);
    if (navList.classList.contains("user-nav__list--relocated"))
    navList.classList.remove("user-nav__list--relocated");

  }
}
let burgerBtn = document.querySelector(".header__burger-menu");
burgerBtn.addEventListener("click", function(){
  navBar.classList.toggle("user-nav--active");
  let sections = document.querySelectorAll(".overlay");
  sections.forEach(element => {
    element.classList.toggle("overlay--active");
  })
})



flsFunctions.testWebP();