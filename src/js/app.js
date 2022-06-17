import * as flsFunctions from "./modules/functions.js";
import Swiper, {Pagination} from "swiper";
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


flsFunctions.testWebP();