import Swiper from "swiper";

export class Slider {
  constructor() {
    this.init();
  }
  
  init() {
      // init Swiper:
  this.swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  }
}