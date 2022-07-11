import * as flsFunctions from "./modules/functions.js";
import Swiper, {Pagination} from "swiper";
import $ from "jquery";
import "jquery";
import raterJs from "rater-js";
import "raty-js";

let blogSwiper;

function enableSwiper(){
   blogSwiper = new Swiper (".swiper", {
      loop: true,
      modules: [Pagination],
      direction: 'horizontal',
      centeredSlides: "true",
      spaceBetween: 22,
      grabCursor:true,
      pagination:{
          el: '.swiper-pagination',
      },
      breakpoints: {
        0 : {
          
        },
        576 : {
          initialSlide:0,
          slidesPerView: 2,
        },
  
        992 : {
          slidesPerView: 3,
          initialSlide:1,
        },
        
      }
  })
}

const breakpoint = window.matchMedia('(max-width: 576px)');
const breakpointChecker = function() {
  if (breakpoint.matches == true && blogSwiper!=undefined){
    blogSwiper.destroy(true, true);
  }
  else if (breakpoint.matches==false){
    return enableSwiper();
  }
}
breakpoint.addListener(breakpointChecker);
breakpointChecker();


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
let imgToReplace = document.querySelector(".effects__img");
let joinUs = document.querySelector(".join-us__img--front");
relocateNav();
window.onresize = relocateNav;
function relocateNav(){
  const neededWidth = 875;
  console.log(document.documentElement.clientWidth);
  if (document.documentElement.clientWidth <= neededWidth && document.documentElement.clientWidth > 768 && isRelocated == false){
    document.querySelector(".header").appendChild(navList);
    isRelocated = true;
    navList.classList.add("user-nav__list--relocated");
  }
  if(document.documentElement.clientWidth > neededWidth && isRelocated == true){
    document.querySelector(".header__nav").prepend(navList);
    navList.classList.remove("user-nav__list--relocated");
    isRelocated = false;
  }
  if (document.documentElement.clientWidth <= 768) {
    document.querySelector(".header__nav").prepend(navList);
    if (navList.classList.contains("user-nav__list--relocated"))
    navList.classList.remove("user-nav__list--relocated");
    isRelocated = false;
  }
  if (document.documentElement.clientWidth <= neededWidth && imgToReplace!=undefined){
    imgToReplace.src ="img/effect-second.png";
  }

  if (document.documentElement.clientWidth <= neededWidth && joinUs!=undefined){
    joinUs.src = "img/join-us.png";
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