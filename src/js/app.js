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

// var myRating = raterJs( {
//     element:document.querySelector(".rate"),
//     rateCallback:function rateCallback(rating, done) {
//       this.setRating(rating); 
//       done(); 
//     },
//     readOnly:true,
// });

// myRating.setRating(4);

$('.rate').raty({
    number : 5,
    starOn: "../img/icons/starOn.svg",
    starOff: "../img/icons/starOff.svg",
    readOnly: true,
    score: 4,
});


flsFunctions.testWebP();